"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useRef } from "react";

import { homepageFlagships, type ProjectSummary } from "@/lib/content";

function ProjectChapter({ project, index }: { project: ProjectSummary; index: number }) {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 0.5, 1], [52, 0, -44]);
  const imageRotate = useTransform(scrollYProgress, [0, 0.5, 1], [-4, 0, 4]);

  const caseStudyLink = project.links.find((link) => !link.external);
  const externalLink = project.links.find((link) => link.external);

  return (
    <section
      ref={ref}
      className="relative min-h-[110svh] border-b border-[var(--border)] py-16 sm:py-20"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[0.78fr_1.22fr] lg:px-10">
        <div className="lg:sticky lg:top-28 lg:h-fit">
          <p className="font-mono text-xs uppercase text-[var(--warm)]">
            {String(index + 1).padStart(2, "0")} / flagship
          </p>
          <h2 className="mt-4 font-display text-5xl font-semibold leading-none text-[var(--foreground)] sm:text-7xl">
            {project.title}
          </h2>
          <p className="mt-4 font-mono text-xs uppercase text-[var(--foreground-muted)]">
            {project.kicker}
          </p>
          <p className="mt-5 max-w-xl text-base leading-8 text-[var(--foreground-soft)]">
            {project.summary}
          </p>

          <div className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            <div className="rounded-lg border border-[var(--border)] bg-[var(--panel)] p-4">
              <p className="font-mono text-[0.68rem] uppercase text-[var(--warm)]">Role</p>
              <p className="mt-2 text-sm leading-6 text-[var(--foreground)]">{project.role}</p>
            </div>
            <div className="rounded-lg border border-[var(--border)] bg-[var(--panel)] p-4">
              <p className="font-mono text-[0.68rem] uppercase text-[var(--warm)]">Proof</p>
              <p className="mt-2 text-sm leading-6 text-[var(--foreground)]">
                {project.takeaway}
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span key={item} className="pill !rounded-md">
                {item}
              </span>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            {caseStudyLink ? (
              <Link href={caseStudyLink.href} className="primary-button">
                {caseStudyLink.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
            ) : null}
            {externalLink ? (
              <a
                href={externalLink.href}
                target="_blank"
                rel="noreferrer"
                className="secondary-button"
              >
                {externalLink.label}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            ) : null}
          </div>
        </div>

        <motion.div
          className="relative min-h-[38rem] overflow-hidden rounded-lg border border-[var(--border-strong)] bg-[var(--panel-strong)] p-3 shadow-[var(--shadow)] sm:p-4 lg:min-h-[46rem]"
          style={reduceMotion ? undefined : { y: imageY, rotate: imageRotate }}
        >
          {project.image ? (
            <Image
              src={project.image.src}
              alt={project.image.alt}
              width={project.image.width}
              height={project.image.height}
              className="h-[36rem] w-full rounded-md object-cover object-top sm:h-[42rem] lg:h-[52rem]"
              sizes="(max-width: 1024px) 100vw, 58vw"
            />
          ) : null}
          <div className="absolute bottom-5 left-5 right-5 grid gap-2 sm:grid-cols-3">
            {["Surface", "System", "Story"].map((label, proofIndex) => (
              <div
                key={label}
                className="rounded-md border border-white/12 bg-[#0d0b0a]/76 px-3 py-3 text-white backdrop-blur"
              >
                <p className="font-mono text-[0.62rem] uppercase text-[#e8a55e]">
                  {String(proofIndex + 1).padStart(2, "0")}
                </p>
                <p className="mt-1 text-sm font-semibold">{label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function CaseStudyTunnel() {
  return (
    <section id="work" className="bg-[var(--background)]">
      <div className="mx-auto max-w-7xl px-5 pb-4 pt-20 sm:px-8 sm:pt-24 lg:px-10">
        <p className="font-mono text-xs uppercase text-[var(--warm)]">Case study tunnel</p>
        <h2 className="mt-4 max-w-4xl font-display text-4xl font-semibold leading-none text-[var(--foreground)] sm:text-6xl">
          Two flagship systems. No filler shelf.
        </h2>
      </div>
      {homepageFlagships.map((project, index) => (
        <ProjectChapter key={project.slug} project={project} index={index} />
      ))}
    </section>
  );
}
