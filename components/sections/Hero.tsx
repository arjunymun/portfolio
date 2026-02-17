import Link from "next/link";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="hero"
      className="scroll-mt-16 border-b border-zinc-200 bg-zinc-50/50 dark:border-zinc-800 dark:bg-zinc-900/30"
    >
      <div className="mx-auto max-w-4xl px-4 py-20 sm:py-28">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl md:text-5xl">
          Hi, I&apos;m {site.ownerName}
        </h1>
        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400 sm:text-xl">
          {site.tagline}
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            View work
          </a>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-zinc-300 px-5 py-2.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100 dark:border-zinc-600 dark:text-zinc-300 dark:hover:bg-zinc-800"
          >
            Contact
          </Link>
        </div>
      </div>
    </section>
  );
}
