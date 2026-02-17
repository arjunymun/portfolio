import { experience } from "@/lib/content";

export function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-16 border-b border-zinc-200 bg-zinc-50/50 dark:border-zinc-800 dark:bg-zinc-900/30"
    >
      <div className="mx-auto max-w-4xl px-4 py-16">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
          Experience
        </h2>
        <ul className="mt-8 space-y-8">
          {experience.map((job) => (
            <li key={`${job.company}-${job.role}`}>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="font-medium text-zinc-900 dark:text-zinc-100">
                  {job.role}
                </h3>
                <span className="text-sm text-zinc-500 dark:text-zinc-400">
                  {job.period}
                </span>
              </div>
              <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                {job.company}
              </p>
              <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
                {job.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
