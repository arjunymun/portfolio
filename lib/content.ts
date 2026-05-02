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
    badge: string;
    imageSrc: string;
    imageAlt: string;
    imageWidth: number;
    imageHeight: number;
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

export interface ExecutiveProof {
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
  executiveSummary: ExecutiveProof[];
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
  availabilityNote?: string;
  screenshotIntro?: string;
  closingHeading?: string;
  closingCopy?: string;
}

export interface CinemaProof {
  label: string;
  value: string;
  detail: string;
}

export interface UniverseNode {
  label: string;
  detail: string;
  tone: "teal" | "amber" | "rose" | "violet" | "steel";
}

export const hero: HeroContent = {
  eyebrow: "Portfolio",
  title: "I build thoughtful web products with strong frontend craft.",
  intro:
    "I'm Arjun Yadav, a full-stack developer with a bachelor's in computer science from Memorial University of Newfoundland.",
  summary:
    "My strongest work right now spans two different lanes: trust-first AI workflows like DraftLens and real-world operations software like Sideout. I care about typed systems, calm interfaces, and product stories that feel believable under scrutiny.",
  highlights: [
    {
      label: "Current focus",
      value: "Flagship-quality product systems",
    },
    {
      label: "Core stack",
      value: "Next.js, TypeScript, Supabase",
    },
    {
      label: "Range",
      value: "AI workflows and commercial operations software",
    },
  ],
  primaryCta: {
    label: "View flagship projects",
    href: "/#work",
  },
  secondaryCta: {
    label: "Browse GitHub",
    href: "https://github.com/arjunymun",
    external: true,
  },
  preview: {
    label: "Lead flagship",
    title: "Sideout",
    description:
      "A premium operator-grade pickleball club OS shaped by a real family-run venue in Dehradun, with guest browsing, bookings, memberships, packs, credits, offers, and operator retention workflows in one system.",
    bullets: [
      "Public marketing, customer routes, and admin/operator surfaces in one Next.js codebase",
      "India-first pricing, wallet value, memberships, and offers shaped around repeat play",
      "Supabase runtime with Stripe and WhatsApp-ready scaffolding for a believable live business system",
    ],
    badge: "Live multi-surface product",
    imageSrc: "/projects/sideout-landing.png",
    imageAlt: "Sideout landing page with premium venue positioning and repeat-play metrics",
    imageWidth: 1280,
    imageHeight: 5960,
  },
};

export const proofItems: ProofItem[] = [
  {
    label: "Product range",
    value: "AI workflow to venue OS",
    description:
      "The portfolio now shows both intelligent document products and real-world commerce and operations software.",
  },
  {
    label: "Frontend discipline",
    value: "Editorial UI with product fidelity",
    description:
      "I care about interfaces that feel intentional, readable, and convincing before they try to impress.",
  },
  {
    label: "System design",
    value: "Storefront to admin console",
    description:
      "I like builds where marketing, customer, and operator surfaces share one clear domain model.",
  },
  {
    label: "Current focus",
    value: "Work that holds up in review",
    description:
      "The goal is not just shipping code, but shipping projects that stand up to real product questions.",
  },
];

export const cinemaHero = {
  eyebrow: "Full-stack product cinema",
  title: "I turn product ideas into systems you can feel.",
  intro:
    "Arjun Yadav is a full-stack developer building polished, reviewable products across venue operations and trust-first AI workflows.",
  signal: "Sideout + DraftLens are the proof: two flagship builds, real workflows, fewer empty claims.",
  chips: ["Next.js 16", "TypeScript", "Supabase", "OpenAI", "Stripe", "PWA"],
};

export const cinemaProof: CinemaProof[] = [
  {
    label: "Live scope",
    value: "3 product surfaces",
    detail: "Sideout covers public marketing, customer flows, and operator workflows.",
  },
  {
    label: "Business logic",
    value: "Bookings to credits",
    detail: "Venue value is modeled through packs, memberships, offers, wallet credits, and approvals.",
  },
  {
    label: "AI workflow",
    value: "Upload to report",
    detail: "DraftLens turns essays into structured feedback, citation signals, saved history, and rewrites.",
  },
  {
    label: "Backend posture",
    value: "Auth, data, APIs",
    detail: "Both flagships are shaped around persistence, runtime behavior, and deployment constraints.",
  },
  {
    label: "Frontend craft",
    value: "Cinematic UX",
    detail: "The portfolio itself is now built as a product surface, not a pile of paragraphs.",
  },
  {
    label: "Career target",
    value: "Junior product engineer",
    detail: "Open to internships, junior engineering roles, and teams that value taste plus execution.",
  },
];

