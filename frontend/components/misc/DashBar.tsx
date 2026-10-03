type DashBarProps = {
  expenseCount: number;
};

export default function DashBar({ expenseCount }: DashBarProps) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-4">
      <div>
        <h1 className="font-[family-name:var(--font-display)] text-2xl tracking-wide text-foreground">
          This month
        </h1>
        <p className="mt-1 text-sm text-muted">
          {expenseCount} {expenseCount === 1 ? "expense" : "expenses"} tracked
        </p>
      </div>
    </div>
  );
}
