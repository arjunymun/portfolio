// Skills, projects, experience – edit this file to customize content

export interface SkillGroup {
  title: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  { title: "Languages", items: ["TypeScript", "JavaScript", "Python"] },
  { title: "Frontend", items: ["React", "Next.js", "Tailwind CSS"] },
  { title: "Tools", items: ["Git", "VS Code"] },
];

export interface Project {
  title: string;
  description: string;
  /** Short outcome or result (e.g. "Reduced load time by 40%") */
  outcome?: string;
  liveUrl?: string;
  repoUrl?: string;
  tags: string[];
  /** First featured project can span full width */
  featured?: boolean;
  /** Optional cover image URL or path (public/) */
  image?: string;
}

export const projects: Project[] = [
  {
    title: "Project One",
    description: "A short description of your project and what it does.",
    outcome: "Shipped to 10k+ users.",
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/your-username/repo",
    tags: ["Next.js", "TypeScript"],
    image: "/projects/featured.jpg",
    featured: true,
  },
  {
    title: "Project Two",
    description: "A second project to show the grid and thumbnails.",
    tags: ["React", "Design"],
    image: "/projects/thumb1.jpg",
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/your-username/repo2",
  },
];

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  bullets: string[];
}

export const experience: ExperienceItem[] = [
  {
    role: "Software Developer",
    company: "Company Name",
    period: "2023 – Present",
    bullets: ["Achievement or responsibility.", "Another point."],
  },
];
