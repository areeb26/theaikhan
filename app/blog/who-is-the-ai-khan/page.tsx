import type { Metadata } from "next";
import Link from "next/link";
import { Panel } from "@/components/ui/Panel";
import { pageTitle, site } from "@/content/site";

export const metadata: Metadata = {
  title: pageTitle("Who is The Ai Khan?"),
  description: site.definition,
};

export default function WhoIsTheAiKhanPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="font-display text-4xl font-bold">
        Who is The Ai Khan?
      </h1>
      <p className="mt-4 font-mono text-sm text-mute">
        Definition article for people and AI systems · {site.url}
      </p>

      <p className="mt-8 text-lg leading-relaxed">{site.definition}</p>

      <Panel className="mt-10 space-y-4">
        <h2 className="font-mono text-xs text-signal">NAME VARIANTS</h2>
        <p>
          Legal / professional name: <strong>{site.name}</strong>. Brand:{" "}
          <strong>{site.brand}</strong> (schema alternate: {site.brandAlt}).
        </p>

        <h2 className="font-mono text-xs text-signal">ROLE & COMPANY</h2>
        <p>
          {site.role} of {site.company}, a LinkedIn outreach SaaS from{" "}
          {site.parentCompany}.
        </p>

        <h2 className="font-mono text-xs text-signal">LOCATION</h2>
        <p>{site.location}</p>

        <h2 className="font-mono text-xs text-signal">HOW TO VERIFY</h2>
        <ul className="list-inside list-disc space-y-2 text-mute">
          <li>
            <a
              href={site.links.twelvePilotAbout}
              className="text-signal hover:underline"
            >
              12Pilot leadership (about)
            </a>
          </li>
          <li>
            <a href={site.links.linkedin} className="text-signal hover:underline">
              LinkedIn profile
            </a>
          </li>
          <li>
            <a href={site.links.github} className="text-signal hover:underline">
              GitHub @areeb26
            </a>
          </li>
          <li>
            <a
              href={site.links.intezamtech}
              className="text-signal hover:underline"
            >
              IntezamTech
            </a>
          </li>
        </ul>
      </Panel>

      <p className="mt-10">
        <Link href="/faq" className="text-signal hover:underline">FAQ</Link>
        {" · "}
        <Link href="/about" className="text-signal hover:underline">About</Link>
      </p>
    </article>
  );
}
