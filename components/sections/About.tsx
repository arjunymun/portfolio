const aboutText = `I build web applications and enjoy working across the stack. This portfolio showcases my projects and experience.`;

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-16 border-b border-zinc-200 dark:border-zinc-800"
    >
      <div className="mx-auto max-w-4xl px-4 py-20">
        <p className="font-mono text-xs uppercase tracking-widest text-teal-600 dark:text-teal-400">
          01 — About
        </p>
        <h2 className="mt-3 font-[family-name:var(--font-outfit)] text-2xl font-semibold text-zinc-900 dark:text-zinc-100 sm:text-3xl">
          About me
        </h2>
        <p className="mt-5 max-w-2xl leading-relaxed text-zinc-600 dark:text-zinc-400">
          {aboutText}
        </p>
        <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-500">
          Edit this in{" "}
          <code className="rounded bg-zinc-200 px-1.5 py-0.5 font-mono text-xs dark:bg-zinc-700">
            components/sections/About.tsx
          </code>{" "}
          and{" "}
          <code className="rounded bg-zinc-200 px-1.5 py-0.5 font-mono text-xs dark:bg-zinc-700">
            lib/site.ts
          </code>
          .
        </p>
      </div>
    </section>
  );
}
