import Link from "next/link";
import { site } from "@/content/site";

const links = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/faq", label: "FAQ" },
  { href: "/#signal", label: "Contact" },
];

export function Nav() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-line/80 bg-void/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="font-display text-sm font-bold tracking-widest text-ink uppercase"
        >
          {site.brand}
        </Link>
        <nav className="flex items-center gap-4 sm:gap-6" aria-label="Main">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-mono text-xs text-mute transition-colors hover:text-signal sm:text-sm"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
