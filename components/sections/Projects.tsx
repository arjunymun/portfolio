import { projects } from "@/lib/content";

export function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-16 border-b border-zinc-200 dark:border-zinc-800"
    >
      <div className="mx-auto max-w-4xl px-4 py-16">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
          Projects
        </h2>
        <ul className="mt-8 grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <li
              key={project.title}
              className="flex flex-col rounded-lg border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-700 dark:bg-zinc-900/50"
            >
              <h3 className="font-medium text-zinc-900 dark:text-zinc-100">
                {project.title}
              </h3>
              <p className="mt-2 flex-1 text-sm text-zinc-600 dark:text-zinc-400">
                {project.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded bg-zinc-100 px-2 py-0.5 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex gap-3 text-sm">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-zinc-700 underline-offset-4 hover:underline dark:text-zinc-300"
                  >
                    Live
                  </a>
                )}
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-zinc-700 underline-offset-4 hover:underline dark:text-zinc-300"
                  >
                    Repo
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
