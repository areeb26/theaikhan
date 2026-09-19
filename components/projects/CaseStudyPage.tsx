import Link from "next/link";
import { notFound } from "next/navigation";
import { featuredAgents } from "@/content/agents";
import { getProject } from "@/content/projects";
import { site } from "@/content/site";
import { AgentChip } from "@/components/ui/AgentChip";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { MetricStat } from "@/components/ui/MetricStat";
import { ProjectArt } from "@/components/ui/ProjectArt";

type Props = { slug: string };

export function CaseStudyPage({ slug }: Props) {
  const project = getProject(slug);
  if (!project) notFound();

  const is12Pilot = slug === "12pilot";
  const isIntezam = slug === "intezamtech";

  return (
    <article>
      <header className="relative min-h-[70vh] overflow-hidden sm:min-h-[80vh]">
        <ProjectArt slug={slug} title={project.title} className="absolute inset-0 h-full w-full" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-transparent" />
        <div className="site-container relative flex min-h-[70vh] flex-col justify-end pb-16 pt-28 sm:min-h-[80vh] sm:pb-20">
          <Eyebrow>{project.role ?? "Project"}</Eyebrow>
          <h1 className="mt-4 max-w-4xl font-display text-5xl font-bold tracking-tight sm:text-7xl">
            {project.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-mute">{project.oneLiner}</p>
          {isIntezam && project.heroMetric ? (
            <div className="mt-12">
              <MetricStat label={project.heroMetric.label} value={project.heroMetric.value} large />
            </div>
          ) : null}
        </div>
      </header>

      <div className="site-container space-y-20 py-20 sm:py-28">
        {!isIntezam && project.heroMetric ? (
          <div className="grid gap-10 sm:grid-cols-3">
            <MetricStat label={project.heroMetric.label} value={project.heroMetric.value} large />
            {project.metrics?.map((m) => (
              <MetricStat key={m.label} label={m.label} value={m.value} />
            ))}
          </div>
        ) : null}

        {isIntezam && project.certificateProof ? (
          <section className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="font-display text-3xl font-bold sm:text-4xl">
                {project.certificateProof.headline}
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-mute">{project.certificateProof.app}</p>
              <p className="mt-4 text-lg leading-relaxed text-mute">{project.certificateProof.automation}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {project.certificateProof.surfaces.map((s) => (
                  <span key={s} className="rounded-full border border-line px-4 py-2 text-sm text-ink">
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid gap-8 rounded-3xl border border-line bg-surface p-8 sm:p-10">
              {project.certificateProof.metrics.map((m) => (
                <MetricStat key={m.label} label={m.label} value={m.value} large={m.label === "Certificates"} />
              ))}
            </div>
          </section>
        ) : null}

        {project.caseStudy?.sections.map((s) => (
          <GlassPanel key={s.heading}>
            <h2 className="font-display text-2xl font-bold">{s.heading}</h2>
            <p className="mt-4 text-lg leading-relaxed text-mute">{s.body}</p>
          </GlassPanel>
        ))}

        {isIntezam ? (
          <section>
            <h2 className="font-display text-2xl font-bold">Automation catalog</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {featuredAgents.map((a) => (
                <AgentChip key={a.name} name={a.name} job={a.job} />
              ))}
            </div>
            <a
              href={site.links.intezamAutomations}
              className="mt-10 inline-block rounded-full bg-accent px-8 py-4 text-sm font-semibold text-ink"
              target="_blank"
              rel="noopener noreferrer"
            >
              View full catalog
            </a>
          </section>
        ) : null}

        <div className="flex flex-wrap gap-6 text-sm font-semibold">
          {project.liveUrl ? (
            <a href={project.liveUrl} className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">
              Live site →
            </a>
          ) : null}
          {project.proofUrl ? (
            <a href={project.proofUrl} className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">
              Proof →
            </a>
          ) : null}
          <Link href="/projects" className="text-mute hover:text-accent">All projects</Link>
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
                author: { "@type": "Person", name: site.name, jobTitle: site.role },
              }),
            }}
          />
        ) : null}
      </div>
    </article>
  );
}
