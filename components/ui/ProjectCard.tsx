import Link from "next/link";
import type { Project } from "@/content/projects";
import { MockFrame } from "./MockFrame";

type Props = { project: Project; index?: number; showcase?: boolean };

export function ProjectCard({ project, index = 0, showcase = true }: Props) {
  const flip = index % 2 === 1;

  if (!showcase) {
    return (
      <Link href={`/projects/${project.slug}`} className="group block">
        <MockFrame slug={project.slug} title={project.title} />
        <h3 className="mt-5 font-display text-2xl font-bold group-hover:text-accent">{project.title}</h3>
      </Link>
    );
  }

  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`group grid items-center gap-8 transition-transform duration-500 hover:-translate-y-1 lg:grid-cols-12 lg:gap-12 max-lg:hover:translate-y-0`}
    >
      <div className={`work-panel-media lg:col-span-7 ${flip ? "lg:order-2" : ""}`}>
        <MockFrame
          slug={project.slug}
          title={project.title}
          className="transition-transform duration-700 group-hover:scale-[1.02]"
        />
      </div>
      <div className={`lg:col-span-5 ${flip ? "lg:order-1 lg:text-right" : ""}`}>
        <p className="font-mono text-[11px] uppercase tracking-widest text-accent">
          {project.role ?? "Build"}
        </p>
        <h3 className="mt-3 font-display text-4xl font-bold tracking-tight transition-colors group-hover:text-accent sm:text-5xl">
          {project.title}
        </h3>
        <p className={`mt-4 text-lg leading-relaxed text-mute ${flip ? "lg:ml-auto" : ""} max-w-md`}>
          {project.oneLiner}
        </p>
        <span className={`mt-6 inline-block text-sm font-semibold text-ink underline decoration-accent underline-offset-4`}>
          View case study
        </span>
      </div>
    </Link>
  );
}
