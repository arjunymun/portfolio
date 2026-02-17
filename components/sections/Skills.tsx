"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { skills } from "@/lib/content";
import { SectionReveal } from "@/components/ui/SectionReveal";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
};

export function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.05 });
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  useEffect(() => {
    if (inView) setHasBeenVisible(true);
  }, [inView]);

  return (
    <SectionReveal delay={50}>
      <section
        id="skills"
        className="section-orb relative scroll-mt-16 border-b border-stone-200/80 bg-stone-100/80 dark:border-stone-800/80 dark:bg-stone-900/30"
      >
        <div className="relative z-10 mx-auto max-w-5xl px-6 py-24 sm:px-10 lg:px-14">
          <p className="section-label text-stone-500 dark:text-stone-500">
            02 — Skills
          </p>
          <h2 className="section-heading section-title mt-2 text-3xl font-bold text-stone-900 dark:text-stone-100 sm:text-4xl">
            Tech & tools
          </h2>
          <motion.div
            ref={ref}
            className="mt-12 grid gap-12 sm:grid-cols-2 lg:grid-cols-3"
            variants={container}
            initial="hidden"
            animate={hasBeenVisible ? "visible" : "hidden"}
          >
            {skills.map((group) => (
              <motion.div key={group.title} variants={item}>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-stone-500 dark:text-stone-400">
                  {group.title}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-medium text-stone-800 shadow-sm dark:border-stone-700 dark:bg-stone-800/50 dark:text-stone-200"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </SectionReveal>
  );
}
