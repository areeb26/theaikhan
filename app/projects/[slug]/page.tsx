import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Panel } from "@/components/ui/Panel";
import { getProject, projectSlugs } from "@/content/projects";
import { pageTitle, site } from "@/content/site";

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

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const is12Pilot = slug === "12pilot";

  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <p className="font-mono text-xs text-mute">
        <Link href="/projects" className="hover:text-signal">Projects</Link>
      </p>
      <h1 className="mt-4 font-display text-4xl font-bold">
        {project.title}
        {project.role ? (
          <span className="mt-2 block text-lg font-normal text-mute">
            {project.role}, {site.name}
          </span>
        ) : null}
      </h1>
      <p className="mt-6 text-lg text-mute">{project.oneLiner}</p>

      {project.stack?.length ? (
        <ul className="mt-4 flex flex-wrap gap-2 font-mono text-xs text-signal">
          {project.stack.map((t) => (
            <li key={t} className="rounded border border-line px-2 py-1">
              {t}
            </li>
          ))}
        </ul>
      ) : null}

      {project.stub ? (
        <p className="mt-6 font-mono text-xs text-warn">
          Placeholder case study — expand when public URLs and media are ready.
        </p>
      ) : null}

      {project.caseStudy?.sections.map((s) => (
        <Panel key={s.heading} className="mt-8">
          <h2 className="font-mono text-xs text-signal">{s.heading}</h2>
          <p className="mt-3 leading-relaxed text-mute">{s.body}</p>
        </Panel>
      ))}

      <div className="mt-10 flex flex-wrap gap-4 font-mono text-sm">
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            className="text-signal hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live site →
          </a>
        ) : null}
        {project.proofUrl ? (
          <a
            href={project.proofUrl}
            className="text-signal hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Proof →
          </a>
        ) : null}
      </div>

      {is12Pilot ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "12Pilot",
              applicationCategory: "BusinessApplication",
              url: site.links.twelvePilot,
              description: project.oneLiner,
              author: {
                "@type": "Person",
                name: site.name,
                jobTitle: site.role,
              },
            }),
          }}
        />
      ) : null}

      <p className="mt-12">
        <Link href="/" className="text-signal hover:underline">
          ← The Ai Khan home
        </Link>
      </p>
    </main>
  );
}
