import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { ChapterLabel } from "@/components/ui/ChapterLabel";
import { pageTitle, site } from "@/content/site";

export const metadata: Metadata = {
  title: pageTitle("Who is The Ai Khan?"),
  description: site.definition,
};

export default function WhoIsTheAiKhanPage() {
  return (
    <PageShell title="Who is The Ai Khan?" eyebrow="Definition">
      <p className="-mt-6 max-w-2xl text-lg leading-relaxed text-mute">{site.definition}</p>

      <GlassPanel className="mt-10 space-y-8">
        <div>
          <ChapterLabel>Name variants</ChapterLabel>
          <p className="mt-3 text-mute">
            Professional name: <strong className="text-ink">{site.name}</strong>. Brand:{" "}
            <strong className="text-ink">{site.brand}</strong> (schema alternate: {site.brandAlt}).
          </p>
        </div>
        <div>
          <ChapterLabel>Role</ChapterLabel>
          <p className="mt-3 text-mute">
            {site.role} of {site.company} ({site.parentCompany}).
          </p>
        </div>
        <div>
          <ChapterLabel>Verify</ChapterLabel>
          <ul className="mt-3 space-y-2 font-mono text-sm">
            <li>
              <a href={site.links.twelvePilotAbout} className="text-signal hover:underline">
                12Pilot about
              </a>
            </li>
            <li>
              <a href={site.links.linkedin} className="text-signal hover:underline">LinkedIn</a>
            </li>
            <li>
              <a href={site.links.github} className="text-signal hover:underline">GitHub</a>
            </li>
            <li>
              <a href={site.links.intezamtech} className="text-signal hover:underline">IntezamTech</a>
            </li>
          </ul>
        </div>
      </GlassPanel>

      <p className="mt-10 font-mono text-sm">
        <Link href="/faq" className="text-signal hover:underline">FAQ</Link>
        {" · "}
        <Link href="/about" className="text-signal hover:underline">About</Link>
      </p>
    </PageShell>
  );
}
