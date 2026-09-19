import Link from "next/link";
import { featuredAgents } from "@/content/agents";
import { projects } from "@/content/projects";
import { site } from "@/content/site";
import { BootTerminal } from "@/components/hud/BootTerminal";
import { TransmitCta } from "@/components/hud/TransmitCta";
import { AgentChip } from "@/components/ui/AgentChip";
import { ChapterLabel } from "@/components/ui/ChapterLabel";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { MetricStat } from "@/components/ui/MetricStat";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ProjectArt } from "@/components/ui/ProjectArt";

const bootLines = [
  "THE_AI_KHAN v1.0",
  "loading entity………… OK",
  "syncing systems……… OK",
  `identity lock………… ${site.name.toUpperCase()}`,
];

const systems = [
  {
    name: "12Pilot",
    tag: "SaaS · Outreach",
    blurb: "LinkedIn outreach OS — AI campaigns, Unibox, Content Hub.",
    href: "/projects/12pilot",
    external: false,
  },
  {
    name: "IntezamTech",
    tag: "Agents · Ops",
    blurb: "AI automations, certificate issuance, LMS-style ops.",
    href: "/projects/intezamtech",
    external: false,
  },
  {
    name: "Twelve Monday",
    tag: "Parent co",
    blurb: "Product home for 12Pilot and company builds.",
    href: site.links.twelveMonday,
    external: true,
  },
];

type Props = { cinematic?: boolean; animateBoot?: boolean };

