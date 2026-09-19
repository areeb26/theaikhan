import type { Metadata } from "next";
import { projects } from "@/content/projects";
import { pageTitle } from "@/content/site";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { PageScrollMotion } from "@/components/motion/PageScrollMotion";
import { PageShell } from "@/components/layout/PageShell";

export const metadata: Metadata = {
  title: pageTitle("Projects"),
  description:
    "Projects and products by Areeb Ahmed Khan (The Ai Khan): 12Pilot, IntezamTech, and selected builds.",
};

export default function ProjectsPage() {
  return (
    <PageScrollMotion>
    <PageShell title="Work" eyebrow="Projects">
      <div className="space-y-32">
        {projects.map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i} />
        ))}
      </div>
    </PageShell>
    </PageScrollMotion>
  );
}
