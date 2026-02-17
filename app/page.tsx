import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";
import { SectionReveal } from "@/components/ui/SectionReveal";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <SectionReveal delay={50}>
      <section
        id="blog"
        className="section-orb relative scroll-mt-16 border-b border-stone-200/80 bg-stone-100/80 dark:border-stone-800/80 dark:bg-stone-900/30"
      >
        <div className="relative z-10 mx-auto max-w-5xl px-6 py-24 sm:px-10 lg:px-14">
          <p className="section-label text-stone-500 dark:text-stone-500">
            06 — Blog
          </p>
          <h2 className="section-heading section-title mt-2 text-3xl font-bold text-stone-900 dark:text-stone-100 sm:text-4xl">
            Writing
          </h2>
          <p className="mt-8 text-lg text-stone-600 dark:text-stone-400">
            Thoughts and write-ups on building software.
          </p>
          <Link
            href="/blog"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-6 py-3.5 text-sm font-medium text-stone-700 shadow-sm transition hover:border-teal-200 hover:text-teal-600 dark:border-stone-700 dark:bg-stone-800/50 dark:text-stone-300 dark:hover:border-teal-500/50 dark:hover:text-teal-400"
          >
            View all posts →
          </Link>
        </div>
      </section>
      </SectionReveal>
      <Contact />
    </main>
  );
}
