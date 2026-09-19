import type { Metadata } from "next";
import { projects } from "@/content/projects";
import { pageTitle } from "@/content/site";
import { ChapterLabel } from "@/components/ui/ChapterLabel";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { PageShell } from "@/components/layout/PageShell";

export const metadata: Metadata = {
  title: pageTitle("Projects"),
  description:
    "Projects and products by Areeb Ahmed Khan (The Ai Khan): 12Pilot, IntezamTech, and selected builds.",
};

export default function ProjectsPage() {
  return (
    <PageShell title="Projects" eyebrow="Proof">
      <ChapterLabel>Curated builds</ChapterLabel>
      <p className="mt-4 max-w-2xl text-mute">
        Companies, automations, and craft work — not a dump of every repo.
      </p>
      <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <li key={p.slug}>
            <ProjectCard project={p} />
          </li>
        ))}
      </ul>
    </PageShell>
  );
}
