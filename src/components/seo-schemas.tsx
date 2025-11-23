import { siteConfig } from "@/config/siteConfig";

/**
 * JSON-LD structured data for Person schema
 * Helps search engines understand who you are and what you do
 */
export function PersonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Naseem Ansari",
    url: siteConfig.url,
    image: siteConfig.ogImage,
    jobTitle: "Frontend Developer",
    description: siteConfig.description,
    sameAs: [
      siteConfig.links.twitter,
      siteConfig.links.github,
      "https://www.linkedin.com/in/naseem-ansari-25474b269/",
      "https://www.instagram.com/dev_Naseem",
    ],
    knowsAbout: [
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "Framer Motion",
      "Web Development",
      "Full Stack Development",
      "Frontend Development",
      "Backend Development",
      "API Development",
      "SEO Optimization",
      "UI/UX Design",
    ],
    alumniOf: {
      "@type": "Organization",
      name: "Self-Taught Developer",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * JSON-LD structured data for Portfolio Website
 */
export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    author: {
      "@type": "Person",
      name: "Naseem Ansari",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.url}/blog?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
