import { skills } from "@/lib/content";

export function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-16 border-b border-zinc-200 bg-zinc-50/50 dark:border-zinc-800 dark:bg-zinc-900/30"
    >
      <div className="mx-auto max-w-4xl px-4 py-16">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
          Skills
        </h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                {group.title}
              </h3>
              <ul className="mt-2 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full bg-zinc-200 px-3 py-1 text-sm text-zinc-800 dark:bg-zinc-700 dark:text-zinc-200"
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
