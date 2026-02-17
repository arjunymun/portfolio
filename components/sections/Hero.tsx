"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { site } from "@/lib/site";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section
      id="hero"
      className="relative scroll-mt-16 overflow-hidden bg-gradient-to-br from-zinc-900 via-zinc-800 to-teal-900/90 dark:from-zinc-950 dark:via-zinc-900 dark:to-teal-950/80"
    >
      <div className="hero-pattern absolute inset-0" aria-hidden />
      <div className="grain" aria-hidden />
      <motion.div
        className="relative mx-auto max-w-4xl px-4 py-24 sm:py-32"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          className="font-mono text-sm uppercase tracking-widest text-teal-400/90"
          variants={item}
        >
          Portfolio
        </motion.p>
        <motion.h1
          className="mt-4 font-[family-name:var(--font-outfit)] text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
          variants={item}
        >
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-teal-300 via-emerald-200 to-teal-400 bg-clip-text text-transparent">
            {site.ownerName}
          </span>
        </motion.h1>
        <motion.p
          className="mt-3 text-lg font-medium text-teal-400/95 sm:text-xl"
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
          className="mt-10 flex flex-wrap gap-4"
          variants={item}
        >
          <motion.a
            href="#projects"
            className="inline-flex items-center justify-center rounded-lg bg-teal-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-500/25 transition hover:bg-teal-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            View work
          </motion.a>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg border border-zinc-500/60 bg-zinc-800/50 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:border-teal-400/50 hover:bg-zinc-800/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400"
            >
              Get in touch
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
