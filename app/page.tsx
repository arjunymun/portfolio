import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <section
        id="blog"
        className="scroll-mt-16 border-b border-zinc-200 bg-zinc-50/50 dark:border-zinc-800 dark:bg-zinc-900/30"
      >
        <div className="mx-auto max-w-4xl px-4 py-16">
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
            Blog
          </h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400">
            Thoughts and write-ups.
          </p>
          <Link
            href="/blog"
            className="mt-4 inline-block font-medium text-zinc-700 underline-offset-4 hover:underline dark:text-zinc-300"
          >
            View all posts →
          </Link>
        </div>
      </section>
      <Contact />
    </main>
  );
}
