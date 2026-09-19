import type { Metadata } from "next";
import Link from "next/link";
import { Panel } from "@/components/ui/Panel";
import { projects } from "@/content/projects";
import { pageTitle } from "@/content/site";

export const metadata: Metadata = {
  title: pageTitle("Projects"),
  description:
    "Projects and products by Areeb Ahmed Khan (The Ai Khan): 12Pilot, IntezamTech, and selected builds.",
};

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h1 className="font-display text-4xl font-bold">Projects</h1>
      <p className="mt-4 max-w-2xl text-mute">
        Curated proof — companies, automations, and selected builds.
      </p>
      <ul className="mt-12 grid gap-6 sm:grid-cols-2">
        {projects.map((p) => (
          <li key={p.slug}>
            <Link href={`/projects/${p.slug}`}>
              <Panel className="h-full hover:border-signal/40">
                <h2 className="font-display text-2xl font-bold">
                  {p.title}
                  {p.stub ? (
                    <span className="ml-2 font-mono text-xs font-normal text-mute">
                      stub
                    </span>
                  ) : null}
                </h2>
                <p className="mt-2 text-sm text-mute">{p.oneLiner}</p>
                {p.role ? (
                  <p className="mt-3 font-mono text-xs text-signal">{p.role}</p>
                ) : null}
              </Panel>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
