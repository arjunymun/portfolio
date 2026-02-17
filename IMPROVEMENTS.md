# Portfolio Frontend Improvements

## 1. Enhanced Hero Section (components/sections/Hero.tsx)

Replace your current Hero.tsx with this improved version:

```tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { site } from "@/lib/site";
import { ArrowDown } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  },
};

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100dvh] flex-col justify-center overflow-hidden bg-gradient-to-b from-[#0a0908] via-[#0f0e0d] to-[#0f0e0d] dark:from-[#050504] dark:via-[#080807] dark:to-[#080807]"
    >
      {/* Animated background pattern */}
      <div className="hero-pattern absolute inset-0 animate-pulse-slow" aria-hidden />
      <div className="grain absolute inset-0 opacity-40" aria-hidden />
      
      {/* Enhanced gradient orbs with animation */}
      <motion.div
        className="absolute right-[-15%] top-1/2 h-[80vmin] w-[80vmin] -translate-y-1/2 rounded-full opacity-40 dark:opacity-25 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(20, 184, 166, 0.4) 0%, transparent 70%)" }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.4, 0.5, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        aria-hidden
      />
      <motion.div
        className="absolute bottom-[-20%] left-[-10%] h-[60vmin] w-[60vmin] rounded-full opacity-25 dark:opacity-15 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(20, 184, 166, 0.45) 0%, transparent 65%)" }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.25, 0.35, 0.25],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        aria-hidden
      />

      <motion.div
        className="relative z-10 mx-auto w-full max-w-6xl px-6 py-24 sm:px-10 sm:py-32 lg:px-16"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          className="section-label text-teal-400/70 font-medium tracking-wider"
          variants={item}
        >
          WELCOME TO MY PORTFOLIO
        </motion.p>

        <motion.h1
          className="font-display mt-6 text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl"
          variants={item}
          style={{ letterSpacing: "-0.04em", lineHeight: 1.05 }}
        >
          <span className="block">
            <span className="hero-title-accent bg-gradient-to-r from-white via-white to-teal-400 bg-clip-text text-transparent">
              {site.ownerName}
            </span>
          </span>
          <span className="block mt-3 text-[0.4em] font-semibold tracking-tight text-teal-400 md:text-[0.35em]">
            {site.roleLine}
          </span>
        </motion.h1>

        <motion.p
          className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-300 sm:text-xl md:text-2xl"
          variants={item}
        >
          {site.tagline}
        </motion.p>

        <motion.div
          className="mt-14 flex flex-wrap gap-5"
          variants={item}
        >
          <a 
            href="#projects" 
            className="group btn btn-primary relative overflow-hidden px-8 py-4 text-base font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-teal-500/20"
          >
            <span className="relative z-10">View my work</span>
            <span className="absolute inset-0 bg-gradient-to-r from-teal-400 to-teal-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </a>
          <Link 
            href="#contact" 
            className="btn btn-ghost px-8 py-4 text-base font-semibold transition-all duration-300 hover:scale-105 hover:border-teal-400/50 hover:text-teal-400"
          >
            Get in touch
          </Link>
        </motion.div>
      </motion.div>

      {/* Enhanced scroll indicator */}
      <motion.a
        href="#about"
        className="absolute bottom-12 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3 text-white/40 transition-all duration-300 hover:text-teal-400"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        aria-label="Scroll to about section"
      >
        <span className="section-label text-xs font-medium tracking-widest">SCROLL</span>
        <motion.div
          animate={{ y:  }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-5 w-5" />
        </motion.div>
      </motion.a>
    </section>
  );
}
