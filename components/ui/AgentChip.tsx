type Props = { name: string; job: string; featured?: boolean };

export function AgentChip({ name, job, featured }: Props) {
  return (
    <div
      className={`rounded-lg border px-4 py-3 transition-colors ${
        featured
          ? "border-signal/40 bg-signal/5"
          : "border-line/70 bg-panel/40 hover:border-signal/25"
      }`}
    >
      <p className="font-mono text-sm text-signal">{name}</p>
      <p className="mt-1 text-xs leading-relaxed text-mute">{job}</p>
    </div>
  );
}
