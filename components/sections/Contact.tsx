"use client";

import { site } from "@/lib/site";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { IconEmail, IconGitHub, IconLinkedIn } from "@/components/ui/Icons";

export function Contact() {
  return (
    <SectionReveal delay={50}>
      <section
        id="contact"
        className="scroll-mt-16 border-b border-stone-200/80 dark:border-stone-800/80"
      >
        <div className="mx-auto max-w-5xl px-6 py-24 sm:px-10 lg:px-14">
          <p className="section-label text-stone-500 dark:text-stone-500">
            05 — Contact
          </p>
          <h2 className="section-heading section-title mt-2 text-3xl font-bold text-stone-900 dark:text-stone-100 sm:text-4xl">
            Get in touch
          </h2>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-stone-600 dark:text-stone-400">
            I&apos;m open to new opportunities and conversations. Reach out via any of the links below.
          </p>
          <ul className="mt-10 flex flex-wrap gap-4" role="list">
            <li>
              <a
                href={site.links.email}
                className="inline-flex items-center gap-3 rounded-full border border-stone-200 bg-white px-6 py-3.5 text-sm font-medium text-stone-700 shadow-sm transition hover:border-teal-200 hover:text-teal-600 dark:border-stone-700 dark:bg-stone-800/50 dark:text-stone-300 dark:hover:border-teal-500/50 dark:hover:text-teal-400"
              >
                <IconEmail /> Email
              </a>
            </li>
            <li>
              <a
                href={site.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full border border-stone-200 bg-white px-6 py-3.5 text-sm font-medium text-stone-700 shadow-sm transition hover:border-teal-200 hover:text-teal-600 dark:border-stone-700 dark:bg-stone-800/50 dark:text-stone-300 dark:hover:border-teal-500/50 dark:hover:text-teal-400"
              >
                <IconGitHub /> GitHub
              </a>
            </li>
            <li>
              <a
                href={site.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full border border-stone-200 bg-white px-6 py-3.5 text-sm font-medium text-stone-700 shadow-sm transition hover:border-teal-200 hover:text-teal-600 dark:border-stone-700 dark:bg-stone-800/50 dark:text-stone-300 dark:hover:border-teal-500/50 dark:hover:text-teal-400"
              >
                <IconLinkedIn /> LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </section>
    </SectionReveal>
  );
}
