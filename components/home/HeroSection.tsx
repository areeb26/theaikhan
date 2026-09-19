"use client";

import Link from "next/link";
import { site } from "@/content/site";
import { MagneticLink } from "@/components/ui/MagneticLink";

export function HeroSection() {
  return (
    <section className="hero-pin relative min-h-[100svh] overflow-hidden">
      <div className="hero-media absolute inset-0 mesh-hero" aria-hidden />
      <div
        className="pointer-events-none absolute -right-[15%] top-[10%] h-[60vmin] w-[60vmin] rounded-full bg-accent/10 blur-[100px]"
        aria-hidden
      />

      <div className="site-container relative z-10 flex min-h-[100svh] flex-col justify-end pb-12 pt-24 sm:pb-20 sm:pt-28">
        <div className="hero-title grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="split-line overflow-hidden text-sm font-medium uppercase tracking-[0.3em] text-mute">
              <span className="split-inner block">{site.name}</span>
            </p>
            <div className="billboard mt-4 font-display text-wordmark-warm">
              <div className="split-line overflow-hidden">
                <span className="split-inner block">THE AI</span>
              </div>
              <div className="split-line overflow-hidden">
                <span className="split-inner block text-accent">KHAN</span>
              </div>
            </div>
            <h1 className="sr-only">The Ai Khan — {site.name}</h1>
            <p className="split-line mt-8 max-w-xl overflow-hidden text-lg text-mute sm:text-xl">
              <span className="split-inner block">
                {site.role}, {site.company} · Karachi
              </span>
            </p>
          </div>
          <div className="flex flex-col gap-4 lg:col-span-4 lg:items-stretch">
            <MagneticLink
              href={site.links.linkedin}
              className="rounded-full bg-accent px-8 py-4 text-center text-sm font-semibold text-ink shadow-[0_0_50px_rgba(255,77,0,0.25)]"
            >
              Work with me
            </MagneticLink>
            <Link
              href="#work"
              className="rounded-full border border-line px-8 py-4 text-center text-sm font-semibold text-ink transition-colors hover:border-accent"
            >
              See selected work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
