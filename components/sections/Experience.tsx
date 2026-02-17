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
        className="section-orb relative scroll-mt-16 border-b border-stone-200/80 bg-stone-100/80 dark:border-stone-800/80 dark:bg-stone-900/30"
      >
        <div className="relative z-10 mx-auto max-w-5xl px-6 py-24 sm:px-10 lg:px-14">
          <p className="section-label text-stone-500 dark:text-stone-500">
            04 — Experience
          </p>
          <h2 className="section-heading section-title mt-2 text-3xl font-bold text-stone-900 dark:text-stone-100 sm:text-4xl">
            Where I&apos;ve worked
          </h2>
          <motion.ul
            ref={ref}
            className="mt-12 space-y-12"
            variants={list}
            initial="hidden"
            animate={hasBeenVisible ? "visible" : "hidden"}
          >
            {experience.map((job) => (
              <motion.li
                key={`${job.company}-${job.role}`}
                variants={listItem}
                transition={{ duration: 0.35 }}
                className="relative border-l-2 border-teal-500/40 pl-8 dark:border-teal-400/40"
              >
                <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full border-2 border-teal-500 bg-[var(--background)] dark:border-teal-400 dark:bg-[var(--background)]" />
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="font-display text-lg font-bold text-stone-900 dark:text-stone-100">
                    {job.role}
                  </h3>
                  <span className="text-sm font-medium text-teal-600 dark:text-teal-400">
                    {job.period}
                  </span>
                </div>
                <p className="mt-0.5 text-sm font-medium text-stone-600 dark:text-stone-400">
                  {job.company}
                </p>
                <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
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
