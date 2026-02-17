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
        className="section-orb relative scroll-mt-16 border-b border-zinc-200 bg-zinc-100/60 dark:border-zinc-800 dark:bg-zinc-900/40"
      >
        <div className="relative z-10 mx-auto max-w-4xl px-4 py-20">
          <p className="font-mono text-xs uppercase tracking-widest text-teal-600 dark:text-teal-400">
            06 — Blog
          </p>
          <h2 className="section-heading mt-3 font-[family-name:var(--font-outfit)] text-2xl font-semibold text-zinc-900 dark:text-zinc-100 sm:text-3xl">
            Writing
          </h2>
          <p className="mt-5 text-zinc-600 dark:text-zinc-400">
            Thoughts and write-ups on building software.
          </p>
          <Link
            href="/blog"
            className="mt-6 inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-5 py-3 text-sm font-medium text-zinc-700 shadow-sm transition-[transform,border-color,color,box-shadow] duration-200 hover:scale-[1.02] hover:border-teal-200 hover:text-teal-600 hover:shadow-md dark:border-zinc-700 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:border-teal-500/30 dark:hover:text-teal-400 active:scale-[0.98]"
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
