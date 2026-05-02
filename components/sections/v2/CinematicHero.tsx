"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { ArrowDown, ArrowRight, Download, Github } from "lucide-react";

import { cinemaHero, homepageFlagships } from "@/lib/content";
import { site } from "@/lib/site";

const [sideout, draftLens] = homepageFlagships;

export function CinematicHero() {
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 90, damping: 22, mass: 0.45 });
  const y = useSpring(rawY, { stiffness: 90, damping: 22, mass: 0.45 });
  const rotateY = useTransform(x, [-0.5, 0.5], [-11, 11]);
  const rotateX = useTransform(y, [-0.5, 0.5], [8, -8]);
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="hero"
      className="cinema-stage relative isolate flex min-h-[calc(100svh-72px)] overflow-hidden border-b border-white/10 bg-[#0d0b0a] text-white"
      onPointerMove={(event) => {
        const bounds = event.currentTarget.getBoundingClientRect();
        rawX.set((event.clientX - bounds.left) / bounds.width - 0.5);
        rawY.set((event.clientY - bounds.top) / bounds.height - 0.5);
      }}
      onPointerLeave={() => {
        rawX.set(0);
        rawY.set(0);
      }}
    >
      <div className="cinema-grid absolute inset-0" aria-hidden />
      <div className="cinema-noise absolute inset-0" aria-hidden />
      <div className="spectral-code opacity-70" aria-hidden />

      <motion.div
        className="pointer-events-none absolute inset-y-10 right-[-9rem] hidden w-[56rem] max-w-[62vw] items-center justify-center lg:flex"
        style={reduceMotion ? undefined : { rotateX, rotateY, transformPerspective: 1300 }}
        aria-hidden
      >
        <div className="relative h-[42rem] w-full">
          <motion.figure
            className="absolute right-10 top-4 w-[30rem] overflow-hidden rounded-lg border border-white/12 bg-white/8 p-2 shadow-[0_40px_140px_rgba(0,0,0,0.56)] backdrop-blur"
            animate={reduceMotion ? undefined : { y: [0, -18, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          >
            {sideout.image ? (
              <Image
                src={sideout.image.src}
                alt=""
                width={sideout.image.width}
                height={sideout.image.height}
                className="h-[34rem] w-full rounded-md object-cover object-top opacity-95"
                loading="eager"
              />
            ) : null}
          </motion.figure>

          <motion.figure
            className="absolute left-0 top-24 w-[25rem] overflow-hidden rounded-lg border border-[#e8a55e]/30 bg-[#251713]/85 p-2 shadow-[0_36px_120px_rgba(232,165,94,0.18)] backdrop-blur"
            animate={reduceMotion ? undefined : { y: [0, 16, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
          >
            {draftLens.image ? (
              <Image
                src={draftLens.image.src}
                alt=""
                width={draftLens.image.width}
                height={draftLens.image.height}
                className="h-[27rem] w-full rounded-md object-cover object-top opacity-95"
              />
            ) : null}
          </motion.figure>

          <motion.div
            className="absolute bottom-8 left-24 grid w-[24rem] grid-cols-2 gap-2 rounded-lg border border-white/12 bg-[#101614]/88 p-3 font-mono text-[0.68rem] uppercase text-white/70 shadow-[0_26px_90px_rgba(69,183,173,0.14)] backdrop-blur"
            animate={reduceMotion ? undefined : { x: [0, 14, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          >
            {cinemaHero.chips.map((chip) => (
              <span key={chip} className="rounded-md border border-white/10 px-3 py-2">
                {chip}
              </span>
            ))}
          </motion.div>
        </div>
      </motion.div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col justify-between px-5 py-12 sm:px-8 sm:py-16 lg:px-10">
        <div className="max-w-5xl pt-12 sm:pt-16 lg:pt-20">
          <motion.p
            className="font-mono text-xs uppercase text-[#e8a55e]"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {cinemaHero.eyebrow}
          </motion.p>
          <motion.h1
            className="mt-5 max-w-5xl font-display text-5xl font-semibold leading-[0.96] text-[#fff7ea] sm:text-7xl lg:text-8xl"
            initial={reduceMotion ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            {cinemaHero.title}
          </motion.h1>
          <motion.p
            className="mt-6 max-w-2xl text-lg leading-8 text-white/76 sm:text-xl"
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
          >
            {cinemaHero.intro}
          </motion.p>
          <motion.p
            className="mt-4 max-w-2xl text-sm leading-7 text-white/52 sm:text-base"
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.26 }}
          >
            {cinemaHero.signal}
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.34 }}
          >
            <Link href="/#work" className="primary-button">
              Enter the work
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={site.resume.href}
              target={site.resume.external ? "_blank" : undefined}
              rel={site.resume.external ? "noreferrer" : undefined}
              download={site.resume.external ? undefined : site.resume.downloadName}
              className="secondary-button !border-white/14 !bg-white/8 !text-white hover:!text-[#e8a55e]"
            >
              <Download className="h-4 w-4" />
              Resume
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              className="secondary-button !border-white/14 !bg-white/8 !text-white/82 hover:!text-white"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </motion.div>
        </div>

        <div className="mt-12 grid gap-3 sm:grid-cols-3 lg:max-w-3xl">
          {[
            ["01", "Sideout", "Venue OS with customer and operator surfaces"],
            ["02", "DraftLens", "AI feedback flow with citation confidence"],
            ["03", "Signal", "Less copy, more proof, sharper conversion"],
          ].map(([number, label, detail]) => (
            <div
              key={label}
              className="rounded-lg border border-white/10 bg-white/6 p-4 backdrop-blur"
            >
              <p className="font-mono text-[0.68rem] uppercase text-[#e8a55e]/80">{number}</p>
              <h2 className="mt-3 font-display text-xl font-semibold text-white">{label}</h2>
              <p className="mt-2 text-sm leading-6 text-white/58">{detail}</p>
            </div>
          ))}
        </div>

        <a
          href="#universe"
          className="absolute bottom-6 right-5 hidden items-center gap-2 font-mono text-[0.68rem] uppercase text-white/50 transition hover:text-[#45b7ad] sm:flex"
        >
          Keep scrolling
          <ArrowDown className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
