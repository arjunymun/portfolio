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

export interface ResumeLink {
  label: string;
  href: string;
  external: boolean;
  downloadName?: string;
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
  resume: ResumeLink;
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
const configuredResumeUrl = process.env.NEXT_PUBLIC_RESUME_URL?.trim();
const resumeHref = configuredResumeUrl || "/resume.pdf";
const resumeIsExternal = /^https?:\/\//.test(resumeHref);

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
    "Portfolio of Arjun Yadav, a full-stack developer building cinematic product systems across real-world operations software, practical AI workflows, and case-study storytelling.",
  resume: {
    label: "Download resume",
    href: resumeHref,
    external: resumeIsExternal,
    downloadName: resumeIsExternal ? undefined : "Arjun-Yadav-Resume.pdf",
  },
  navigation: [
    { label: "Work", href: "/#work" },
    { label: "Universe", href: "/#universe" },
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
      "Cinematic product portfolio for Arjun Yadav, featuring Sideout and DraftLens: two flagship full-stack products spanning venue operations software, customer retention systems, and trust-first AI workflows.",
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