export function HomeChapters({ cinematic = false, animateBoot = false }: Props) {
  const featured = projects.filter((p) => p.featured);
  const sectionShell = (id: string, extra = "") =>
    `motion-section relative flex min-h-[100svh] flex-col justify-center py-20 sm:py-28 ${extra} ${
      cinematic ? "z-10 bg-void/55 backdrop-blur-[3px]" : ""
    }`;

  return (
    <main id="scroll-root" className="relative">
      <a href="#identity" className="skip-link">Skip intro</a>

      {/* Boot */}
      <section
        id="boot"
        aria-label="Boot sequence"
        className={`${sectionShell("boot", "scanlines overflow-hidden")}`}
      >
        <div className="pointer-events-none absolute inset-0 hud-mesh opacity-50" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(124,255,107,0.07),transparent_45%)]" />
        <div className="site-container relative">
          <ChapterLabel>Initialize</ChapterLabel>
          <div className="mt-10 max-w-xl rounded-xl border border-line/60 bg-panel/80 p-6 font-mono text-sm shadow-[0_0_60px_rgba(124,255,107,0.06)] sm:p-8">
            {animateBoot ? (
              <BootTerminal lines={bootLines} />
            ) : (
              <div className="space-y-2" role="log">
                {bootLines.map((line) => (
                  <p key={line} className="text-mute">
                    <span className="text-signal">&gt;</span> {line}
                  </p>
                ))}
              </div>
            )}
          </div>
          <p className="mt-8 max-w-md text-sm text-mute">
            AI command center for {site.name} — systems, agents, and shipped
            products.
          </p>
        </div>
      </section>

      {/* Identity */}
      <section id="identity" aria-label="Identity" className={sectionShell("identity")}>
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,rgba(124,255,107,0.08),transparent_50%)]" />
        <div className="site-container relative">
          <ChapterLabel>Identity lock</ChapterLabel>
          <p className="wordmark mt-6 font-display font-extrabold text-ink" aria-hidden>
            THE AI
            <br />
            <span className="text-signal">KHAN</span>
          </p>
          <h1 className="sr-only">The Ai Khan — {site.name}</h1>
          <p className="mt-8 text-xl text-ink sm:text-2xl">{site.name}</p>
          <p className="mt-2 font-mono text-sm text-mute">
            {site.role} · {site.company} · Karachi
          </p>
          <GlassPanel className="mt-10 max-w-2xl">
            <p className="text-base leading-relaxed text-mute">{site.definition}</p>
            <ul className="mt-6 flex flex-wrap gap-4 font-mono text-xs uppercase tracking-wider">
              {[
                { href: site.links.linkedin, label: "LinkedIn" },
                { href: site.links.instagram, label: "Instagram" },
                { href: site.links.github, label: "GitHub" },
                { href: site.links.twelvePilotAbout, label: "12Pilot About" },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-signal hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </GlassPanel>
        </div>
      </section>

      {/* Systems */}
      <section id="systems" aria-label="Systems" className={sectionShell("systems", "hud-mesh")}>
        <div className="site-container">
          <ChapterLabel>Systems map</ChapterLabel>
          <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
            Products in orbit
          </h2>
          <ul className="mt-12 grid gap-5 lg:grid-cols-3">
            {systems.map((s) => (
              <li key={s.name}>
                <GlassPanel className="system-card h-full !p-0 overflow-hidden">
                  <ProjectArt
                    slug={
                      s.name === "12Pilot"
                        ? "12pilot"
                        : s.name === "IntezamTech"
                          ? "intezamtech"
                          : "twelve-monday"
                    }
                    title={s.name}
                    className="h-32 rounded-none border-0"
                  />
                  <div className="p-6">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-signal">{s.tag}</p>
                    <h3 className="mt-2 font-display text-2xl font-bold">{s.name}</h3>
                    <p className="mt-2 text-sm text-mute">{s.blurb}</p>
                    {s.external ? (
                      <a
                        href={s.href}
                        className="mt-5 inline-block font-mono text-xs text-signal hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Open →
                      </a>
                    ) : (
                      <Link href={s.href} className="mt-5 inline-block font-mono text-xs text-signal hover:underline">
                        Case study →
                      </Link>
                    )}
                  </div>
                </GlassPanel>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Agents */}
      <section id="agents" aria-label="Agents" className={sectionShell("agents")}>
        <div className="site-container">
          <ChapterLabel>Agent index</ChapterLabel>
          <div className="mt-4 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              Automation depth
            </h2>
            <p className="font-mono text-xs text-mute">Indexed · 06 featured · 20+ catalog</p>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-12">
            <GlassPanel className="lg:col-span-5 border-signal/30">
              <p className="font-mono text-[10px] uppercase tracking-widest text-signal">
                Certificate automation
              </p>
              <p className="mt-3 text-sm leading-relaxed text-mute">
                Name-on-certificate app plus issuance automation into Seerat ki
                Dunya and Sarf ki Dunya.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <MetricStat label="Certs" value="3,400+" />
                <MetricStat label="Time" value="15m→s" />
                <MetricStat label="Saved" value="~850h" />
              </div>
              <Link
                href="/projects/intezamtech"
                className="mt-6 inline-block font-mono text-xs text-signal hover:underline"
              >
                IntezamTech case study →
              </Link>
            </GlassPanel>
            <div className="grid gap-3 sm:grid-cols-2 lg:col-span-7">
              {featuredAgents.map((a, i) => (
                <AgentChip key={a.name} name={a.name} job={a.job} featured={i === 0} />
              ))}
            </div>
          </div>
          <a
            href={site.links.intezamAutomations}
            className="mt-8 inline-block font-mono text-xs text-signal hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Full agent catalog on IntezamTech →
          </a>
        </div>
      </section>

      {/* Builds */}
      <section id="builds" aria-label="Builds" className={sectionShell("builds")}>
        <div className="site-container">
          <ChapterLabel>Builds</ChapterLabel>
          <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
            Selected work
          </h2>
          <div className="builds-rail mt-10 flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory lg:grid lg:grid-cols-3 lg:overflow-visible">
            {featured.map((p) => (
              <ProjectCard key={p.slug} project={p} variant="rail" />
            ))}
          </div>
          <Link href="/projects" className="mt-8 inline-block font-mono text-xs text-signal hover:underline">
            All projects →
          </Link>
        </div>
      </section>

      {/* Signal */}
      <section id="signal" aria-label="Contact" className={sectionShell("signal", "border-b-0")}>
        <div className="site-container text-center">
          <ChapterLabel>Transmit</ChapterLabel>
          <h2 className="mt-6 font-display text-5xl font-extrabold tracking-[0.08em] sm:text-6xl">
            TRANSMIT
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-mute">
            Building AI systems or need an automation partner? Message The Ai Khan
            — {site.name}, Karachi.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <TransmitCta
              href={site.links.linkedin}
              className="inline-block rounded-full border border-signal bg-signal/10 px-10 py-4 font-mono text-sm font-semibold text-signal transition-colors hover:bg-signal/20"
            >
              LinkedIn
            </TransmitCta>
            <a
              href={site.links.instagram}
              className="rounded-full border border-line/80 px-10 py-4 font-mono text-sm text-ink transition-colors hover:border-signal/40"
              target="_blank"
              rel="noopener noreferrer"
            >
              @areeb.theaikhan
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
