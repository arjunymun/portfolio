export interface CtaLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface HeroContent {
  eyebrow: string;
  title: string;
  intro: string;
  summary: string;
  highlights: Array<{
    label: string;
    value: string;
  }>;
  primaryCta: CtaLink;
  secondaryCta: CtaLink;
  preview: {
    label: string;
    title: string;
    description: string;
    bullets: string[];
    imageSrc: string;
    imageAlt: string;
  };
}

export interface ProofItem {
  label: string;
  value: string;
  description: string;
}

export interface CapabilityGroup {
  title: string;
  summary: string;
  items: string[];
}

export interface ExperienceItem {
  period: string;
  title: string;
  org: string;
  summary: string;
  bullets: string[];
}

export interface ProjectLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface ProjectScreenshot {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption: string;
}

export interface ProjectOutcome {
  label: string;
  value: string;
  detail: string;
}

export interface ProjectSummary {
  slug: string;
  title: string;
  kicker: string;
  summary: string;
  role: string;
  year: string;
  status: string;
  stack: string[];
  takeaway: string;
  featured?: boolean;
  detailPage?: boolean;
  image?: ProjectScreenshot;
  links: ProjectLink[];
}

export interface ProjectCaseStudy extends ProjectSummary {
  problem: string;
  audience: string;
  challenge: string;
  solutionSummary: string;
  workflow: string[];
  architecture: Array<{
    title: string;
    detail: string;
  }>;
  outcomes: ProjectOutcome[];
  lessons: string[];
  buildNotes: string[];
  screenshots: ProjectScreenshot[];
}

export const hero: HeroContent = {
  eyebrow: "Portfolio",
  title:
    "I build thoughtful web products with strong frontend craft.",
  intro:
    "I'm Arjun Yadav, a full-stack developer with a bachelor's in computer science from Memorial University of Newfoundland.",
  summary:
    "Right now I'm focused on practical AI workflows, typed systems, and interfaces that feel calm, credible, and easy to review through strong product storytelling.",
  highlights: [
    {
      label: "Current focus",
      value: "Case-study quality product work",
    },
    {
      label: "Core stack",
      value: "Next.js, TypeScript, Supabase",
    },
    {
      label: "Working style",
      value: "AI features with real fallback paths",
    },
  ],
  primaryCta: {
    label: "Read the DraftLens case study",
    href: "/projects/draftlens",
  },
  secondaryCta: {
    label: "Browse GitHub",
    href: "https://github.com/arjunymun",
    external: true,
  },
  preview: {
    label: "Flagship build",
    title: "DraftLens",
    description:
      "A student-facing writing feedback product that combines rubric scoring, citation checks, saved reports, and rewrite help in one clear workflow.",
    bullets: [
      "Typed full-stack app built with Next.js 16, Supabase, and OpenAI",
      "Upload flow designed around DOCX and text-based PDFs",
      "Demo-ready fallback path for smoother product walkthroughs",
    ],
    imageSrc: "/projects/draftlens-landing.png",
    imageAlt: "DraftLens landing page preview",
  },
};

export const proofItems: ProofItem[] = [
  {
    label: "Product-first scope",
    value: "Uploads to saved reports",
    description:
      "I like building features as complete product flows instead of isolated UI fragments.",
  },
  {
    label: "Frontend discipline",
    value: "Editorial UI that scales",
    description:
      "I care about interfaces that communicate clearly before they try to impress.",
  },
  {
    label: "AI with guardrails",
    value: "Fallback paths that stay useful",
    description:
      "If a paid API is missing, the product should still explain itself and stay explorable.",
  },
  {
    label: "Current focus",
    value: "Work built to review well",
    description:
      "The goal is not just shipping code, but shipping work that stands up in a portfolio review.",
  },
];

export const capabilityGroups: CapabilityGroup[] = [
  {
    title: "Frontend systems",
    summary:
      "I enjoy building interfaces that feel intentional, readable, and resilient across breakpoints.",
    items: [
      "Next.js App Router",
      "TypeScript",
      "Tailwind CSS v4",
      "Responsive editorial layouts",
      "Accessible component structure",
      "Metadata and social sharing surfaces",
    ],
  },
  {
    title: "Back-end and integrations",
    summary:
      "I am most comfortable when a project needs both UI clarity and real product plumbing behind it.",
    items: [
      "Supabase auth and storage",
      "Route handlers and server components",
      "Structured content models",
      "File parsing workflows",
      "Third-party API integration",
      "Deployment-friendly environment handling",
    ],
  },
  {
    title: "Product thinking",
    summary:
      "The projects I keep are the ones where the user problem, the technical choices, and the presentation all connect.",
    items: [
      "Feature scoping for v1 products",
      "Case-study writing",
      "Demo-friendly UX",
      "Fallback and error-state planning",
      "Proof-driven portfolio storytelling",
      "Iteration through shipped personal work",
    ],
  },
];

