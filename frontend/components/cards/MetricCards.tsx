interface MetricCardsProps {
  cardTitle: string;
  cardValue: string | number;
  cardColour: string;
}

const colorMap: Record<string, string> = {
  gold: "text-gold",
  green: "text-green-600",
  red: "text-red-600",
};

export default function MetricCards({
  cardTitle,
  cardValue,
  cardColour,
}: MetricCardsProps) {
  const valueColor = colorMap[cardColour] ?? "text-gold";

  return (
    <div className="bg-white shadow-md shadow-gold rounded-lg p-6 flex flex-col items-center border border-gold">
      <span className="text-foreground text-lg font-semibold mb-2">
        {cardTitle}
      </span>
      <span className={`text-2xl font-bold ${valueColor}`}>{cardValue}</span>
    </div>
  );
}
