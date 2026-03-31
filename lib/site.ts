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
    "Portfolio of Arjun Yadav, a full-stack developer building product-shaped web apps with careful frontend craft, practical AI workflows, and strong case-study thinking.",
  navigation: [
    { label: "Home", href: "/" },
    { label: "Work", href: "/#work" },
    { label: "DraftLens", href: "/projects/draftlens" },
    { label: "Writing", href: "/blog" },
    { label: "Contact", href: "/#contact" },
  ],
  socialLinks: [
    { label: "GitHub", href: "https://github.com/arjunymun", external: true },
    { label: "Email", href: "mailto:arjuny@mun.ca", external: true },
    {
      label: "DraftLens Repo",
      href: "https://github.com/arjunymun/essay-feedback-app",
      external: true,
    },
  ],
  seo: {
    title: "Arjun Yadav | Full-stack Developer",
    description:
      "Editorial portfolio and case-study site for Arjun Yadav, featuring DraftLens, a student-facing writing feedback product built with Next.js, Supabase, and OpenAI.",
    keywords: [
      "Arjun Yadav",
      "full-stack developer",
      "Next.js portfolio",
      "DraftLens",
      "essay feedback app",
      "TypeScript",
      "frontend developer",
      "product engineer",
    ],
  },
};
