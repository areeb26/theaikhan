"use client";

import Link from "next/link";
import { site } from "@/content/site";
import { WordmarkSplit } from "@/components/motion/WordmarkSplit";
import { MagneticLink } from "@/components/ui/MagneticLink";
import { HeroScene } from "@/components/canvas/HeroScene";

export function HeroSection() {
  return (
    <section className="hero-pin relative min-h-[100svh] overflow-hidden">
      <div className="hero-media absolute inset-0 mesh-hero" aria-hidden />
      <div
        className="pointer-events-none absolute -right-[15%] top-[10%] h-[60vmin] w-[60vmin] rounded-full bg-accent/10 blur-[100px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-[8%] top-[-4%] hidden h-[64vmin] w-[64vmin] sm:block lg:right-[0%] lg:top-[2%]"
        aria-hidden
      >
        <HeroScene />
      </div>

      <div className="site-container relative z-10 flex min-h-[100svh] flex-col justify-end pb-12 pt-24 sm:pb-20 sm:pt-28">
        <div className="hero-title grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="hero-subline overflow-hidden text-sm font-medium uppercase tracking-[0.3em] text-mute">
              <span className="subline-inner block">{site.name}</span>
            </p>
            <div className="billboard mt-4 font-display text-wordmark-warm">
              <div className="block leading-[0.88]">
                <WordmarkSplit text="THE AI" />
              </div>
              <div className="mt-1 block leading-[0.88] text-accent">
                <WordmarkSplit text="KHAN" />
              </div>
            </div>
            <div
              className="hero-accent-line mt-6 h-1 w-full max-w-md origin-left bg-accent"
              aria-hidden
            />
            <h1 className="sr-only">The Ai Khan — {site.name}</h1>
            <p className="hero-subline mt-8 max-w-xl overflow-hidden text-lg text-mute sm:text-xl">
              <span className="subline-inner block">
                {site.role}, {site.company} · Karachi
              </span>
            </p>
          </div>
          <div className="flex flex-col gap-4 lg:col-span-4 lg:items-stretch">
            <MagneticLink
              href={site.links.linkedin}
              className="hero-cta rounded-full bg-accent px-8 py-4 text-center text-sm font-semibold text-ink shadow-[0_0_50px_rgba(255,77,0,0.25)]"
            >
              Work with me
            </MagneticLink>
            <Link
              href="#work"
              className="hero-cta rounded-full border border-line px-8 py-4 text-center text-sm font-semibold text-ink transition-colors hover:border-accent"
            >
              See selected work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
