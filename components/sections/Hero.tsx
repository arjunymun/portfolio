import Link from "next/link";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative scroll-mt-16 overflow-hidden bg-gradient-to-br from-zinc-900 via-zinc-800 to-teal-900/90 dark:from-zinc-950 dark:via-zinc-900 dark:to-teal-950/80"
    >
      <div className="hero-pattern absolute inset-0" aria-hidden />
      <div className="relative mx-auto max-w-4xl px-4 py-24 sm:py-32">
        <p className="font-mono text-sm uppercase tracking-widest text-teal-400/90">
          Portfolio
        </p>
        <h1 className="mt-4 font-[family-name:var(--font-outfit)] text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
          Hi, I&apos;m {site.ownerName}
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-zinc-300 sm:text-xl">
          {site.tagline}
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-lg bg-teal-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-500/25 transition hover:bg-teal-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400"
          >
            View work
          </a>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center rounded-lg border border-zinc-500/60 bg-zinc-800/50 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:border-teal-400/50 hover:bg-zinc-800/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  );
}
