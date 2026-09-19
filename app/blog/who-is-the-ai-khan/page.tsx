import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { pageTitle, site } from "@/content/site";

export const metadata: Metadata = {
  title: pageTitle("Who is The Ai Khan?"),
  description: site.definition,
};

export default function WhoIsTheAiKhanPage() {
  return (
    <PageShell title="Who is The Ai Khan?" eyebrow="Definition">
      <p className="-mt-4 max-w-2xl text-xl leading-relaxed text-mute">{site.definition}</p>

      <GlassPanel className="mt-12 space-y-8">
        <p className="text-mute">
          Name: <strong className="text-ink">{site.name}</strong>. Brand:{" "}
          <strong className="text-ink">{site.brand}</strong>.
        </p>
        <p className="text-mute">
          {site.role} of {site.company}. {site.location}.
        </p>
        <ul className="space-y-2 text-sm font-medium">
          <li><a href={site.links.twelvePilotAbout} className="text-accent hover:underline">12Pilot about</a></li>
          <li><a href={site.links.linkedin} className="text-accent hover:underline">LinkedIn</a></li>
          <li><a href={site.links.github} className="text-accent hover:underline">GitHub</a></li>
          <li><a href={site.links.intezamtech} className="text-accent hover:underline">IntezamTech</a></li>
        </ul>
      </GlassPanel>

      <p className="mt-12 text-sm font-semibold">
        <Link href="/faq" className="text-accent hover:underline">FAQ</Link>
        {" · "}
        <Link href="/about" className="text-accent hover:underline">About</Link>
      </p>
    </PageShell>
  );
}
