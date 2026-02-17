const aboutText = `I build web applications and enjoy working across the stack. 
This portfolio showcases my projects and experience.`;

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-16 border-b border-zinc-200 dark:border-zinc-800"
    >
      <div className="mx-auto max-w-4xl px-4 py-16">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
          About
        </h2>
        <p className="mt-4 whitespace-pre-line text-zinc-600 dark:text-zinc-400">
          {aboutText}
        </p>
        <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-500">
          Customize this in <code className="rounded bg-zinc-200 px-1 dark:bg-zinc-700">components/sections/About.tsx</code> and{" "}
          <code className="rounded bg-zinc-200 px-1 dark:bg-zinc-700">lib/site.ts</code>.
        </p>
      </div>
    </section>
  );
}
