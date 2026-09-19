import { type ReactNode } from "react";
import Link from "next/link";

type Props = {
  children: ReactNode;
  title?: string;
  eyebrow?: string;
};

export function PageShell({ children, title, eyebrow }: Props) {
  return (
    <div className="relative min-h-[calc(100svh-3.5rem)]">
      <div className="pointer-events-none absolute inset-0 hud-mesh opacity-40" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(124,255,107,0.06),transparent_55%)]" />
      <main className="site-container relative py-16 sm:py-20">
        {eyebrow ? (
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-mute">
            {eyebrow}
          </p>
        ) : null}
        {title ? (
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            {title}
          </h1>
        ) : null}
        <div className="mt-10">{children}</div>
        <p className="mt-16 font-mono text-xs text-mute">
          <Link href="/" className="text-signal hover:underline">
            ← Command center
          </Link>
        </p>
      </main>
    </div>
  );
}
