export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface SocialLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface SiteConfig {
  name: string;
  shortName: string;
  url: string;
  role: string;
  location: string;
  availability: string;
  email: string;
  github: string;
  description: string;
  navigation: NavItem[];
  socialLinks: SocialLink[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "http://localhost:3000";

export const site: SiteConfig = {
  name: "Arjun Yadav",
  shortName: "Arjun",
  url: siteUrl,
  role: "Full-stack developer",
  location: "St. John's, Newfoundland and Labrador",
  availability:
    "Open to internships, junior engineering roles, and collaborative product work.",
  email: "arjuny@mun.ca",
  github: "https://github.com/arjunymun",
  description:
    "Portfolio of Arjun Yadav, a full-stack developer building product-shaped web apps across real-world operations software, practical AI workflows, and strong case-study storytelling.",
  navigation: [
    { label: "Home", href: "/" },
    { label: "Work", href: "/#work" },
    { label: "Sideout", href: "/projects/sideout" },
    { label: "Writing", href: "/blog" },
    { label: "Contact", href: "/#contact" },
  ],
  socialLinks: [
    { label: "GitHub", href: "https://github.com/arjunymun", external: true },
    { label: "Email", href: "mailto:arjuny@mun.ca", external: true },
    {
      label: "Sideout Live",
      href: "https://pickleball-xi.vercel.app/",
      external: true,
    },
  ],
  seo: {
    title: "Arjun Yadav | Full-stack Developer",
    description:
      "Editorial portfolio and case-study site for Arjun Yadav, featuring Sideout and DraftLens: two flagship products spanning venue operations software, customer retention systems, and trust-first AI workflows.",
    keywords: [
      "Arjun Yadav",
      "full-stack developer",
      "Next.js portfolio",
      "Sideout",
      "pickleball club software",
      "venue operations software",
      "DraftLens",
      "essay feedback app",
      "TypeScript",
      "frontend developer",
      "product engineer",
    ],
  },
};