export const experience: ExperienceItem[] = [
  {
    period: "2026",
    title: "Built DraftLens",
    org: "Independent product project",
    summary:
      "Turned a simple essay-feedback idea into a fuller product surface with auth, uploads, report history, citation checks, rewrites, and demo-mode resilience.",
    bullets: [
      "Shipped a real product flow instead of a one-page feature demo.",
      "Balanced AI-assisted analysis with fallback logic so the app stays explorable without paid API calls.",
      "Used the build as both a technical project and a portfolio-grade case-study candidate.",
    ],
  },
  {
    period: "2026",
    title: "Reframed this portfolio",
    org: "Personal brand and frontend system work",
    summary:
      "Rebuilt the site around stronger writing, clearer proof, a real content model, and a more career-useful presentation of projects.",
    bullets: [
      "Replaced placeholder copy with stronger project storytelling and clearer proof.",
      "Added project detail routing, social metadata, and reusable content types.",
      "Focused on calmer motion, stronger first-fold readability, and more convincing work presentation.",
    ],
  },
  {
    period: "2024 to now",
    title: "Self-directed engineering practice",
    org: "Coursework, experiments, and personal builds",
    summary:
      "The through-line in my work has been using personal builds to strengthen core engineering habits and turn ideas into better-finished products.",
    bullets: [
      "Kept iterating on JavaScript and TypeScript side projects while improving Git and deployment workflows.",
      "Used smaller experiments to build confidence before tackling larger product-shaped apps.",
      "Treat personal work as a proving ground for stronger frontend, backend, and communication skills.",
    ],
  },
];

const draftLensLanding: ProjectScreenshot = {
  src: "/projects/draftlens-landing.png",
  alt: "DraftLens landing page with hero copy and feature cards",
  width: 1440,
  height: 1600,
  caption:
    "The landing page frames DraftLens as a credible writing product instead of a vague AI tool.",
};

const draftLensDashboard: ProjectScreenshot = {
  src: "/projects/draftlens-dashboard.png",
  alt: "DraftLens demo dashboard with upload flow and previous analyses",
  width: 1440,
  height: 1700,
  caption:
    "The demo dashboard keeps the product explorable even before Supabase and OpenAI are wired in.",
};

const draftLensReport: ProjectScreenshot = {
  src: "/projects/draftlens-report.png",
  alt: "DraftLens report page with rubric scores and citation verification",
  width: 1440,
  height: 2200,
  caption:
    "The report page turns analysis output into a UI a student can actually work through.",
};

export const projects: ProjectSummary[] = [
  {
    slug: "draftlens",
    title: "DraftLens",
    kicker: "Student writing feedback product",
    summary:
      "A full-stack academic writing feedback app that scores essays, checks citation signals, saves reports, and offers rewrite help without hiding behind AI hype.",
    role: "Product design, frontend, backend, and case-study direction",
    year: "2026",
    status: "Flagship case study",
    stack: ["Next.js 16", "TypeScript", "Supabase", "OpenAI", "Tailwind CSS"],
    takeaway:
      "The strongest part of this build is the complete workflow: document upload, structured analysis, saved report history, and a polished report surface.",
    featured: true,
    detailPage: true,
    image: draftLensLanding,
    links: [
      { label: "Read case study", href: "/projects/draftlens" },
      {
        label: "View repo",
        href: "https://github.com/arjunymun/essay-feedback-app",
        external: true,
      },
    ],
  },
  {
    slug: "portfolio-system",
    title: "Editorial portfolio system",
    kicker: "Personal site as product surface",
    summary:
      "This site is deliberately treated like a product: typed content modules, stronger metadata, editorial layout decisions, and project storytelling that reads clearly for recruiters and collaborators.",
    role: "Content modeling, UI direction, and implementation",
    year: "2026",
    status: "Live portfolio refresh",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    takeaway:
      "I wanted the portfolio itself to prove judgment in writing, layout, and system design instead of just listing technologies.",
    links: [
      {
        label: "View repo",
        href: "https://github.com/arjunymun/portfolio",
        external: true,
      },
    ],
  },
  {
    slug: "github-shelf",
    title: "GitHub project shelf",
    kicker: "Smaller experiments and coursework",
    summary:
      "A collection of smaller builds, experiments, and in-progress ideas that helped me build momentum toward stronger end-to-end product work.",
    role: "Ongoing self-directed learning",
    year: "2024 to now",
    status: "Active archive",
    stack: ["JavaScript", "Node.js", "Git", "TypeScript"],
    takeaway:
      "Not every repo deserves a full case study, but the archive shows steady iteration and growing ambition.",
    links: [
      {
        label: "Open GitHub profile",
        href: "https://github.com/arjunymun",
        external: true,
      },
    ],
  },
];

