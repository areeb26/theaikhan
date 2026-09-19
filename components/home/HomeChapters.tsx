import Link from "next/link";
import { featuredAgents } from "@/content/agents";
import { projects } from "@/content/projects";
import { site } from "@/content/site";
import { BootTerminal } from "@/components/hud/BootTerminal";
import { TransmitCta } from "@/components/hud/TransmitCta";
import { Panel } from "@/components/ui/Panel";

const bootLines = [
  "THE_AI_KHAN v1.0",
  "loading entity………… OK",
  "syncing systems……… OK",
  `identity lock………… ${site.name.toUpperCase()}`,
];

const systemsNodes = [
  {
    name: "12Pilot",
    detail: "CTO & Cofounder · LinkedIn outreach SaaS",
    href: "/projects/12pilot",
  },
  {
    name: "IntezamTech",
    detail: "AI apps · ops · automation catalog",
    href: "/projects/intezamtech",
  },
  {
    name: "Twelve Monday",
    detail: "Parent · product home",
    href: site.links.twelveMonday,
    external: true,
  },
];

type Props = { cinematic?: boolean };

export function HomeChapters({ cinematic = false }: Props) {
  const featured = projects.filter((p) => p.featured);
  const sectionClass = cinematic
    ? "relative z-10 border-b border-line/60 bg-void/75 backdrop-blur-[2px]"
    : "relative border-b border-line";

  return (
    <main id="scroll-root">
      <a href="#identity" className="skip-link">
        Skip intro
      </a>

      <section
        id="boot"
        aria-label="Boot"
        className={`chapter-grid ${sectionClass} flex min-h-[100svh] flex-col justify-center px-4 py-24 sm:px-6`}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,255,107,0.08),transparent_60%)]" />
        <div className="relative mx-auto w-full max-w-6xl">
          <p className="font-mono text-xs text-signal">CHAPTER_01 // BOOT</p>
          {cinematic ? (
            <BootTerminal lines={bootLines} />
          ) : (
            <div
              className="mt-8 space-y-2 font-mono text-sm text-ink sm:text-base"
              role="log"
            >
              {bootLines.map((line) => (
                <p key={line} className="text-mute">
                  <span className="text-signal">&gt;</span> {line}
                </p>
              ))}
            </div>
          )}
          <h1 className="mt-12 font-display text-2xl font-bold text-ink sm:text-3xl">
            The Ai Khan — {site.name}
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-mute sm:text-base">
            {site.definition}
          </p>
        </div>
      </section>

      <section
        id="identity"
        aria-label="Identity"
        className={`${sectionClass} flex min-h-[100svh] flex-col justify-center px-4 py-24 sm:px-6`}
      >
        <div className="mx-auto w-full max-w-6xl">
          <p className="font-mono text-xs text-signal">CHAPTER_02 // IDENTITY</p>
          <p
            className="mt-6 font-display text-5xl font-extrabold tracking-tight text-ink sm:text-7xl lg:text-8xl"
            aria-hidden
          >
            THE AI KHAN
          </p>
          <p className="mt-4 text-2xl text-ink sm:text-3xl">{site.name}</p>
          <p className="mt-2 font-mono text-sm text-mute sm:text-base">
            {site.role} · {site.company} · Karachi
          </p>
          <Panel className="mt-10 max-w-2xl">
            <p className="text-base leading-relaxed text-mute">{site.definition}</p>
            <ul className="mt-6 flex flex-wrap gap-4 font-mono text-sm">
              <li>
                <a
                  href={site.links.linkedin}
                  className="text-signal hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={site.links.instagram}
                  className="text-signal hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={site.links.github}
                  className="text-signal hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={site.links.twelvePilotAbout}
                  className="text-signal hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  12Pilot About
                </a>
              </li>
            </ul>
          </Panel>
        </div>
      </section>

      <section
        id="systems"
        aria-label="Systems"
        className={`chapter-grid ${sectionClass} flex min-h-[100svh] flex-col justify-center px-4 py-24 sm:px-6`}
      >
        <div className="mx-auto w-full max-w-6xl">
          <p className="font-mono text-xs text-signal">CHAPTER_03 // SYSTEMS</p>
          <h2 className="mt-4 font-display text-4xl font-bold sm:text-5xl">
            Command map
          </h2>
          <ul className="mt-10 grid gap-4 sm:grid-cols-3">
            {systemsNodes.map((node) => (
              <li key={node.name}>
                <Panel className="h-full transition-colors hover:border-signal/40">
                  <h3 className="font-display text-xl font-bold text-ink">
                    {node.name}
                  </h3>
                  <p className="mt-2 text-sm text-mute">{node.detail}</p>
                  {node.external ? (
                    <a
                      href={node.href}
                      className="mt-4 inline-block font-mono text-sm text-signal hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Open →
                    </a>
                  ) : (
                    <Link
                      href={node.href}
                      className="mt-4 inline-block font-mono text-sm text-signal hover:underline"
                    >
                      Case study →
                    </Link>
                  )}
                </Panel>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="agents"
        aria-label="Agents"
        className={`${sectionClass} flex min-h-[100svh] flex-col justify-center px-4 py-24 sm:px-6`}
      >
        <div className="mx-auto w-full max-w-6xl">
          <p className="font-mono text-xs text-signal">CHAPTER_04 // AGENTS</p>
          <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-4xl font-bold sm:text-5xl">
              Agent index
            </h2>
            <p className="font-mono text-sm text-mute">
              AGENTS_INDEXED: 06 / 20+
            </p>
          </div>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2">
            {featuredAgents.map((agent) => (
              <li
                key={agent.name}
                className="rounded border border-line bg-panel/60 px-4 py-3 font-mono text-sm"
              >
                <span className="text-signal">{agent.name}</span>
                <span className="text-mute"> — {agent.job}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8">
            <a
              href={site.links.intezamAutomations}
              className="font-mono text-sm text-signal hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              See full agent catalog on IntezamTech →
            </a>
            {" · "}
            <Link
              href="/projects/intezamtech"
              className="font-mono text-sm text-signal hover:underline"
            >
              Case study
            </Link>
          </p>
        </div>
      </section>

      <section
        id="builds"
        aria-label="Builds"
        className={`chapter-grid ${sectionClass} flex min-h-[100svh] flex-col justify-center px-4 py-24 sm:px-6`}
      >
        <div className="mx-auto w-full max-w-6xl">
          <p className="font-mono text-xs text-signal">CHAPTER_05 // BUILDS</p>
          <h2 className="mt-4 font-display text-4xl font-bold sm:text-5xl">
            Selected work
          </h2>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((p) => (
              <li key={p.slug}>
                <Link href={`/projects/${p.slug}`} className="block h-full">
                  <Panel className="h-full transition-colors hover:border-signal/50">
                    <div
                      className="mb-4 flex h-24 items-center justify-center rounded border border-dashed border-line bg-void font-mono text-xs text-mute"
                      aria-hidden
                    >
                      Placeholder media
                    </div>
                    <h3 className="font-display text-lg font-bold">
                      {p.title}
                      {p.stub ? (
                        <span className="ml-2 font-mono text-xs font-normal text-mute">
                          (stub)
                        </span>
                      ) : null}
                    </h3>
                    <p className="mt-2 text-sm text-mute">{p.oneLiner}</p>
                    {p.role ? (
                      <p className="mt-2 font-mono text-xs text-signal">
                        {p.role}
                      </p>
                    ) : null}
                  </Panel>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-8">
            <Link
              href="/projects"
              className="font-mono text-sm text-signal hover:underline"
            >
              All projects →
            </Link>
          </p>
        </div>
      </section>

      <section
        id="signal"
        aria-label="Contact"
        className={`${sectionClass} flex min-h-[100svh] flex-col justify-center border-b-0 px-4 py-24 sm:px-6`}
      >
        <div className="mx-auto w-full max-w-6xl text-center">
          <p className="font-mono text-xs text-signal">CHAPTER_06 // SIGNAL</p>
          <h2 className="mt-6 font-display text-5xl font-extrabold tracking-widest text-ink sm:text-7xl">
            TRANSMIT
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-mute">
            Building AI systems or need an automation partner? Message The Ai
            Khan — {site.name}, Karachi.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {cinematic ? (
              <TransmitCta
                href={site.links.linkedin}
                className="inline-block rounded border border-signal bg-signal/10 px-8 py-4 font-mono text-sm font-semibold text-signal transition-colors hover:bg-signal/20"
              >
                LinkedIn
              </TransmitCta>
            ) : (
              <a
                href={site.links.linkedin}
                className="rounded border border-signal bg-signal/10 px-8 py-4 font-mono text-sm font-semibold text-signal transition-colors hover:bg-signal/20"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            )}
            <a
              href={site.links.instagram}
              className="rounded border border-line px-8 py-4 font-mono text-sm text-ink transition-colors hover:border-signal/50"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram @areeb.theaikhan
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
