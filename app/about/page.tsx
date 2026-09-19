import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { ChapterLabel } from "@/components/ui/ChapterLabel";
import { MetricStat } from "@/components/ui/MetricStat";
import { pageTitle, site } from "@/content/site";

export const metadata: Metadata = {
  title: pageTitle("About"),
  description: site.definition,
};

export default function AboutPage() {
  return (
    <PageShell title={`${site.name}`} eyebrow={site.brand}>
      <p className="-mt-6 max-w-2xl text-lg leading-relaxed text-mute">{site.definition}</p>

      <div className="mt-12 grid gap-4 sm:grid-cols-3">
        <MetricStat label="Role" value="CTO & Cofounder" />
        <MetricStat label="Company" value="12Pilot" />
        <MetricStat label="Base" value="Karachi" />
      </div>

      <GlassPanel className="mt-10 space-y-8">
        <div>
          <ChapterLabel>Now</ChapterLabel>
          <p className="mt-3 text-ink">
            {site.role}, {site.company} · {site.parentCompany}
          </p>
        </div>
        <div>
          <ChapterLabel>Previously</ChapterLabel>
          <p className="mt-3 text-mute">{site.previously}</p>
        </div>
        <div>
          <ChapterLabel>Focus</ChapterLabel>
          <p className="mt-3 text-mute">
            AI agents, SaaS, and ops systems — 12Pilot and IntezamTech-associated
            automation (including certificate issuance at scale).
          </p>
        </div>
      </GlassPanel>

      <p className="mt-10 font-mono text-sm">
        <Link href="/projects/intezamtech" className="text-signal hover:underline">
          IntezamTech case study →
        </Link>
        {" · "}
        <Link href="/projects/12pilot" className="text-signal hover:underline">
          12Pilot →
        </Link>
        {" · "}
        <Link href="/#signal" className="text-signal hover:underline">Contact</Link>
      </p>
    </PageShell>
  );
}
