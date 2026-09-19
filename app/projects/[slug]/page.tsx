import type { Metadata } from "next";
import { CaseStudyPage } from "@/components/projects/CaseStudyPage";
import { PageScrollMotion } from "@/components/motion/PageScrollMotion";
import { getProject, projectSlugs } from "@/content/projects";
import { pageTitle } from "@/content/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projectSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: pageTitle("Project") };
  return {
    title: pageTitle(project.title),
    description: project.oneLiner,
  };
}

export default async function ProjectRoute({ params }: Props) {
  const { slug } = await params;
  return (
    <PageScrollMotion>
      <CaseStudyPage slug={slug} />
    </PageScrollMotion>
  );
}
