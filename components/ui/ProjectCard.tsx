import Link from "next/link";
import type { Project } from "@/content/projects";
import { ProjectArt } from "./ProjectArt";

type Props = { project: Project; index?: number };

export function ProjectCard({ project, index = 0 }: Props) {
  const offset = index % 2 === 1 ? "lg:mt-24" : "";

  return (
    <Link href={`/projects/${project.slug}`} className={`group block ${offset}`}>
      <article className="overflow-hidden">
        <ProjectArt
          slug={project.slug}
          title={project.title}
          className="aspect-[4/5] sm:aspect-[16/10] transition-transform duration-700 group-hover:scale-[1.02]"
        />
        <div className="mt-6 max-w-md">
          <h3 className="font-display text-3xl font-bold tracking-tight transition-colors group-hover:text-accent sm:text-4xl">
            {project.title}
          </h3>
          <p className="mt-3 text-base leading-relaxed text-mute">{project.oneLiner}</p>
          {project.role ? (
            <p className="mt-4 text-sm font-medium text-accent">{project.role}</p>
          ) : null}
        </div>
      </article>
    </Link>
  );
}
