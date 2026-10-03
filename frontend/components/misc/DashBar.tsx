type DashBarProps = {
  expenseCount: number;
};

export default function DashBar({ expenseCount }: DashBarProps) {
  return (
    <div>
      <h1 className="font-display text-2xl tracking-wide text-foreground">
        This month
      </h1>
      <p className="mt-1 text-sm text-muted">
        {expenseCount} {expenseCount === 1 ? "expense" : "expenses"} tracked
      </p>
    </div>
  );
}
