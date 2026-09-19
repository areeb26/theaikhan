import Link from "next/link";
import { projects } from "@/content/projects";
import { site } from "@/content/site";
import { HeroSection } from "@/components/home/HeroSection";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { MagneticLink } from "@/components/ui/MagneticLink";
import { MockFrame } from "@/components/ui/MockFrame";

export function CampaignHome() {
  const featured = projects.filter((p) => p.featured);
  const pilot = projects.find((p) => p.slug === "12pilot");

  return (
    <main id="scroll-root">
      <a href="#work" className="skip-link">Skip to work</a>

      <HeroSection />

      {/* Proof */}
      <section className="reveal-block bleed-x border-y border-white/10 bg-surface">
        <div className="site-container grid min-h-[min(80vh,720px)] lg:grid-cols-2">
          <div className="flex flex-col justify-center border-b border-white/10 py-16 lg:border-b-0 lg:border-r lg:py-24 lg:pr-16">
            <Eyebrow>12Pilot · CTO</Eyebrow>
            <h2 className="mt-6 font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              {pilot?.title}
            </h2>
            <p className="mt-6 max-w-md text-lg text-mute">{pilot?.oneLiner}</p>
            <Link
              href="/projects/12pilot"
              className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-semibold text-accent"
            >
              Case study <span aria-hidden>→</span>
            </Link>
            <a
              href={site.links.twelvePilotAbout}
              className="mt-3 block text-sm text-zinc-400 hover:text-accent"
              target="_blank"
              rel="noopener noreferrer"
            >
              Team proof on 12pilot.net/about
            </a>
          </div>
          <div className="relative flex flex-col justify-center overflow-hidden py-16 lg:py-24 lg:pl-16">
            <p
              className="pointer-events-none absolute -right-4 top-1/2 -translate-y-1/2 select-none font-display stat-giant text-accent/15"
              aria-hidden
            >
              3,400+
            </p>
            <Eyebrow>IntezamTech</Eyebrow>
            <p className="stat-giant mt-4 font-display text-ink">
              3,400<span className="text-accent">+</span>
            </p>
            <p className="mt-2 text-lg text-zinc-300">certificates issued</p>
            <ul className="mt-8 space-y-3 text-base text-mute">
              <li>Name-on-certificate app + issuance automation</li>
              <li>Seerat ki Dunya & Sarf ki Dunya</li>
              <li>15+ min → seconds · ~850 hours saved</li>
            </ul>
            <Link
              href="/projects/intezamtech"
              className="mt-10 inline-flex w-fit rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-ink hover:bg-accent hover:text-white"
            >
              Certificate system story
            </Link>
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="py-24 sm:py-36">
        <div className="site-container">
          <div className="reveal-block flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <Eyebrow>Selected work</Eyebrow>
              <h2 className="mt-4 font-display text-5xl font-bold sm:text-6xl">Products</h2>
            </div>
            <Link href="/projects" className="text-sm font-semibold text-accent">All projects →</Link>
          </div>
          <div className="mt-20 space-y-28 sm:space-y-36">
            {featured.map((p, i) => (
              <div key={p.slug} className="reveal-block">
                <ProjectCard project={p} index={i} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="reveal-block bleed-x mesh-ink py-24 sm:py-32">
        <div className="site-container grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow>About</Eyebrow>
            <h2 className="mt-4 font-display text-5xl font-bold leading-[1.05] sm:text-6xl">
              Built in Karachi.
              <br />
              <span className="text-accent">Shipped globally.</span>
            </h2>
          </div>
          <div>
            <p className="text-xl leading-relaxed text-zinc-300">{site.definition}</p>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm font-semibold">
              <a href={site.links.linkedin} className="hover:text-accent" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href={site.links.instagram} className="hover:text-accent" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href={site.links.github} className="hover:text-accent" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={site.links.intezamtech} className="hover:text-accent" target="_blank" rel="noopener noreferrer">IntezamTech</a>
            </div>
            <Link href="/about" className="mt-8 inline-block font-semibold text-accent">Full about →</Link>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="reveal-block relative overflow-hidden py-28 sm:py-40">
        <div className="absolute inset-0 mesh-violet" aria-hidden />
        <div className="site-container relative">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <h2 className="font-display text-5xl font-bold sm:text-7xl">
              Let&apos;s build something ambitious.
            </h2>
            <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
              <MagneticLink
                href={site.links.linkedin}
                className="rounded-full bg-accent px-10 py-4 text-center text-sm font-semibold text-white"
              >
                LinkedIn
              </MagneticLink>
              <a
                href={site.links.instagram}
                className="rounded-full border border-white/25 px-10 py-4 text-center text-sm font-semibold hover:border-accent"
                target="_blank"
                rel="noopener noreferrer"
              >
                @areeb.theaikhan
              </a>
            </div>
          </div>
          <div className="mt-16 hidden lg:block">
            <MockFrame slug="12pilot" title="12Pilot" className="max-w-2xl opacity-60" />
          </div>
        </div>
      </section>
    </main>
  );
}
