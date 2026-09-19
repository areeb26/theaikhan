import { type ReactNode } from "react";
import Link from "next/link";

type Props = {
  children: ReactNode;
  title?: string;
  eyebrow?: string;
};

export function PageShell({ children, title, eyebrow }: Props) {
  return (
    <div className="min-h-[calc(100svh-4rem)]">
      <div className="border-b border-white/10 mesh-ink py-20 sm:py-28">
        <main className="site-container">
          {eyebrow ? (
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-zinc-400">{eyebrow}</p>
          ) : null}
          {title ? (
            <h1 className="mt-4 font-display text-5xl font-bold tracking-tight sm:text-7xl">{title}</h1>
          ) : null}
        </main>
      </div>
      <div className="site-container py-16 sm:py-20">{children}</div>
      <p className="site-container pb-16 text-sm font-semibold">
        <Link href="/" className="text-accent hover:underline">← Home</Link>
      </p>
    </div>
  );
}
