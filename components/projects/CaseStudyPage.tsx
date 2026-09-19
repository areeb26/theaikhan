import Link from "next/link";
import { notFound } from "next/navigation";
import { featuredAgents } from "@/content/agents";
import { getProject } from "@/content/projects";
import { site } from "@/content/site";
import { AgentChip } from "@/components/ui/AgentChip";
import { ChapterLabel } from "@/components/ui/ChapterLabel";
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
    <div className="relative min-h-[calc(100svh-3.5rem)]">
      <div className="pointer-events-none absolute inset-0 hud-mesh opacity-30" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(124,255,107,0.07),transparent_50%)]" />

      {/* Hero */}
      <header className="site-container relative pt-12 pb-16 sm:pt-16">
        <p className="font-mono text-[11px] text-mute">
          <Link href="/projects" className="hover:text-signal">Projects</Link>
        </p>
        <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:items-end">
          <div>
            <ChapterLabel>{project.role ?? "Case study"}</ChapterLabel>
            <h1 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              {project.title}
            </h1>
            <p className="mt-4 text-lg text-mute">{project.oneLiner}</p>
            {project.stack?.length ? (
              <ul className="mt-6 flex flex-wrap gap-2 font-mono text-[10px] uppercase tracking-wider text-signal/90">
                {project.stack.map((t) => (
                  <li key={t} className="rounded-full border border-line px-3 py-1">
                    {t}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {project.heroMetric ? (
              <MetricStat label={project.heroMetric.label} value={project.heroMetric.value} large />
            ) : null}
            {project.metrics?.map((m) => (
              <MetricStat key={m.label} label={m.label} value={m.value} />
            ))}
          </div>
        </div>
        <ProjectArt slug={slug} title={project.title} className="mt-10 h-48 sm:h-64" />
      </header>

      <div className="site-container relative space-y-12 pb-20">
        {isIntezam && project.certificateProof ? (
          <section aria-labelledby="cert-story">
            <ChapterLabel>Certificate system</ChapterLabel>
            <h2 id="cert-story" className="mt-3 font-display text-2xl font-bold sm:text-3xl">
              {project.certificateProof.headline}
            </h2>
            <div className="mt-8 grid gap-5 lg:grid-cols-2">
              <GlassPanel>
                <h3 className="font-mono text-[10px] uppercase tracking-widest text-signal">App</h3>
                <p className="mt-3 leading-relaxed text-mute">{project.certificateProof.app}</p>
              </GlassPanel>
              <GlassPanel>
                <h3 className="font-mono text-[10px] uppercase tracking-widest text-signal">Automation</h3>
                <p className="mt-3 leading-relaxed text-mute">{project.certificateProof.automation}</p>
                <ul className="mt-4 flex flex-wrap gap-2 font-mono text-xs text-ink">
                  {project.certificateProof.surfaces.map((s) => (
                    <li key={s} className="rounded border border-line/70 px-2 py-1">{s}</li>
                  ))}
                </ul>
              </GlassPanel>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {project.certificateProof.metrics.map((m) => (
                <MetricStat key={m.label} label={m.label} value={m.value} />
              ))}
            </div>
          </section>
        ) : null}

        {project.caseStudy?.sections.map((s) => (
          <GlassPanel key={s.heading}>
            <h2 className="font-mono text-[10px] uppercase tracking-widest text-signal">{s.heading}</h2>
            <p className="mt-4 leading-relaxed text-mute">{s.body}</p>
          </GlassPanel>
        ))}

        {isIntezam ? (
          <section>
            <ChapterLabel>Agent catalog preview</ChapterLabel>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {featuredAgents.map((a) => (
                <AgentChip key={a.name} name={a.name} job={a.job} />
              ))}
            </div>
            <a
              href={site.links.intezamAutomations}
              className="mt-8 inline-flex rounded-full border border-signal/50 bg-signal/10 px-6 py-3 font-mono text-xs text-signal hover:bg-signal/20"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open full catalog →
            </a>
          </section>
        ) : null}

        <div className="flex flex-wrap gap-4 font-mono text-sm">
          {project.liveUrl ? (
            <a href={project.liveUrl} className="text-signal hover:underline" target="_blank" rel="noopener noreferrer">
              Live site →
            </a>
          ) : null}
          {project.proofUrl ? (
            <a href={project.proofUrl} className="text-signal hover:underline" target="_blank" rel="noopener noreferrer">
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
                author: { "@type": "Person", name: site.name, jobTitle: site.role },
              }),
            }}
          />
        ) : null}

        <p className="font-mono text-xs text-mute">
          <Link href="/" className="text-signal hover:underline">← Command center</Link>
        </p>
      </div>
    </div>
  );
}
