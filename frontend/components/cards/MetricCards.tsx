interface MetricCardsProps {
  cardTitle: string;
  cardValue: string | number;
  cardColour: string;
}

const colorMap: Record<string, string> = {
  gold: "text-gold",
  green: "text-emerald-400",
  red: "text-ember",
};

export default function MetricCards({
  cardTitle,
  cardValue,
  cardColour,
}: MetricCardsProps) {
  const valueColor = colorMap[cardColour] ?? "text-gold";

  return (
    <div className="naiskos-border flex flex-col items-center bg-surface px-4 py-5">
      <span className="mb-2 text-xs font-medium uppercase tracking-[0.22em] text-muted">
        {cardTitle}
      </span>
      <span className={`text-2xl font-bold tabular-nums ${valueColor}`}>
        {cardValue}
      </span>
    </div>
  );
}
