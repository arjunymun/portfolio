"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { site } from "@/lib/site";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100dvh] flex-col justify-center overflow-hidden bg-gradient-to-br from-zinc-900 via-zinc-800 to-teal-900/80 dark:from-zinc-950 dark:via-zinc-900 dark:to-teal-950/70"
    >
      <div className="hero-pattern absolute inset-0" aria-hidden />
      <div
        className="absolute inset-0 opacity-60 dark:opacity-40"
        style={{
          background: "radial-gradient(ellipse 100% 80% at 50% -20%, rgba(20, 184, 166, 0.25), transparent 50%)",
        }}
        aria-hidden
      />
      <div className="grain absolute inset-0" aria-hidden />
      <motion.div
        className="relative mx-auto max-w-4xl px-4 py-20 sm:py-28"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          className="font-mono text-sm uppercase tracking-[0.2em] text-teal-400/90"
          variants={item}
        >
          Portfolio
        </motion.p>
        <motion.h1
          className="mt-5 font-[family-name:var(--font-outfit)] text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          variants={item}
        >
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-teal-300 via-emerald-200 to-cyan-300 bg-clip-text text-transparent">
            {site.ownerName}
          </span>
        </motion.h1>
        <motion.p
          className="mt-4 text-xl font-medium text-teal-400/95 sm:text-2xl"
          variants={item}
        >
          {site.roleLine}
        </motion.p>
        <motion.p
          className="mt-2 max-w-xl text-lg leading-relaxed text-zinc-300 sm:text-xl"
          variants={item}
        >
          {site.tagline}
        </motion.p>
        <motion.div
          className="mt-12 flex flex-wrap gap-4"
          variants={item}
        >
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-xl bg-teal-500 px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-teal-500/25 transition-[transform,box-shadow] duration-200 hover:scale-[1.02] hover:bg-teal-400 hover:shadow-xl hover:shadow-teal-500/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400 active:scale-[0.98]"
          >
            View work
          </a>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center rounded-xl border border-zinc-500/60 bg-zinc-800/50 px-7 py-4 text-sm font-semibold text-white backdrop-blur transition-[transform,border-color,background-color] duration-200 hover:scale-[1.02] hover:border-teal-400/50 hover:bg-zinc-800/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400 active:scale-[0.98]"
          >
            Get in touch
          </Link>
        </motion.div>
      </motion.div>
      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-zinc-400 transition hover:text-teal-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        aria-label="Scroll to about"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <span className="scroll-indicator" />
      </motion.a>
    </section>
  );
}
