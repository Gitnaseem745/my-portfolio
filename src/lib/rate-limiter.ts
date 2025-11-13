/**
 * Simple in-memory rate limiter for API routes
 * Tracks requests by IP address with sliding window
 */

interface RateLimitEntry {
  count: number;
  resetTime: number;
}

class RateLimiter {
  private requests = new Map<string, RateLimitEntry>();
  private readonly maxRequests: number;
  private readonly windowMs: number;

  constructor(maxRequests: number = 5, windowMs: number = 60000) {
    this.maxRequests = maxRequests;
    this.windowMs = windowMs;
  }

  /**
   * Check if request should be rate limited
   * @param identifier - Usually IP address
   * @returns true if limit exceeded, false if request is allowed
   */
  isRateLimited(identifier: string): boolean {
    const now = Date.now();
    const record = this.requests.get(identifier);

    if (!record || now > record.resetTime) {
      // First request or window expired - allow and reset
      this.requests.set(identifier, {
        count: 1,
        resetTime: now + this.windowMs,
      });
      return false;
    }

    if (record.count >= this.maxRequests) {
      // Limit exceeded
      return true;
    }

    // Increment count
    record.count += 1;
    this.requests.set(identifier, record);
    return false;
  }

  /**
   * Get remaining requests for identifier
   */
  getRemainingRequests(identifier: string): number {
    const record = this.requests.get(identifier);
    if (!record || Date.now() > record.resetTime) {
      return this.maxRequests;
    }
    return Math.max(0, this.maxRequests - record.count);
  }

  /**
   * Get time until reset in seconds
   */
  getResetTime(identifier: string): number {
    const record = this.requests.get(identifier);
    if (!record || Date.now() > record.resetTime) {
      return 0;
    }
    return Math.ceil((record.resetTime - Date.now()) / 1000);
  }

  /**
   * Clean up expired entries (optional periodic cleanup)
   */
  cleanup(): void {
    const now = Date.now();
    for (const [key, value] of this.requests.entries()) {
      if (now > value.resetTime) {
        this.requests.delete(key);
      }
    }
  }
}

// Export singleton instance: 5 requests per minute
export const emailRateLimiter = new RateLimiter(5, 60000);
