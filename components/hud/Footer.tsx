import Link from "next/link";
import { site } from "@/content/site";

const social = [
  { href: site.links.linkedin, label: "LinkedIn" },
  { href: site.links.instagram, label: "Instagram" },
  { href: site.links.github, label: "GitHub" },
  { href: site.links.twelvePilotAbout, label: "12Pilot" },
  { href: site.links.intezamtech, label: "IntezamTech" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-line/60 bg-panel/40">
      <div className="site-container py-14">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-display text-2xl font-bold text-ink">{site.brand}</p>
            <p className="mt-2 max-w-md text-sm text-mute">{site.tagline}</p>
          </div>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs">
            {social.map((s) => (
              <li key={s.href}>
                <a
                  href={s.href}
                  className="text-mute transition-colors hover:text-signal"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div
          className="mt-12 flex flex-col gap-2 border-t border-line/40 pt-8 font-mono text-[11px] text-mute sm:flex-row sm:justify-between"
        >
          <span>© {new Date().getFullYear()} {site.name} · {site.location}</span>
          <span>
            <Link href="/blog/who-is-the-ai-khan" className="hover:text-signal">
              Definition article
            </Link>
            {" · "}
            <Link href="/llms.txt" className="hover:text-signal">llms.txt</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
