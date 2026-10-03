import { formatGBP, MONTHLY_BUDGET } from "./money";

type BudgetMeterProps = {
  spent: number;
};

export default function BudgetMeter({ spent }: BudgetMeterProps) {
  const remaining = MONTHLY_BUDGET - spent;
  const ratio = Math.min(spent / MONTHLY_BUDGET, 1);
  const over = remaining < 0;

  return (
    <section>
      <h2 className="mb-4 font-[family-name:var(--font-display)] text-lg tracking-wide text-foreground">
        Monthly budget
      </h2>
      <div className="mb-3 flex items-end justify-between gap-4">
        <div>
          <p className="text-sm text-muted">Spent</p>
          <p className="text-2xl font-semibold tabular-nums text-foreground">
            {formatGBP(spent)}
          </p>
        </div>
        <div className="text-right">
          <p className="text-sm text-muted">{over ? "Over by" : "Left"}</p>
          <p
            className={`text-2xl font-semibold tabular-nums ${
              over ? "text-ember" : "text-gain"
            }`}
          >
            {formatGBP(Math.abs(remaining))}
          </p>
        </div>
      </div>
      <div className="h-3 overflow-hidden bg-gate">
        <div
          className={`h-full transition-[width] duration-500 ease-out ${
            over ? "bg-ember" : "bg-clay"
          }`}
          style={{ width: `${ratio * 100}%` }}
        />
      </div>
      <p className="mt-2 text-sm text-muted">
        Budget {formatGBP(MONTHLY_BUDGET)}
      </p>
    </section>
  );
}
