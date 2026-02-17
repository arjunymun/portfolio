import { site } from "@/lib/site";

export function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-16 border-b border-zinc-200 dark:border-zinc-800"
    >
      <div className="mx-auto max-w-4xl px-4 py-16">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
          Contact
        </h2>
        <p className="mt-4 text-zinc-600 dark:text-zinc-400">
          Get in touch via the links below.
        </p>
        <ul className="mt-6 flex flex-wrap gap-6" role="list">
          <li>
            <a
              href={site.links.email}
              className="font-medium text-zinc-700 underline-offset-4 hover:underline dark:text-zinc-300"
            >
              Email
            </a>
          </li>
          <li>
            <a
              href={site.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-zinc-700 underline-offset-4 hover:underline dark:text-zinc-300"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href={site.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-zinc-700 underline-offset-4 hover:underline dark:text-zinc-300"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