export const caseStudies: ProjectCaseStudy[] = [
  {
    ...projects[0],
    problem:
      "Students often get feedback that is either too vague to revise from, too grammar-only to improve the argument, or too AI-heavy to trust. I wanted a product that felt more like a structured writing coach than a detector or magic box.",
    audience:
      "Students who need clearer revision guidance, especially when they are balancing argument quality, citation quality, and cleaner writing under deadline pressure.",
    challenge:
      "The hardest part was not generating text. It was making the product feel credible: uploads had to be smooth, the analysis needed structure, citation checks had to communicate confidence instead of fake certainty, and the app had to remain demoable even when expensive dependencies were missing.",
    solutionSummary:
      "DraftLens combines document parsing, rubric scoring, citation-verification signals, saved report history, and paragraph-level rewrite help inside one student-facing workflow.",
    workflow: [
      "Students upload a DOCX or text-based PDF and optionally add a title.",
      "The app extracts essay content, references, and citation signals from the file.",
      "A scoring pipeline generates an overall score, rubric breakdown, strengths, and highest-priority fixes.",
      "Crossref and OpenAlex checks provide source-confidence signals rather than pretending to guarantee citation truth.",
      "The finished report is saved with rewrite suggestions and a focused rewrite lab for one passage at a time.",
    ],
    architecture: [
      {
        title: "App Router foundation",
        detail:
          "Next.js 16 App Router handles the marketing pages, dashboard, report surfaces, and route handlers in one codebase.",
      },
      {
        title: "Auth, storage, and persistence",
        detail:
          "Supabase powers authentication, per-user history, storage, and the structured report records shown in the dashboard.",
      },
      {
        title: "Analysis pipeline",
        detail:
          "The app parses essay files, scores them against a structured rubric, and returns organized report data instead of one long blob of prose.",
      },
      {
        title: "AI with a fallback plan",
        detail:
          "OpenAI-assisted analysis improves the report quality when available, but the product also supports fallback logic and a seeded demo workspace so it still explains itself locally.",
      },
      {
        title: "Citation verification layer",
        detail:
          "Crossref and OpenAlex lookups turn the bibliography into a confidence table with matched, possible-match, not-found, and malformed states.",
      },
      {
        title: "Privacy-minded product behavior",
        detail:
          "The original uploaded file is stored briefly for processing and then deleted after analysis completes, while the dashboard keeps structured summaries instead of the full essay body.",
      },
    ],
    outcomes: [
      {
        label: "End-to-end scope",
        value: "Auth to saved report",
        detail:
          "The build covers the full journey from file upload to dashboard history and rewrite follow-up.",
      },
      {
        label: "Demo resilience",
        value: "Usable without paid APIs",
        detail:
          "A seeded demo workspace and fallback mode make the product presentable even before every external dependency is configured.",
      },
      {
        label: "Trust signal",
        value: "Confidence-first citations",
        detail:
          "The citation table communicates uncertainty honestly instead of pretending metadata checks are perfect.",
      },
      {
        label: "Privacy choice",
        value: "Delete source files after processing",
        detail:
          "The product is designed to keep the report history useful without keeping the original essay around unnecessarily.",
      },
    ],
    lessons: [
      "Shipping a demo-friendly fallback path matters almost as much as the main happy path for a portfolio project.",
      "AI features become more trustworthy when the surrounding UX explains the structure, confidence, and limitations clearly.",
      "The best student-facing product decisions in this build were about clarity and restraint, not about adding more model output.",
      "For portfolio work, a good report UI can be just as important as the backend logic because it proves judgment in how results are presented.",
    ],
    buildNotes: [
      "The app supports DOCX uploads and text-based PDFs for a tighter v1 surface area.",
      "Saved report history keeps structured feedback and short excerpts instead of the full essay body.",
      "A rewrite lab lets the student revise one passage at a time without turning the product into a full essay generator.",
      "The report surfaces use labels like matched, possible match, and not found to avoid overclaiming what the citation checks know.",
    ],
    screenshots: [draftLensLanding, draftLensDashboard, draftLensReport],
  },
];

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((project) => project.slug === slug);
}
