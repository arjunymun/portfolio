"use client";

import { motion } from "framer-motion";
import { site } from "@/lib/site";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { IconEmail, IconGitHub, IconLinkedIn } from "@/components/ui/Icons";

const linkClass =
  "inline-flex items-center gap-2.5 rounded-lg border border-zinc-200 bg-white px-4 py-2.5 text-sm font-medium text-zinc-700 shadow-sm transition hover:border-teal-200 hover:text-teal-600 dark:border-zinc-700 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:border-teal-500/30 dark:hover:text-teal-400";

export function Contact() {
  return (
    <SectionReveal delay={50}>
      <section
        id="contact"
        className="scroll-mt-16 border-b border-zinc-200 dark:border-zinc-800"
      >
        <div className="mx-auto max-w-4xl px-4 py-20">
          <p className="font-mono text-xs uppercase tracking-widest text-teal-600 dark:text-teal-400">
            05 — Contact
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-outfit)] text-2xl font-semibold text-zinc-900 dark:text-zinc-100 sm:text-3xl">
            Get in touch
          </h2>
          <p className="mt-5 max-w-xl text-zinc-600 dark:text-zinc-400">
            I&apos;m open to new opportunities and conversations. Reach out via any of the links below.
          </p>
          <ul className="mt-8 flex flex-wrap gap-4" role="list">
            <li>
              <motion.a
                href={site.links.email}
                className={linkClass}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <IconEmail /> Email
              </motion.a>
            </li>
            <li>
              <motion.a
                href={site.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <IconGitHub /> GitHub
              </motion.a>
            </li>
            <li>
              <motion.a
                href={site.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <IconLinkedIn /> LinkedIn
              </motion.a>
            </li>
          </ul>
        </div>
      </section>
    </SectionReveal>
  );
}
