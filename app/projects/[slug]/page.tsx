import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Mail } from "lucide-react";

import { getCaseStudyBySlug } from "@/lib/content";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return [{ slug: "draftlens" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getCaseStudyBySlug(slug);

  if (!project) {
    return {};
  }

  return {
    title: `${project.title} Case Study`,
    description: project.summary,
    openGraph: {
      title: `${project.title} Case Study`,
      description: project.summary,
      images: [`/projects/${slug}/opengraph-image`],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} Case Study`,
      description: project.summary,
      images: [`/projects/${slug}/opengraph-image`],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getCaseStudyBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="py-14 sm:py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 sm:px-8 lg:px-10">
        <Link
          href="/#work"
          className="inline-flex w-fit items-center gap-2 text-sm font-medium text-[var(--accent-strong)] transition hover:underline hover:underline-offset-4"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to selected work
        </Link>

        <section className="surface-panel-dark rounded-[2.25rem] p-6 sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="section-eyebrow !text-[rgba(232,165,94,0.85)]">
                {project.kicker}
              </p>
              <h1 className="section-title mt-4 text-4xl font-semibold text-[var(--panel-dark-foreground)] sm:text-6xl">
                {project.title}
              </h1>
              <p className="mt-3 text-sm uppercase tracking-[0.18em] text-white/48">
                {project.role}
              </p>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/72">
                {project.summary}
              </p>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/60">
                The hosted demo is being refreshed, so the repo, case study, and screenshots
                are the clearest public references right now.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                {project.links
                  .filter((link) => link.external)
                  .map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="secondary-button !border-white/10 !bg-white/4 !text-white/80 hover:!text-white"
                    >
                      {link.label}
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  ))}
                <a
                  href={`mailto:${site.email}`}
                  className="secondary-button !border-white/10 !bg-white/4 !text-white/80 hover:!text-white"
                >
                  <Mail className="h-4 w-4" />
                  Contact me
                </a>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {project.outcomes.map((item) => (
                <article
                  key={item.label}
                  className="rounded-[1.4rem] border border-white/8 bg-white/4 p-5"
                >
                  <p className="section-eyebrow !text-[rgba(232,165,94,0.85)]">
                    {item.label}
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold text-[var(--panel-dark-foreground)]">
                    {item.value}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-white/65">{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--panel-strong)] shadow-[var(--shadow)]">
          <Image
            src={project.screenshots[0].src}
            alt={project.screenshots[0].alt}
            width={project.screenshots[0].width}
            height={project.screenshots[0].height}
            className="h-auto w-full object-cover"
            priority
          />
        </section>

        <section className="grid gap-4 lg:grid-cols-3">
          <article className="surface-panel rounded-[1.75rem] p-6 lg:col-span-1">
            <p className="section-eyebrow">Problem</p>
            <p className="section-copy mt-4 text-sm leading-7">{project.problem}</p>
          </article>
          <article className="surface-panel rounded-[1.75rem] p-6 lg:col-span-1">
            <p className="section-eyebrow">Audience</p>
            <p className="section-copy mt-4 text-sm leading-7">{project.audience}</p>
          </article>
          <article className="surface-panel rounded-[1.75rem] p-6 lg:col-span-1">
            <p className="section-eyebrow">Challenge</p>
            <p className="section-copy mt-4 text-sm leading-7">{project.challenge}</p>
          </article>
        </section>

        <section className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <p className="section-eyebrow">Product workflow</p>
            <h2 className="section-title mt-4 text-3xl font-semibold text-[var(--foreground)] sm:text-4xl">
              The product needed to feel usable, credible, and easy to explain.
            </h2>
            <p className="section-copy mt-4 text-base leading-8">
              {project.solutionSummary}
            </p>
          </div>

          <div className="grid gap-4">
            {project.workflow.map((step, index) => (
              <article
                key={step}
                className="surface-panel rounded-[1.4rem] px-5 py-4"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--accent-soft)] font-mono text-sm font-semibold text-[var(--accent-strong)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="section-copy text-sm leading-7">{step}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section>
          <p className="section-eyebrow">Architecture</p>
          <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {project.architecture.map((item) => (
              <article
                key={item.title}
                className="surface-panel rounded-[1.5rem] p-5"
              >
                <h2 className="section-title text-2xl font-semibold text-[var(--foreground)]">
                  {item.title}
                </h2>
                <p className="section-copy mt-3 text-sm leading-7">{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="section-eyebrow">Screenshots</p>
              <h2 className="section-title mt-4 text-3xl font-semibold text-[var(--foreground)] sm:text-4xl">
                Product surfaces that matter in the story.
              </h2>
            </div>
            <p className="section-copy max-w-xl text-sm leading-7">
              I wanted the case study to show the product where the work is easiest to judge:
              positioning, the workspace, and the actual report UI.
            </p>
          </div>

          <div className="mt-6 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
            {project.screenshots.slice(1).map((shot) => (
              <figure
                key={shot.src}
                className="surface-panel overflow-hidden rounded-[1.75rem] p-3"
              >
                <div className="overflow-hidden rounded-[1.2rem] border border-[var(--border)]">
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    width={shot.width}
                    height={shot.height}
                    className="h-auto w-full object-cover"
                  />
                </div>
                <figcaption className="section-copy px-2 pb-1 pt-4 text-sm leading-7">
                  {shot.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="grid gap-4 xl:grid-cols-2">
          <article className="surface-panel rounded-[1.75rem] p-6">
            <p className="section-eyebrow">What I learned</p>
            <ul className="mt-5 space-y-3">
              {project.lessons.map((lesson) => (
                <li
                  key={lesson}
                  className="rounded-[1.15rem] border border-[var(--border)] bg-[var(--background-strong)] px-4 py-3 text-sm leading-7 text-[var(--foreground-soft)]"
                >
                  {lesson}
                </li>
              ))}
            </ul>
          </article>

          <article className="surface-panel rounded-[1.75rem] p-6">
            <p className="section-eyebrow">Build notes</p>
            <ul className="mt-5 space-y-3">
              {project.buildNotes.map((note) => (
                <li
                  key={note}
                  className="rounded-[1.15rem] border border-[var(--border)] bg-[var(--background-strong)] px-4 py-3 text-sm leading-7 text-[var(--foreground-soft)]"
                >
                  {note}
                </li>
              ))}
            </ul>
          </article>
        </section>

        <section className="surface-panel-dark rounded-[2rem] px-6 py-8 sm:px-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="section-eyebrow !text-[rgba(232,165,94,0.85)]">
                Next step
              </p>
              <h2 className="section-title mt-4 text-3xl font-semibold text-[var(--panel-dark-foreground)] sm:text-4xl">
                DraftLens is the project I want more of in my portfolio: ambitious enough to
                matter, but still shaped carefully.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/68">
                If this kind of product thinking and implementation range is useful to your
                team, I&apos;d love to connect.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/#contact" className="primary-button">
                Get in touch
              </Link>
              <a
                href="https://github.com/arjunymun/essay-feedback-app"
                target="_blank"
                rel="noreferrer"
                className="secondary-button !border-white/10 !bg-white/4 !text-white/80 hover:!text-white"
              >
                View repo
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
