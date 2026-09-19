import { type ReactNode } from "react";

type Props = { children: ReactNode; className?: string };

export function GlassPanel({ children, className = "" }: Props) {
  return (
    <div
      className={`rounded-3xl border border-line/50 bg-surface/60 p-8 backdrop-blur-md sm:p-10 ${className}`}
    >
      {children}
    </div>
  );
}
