import Link from "next/link";
import { site } from "@/content/site";

const social = [
  { href: site.links.linkedin, label: "LinkedIn" },
  { href: site.links.instagram, label: "Instagram" },
  { href: site.links.github, label: "GitHub" },
  { href: site.links.twelvePilotAbout, label: "12Pilot About" },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-panel">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <p className="font-display text-lg font-bold text-ink">{site.brand}</p>
        <p className="mt-2 max-w-xl text-sm text-mute">{site.tagline}</p>
        <ul className="mt-6 flex flex-wrap gap-4 font-mono text-sm">
          {social.map((s) => (
            <li key={s.href}>
              <a
                href={s.href}
                className="text-signal hover:underline"
                rel="noopener noreferrer"
                target="_blank"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-8 font-mono text-xs text-mute">
          © {new Date().getFullYear()} {site.name} · {site.location}
        </p>
        <p className="mt-2 font-mono text-xs text-mute">
          <Link href="/blog/who-is-the-ai-khan" className="hover:text-signal">
            Who is The Ai Khan?
          </Link>
          {" · "}
          <Link href="/llms.txt" className="hover:text-signal">
            llms.txt
          </Link>
        </p>
      </div>
    </footer>
  );
}
