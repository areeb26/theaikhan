import { type ReactNode } from "react";

type Props = { children: ReactNode; className?: string; id?: string };

export function GlassPanel({ children, className = "", id }: Props) {
  return (
    <div
      id={id}
      className={`rounded-2xl border border-line/60 bg-panel/50 p-6 shadow-[0_8px_40px_rgba(0,0,0,0.35)] backdrop-blur-md sm:p-8 ${className}`}
    >
      {children}
    </div>
  );
}
