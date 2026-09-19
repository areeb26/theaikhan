"use client";

import Link from "next/link";
import { site } from "@/content/site";
import { MagneticLink } from "@/components/ui/MagneticLink";

export function HeroSection() {
  return (
    <section className="hero-pin relative min-h-[100svh] overflow-hidden">
      <div className="hero-media absolute inset-0 mesh-violet" aria-hidden />
      <div
        className="pointer-events-none absolute -right-[20%] top-[15%] h-[70vmin] w-[70vmin] rounded-full bg-accent/20 blur-[120px]"
        aria-hidden
      />

      <div className="site-container relative z-10 flex min-h-[100svh] flex-col justify-end pb-12 pt-24 sm:pb-20 sm:pt-28">
        <div className="hero-title grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="split-line overflow-hidden text-sm font-medium uppercase tracking-[0.3em] text-zinc-300">
              <span className="split-inner block">{site.name}</span>
            </p>
            <div className="billboard mt-4 font-display text-ink">
              <div className="split-line overflow-hidden">
                <span className="split-inner block">THE AI</span>
              </div>
              <div className="split-line overflow-hidden">
                <span className="split-inner block text-accent">KHAN</span>
              </div>
            </div>
            <h1 className="sr-only">The Ai Khan — {site.name}</h1>
            <p className="split-line mt-8 max-w-xl overflow-hidden text-lg text-zinc-300 sm:text-xl">
              <span className="split-inner block">
                {site.role}, {site.company} · Karachi
              </span>
            </p>
          </div>
          <div className="flex flex-col gap-4 lg:col-span-4 lg:items-stretch">
            <MagneticLink
              href={site.links.linkedin}
              className="rounded-full bg-accent px-8 py-4 text-center text-sm font-semibold text-white shadow-[0_0_40px_rgba(139,92,246,0.35)]"
            >
              Work with me
            </MagneticLink>
            <Link
              href="#work"
              className="rounded-full border border-white/20 px-8 py-4 text-center text-sm font-semibold text-ink transition-colors hover:border-accent"
            >
              See selected work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
