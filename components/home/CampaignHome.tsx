import Link from "next/link";
import { projects } from "@/content/projects";
import { site } from "@/content/site";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { MagneticLink } from "@/components/ui/MagneticLink";

export function CampaignHome() {
  const featured = projects.filter((p) => p.featured);
  const pilot = projects.find((p) => p.slug === "12pilot");

  return (
    <main id="scroll-root">
      <a href="#work" className="skip-link">Skip to work</a>

      {/* Hero */}
      <section className="hero-pin relative min-h-[100svh] overflow-hidden">
        <div className="hero-media absolute inset-0 mesh-violet" aria-hidden />
        <div className="site-container relative z-10 flex min-h-[100svh] flex-col justify-end pb-16 pt-28 sm:pb-24">
          <div className="hero-title">
            <Eyebrow className="text-ink/70">{site.name}</Eyebrow>
            <p className="billboard mt-4 font-display text-ink">
              THE AI
              <br />
              <span className="text-accent">KHAN</span>
            </p>
            <h1 className="sr-only">The Ai Khan — {site.name}</h1>
            <p className="mt-8 max-w-lg text-lg text-mute sm:text-xl">
              {site.role}, {site.company} · Karachi
            </p>
          </div>
        </div>
      </section>

      {/* Proof strip */}
      <section className="reveal-block border-y border-line bg-surface py-16 sm:py-20">
        <div className="site-container grid gap-12 lg:grid-cols-2 lg:gap-8">
          <div className="flex flex-col justify-center">
            <Eyebrow>Proof</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              {pilot?.title}
            </h2>
            <p className="mt-4 text-mute">{pilot?.oneLiner}</p>
            <Link
              href="/projects/12pilot"
              className="mt-6 inline-block text-sm font-semibold text-accent hover:underline"
            >
              12Pilot case study →
            </Link>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-line p-8 sm:p-10 mesh-warm">
            <Eyebrow>IntezamTech · Certificates</Eyebrow>
            <p className="mt-6 font-display text-6xl font-bold tracking-tighter text-ink sm:text-7xl">
              3,400<span className="text-accent">+</span>
            </p>
            <p className="mt-2 text-sm text-mute">certificates issued</p>
            <ul className="mt-8 space-y-2 text-sm text-mute">
              <li>15+ min manual work → seconds</li>
              <li>~850 hours saved</li>
              <li>Seerat ki Dunya & Sarf ki Dunya</li>
            </ul>
            <Link
              href="/projects/intezamtech"
              className="mt-8 inline-block text-sm font-semibold text-accent hover:underline"
            >
              Full story →
            </Link>
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="py-20 sm:py-32">
        <div className="site-container">
          <div className="reveal-block flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Eyebrow>Selected work</Eyebrow>
              <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
                Products & builds
              </h2>
            </div>
            <Link href="/projects" className="text-sm font-semibold text-accent hover:underline">
              All projects
            </Link>
          </div>
          <div className="mt-16 space-y-20 sm:space-y-28">
            {featured.map((p, i) => (
              <div key={p.slug} className="reveal-block">
                <ProjectCard project={p} index={i} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="reveal-block border-t border-line py-20 sm:py-28">
        <div className="site-container grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Eyebrow>About</Eyebrow>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              AI systems,
              <br />
              shipped.
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pt-8">
            <p className="text-lg leading-relaxed text-mute sm:text-xl">{site.definition}</p>
            <div className="mt-10 flex flex-wrap gap-6 text-sm font-medium">
              <a href={site.links.linkedin} className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href={site.links.instagram} className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href={site.links.github} className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={site.links.twelvePilotAbout} className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">12Pilot About</a>
            </div>
            <Link href="/about" className="mt-8 inline-block text-sm font-semibold text-ink hover:text-accent">
              More about Areeb →
            </Link>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="reveal-block relative overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 mesh-violet opacity-80" aria-hidden />
        <div className="site-container relative text-center">
          <h2 className="font-display text-5xl font-bold tracking-tight sm:text-6xl">
            Let&apos;s build
          </h2>
          <p className="mx-auto mt-6 max-w-md text-mute">
            AI systems or automation — reach out via LinkedIn or Instagram.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <MagneticLink
              href={site.links.linkedin}
              className="rounded-full bg-accent px-10 py-4 text-sm font-semibold text-ink"
            >
              LinkedIn
            </MagneticLink>
            <a
              href={site.links.instagram}
              className="rounded-full border border-ink/30 px-10 py-4 text-sm font-semibold text-ink hover:border-accent"
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
