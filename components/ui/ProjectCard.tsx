import Link from "next/link";
import type { Project } from "@/content/projects";
import { ProjectArt } from "./ProjectArt";

type Props = { project: Project; variant?: "grid" | "rail" };

export function ProjectCard({ project, variant = "grid" }: Props) {
  const rail = variant === "rail";

  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`group block ${rail ? "min-w-[280px] snap-center sm:min-w-[340px]" : ""}`}
    >
      <article
        className={`overflow-hidden rounded-xl border border-line/70 bg-panel/30 transition-all duration-300 hover:border-signal/35 hover:shadow-[0_0_40px_rgba(124,255,107,0.08)] ${
          rail ? "h-full" : ""
        }`}
      >
        <ProjectArt
          slug={project.slug}
          title={project.title}
          className={rail ? "h-40" : "h-44 sm:h-52"}
        />
        <div className="p-5">
          <h3 className="font-display text-xl font-bold text-ink group-hover:text-signal transition-colors">
            {project.title}
          </h3>
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-mute">
            {project.oneLiner}
          </p>
          {project.role ? (
            <p className="mt-3 font-mono text-[11px] uppercase tracking-wider text-signal/90">
              {project.role}
            </p>
          ) : null}
        </div>
      </article>
    </Link>
  );
}
