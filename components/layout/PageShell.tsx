import { type ReactNode } from "react";
import Link from "next/link";

type Props = {
  children: ReactNode;
  title?: string;
  eyebrow?: string;
};

export function PageShell({ children, title, eyebrow }: Props) {
  return (
    <div className="min-h-[calc(100svh-5rem)] py-16 sm:py-24">
      <main className="site-container">
        {eyebrow ? <p className="text-xs font-medium uppercase tracking-[0.25em] text-mute">{eyebrow}</p> : null}
        {title ? (
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-6xl">{title}</h1>
        ) : null}
        <div className="mt-12">{children}</div>
        <p className="mt-20 text-sm font-medium">
          <Link href="/" className="text-accent hover:underline">← Home</Link>
        </p>
      </main>
    </div>
  );
}
