"use client";

import {
  LazyMotion,
  domAnimation,
  m,
  useReducedMotion,
  useScroll,
  useSpring,
} from "framer-motion";

const CHAPTERS = [
  { index: "01", label: "Intro", href: "/#hero" },
  { index: "02", label: "Universe", href: "/#universe" },
  { index: "03", label: "Work", href: "/#work" },
  { index: "04", label: "Proof", href: "/#proof" },
  { index: "05", label: "Contact", href: "/#contact" },
];

// Fixed chapter spine with page scroll progress. Desktop only; decorative
// line is aria-hidden, the dots are real anchor links.
export function ChapterRail() {
  const reduceMotion = Boolean(useReducedMotion());
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.4 });

  return (
    <nav
      className="fixed left-5 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-4 xl:flex"
      aria-label="Page chapters"
    >
      <div className="relative h-40 w-px overflow-hidden bg-white/12" aria-hidden>
        <LazyMotion features={domAnimation} strict>
          <m.div
            className="absolute inset-x-0 top-0 h-full origin-top bg-gradient-to-b from-[#45b7ad] to-[#e8a55e]"
            style={{ scaleY: reduceMotion ? scrollYProgress : scaleY }}
          />
        </LazyMotion>
      </div>
      <ul className="flex flex-col items-center gap-3">
        {CHAPTERS.map((chapter) => (
          <li key={chapter.index}>
            <a
              href={chapter.href}
              className="group flex items-center gap-2"
              aria-label={`Chapter ${chapter.index}: ${chapter.label}`}
            >
              <span className="chapter-dot block h-2 w-2 rounded-full bg-white/30 group-hover:bg-[#45b7ad]" />
              <span className="pointer-events-none absolute left-6 hidden whitespace-nowrap rounded-md border border-white/10 bg-[#0d0b0a]/90 px-2 py-1 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-white/75 group-hover:block group-focus-visible:block">
                {chapter.index} {chapter.label}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
