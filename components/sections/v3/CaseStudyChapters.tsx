"use client";

import Image from "next/image";
import Link from "next/link";
import {
  LazyMotion,
  domAnimation,
  m,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useRef } from "react";

import { fadeUp, stagger } from "@/lib/motion";
import type { ProjectSummary } from "@/lib/content";
import { homepageFlagships } from "@/lib/content";

function Chapter({ project, index }: { project: ProjectSummary; index: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const reduceMotion = Boolean(useReducedMotion());
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  const [caseStudyLink, ...externalLinks] = project.links;

  return (
    <m.article
      ref={ref}
      className="relative grid items-center gap-10 py-16 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14"
      variants={stagger}
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div>
        <m.p className="section-eyebrow" variants={fadeUp}>
          {String(index + 1).padStart(2, "0")} · {project.kicker}
        </m.p>
        <m.h3
          className="mt-4 font-display text-4xl font-semibold leading-[1.02] text-[#fff7ea] sm:text-6xl"
          variants={fadeUp}
        >
          {project.title}
        </m.h3>
        <m.p className="mt-5 max-w-xl text-base leading-8 text-white/72" variants={fadeUp}>
          {project.summary}
        </m.p>
        <m.p
          className="mt-4 max-w-xl border-l-2 border-[#45b7ad]/60 pl-4 text-sm leading-7 text-white/55"
          variants={fadeUp}
        >
          {project.takeaway}
        </m.p>

        <m.ul
          className="mt-6 flex flex-wrap gap-2 font-mono text-[0.66rem] uppercase tracking-[0.12em] text-white/60"
          variants={fadeUp}
        >
          {project.stack.map((item) => (
            <li key={item} className="rounded-md border border-white/12 px-2.5 py-1.5">
              {item}
            </li>
          ))}
        </m.ul>

        <m.div className="mt-8 flex flex-wrap gap-3" variants={fadeUp}>
          {caseStudyLink ? (
            <Link href={caseStudyLink.href} className="primary-button">
              {caseStudyLink.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
          ) : null}
          {externalLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noreferrer" : undefined}
              className="secondary-button !border-white/15 !bg-white/8 !text-white/85 hover:!text-white"
            >
              {link.label}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          ))}
        </m.div>
      </div>

      {project.image ? (
        <div className="relative overflow-hidden rounded-lg border border-white/12 bg-white/[0.04] shadow-[0_40px_120px_rgba(0,0,0,0.5)]">
          <m.div style={reduceMotion ? undefined : { y: imageY }} className="-my-14">
            <Image
              src={project.image.src}
              alt={project.image.alt}
              width={project.image.width}
              height={project.image.height}
              className="h-[26rem] w-full object-cover object-top sm:h-[32rem]"
              sizes="(max-width: 1024px) 100vw, 55vw"
              loading="lazy"
            />
          </m.div>
        </div>
      ) : null}
    </m.article>
  );
}

export function CaseStudyChapters() {
  return (
    <section
      id="work"
      className="relative isolate overflow-hidden border-b border-white/10 bg-[#0a0809] text-white"
    >
      <div className="cinema-noise absolute inset-0" aria-hidden />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-12 sm:px-8 sm:py-16 lg:px-10">
        <p className="section-eyebrow">03 · Flagship work</p>
        <h2 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-[1.04] text-[#fff7ea] sm:text-6xl">
          Two products, one standard.
        </h2>
        <LazyMotion features={domAnimation} strict>
          <div className="mt-4 divide-y divide-white/8">
            {homepageFlagships.map((project, index) => (
              <Chapter key={project.slug} project={project} index={index} />
            ))}
          </div>
        </LazyMotion>
      </div>
    </section>
  );
}

