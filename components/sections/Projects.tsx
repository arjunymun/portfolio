"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { projects } from "@/lib/content";
import Image from "next/image";
import { SectionReveal } from "@/components/ui/SectionReveal";

const list = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

const listItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width; // 0..1
    const py = (e.clientY - rect.top) / rect.height; // 0..1
    const rotateY = (px - 0.5) * 12; // -6 .. 6
    const rotateX = (0.5 - py) * 8; // -4 .. 4
    setStyle({ transform: `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`, boxShadow: '0 18px 40px rgba(2,6,23,0.08)' });
  };

  const handleLeave = () => {
    setStyle({ transform: 'none', boxShadow: undefined });
  };

  return (
    <div ref={ref} onMouseMove={handleMove} onMouseLeave={handleLeave} style={style} className="transform-gpu will-change-transform">
      {project.image ? (
        <div className="mb-4 overflow-hidden rounded-md">
          <Image src={project.image} alt={project.title} width={800} height={320} className="w-full h-40 object-cover" />
        </div>
      ) : (
        <div className="mb-4 h-40 w-full rounded-md bg-gradient-to-br from-stone-100 to-white dark:from-stone-800/20" />
      )}

      <h4 className="font-display text-lg font-semibold text-stone-900 dark:text-stone-100">{project.title}</h4>
      <p className="mt-2 text-sm leading-relaxed text-stone-600 dark:text-stone-400">{project.description}</p>
      {project.outcome && <p className="mt-2 text-sm font-medium text-teal-600 dark:text-teal-400">{project.outcome}</p>}

      <div className="mt-4 tags">
        {project.tags.map((t) => (
          <span key={t} className="tag">{t}</span>
        ))}
      </div>

      <div className="mt-5 flex gap-4 text-sm font-medium">
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-teal-600 underline-offset-4 hover:text-teal-500 dark:text-teal-400">Live site →</a>
        )}
        {project.repoUrl && (
          <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-stone-600 underline-offset-4 hover:text-teal-600 dark:text-stone-400">Source</a>
        )}
      </div>
    </div>
  );
}

export function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.05 });
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  useEffect(() => {
    if (inView) setHasBeenVisible(true);
  }, [inView]);

  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <SectionReveal delay={100}>
      <section
        id="projects"
        className="scroll-mt-16 border-b border-stone-200/80 dark:border-stone-800/80"
      >
        <div ref={ref} className="mx-auto max-w-5xl px-6 py-24 sm:px-10 lg:px-14">
          <p className="section-label text-stone-500 dark:text-stone-500">
            03 — Work
          </p>
          <h2 className="section-heading section-title mt-2 text-3xl font-bold text-stone-900 dark:text-stone-100 sm:text-4xl">
            Projects
          </h2>

          {featured && (
            <motion.article
              initial={{ opacity: 0, y: 24 }}
              animate={hasBeenVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="mt-12 featured-card card"
            >
              <span className="section-label text-teal-600 dark:text-teal-400">
                Featured
              </span>
              <h3 className="font-display mt-2 text-2xl font-bold text-stone-900 dark:text-stone-100 sm:text-3xl">
                {featured.title}
              </h3>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-stone-600 dark:text-stone-400">
                {featured.description}
              </p>
              {featured.image && (
                <div className="mt-6 w-full overflow-hidden rounded-md">
                  <Image src={featured.image} alt={featured.title} width={1400} height={440} className="w-full h-44 object-cover" priority />
                </div>
              )}
              {featured.outcome && (
                <p className="mt-3 text-sm font-semibold text-teal-600 dark:text-teal-400">
                  {featured.outcome}
                </p>
              )}
              <div className="mt-6 tags">
                {featured.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-8 flex gap-6 text-sm font-medium">
                {featured.liveUrl && (
                  <a
                    href={featured.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-600 underline-offset-4 hover:text-teal-500 dark:text-teal-400 dark:hover:text-teal-300"
                  >
                    Live site →
                  </a>
                )}
                {featured.repoUrl && (
                  <a
                    href={featured.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-stone-600 underline-offset-4 hover:text-teal-600 dark:text-stone-400 dark:hover:text-teal-400"
                  >
                    Source
                  </a>
                )}
              </div>
            </motion.article>
          )}

          {rest.length > 0 && (
            <motion.ul
              className="mt-12 grid gap-6 sm:grid-cols-2"
              variants={list}
              initial="hidden"
              animate={hasBeenVisible ? "visible" : "hidden"}
            >
              {rest.map((project) => (
                <motion.li
                  key={project.title}
                  variants={listItem}
                  transition={{ duration: 0.35 }}
                  className="group project-card card"
                >
                  <ProjectCard project={project} />
                </motion.li>
              ))}
            </motion.ul>
          )}

          {projects.length === 0 && (
            <p className="mt-12 text-stone-500 dark:text-stone-400">
              Add projects in <code className="rounded bg-stone-200 px-1.5 py-0.5 text-sm dark:bg-stone-700">lib/content.ts</code>.
            </p>
          )}
        </div>
      </section>
    </SectionReveal>
  );
}
