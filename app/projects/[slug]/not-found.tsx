import Link from "next/link";

export default function ProjectNotFound() {
  return (
    <main className="py-20">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-5 px-6 sm:px-8">
        <p className="section-eyebrow">Project not found</p>
        <h1 className="section-title text-4xl font-semibold text-[var(--foreground)]">
          That case study is not available yet.
        </h1>
        <p className="section-copy text-base leading-8">
          I&apos;m still turning the strongest work into proper write-ups. The Sideout and
          DraftLens case studies are live, and more projects will follow once they are ready
          to hold up to the same standard.
        </p>
        <Link
          href="/#work"
          className="inline-flex w-fit items-center gap-2 text-sm font-medium text-[var(--accent-strong)] transition hover:underline hover:underline-offset-4"
        >
          Back to selected work
        </Link>
      </div>
    </main>
  );
}
