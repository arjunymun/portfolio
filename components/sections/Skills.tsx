import { skills } from "@/lib/content";

export function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-16 border-b border-zinc-200 bg-zinc-100/50 dark:border-zinc-800 dark:bg-zinc-900/30"
    >
      <div className="mx-auto max-w-4xl px-4 py-20">
        <p className="font-mono text-xs uppercase tracking-widest text-teal-600 dark:text-teal-400">
          02 — Skills
        </p>
        <h2 className="mt-3 font-[family-name:var(--font-outfit)] text-2xl font-semibold text-zinc-900 dark:text-zinc-100 sm:text-3xl">
          Tech & tools
        </h2>
        <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                {group.title}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-zinc-200 bg-white px-3 py-1.5 text-sm font-medium text-zinc-800 shadow-sm transition hover:border-teal-200 hover:shadow hover:shadow-teal-500/10 dark:border-zinc-700 dark:bg-zinc-800/50 dark:text-zinc-200 dark:hover:border-teal-500/30"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
