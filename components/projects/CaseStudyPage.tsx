import Link from "next/link";
import { notFound } from "next/navigation";
import { featuredAgents } from "@/content/agents";
import { getProject } from "@/content/projects";
import { site } from "@/content/site";
import { AgentChip } from "@/components/ui/AgentChip";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { MetricStat } from "@/components/ui/MetricStat";
import { MockFrame } from "@/components/ui/MockFrame";

type Props = { slug: string };

export function CaseStudyPage({ slug }: Props) {
  const project = getProject(slug);
  if (!project) notFound();

  const is12Pilot = slug === "12pilot";
  const isIntezam = slug === "intezamtech";

  return (
    <article>
      <header className="relative min-h-[85svh] overflow-hidden">
        <div className={`absolute inset-0 ${isIntezam ? "mesh-violet" : "mesh-warm"}`} aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg/30 to-bg" />

        {isIntezam ? (
          <p
            className="pointer-events-none absolute left-1/2 top-[20%] -translate-x-1/2 select-none font-display stat-giant text-accent/20 sm:top-[15%]"
            aria-hidden
          >
            3,400+
          </p>
        ) : null}

        <div className="site-container relative flex min-h-[85svh] flex-col justify-end pb-16 pt-28 sm:pb-24">
          <Eyebrow>{project.role ?? "Project"}</Eyebrow>
          <h1 className="mt-6 max-w-4xl font-display text-5xl font-bold tracking-tight sm:text-7xl lg:text-8xl">
            {project.title}
          </h1>
          <p className="mt-6 max-w-2xl text-xl text-zinc-300">{project.oneLiner}</p>

          {isIntezam && project.heroMetric ? (
            <div className="mt-12 border-l-4 border-accent pl-6">
              <MetricStat label={project.heroMetric.label} value={project.heroMetric.value} large />
            </div>
          ) : null}

          {is12Pilot ? (
            <div className="mt-12 flex flex-wrap gap-3">
              {["AI Outreach", "Campaigns", "Unibox", "Content Hub"].map((f) => (
                <span
                  key={f}
                  className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium"
                >
                  {f}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      </header>

      <div className="site-container space-y-24 py-20 sm:space-y-32 sm:py-28">
        <MockFrame slug={slug} title={project.title} className="max-w-5xl" />

        {is12Pilot && project.metrics ? (
          <div className="grid gap-8 sm:grid-cols-3">
            {project.heroMetric ? (
              <MetricStat label={project.heroMetric.label} value={project.heroMetric.value} large />
            ) : null}
            {project.metrics.map((m) => (
              <MetricStat key={m.label} label={m.label} value={m.value} />
            ))}
          </div>
        ) : null}

        {isIntezam && project.certificateProof ? (
          <section className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <h2 className="font-display text-4xl font-bold sm:text-5xl">
                {project.certificateProof.headline}
              </h2>
              <p className="mt-8 text-xl leading-relaxed text-zinc-300">{project.certificateProof.app}</p>
              <p className="mt-6 text-xl leading-relaxed text-zinc-300">{project.certificateProof.automation}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                {project.certificateProof.surfaces.map((s) => (
                  <span
                    key={s}
                    className="rounded-full bg-accent/15 px-5 py-2.5 text-sm font-semibold text-accent"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-6 rounded-3xl border border-white/10 bg-surface p-8 lg:col-span-5 lg:p-10">
              {project.certificateProof.metrics.map((m) => (
                <MetricStat
                  key={m.label}
                  label={m.label}
                  value={m.value}
                  large={m.label === "Certificates"}
                />
              ))}
            </div>
          </section>
        ) : null}

        {project.caseStudy?.sections.map((s) => (
          <GlassPanel key={s.heading}>
            <h2 className="font-display text-3xl font-bold">{s.heading}</h2>
            <p className="mt-5 text-lg leading-relaxed text-zinc-300">{s.body}</p>
          </GlassPanel>
        ))}

        {isIntezam ? (
          <section>
            <h2 className="font-display text-3xl font-bold">Agent catalog</h2>
            <p className="mt-3 text-mute">Featured automations — full list on IntezamTech.</p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {featuredAgents.map((a) => (
                <AgentChip key={a.name} name={a.name} job={a.job} />
              ))}
            </div>
            <a
              href={site.links.intezamAutomations}
              className="mt-10 inline-block rounded-full bg-accent px-10 py-4 text-sm font-semibold text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              intezamtech.com/ai-automation
            </a>
          </section>
        ) : null}

        <div className="flex flex-wrap gap-8 border-t border-white/10 pt-12 text-sm font-semibold">
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
          <Link href="/projects" className="text-zinc-400 hover:text-accent">All projects</Link>
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
