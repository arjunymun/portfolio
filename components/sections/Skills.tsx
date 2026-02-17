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
        className="section-orb relative scroll-mt-16 border-b border-zinc-200 bg-zinc-100/60 dark:border-zinc-800 dark:bg-zinc-900/40"
      >
        <div className="relative z-10 mx-auto max-w-4xl px-4 py-20">
          <p className="font-mono text-xs uppercase tracking-widest text-teal-600 dark:text-teal-400">
            02 — Skills
          </p>
          <h2 className="section-heading mt-3 font-[family-name:var(--font-outfit)] text-2xl font-semibold text-zinc-900 dark:text-zinc-100 sm:text-3xl">
            Tech & tools
          </h2>
          <motion.div
            ref={ref}
            className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
            variants={container}
            initial="hidden"
            animate={hasBeenVisible ? "visible" : "hidden"}
          >
            {skills.map((group) => (
              <motion.div key={group.title} variants={item}>
                <h3 className="text-sm font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  {group.title}
                </h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-lg border border-zinc-200 bg-white px-3 py-1.5 text-sm font-medium text-zinc-800 shadow-sm transition-[transform,box-shadow,border-color] duration-200 hover:scale-[1.02] hover:border-teal-200 hover:shadow hover:shadow-teal-500/10 dark:border-zinc-700 dark:bg-zinc-800/50 dark:text-zinc-200 dark:hover:border-teal-500/30"
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
