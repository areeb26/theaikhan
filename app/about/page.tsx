import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageScrollMotion } from "@/components/motion/PageScrollMotion";
import { PageShell } from "@/components/layout/PageShell";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { pageTitle, site } from "@/content/site";

export const metadata: Metadata = {
  title: pageTitle("About"),
  description: site.definition,
};

export default function AboutPage() {
  return (
    <PageScrollMotion>
    <PageShell title={site.name} eyebrow={site.brand}>
      <div className="-mt-4 grid gap-12 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-4">
          <div className="portrait-frame relative mx-auto aspect-[4/5] w-full max-w-xs overflow-hidden rounded-2xl border border-white/10 bg-surface shadow-[0_40px_120px_rgba(0,0,0,0.55)]">
            <Image
              src="/images/areeb.jpg"
              alt={`Portrait of ${site.name}`}
              fill
              sizes="(min-width: 1024px) 20rem, 80vw"
              className="portrait-img object-cover"
              priority
            />
            <div className="pointer-events-none absolute inset-0 portrait-tint" aria-hidden />
          </div>
        </div>
        <div className="lg:col-span-8">
          <p className="text-xl leading-relaxed text-mute">{site.definition}</p>

          <GlassPanel className="mt-12 space-y-8">
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-mute">Now</p>
              <p className="mt-2 text-lg text-ink">
                {site.role}, {site.company} · {site.parentCompany}
              </p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-mute">Previously</p>
              <p className="mt-2 text-mute">{site.previously}</p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-mute">Location</p>
              <p className="mt-2 text-mute">{site.location}</p>
            </div>
          </GlassPanel>

          <p className="mt-12 flex flex-wrap gap-6 text-sm font-semibold">
            <Link href="/projects/intezamtech" className="text-accent hover:underline">IntezamTech</Link>
            <Link href="/projects/12pilot" className="text-accent hover:underline">12Pilot</Link>
            <Link href="/#contact" className="text-accent hover:underline">Contact</Link>
          </p>
        </div>
      </div>
    </PageShell>
    </PageScrollMotion>
  );
}