export const universeNodes: UniverseNode[] = [
  {
    label: "Sideout",
    detail: "Venue OS",
    tone: "teal",
  },
  {
    label: "DraftLens",
    detail: "AI writing workflow",
    tone: "violet",
  },
  {
    label: "Commerce",
    detail: "Stripe, packs, memberships",
    tone: "amber",
  },
  {
    label: "Data",
    detail: "Supabase auth and records",
    tone: "steel",
  },
  {
    label: "Trust",
    detail: "Citations, fallback, privacy",
    tone: "rose",
  },
  {
    label: "Interface",
    detail: "Product-grade frontends",
    tone: "teal",
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
      "Multi-surface product UI",
      "Metadata and social sharing surfaces",
    ],
  },
  {
    title: "Back-end and integrations",
    summary:
      "I am most comfortable when a project needs both UI clarity and real product plumbing behind it.",
    items: [
      "Supabase auth, RLS, and storage",
      "Route handlers and server components",
      "Structured content and domain models",
      "Stripe and provider scaffolding",
      "Runtime fallback planning",
      "Deployment-friendly environment handling",
    ],
  },
  {
    title: "Product thinking",
    summary:
      "The projects I keep are the ones where the user problem, the business logic, and the presentation all connect.",
    items: [
      "Feature scoping for v1 products",
      "Case-study writing",
      "Demo-friendly UX",
      "Retention and value-system modeling",
      "Proof-driven portfolio storytelling",
      "Iteration through shipped personal work",
    ],
  },
];

