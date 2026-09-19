import { type ReactNode } from "react";

type PanelProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

export function Panel({ children, className = "", id }: PanelProps) {
  return (
    <div
      id={id}
      className={`rounded-lg border border-line bg-panel/90 p-6 shadow-[0_0_40px_rgba(124,255,107,0.06)] ${className}`}
    >
      {children}
    </div>
  );
}
