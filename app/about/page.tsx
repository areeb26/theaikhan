import type { Metadata } from "next";
import Link from "next/link";
import { Panel } from "@/components/ui/Panel";
import { pageTitle, site } from "@/content/site";

export const metadata: Metadata = {
  title: pageTitle("About"),
  description: site.definition,
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="font-display text-4xl font-bold">
        {site.name} — {site.brand}
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-mute">{site.definition}</p>

      <Panel className="mt-10 space-y-4">
        <h2 className="font-mono text-xs text-signal">NOW</h2>
        <p>
          {site.role}, {site.company} · {site.parentCompany}
        </p>
        <h2 className="font-mono text-xs text-signal">PREVIOUSLY</h2>
        <p>{site.previously}</p>
        <h2 className="font-mono text-xs text-signal">WHAT I BUILD</h2>
        <p>
          AI agents, SaaS, and ops systems — including 12Pilot and work
          associated with IntezamTech.
        </p>
        <h2 className="font-mono text-xs text-signal">BASED IN</h2>
        <p>{site.location}</p>
      </Panel>

      <p className="mt-10">
        <Link href="/projects" className="text-signal hover:underline">
          Selected proof →
        </Link>
        {" · "}
        <Link href="/#signal" className="text-signal hover:underline">
          Contact
        </Link>
      </p>
    </main>
  );
}