export const experience: ExperienceItem[] = [
  {
    period: "2026",
    title: "Built Sideout",
    org: "Independent product project",
    summary:
      "Turned a real family-run pickleball venue in Dehradun into a serious multi-surface software product with public marketing, customer value flows, and operator retention tooling.",
    bullets: [
      "Modeled bookings, packs, memberships, credits, offers, and operator workflows around repeat play instead of treating the venue like a generic scheduler.",
      "Built customer and admin surfaces that share one domain model, making the product read like a real business system instead of a demo stack.",
      "Used the project to prove range beyond AI tooling into commerce, customer intelligence, and software for a physical business.",
    ],
  },
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

const sideoutLanding: ProjectScreenshot = {
  src: "/projects/sideout-landing.png",
  alt: "Sideout landing page with premium venue positioning and repeat-play metrics",
  width: 1280,
  height: 5960,
  caption:
    "The landing page frames Sideout as a premium venue system, not a generic sports-tech dashboard.",
};

const sideoutCustomerDashboard: ProjectScreenshot = {
  src: "/projects/sideout-customer-dashboard.png",
  alt: "Sideout customer dashboard with booking cards, wallet value, and active products",
  width: 1280,
  height: 3890,
  caption:
    "The customer surface makes booking rules, wallet value, and repeat-play incentives legible at first glance.",
};

const sideoutWallet: ProjectScreenshot = {
  src: "/projects/sideout-wallet.png",
  alt: "Sideout wallet page with credits, pack balance, and membership value",
  width: 1280,
  height: 1951,
  caption:
    "The wallet page treats credits, packs, and memberships as core product behavior rather than a payment receipt screen.",
};

const sideoutAdminDashboard: ProjectScreenshot = {
  src: "/projects/sideout-admin-dashboard.png",
  alt: "Sideout operator dashboard with request queue, schedule control, occupancy, and retention metrics",
  width: 1280,
  height: 4604,
  caption:
    "The operator dashboard brings queue management, occupancy, and retention signals into one operating surface.",
};

const sideoutAdminCustomers: ProjectScreenshot = {
  src: "/projects/sideout-admin-customers.png",
  alt: "Sideout admin customers view with notes, credits, inactivity, and manual retention actions",
  width: 1280,
  height: 3182,
  caption:
    "Customer intelligence keeps notes, inactivity, credits, and communication actions close to the operator workflow.",
};

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
    slug: "sideout",
    title: "Sideout",
    kicker: "Operator-grade venue OS",
    summary:
      "A premium pickleball club operating system shaped by a real family-run venue in Dehradun, combining guest-friendly booking, memberships, packs, wallet credits, offers, and operator retention workflows in one product.",
    role: "Product strategy, frontend, backend, and case-study direction",
    year: "2026",
    status: "Lead flagship case study",
    stack: ["Next.js 16", "TypeScript", "Supabase", "Stripe", "PWA"],
    takeaway:
      "The strongest part of Sideout is that it models the business behind a venue: member value, booking rules, operator approvals, and repeat-play behavior in one system.",
    featured: true,
    detailPage: true,
    image: sideoutLanding,
    links: [
      { label: "Read case study", href: "/projects/sideout" },
      {
        label: "Visit live product",
        href: "https://pickleball-xi.vercel.app/",
        external: true,
      },
      {
        label: "View repo",
        href: "https://github.com/arjunymun/Pickleball",
        external: true,
      },
    ],
  },
  {
    slug: "draftlens",
    title: "DraftLens",
    kicker: "Trust-first writing workflow",
    summary:
      "A full-stack academic writing feedback app that scores essays, checks citation signals, saves reports, and offers rewrite help without hiding behind AI hype.",
    role: "Product design, frontend, backend, and case-study direction",
    year: "2026",
    status: "Second flagship case study",
    stack: ["Next.js 16", "TypeScript", "Supabase", "OpenAI", "Tailwind CSS"],
    takeaway:
      "The strongest part of DraftLens is the complete workflow: document upload, structured analysis, saved report history, and a polished report surface built around trust.",
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

export const homepageFlagships = projects.filter((project) => project.featured);

export const caseStudies: ProjectCaseStudy[] = [
  {
    ...projects[0],
    executiveSummary: [
      {
        label: "Built",
        value: "A multi-surface venue operating system",
        detail:
          "Marketing, booking, wallet value, memberships, offers, and operator workflows live in one product story.",
      },
      {
        label: "Technical surface",
        value: "Next.js 16, Supabase, Stripe, PWA",
        detail:
          "The system is structured around auth, shared domain data, commerce scaffolding, and installable customer behavior.",
      },
      {
        label: "Strongest proof",
        value: "It models the business, not just the schedule",
        detail:
          "Repeat play, manual approvals, credits, inactive customers, and operator nudges are treated as core product behavior.",
      },
    ],
    problem:
      "Single-venue clubs do not just sell open court time. They sell habits, member value, better repeat behavior, and reasons to come back. A simple booking layer was not enough to reflect how a real venue actually runs.",
    audience:
      "Venue owners, operators, and regular players at a premium pickleball club, especially in a business that needs bookings, offers, credits, and customer memory to work together.",
    challenge:
      "The hard part was not making a nice landing page or a court schedule. It was connecting storefront, customer value flows, and operator actions without collapsing into a generic dashboard or a shallow booking clone.",
    solutionSummary:
      "Sideout turns a real family-run venue in Dehradun into a repeat-play operating system with public marketing, customer booking and value flows, and an operator console for approvals, retention, and customer intelligence.",
    workflow: [
      "Guests can browse availability, offers, and venue positioning before creating an account.",
      "After sign-in, customers move through live bookings, wallet credits, packs, memberships, and offer-led repeat-play flows.",
      "Some slots confirm instantly while others enter an operator review path, reflecting how real venue inventory behaves.",
      "Wallet value, packs, memberships, and offer redemptions shape how customers book and what value gets restored after cancellations.",
      "Operators manage queue approvals, schedule quality, at-risk customers, commercial nudges, and WhatsApp-ready communication flows from the admin side.",
    ],
    architecture: [
      {
        title: "Multi-surface App Router product",
        detail:
          "Next.js 16 App Router handles the public marketing site, customer shell, admin shell, and runtime APIs inside one codebase and one visual system.",
      },
      {
        title: "Supabase auth and venue model",
        detail:
          "Supabase powers phone-first customer auth, operator access, venue bootstrap data, and the shared runtime model behind courts, customers, bookings, and value products.",
      },
      {
        title: "Domain logic for repeat play",
        detail:
          "The product models bookings, mixed confirmation rules, wallet credits, packs, memberships, offers, and operator actions as one connected system instead of isolated features.",
      },
      {
        title: "Hybrid demo and live runtime",
        detail:
          "A demo-first runtime keeps the product reviewable on localhost while Supabase-backed flows can promote the same surfaces into a live venue configuration.",
      },
      {
        title: "Commerce scaffolding",
        detail:
          "Stripe Checkout and webhook routes are wired for pack purchases and recurring memberships, with the data model ready for real value products without overstating live production usage.",
      },
      {
        title: "Communication and installability",
        detail:
          "Twilio WhatsApp scaffolding and PWA support extend the product beyond booking screens into venue operations and repeat customer behavior.",
      },
    ],
    outcomes: [
      {
        label: "Three product surfaces",
        value: "Marketing, customer, operator",
        detail:
          "Sideout reads like one coherent system across public positioning, customer value flows, and operator decision-making.",
      },
      {
        label: "Commerce logic",
        value: "Packs, memberships, credits",
        detail:
          "The product models how a venue actually drives repeat play instead of stopping at court availability and one-off checkout.",
      },
      {
        label: "Retention layer",
        value: "At-risk players and offer response",
        detail:
          "Operators can see expiring value, inactive players, notes, and targeted nudges instead of relying on a generic schedule view alone.",
      },
      {
        label: "Runtime credibility",
        value: "Demo-first with live posture",
        detail:
          "The app stays reviewable without setup but also has the schema, auth, and API shape needed to promote into a live venue runtime.",
      },
    ],
    lessons: [
      "A physical-business product becomes much more convincing when the booking flow, value system, and operator actions all reinforce the same business story.",
      "What made Sideout feel ambitious was not more screens by themselves, but making those screens share one believable operating model.",
      "Retention logic can be a first-class product surface without sounding like a growth hack if the UX stays grounded in real customer behavior.",
      "A second flagship project should not just repeat the first one. Sideout matters because it proves range beyond DraftLens into commerce and operations software.",
    ],
    buildNotes: [
      "The live app currently exposes public marketing, customer routes, and admin routes through one shared product system.",
      "Stripe is wired as product-ready commerce scaffolding for packs and memberships, without claiming more than the current integration supports.",
      "WhatsApp/Twilio flows are scaffolded so communication history and template-driven nudges belong inside the operator workflow.",
      "The app is India-first in pricing and timezone assumptions, which helps the product feel shaped around a real venue instead of a generic international starter.",
    ],
    screenshots: [
      sideoutLanding,
      sideoutCustomerDashboard,
      sideoutWallet,
      sideoutAdminDashboard,
      sideoutAdminCustomers,
    ],
    availabilityNote:
      "The live marketing, customer, and operator surfaces are public, so this case study can point to a working product instead of relying only on static mockups.",
    screenshotIntro:
      "I wanted the case study to show the system where the product stakes are easiest to judge: the storefront, the customer value layer, and the operator workflows behind repeat play.",
    closingHeading:
      "Sideout shows the commercial and operational range I want my portfolio to have.",
    closingCopy:
      "It proves I can build beyond AI tooling into multi-surface software shaped by a real business, real pricing logic, and real customer behavior.",
  },
  {
    ...projects[1],
    executiveSummary: [
      {
        label: "Built",
        value: "A trust-first academic feedback workflow",
        detail:
          "Upload, parsing, rubric scoring, citation confidence, report history, and rewrite support work as one journey.",
      },
      {
        label: "Technical surface",
        value: "Next.js 16, Supabase, OpenAI, external metadata checks",
        detail:
          "The product combines app routes, auth, persistence, AI-assisted analysis, fallback behavior, and source checks.",
      },
      {
        label: "Strongest proof",
        value: "AI output becomes usable product UI",
        detail:
          "The report is structured into scores, priorities, citations, and revision actions instead of a vague generated blob.",
      },
    ],
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
      "DraftLens still matters in the portfolio because it shows a very different kind of judgment from Sideout: trust, structure, and believable AI-assisted workflow design.",
    ],
    buildNotes: [
      "The app supports DOCX uploads and text-based PDFs for a tighter v1 surface area.",
      "Saved report history keeps structured feedback and short excerpts instead of the full essay body.",
      "A rewrite lab lets the student revise one passage at a time without turning the product into a full essay generator.",
      "The report surfaces use labels like matched, possible match, and not found to avoid overclaiming what the citation checks know.",
    ],
    screenshots: [draftLensLanding, draftLensDashboard, draftLensReport],
    availabilityNote:
      "The hosted demo is being refreshed, so the repo, case study, and screenshots are the clearest public references right now.",
    screenshotIntro:
      "I wanted the case study to show the product where the work is easiest to judge: positioning, the workspace, and the actual report UI.",
    closingHeading:
      "DraftLens still matters because it shows a different kind of product judgment.",
    closingCopy:
      "Where Sideout proves commercial and operational range, DraftLens proves that I can make AI-assisted workflows feel structured, credible, and worth trusting.",
  },
];

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((project) => project.slug === slug);
}
