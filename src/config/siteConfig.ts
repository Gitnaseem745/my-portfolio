export const siteConfig = {
    name: "Naseem Ansari - Frontend Developer",
    description:
        "Frontend Developer specializing in Next.js, React, and TypeScript. Building modern, high-performance web applications with seamless UI/UX and pixel-perfect design. Open source contributor and template creator.",
    url: "https://www.naseemansari.me",
    ogImage: "https://www.naseemansari.me/project-imgs/naseemansari.png",
    links: {
        twitter: "https://twitter.com/dev_Naseem",
        github: "https://github.com/Gitnaseem745",
    },
    themes: ["light", "dark", "system"],
    currentTheme: "light",

    // Section Content
    sections: {
        hero: {
            name: "Naseem Ansari",
            title: "Frontend Developer & UI/UX Specialist",
            description: "I craft modern, performant web applications with Next.js, React, and TypeScript — blending design, logic, and motion into seamless user experiences.",
            image: {
                src: "/images/me.jpg",
                alt: "Naseem Ansari - Full Stack Developer",
                width: 330,
                height: 160
            },
            socialLinks: [
                { name: "X (Twitter)", icon: "Twitter", href: "https://x.com/dev_Naseem" },
                { name: "LinkedIn", icon: "Linkedin", href: "https://www.linkedin.com/in/naseem-ansari-25474b269/" },
                { name: "GitHub", icon: "Github", href: "https://github.com/Gitnaseem745" },
                { name: "Instagram", icon: "Instagram", href: "https://www.instagram.com/dev_Naseem" }
            ],
            cta: {
                text: "Contact Me",
                href: "#contact"
            }
        },

        skills: {
            title: "Skills & Technologies",
            description: "From concept to deployment, I bridge design and logic to craft full-stack experiences that feel fast, fluid, and functional.",
            categories: [
                {
                    name: "Frontend Development",
                    skills: [
                        "Next.js", "React", "TypeScript", "JavaScript (ES6+)",
                        "HTML5", "CSS3", "Tailwind CSS", "Framer Motion",
                        "Redux Toolkit", "Zustand", "React Query"
                    ],
                    sliderConfig: {
                        width: "180px",
                        duration: 40,
                        toRight: false,
                        pauseOnHover: true
                    }
                },
                {
                    name: "Backend Knowledge",
                    skills: [
                        "Node.js", "Express.js", "MongoDB", "Mongoose",
                        "REST APIs", "JWT", "Clerk",
                        "Middleware", "Error Handling", "Firebase", "Cloudinary"
                    ],
                    sliderConfig: {
                        width: "180px",
                        duration: 50,
                        toRight: true,
                        pauseOnHover: true
                    }
                },
                {
                    name: "DevOps & Tools",
                    skills: [
                        "Git", "GitHub", "VS Code", "ThunderClient",
                        "Vercel", "Render", "ESLint", "Prettier",
                        "Webpack", "Vite", "Nodemon"
                    ],
                    sliderConfig: {
                        width: "180px",
                        duration: 45,
                        toRight: false,
                        pauseOnHover: true
                    }
                },
                {
                    name: "Additional Expertise",
                    skills: [
                        "API Design & Integration", "Performance Optimization",
                        "Responsive UI Design", "SEO Optimization",
                        "Web Scraping (Puppeteer, Cheerio, Axios)",
                        "Security Best Practices (CORS, Helmet)", "Web Accessibility (a11y)"
                    ],
                    sliderConfig: {
                        width: "auto",
                        duration: 95,
                        toRight: true,
                        pauseOnHover: true
                    }
                }
            ]
        },

        projects: {
            title: "Featured Projects",
            description: "A showcase of products, templates, and client projects I’ve designed and developed across the full stack.",
            projects: [
                {
                    id: 1,
                    title: "SolarisUI",
                    description: "An open-source UI library built with TypeScript and React, featuring 25+ UI components, 20+ custom hooks, 20+ motion animations, and a Tailwind theme generator with 40+ pre-defined themes. Focused on flexibility, scalability, and developer experience.",
                    category: "Open Source / UI Library",
                    year: "2025",
                    status: "Active",
                    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
                    liveUrl: "https://solarisui.calsinas.app",
                    githubUrl: "https://github.com/Gitnaseem745/solarisui",
                    image: {
                        src: "/project-imgs/solaris.png",
                        alt: "SolarisUI - Modern React UI Library",
                        width: 800,
                        height: 450
                    }
                },
                {
                    id: 2,
                    title: "NextLaunch (Template Store)",
                    description: "A Next.js template marketplace offering ready-to-use, responsive, and animated templates for developers. Built with TypeScript, Tailwind CSS and Framer Motion for modern performance and design.",
                    category: "Product Platform",
                    year: "2025",
                    status: "Live",
                    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
                    liveUrl: "https://nextlaunch.calsinas.app",
                    githubUrl: "",
                    image: {
                        src: "/project-imgs/nextlaunch.png",
                        alt: "NextLaunch - Template Store Platform",
                        width: 800,
                        height: 450
                    }
                },
                {
                    id: 3,
                    title: "Nice Academy Bilari",
                    description: "A full-featured educational platform for a computer training institute in Bilari, India. Features course catalog, 8300+ MCQ practice tests, study notes, blog integration, and contact functionality with a bilingual (English/Hindi) interface.",
                    category: "Client Project",
                    year: "2025",
                    status: "Live",
                    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Wisp CMS", "SEO"],
                    liveUrl: "https://www.bestcomputerinstitute.online",
                    githubUrl: "",
                    image: {
                        src: "/project-imgs/niceacademy.png",
                        alt: "Nice Academy Bilari - Computer Institute Website",
                        width: 800,
                        height: 450
                    }
                },
                {
                    id: 4,
                    title: "WorldWinn Batteries",
                    description: "A product showcase website for an inverter battery company. Features a modern product catalog, detailed product specifications, interactive maps, and a premium minimalist design focused on conversions.",
                    category: "Client Project",
                    year: "2025",
                    status: "Live",
                    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Leaflet Maps", "SEO"],
                    liveUrl: "https://www.worldwinnbatteries.com",
                    githubUrl: "",
                    image: {
                        src: "/project-imgs/worldwinnbatteries.png",
                        alt: "WorldWinn Batteries - Product Showcase Website",
                        width: 800,
                        height: 450
                    }
                },
                {
                    id: 5,
                    title: "Alam Interior",
                    description: "A professional business website for an interior design company, highlighting portfolio, services and brand identity with elegant, modern design.",
                    category: "Client Project",
                    year: "2025",
                    status: "Live",
                    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "SEO"],
                    liveUrl: "https://www.alaminterior.com/",
                    githubUrl: "",
                    image: {
                        src: "/project-imgs/alaminterior.png",
                        alt: "Alam Interior Client Website",
                        width: 800,
                        height: 450
                    }
                },
                {
                    id: 6,
                    title: "MetalMark Handicrafts",
                    description: "An export-import metalworks website for an artisan manufacturing company, designed to showcase handcrafted products and increase international visibility.",
                    category: "Client Project",
                    year: "2024",
                    status: "Live",
                    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "SEO"],
                    liveUrl: "https://metal-mark.vercel.app/",
                    githubUrl: "",
                    image: {
                        src: "/project-imgs/metalmark.png",
                        alt: "MetalMark Handicrafts Client Website",
                        width: 800,
                        height: 450
                    }
                },
                {
                    id: 7,
                    title: "SSEWS (Swami Swaroopanand Educational Welfare Society)",
                    description: "A non-profit organization website built to promote educational and health initiatives, featuring clean design, community focus and accessible navigation.",
                    category: "Client Project",
                    year: "2023",
                    status: "Live",
                    technologies: ["WordPress", "HTML5", "CSS3", "SEO"],
                    liveUrl: "https://ssews.com",
                    githubUrl: "",
                    image: {
                        src: "/project-imgs/ssews.png",
                        alt: "SSEWS NGO Website",
                        width: 800,
                        height: 450
                    }
                },
                {
                    id: 8,
                    title: "HypeNest Creative",
                    description: "A creative agency website designed to showcase branding, digital marketing, and web design services with a premium, minimal design aesthetic.",
                    category: "Client Project",
                    year: "2025",
                    status: "Live",
                    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
                    liveUrl: "https://www.hypenestcreative.com/",
                    githubUrl: "",
                    image: {
                        src: "/project-imgs/hypenest.png",
                        alt: "HypeNest Creative Agency Website",
                        width: 800,
                        height: 450
                    }
                },
                {
                    id: 9,
                    title: "Modern Portfolio (Template)",
                    description: "A sleek, high-performance portfolio template crafted for developers and creative professionals. Built with Next.js and optimized for speed and animations.",
                    category: "Template",
                    year: "2025",
                    status: "Live",
                    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
                    liveUrl: "https://portfolio-wisp-blog.vercel.app/",
                    githubUrl: "",
                    image: {
                        src: "/project-imgs/portfoliotemp.png",
                        alt: "Modern Developer Template",
                        width: 800,
                        height: 450
                    }
                },
                {
                    id: 10,
                    title: "Digital Agency (Template)",
                    description: "A responsive agency landing template with smooth animations and SEO-friendly structure — designed for digital and creative agencies.",
                    category: "Template",
                    year: "2025",
                    status: "Live",
                    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
                    liveUrl: "https://solarix-tau.vercel.app/",
                    githubUrl: "",
                    image: {
                        src: "/project-imgs/solarix.png",
                        alt: "Digital Agency Template",
                        width: 800,
                        height: 450
                    }
                },
                {
                    id: 11,
                    title: "Productivity App (Template)",
                    description: "A multi-theme landing template for productivity apps with fast loading and habit-tracking focused components.",
                    category: "Template",
                    year: "2025",
                    status: "Live",
                    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
                    liveUrl: "https://focus-sync-theta.vercel.app/",
                    githubUrl: "",
                    image: {
                        src: "/project-imgs/focussync.png",
                        alt: "Productivity App Template",
                        width: 800,
                        height: 450
                    }
                },
                {
                    id: 12,
                    title: "Digital Business (Template)",
                    description: "A mobile-first, modern landing page template designed for digital businesses and startups, optimized for conversion and speed.",
                    category: "Template",
                    year: "2025",
                    status: "Live",
                    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
                    liveUrl: "https://mobifyx.vercel.app/",
                    githubUrl: "",
                    image: {
                        src: "/project-imgs/mobifyX.png",
                        alt: "Digital Business Template",
                        width: 800,
                        height: 450
                    }
                },
                {
                    id: 13,
                    title: "Personal Portfolio",
                    description: "My personal portfolio website showcasing my journey, projects, and experience as a full‐stack developer and designer. Built with a focus on motion design, minimalism, and scalability.",
                    category: "Portfolio",
                    year: "2025",
                    status: "Live",
                    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
                    liveUrl: "https://www.naseemansari.me",
                    githubUrl: "",
                    image: {
                        src: "/project-imgs/naseemansari.png",
                        alt: "Naseem Ansari Portfolio Website",
                        width: 800,
                        height: 450
                    }
                },
                {
                    id: 14,
                    title: "Intelpedia",
                    description: "An AI-focused blog and tools directory where I publish tutorials, prompt libraries, tool breakdowns and AI image-generation prompts. Designed to grow as a community resource for prompt-engineering and AI workflows.",
                    category: "Blog / Knowledge Base",
                    year: "2024",
                    status: "Live",
                    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "SEO", "Content Strategy", "AI Tools"],
                    liveUrl: "https://www.intelpedia.tech",
                    githubUrl: "",
                    image: {
                        src: "/project-imgs/intelpedia.png",
                        alt: "Intelpedia - AI Tools & Prompts",
                        width: 800,
                        height: 450
                    }
                },
                {
                    id: 15,
                    title: "Calsinas",
                    description: "An upcoming modern web project under development. Currently features an interactive hero section as a landing concept.",
                    category: "In Progress",
                    year: "2025",
                    status: "Development",
                    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
                    liveUrl: "https://www.calsinas.app",
                    githubUrl: "",
                    image: {
                        src: "/project-imgs/calsinas.png",
                        alt: "Calsinas Project Landing Page",
                        width: 800,
                        height: 450
                    }
                },
                {
                    id: 16,
                    title: "Juviem",
                    description: "A future web concept project with a completed landing section focused on branding and digital presence. Designed to evolve into a full-scale product.",
                    category: "In Progress",
                    year: "2025",
                    status: "Development",
                    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
                    liveUrl: "https://www.juviem.tech",
                    githubUrl: "",
                    image: {
                        src: "/project-imgs/juviem.png",
                        alt: "Juviem Landing Page Project",
                        width: 800,
                        height: 450
                    }
                },
                {
                    id: 17,
                    title: "BelaDesign International",
                    description: "An export-import metalworks business website built for a client. Delivered a responsive design highlighting their handcrafted metal art pieces. (Now discontinued)",
                    category: "Client Project",
                    year: "2023",
                    status: "Offline",
                    technologies: ["WordPress", "Elementor", "SEO"],
                    liveUrl: "",
                    githubUrl: "",
                    image: {
                        src: "/project-imgs/beladesignintl.jpg",
                        alt: "BelaDesign International Website",
                        width: 800,
                        height: 450
                    }
                },
                {
                    id: 18,
                    title: "TJ Perfumes",
                    description: "An e-commerce platform for a perfume brand built using WordPress and WooCommerce, integrating UPI payments, POD options, and a premium design experience.",
                    category: "Client Project",
                    year: "2023",
                    status: "Offline",
                    technologies: ["WordPress", "WooCommerce", "PHP", "SEO"],
                    liveUrl: "",
                    githubUrl: "",
                    image: {
                        src: "/project-imgs/tjperfumes.jpg",
                        alt: "TJ Perfumes E-commerce Website",
                        width: 800,
                        height: 450
                    }
                }
            ]
        },

        experience: {
            title: "Work Experience",
            description: "My professional journey and hands-on experience across full-stack development, design, and digital creation.",
            experiences: [
                {
                    id: 1,
                    position: "Full Stack Developer",
                    company: "Self-Employed",
                    location: "Remote",
                    type: "Freelance / Self-employed",
                    startDate: "Sep 2024",
                    endDate: "Present",
                    description: "Building scalable and visually engaging full-stack applications using Next.js, TypeScript, and MongoDB. Focusing on performance, UI/UX, and reusable design systems.",
                    achievements: [
                        "Developed end-to-end projects integrating backend APIs with dynamic frontends.",
                        "Built and maintained SolarisUI — a React-based UI library with reusable components and motion elements.",
                        "Created and deployed NextLaunch — a Next.js template store for developers."
                    ],
                    technologies: ["Next.js", "TypeScript", "Node.js", "Express", "MongoDB", "Framer Motion", "Tailwind CSS"]
                },
                {
                    id: 2,
                    position: "Frontend Developer",
                    company: "Freelance",
                    location: "Remote",
                    type: "Freelance",
                    startDate: "Mar 2024",
                    endDate: "Present",
                    description: "Designed and developed modern, interactive frontends for client projects, focusing on responsive layouts and intuitive design.",
                    achievements: [
                        "Delivered pixel-perfect, high-performance UIs using Next.js and Tailwind CSS.",
                        "Collaborated with clients to transform design prototypes from Figma into production-ready interfaces.",
                        "Enhanced user engagement through smooth motion effects using Framer Motion."
                    ],
                    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Figma"]
                },
                {
                    id: 3,
                    position: "WordPress Developer",
                    company: "Freelance",
                    location: "Remote",
                    type: "Freelance",
                    startDate: "May 2022",
                    endDate: "Aug 2025",
                    description: "Developed and managed business and e-commerce websites for clients using WordPress and WooCommerce.",
                    achievements: [
                        "Built custom websites for educational institutes, import/export businesses, and perfume brands.",
                        "Integrated UPI and POD payment systems for e-commerce platforms.",
                        "Implemented SEO strategies that improved client site rankings and visibility."
                    ],
                    technologies: ["WordPress", "WooCommerce", "PHP", "Elementor", "SEO"]
                },
                {
                    id: 4,
                    position: "Blogger",
                    company: "Self-Employed",
                    location: "Remote",
                    type: "Self-employed",
                    startDate: "Jun 2022",
                    endDate: "Apr 2024",
                    description: "Created and managed Intelpedia, a blog and AI tools directory focused on AI tools, prompts, and insights into emerging technologies.",
                    achievements: [
                        "Published 100+ articles about AI tools, prompt engineering, and productivity.",
                        "Built a growing community of tech readers and creators.",
                        "Handled SEO, content strategy, and blog performance optimization independently."
                    ],
                    technologies: ["WordPress", "SEO", "Content Strategy", "AI Tools", "Blog Management"]
                }
            ]
        },

        contact: {
            title: "Get In Touch",
            description: "Let’s connect and build something meaningful together.",
            formFields: [
                {
                    name: "name",
                    label: "Name",
                    type: "text",
                    icon: "User",
                    placeholder: "Your full name",
                    required: true,
                    validation: {
                        required: "Name is required"
                    }
                },
                {
                    name: "email",
                    label: "Email",
                    type: "email",
                    icon: "Mail",
                    placeholder: "your.email@example.com",
                    required: true,
                    validation: {
                        required: "Email is required",
                        pattern: "Please enter a valid email"
                    }
                },
                {
                    name: "subject",
                    label: "Subject",
                    type: "text",
                    icon: "MessageCircle",
                    placeholder: "What's this about?",
                    required: true,
                    validation: {
                        required: "Subject is required"
                    }
                },
                {
                    name: "message",
                    label: "Message",
                    type: "textarea",
                    icon: "MessageCircle",
                    placeholder: "Tell me about your project or idea...",
                    required: true,
                    rows: 6,
                    validation: {
                        required: "Message is required",
                        minLength: "Message must be at least 10 characters"
                    }
                }
            ],
            submitButton: {
                text: "Send Message",
                loadingText: "Sending...",
                icon: "Send"
            },
            messages: {
                success: "Message sent successfully! I'll get back to you soon.",
                error: "Failed to send message. Please try again."
            }
        }
    }
};

export type siteConfig = typeof siteConfig;
