import { projects } from "@/lib/content";

export function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-16 border-b border-zinc-200 dark:border-zinc-800"
    >
      <div className="mx-auto max-w-4xl px-4 py-20">
        <p className="font-mono text-xs uppercase tracking-widest text-teal-600 dark:text-teal-400">
          03 — Work
        </p>
        <h2 className="mt-3 font-[family-name:var(--font-outfit)] text-2xl font-semibold text-zinc-900 dark:text-zinc-100 sm:text-3xl">
          Projects
        </h2>
        <ul className="mt-10 grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <li
              key={project.title}
              className="group flex flex-col rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:border-teal-200 hover:shadow-md hover:shadow-teal-500/5 dark:border-zinc-700 dark:bg-zinc-900/50 dark:hover:border-teal-500/30 dark:hover:shadow-teal-500/5"
            >
              <h3 className="font-[family-name:var(--font-outfit)] font-semibold text-zinc-900 dark:text-zinc-100">
                {project.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-zinc-100 px-2 py-0.5 font-mono text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex gap-4 text-sm font-medium">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-600 underline-offset-4 transition hover:text-teal-500 dark:text-teal-400 dark:hover:text-teal-300"
                  >
                    Live site →
                  </a>
                )}
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-600 underline-offset-4 transition hover:text-teal-600 dark:text-zinc-400 dark:hover:text-teal-400"
                  >
                    Source
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
