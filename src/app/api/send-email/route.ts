import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { emailSchema } from '@/lib/email-schema';
import { emailRateLimiter } from '@/lib/rate-limiter';
import { ZodError } from 'zod';

/**
 * Get client IP address from request headers
 */
function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const realIP = request.headers.get('x-real-ip');
  
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  
  if (realIP) {
    return realIP;
  }
  
  // Fallback for local development
  return 'unknown';
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const clientIP = getClientIP(request);

    // Check rate limit
    if (emailRateLimiter.isRateLimited(clientIP)) {
      const resetTime = emailRateLimiter.getResetTime(clientIP);
      return NextResponse.json(
        { 
          error: 'Too many requests. Please try again later.',
          retryAfter: resetTime 
        },
        { 
          status: 429,
          headers: {
            'Retry-After': resetTime.toString(),
          }
        }
      );
    }

    // Parse and validate request body
    const body = await request.json();
    const validatedData = emailSchema.parse(body);

    // Sanitize HTML content to prevent XSS
    const sanitize = (str: string) => 
      str.replace(/[<>]/g, (char) => char === '<' ? '&lt;' : '&gt;');

    const { name, email, subject, message } = validatedData;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'mrnaseem745@gmail.com',
      subject: `Portfolio Contact: ${sanitize(subject)}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #4F46E5; padding-bottom: 10px;">New Contact Form Submission</h2>
          <div style="margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${sanitize(name)}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> ${sanitize(email)}</p>
            <p style="margin: 10px 0;"><strong>Subject:</strong> ${sanitize(subject)}</p>
          </div>
          <div style="margin: 20px 0; padding: 15px; background-color: #f9f9f9; border-left: 4px solid #4F46E5;">
            <p style="margin: 0;"><strong>Message:</strong></p>
            <p style="margin: 10px 0 0 0; line-height: 1.6;">${sanitize(message)}</p>
          </div>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
          <p style="font-size: 12px; color: #666;">Sent from portfolio contact form • IP: ${clientIP}</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    // Handle Zod validation errors
    if (error instanceof ZodError) {
      const fieldErrors = error.issues.map((err) => ({
        field: err.path.join('.'),
        message: err.message,
      }));
      
      return NextResponse.json(
        { 
          error: 'Validation failed',
          fields: fieldErrors 
        },
        { status: 400 }
      );
    }

    // Handle other errors
    console.error('Email error:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}
