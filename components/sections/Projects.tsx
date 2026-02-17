"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { projects } from "@/lib/content";
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

export function Projects() {
  const ref = useRef<HTMLUListElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.05 });

  return (
    <SectionReveal delay={100}>
      <section
        id="projects"
        className="scroll-mt-16 border-b border-zinc-200 dark:border-zinc-800"
      >
        <div className="mx-auto max-w-4xl px-4 py-20">
          <p className="font-mono text-xs uppercase tracking-widest text-teal-600 dark:text-teal-400">
            03 — Work
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-outfit)] text-2xl font-semibold text-zinc-900 dark:text-zinc-100 sm:text-3xl">
            Projects
          </h2>
          <motion.ul
            ref={ref}
            className="mt-10 grid gap-6 sm:grid-cols-2"
            variants={list}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {projects.map((project) => (
              <motion.li
                key={project.title}
                variants={listItem}
                transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                className={`group flex flex-col rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:border-teal-200 hover:shadow-md hover:shadow-teal-500/5 dark:border-zinc-700 dark:bg-zinc-900/50 dark:hover:border-teal-500/30 dark:hover:shadow-teal-500/5 ${project.featured ? "sm:col-span-2 sm:p-8" : ""}`}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                {project.featured && (
                    <span className="mb-3 inline-block font-mono text-xs font-medium uppercase tracking-widest text-teal-600 dark:text-teal-400">
                      Featured
                    </span>
                  )}
                  <h3 className="font-[family-name:var(--font-outfit)] text-lg font-semibold text-zinc-900 dark:text-zinc-100 sm:text-xl">
                    {project.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {project.description}
                  </p>
                  {project.outcome && (
                    <p className="mt-2 text-sm font-medium text-teal-600 dark:text-teal-400">
                      {project.outcome}
                    </p>
                  )}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-zinc-100 px-2 py-0.5 font-mono text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 flex gap-4 text-sm font-medium">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-teal-600 underline-offset-4 transition hover:text-teal-500 dark:text-teal-400 dark:hover:text-teal-300"
                      >
                        Live site →
                      </a>
                    )}
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-600 underline-offset-4 transition hover:text-teal-600 dark:text-zinc-400 dark:hover:text-teal-400"
                      >
                        Source
                      </a>
                    )}
                  </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>
    </SectionReveal>
  );
}
