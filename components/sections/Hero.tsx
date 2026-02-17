"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { site } from "@/lib/site";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100dvh] flex-col justify-center overflow-hidden bg-[#0f0e0d] dark:bg-[#080807]"
    >
      <div className="hero-pattern absolute inset-0" aria-hidden />
      <div className="grain absolute inset-0" aria-hidden />
      {/* Decorative: large soft gradient circle */}
      <div
        className="absolute right-[-15%] top-1/2 h-[80vmin] w-[80vmin] -translate-y-1/2 rounded-full opacity-30 dark:opacity-20 orb-float"
        style={{ background: "radial-gradient(circle, rgba(20, 184, 166, 0.35) 0%, transparent 70%)" }}
        aria-hidden
      />
      <div
        className="absolute bottom-[-20%] left-[-10%] h-[60vmin] w-[60vmin] rounded-full opacity-20 dark:opacity-15 orb-float-slow"
        style={{ background: "radial-gradient(circle, rgba(20, 184, 166, 0.4) 0%, transparent 65%)" }}
        aria-hidden
      />

      <motion.div
        className="relative z-10 mx-auto w-full max-w-5xl px-6 py-24 sm:px-10 sm:py-32 lg:px-14"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          className="section-label text-white/60"
          variants={item}
        >
          Portfolio
        </motion.p>
        <motion.h1
          className="font-display mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
          variants={item}
          style={{ letterSpacing: "-0.03em", lineHeight: 1.05 }}
        >
          <span className="block">
            <span className="hero-title-accent">{site.ownerName}</span>
          </span>
          <span className="block mt-2 text-[0.45em] font-semibold tracking-normal text-teal-400 md:text-[0.4em]">
            {site.roleLine}
          </span>
        </motion.h1>
        <motion.p
          className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg"
          variants={item}
        >
          {site.tagline}
        </motion.p>
        <motion.div
          className="mt-12 flex flex-wrap gap-4"
          variants={item}
        >
          <a href="#projects" className="btn btn-primary">
            View work
          </a>
          <Link href="#contact" className="btn btn-ghost">
            Get in touch
          </Link>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-white/50 transition hover:text-teal-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        aria-label="Scroll to about"
      >
        <span className="section-label text-[0.65rem]">Scroll</span>
        <span className="scroll-indicator" />
      </motion.a>
    </section>
  );
}
