type Props = { name: string; job: string };

export function AgentChip({ name, job }: Props) {
  return (
    <div className="rounded-2xl border border-line/80 bg-surface/80 px-5 py-4 backdrop-blur-sm">
      <p className="font-medium text-ink">{name}</p>
      <p className="mt-1 text-sm text-mute">{job}</p>
    </div>
  );
}
