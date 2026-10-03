type DashBarProps = {
  expenseCount: number;
};

export default function DashBar({ expenseCount }: DashBarProps) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-4">
      <div>
        <h1 className="text-2xl font-semibold text-foreground">This month</h1>
        <p className="mt-1 text-sm text-foreground/60">
          {expenseCount} {expenseCount === 1 ? "expense" : "expenses"} tracked
        </p>
      </div>
    </div>
  );
}
