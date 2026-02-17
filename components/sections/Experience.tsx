import { experience } from "@/lib/content";

export function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-16 border-b border-zinc-200 bg-zinc-100/50 dark:border-zinc-800 dark:bg-zinc-900/30"
    >
      <div className="mx-auto max-w-4xl px-4 py-20">
        <p className="font-mono text-xs uppercase tracking-widest text-teal-600 dark:text-teal-400">
          04 — Experience
        </p>
        <h2 className="mt-3 font-[family-name:var(--font-outfit)] text-2xl font-semibold text-zinc-900 dark:text-zinc-100 sm:text-3xl">
          Where I&apos;ve worked
        </h2>
        <ul className="mt-10 space-y-10">
          {experience.map((job) => (
            <li
              key={`${job.company}-${job.role}`}
              className="relative border-l-2 border-teal-500/30 pl-6 dark:border-teal-400/30"
            >
              <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full border-2 border-teal-500 bg-white dark:border-teal-400 dark:bg-zinc-900" />
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="font-[family-name:var(--font-outfit)] font-semibold text-zinc-900 dark:text-zinc-100">
                  {job.role}
                </h3>
                <span className="text-sm font-medium text-teal-600 dark:text-teal-400">
                  {job.period}
                </span>
              </div>
              <p className="mt-0.5 text-sm font-medium text-zinc-600 dark:text-zinc-400">
                {job.company}
              </p>
              <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {job.bullets.map((bullet, i) => (
                  <li key={i} className="relative pl-4 before:absolute before:left-0 before:content-['·'] before:text-teal-500 before:font-bold dark:before:text-teal-400">
                    {bullet}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
