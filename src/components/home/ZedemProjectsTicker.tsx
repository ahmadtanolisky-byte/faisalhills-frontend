import type { ZedemProject } from "@/lib/types";

export default function ZedemProjectsTicker({ projects }: { projects: ZedemProject[] }) {
  if (!projects.length) return null;

  return (
    <section className="bg-navy-light py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.2em] text-gold">
          Our Projects by Zedem International
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {projects.map((project) =>
            project.link ? (
              <a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-white/80 transition hover:text-gold"
              >
                {project.title}
              </a>
            ) : (
              <span key={project.title} className="text-sm font-semibold text-white/80">
                {project.title}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}
