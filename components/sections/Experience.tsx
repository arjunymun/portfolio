"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { experience } from "@/lib/content";
import { SectionReveal } from "@/components/ui/SectionReveal";

const list = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.05 },
  },
};

const listItem = {
  hidden: { opacity: 0, x: -12 },
  visible: { opacity: 1, x: 0 },
};

export function Experience() {
  const ref = useRef<HTMLUListElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.05 });
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  useEffect(() => {
    if (inView) setHasBeenVisible(true);
  }, [inView]);

  return (
    <SectionReveal delay={50}>
      <section
        id="experience"
        className="section-orb relative scroll-mt-16 border-b border-zinc-200 bg-zinc-100/60 dark:border-zinc-800 dark:bg-zinc-900/40"
      >
        <div className="relative z-10 mx-auto max-w-4xl px-4 py-20">
          <p className="font-mono text-xs uppercase tracking-widest text-teal-600 dark:text-teal-400">
            04 — Experience
          </p>
          <h2 className="section-heading mt-3 font-[family-name:var(--font-outfit)] text-2xl font-semibold text-zinc-900 dark:text-zinc-100 sm:text-3xl">
            Where I&apos;ve worked
          </h2>
          <motion.ul
            ref={ref}
            className="mt-10 space-y-10"
            variants={list}
            initial="hidden"
            animate={hasBeenVisible ? "visible" : "hidden"}
          >
            {experience.map((job) => (
              <motion.li
                key={`${job.company}-${job.role}`}
                variants={listItem}
                transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="relative border-l-2 border-teal-500/30 pl-6 dark:border-teal-400/30"
              >
                <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full border-2 border-teal-500 bg-white dark:border-teal-400 dark:bg-zinc-900" />
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="font-[family-name:var(--font-outfit)] font-semibold text-zinc-900 dark:text-zinc-100">
                    {job.role}
                  </h3>
                  <span className="text-sm font-medium text-teal-600 dark:text-teal-400">
                    {job.period}
                  </span>
                </div>
                <p className="mt-0.5 text-sm font-medium text-zinc-600 dark:text-zinc-400">
                  {job.company}
                </p>
                <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {job.bullets.map((bullet, i) => (
                    <li key={i} className="relative pl-4 before:absolute before:left-0 before:content-['·'] before:font-bold before:text-teal-500 dark:before:text-teal-400">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>
    </SectionReveal>
  );
}
