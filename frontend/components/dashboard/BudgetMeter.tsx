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
      <h2 className="mb-4 text-lg font-semibold text-foreground">
        Monthly budget
      </h2>
      <div className="mb-3 flex items-end justify-between gap-4">
        <div>
          <p className="text-sm text-foreground/60">Spent</p>
          <p className="text-2xl font-semibold tabular-nums text-foreground">
            {formatGBP(spent)}
          </p>
        </div>
        <div className="text-right">
          <p className="text-sm text-foreground/60">
            {over ? "Over by" : "Left"}
          </p>
          <p
            className={`text-2xl font-semibold tabular-nums ${
              over ? "text-red-600" : "text-green-600"
            }`}
          >
            {formatGBP(Math.abs(remaining))}
          </p>
        </div>
      </div>
      <div className="h-3 overflow-hidden rounded-full bg-neutral-100">
        <div
          className={`h-full rounded-full transition-[width] duration-500 ease-out ${
            over ? "bg-red-500" : "bg-gold"
          }`}
          style={{ width: `${ratio * 100}%` }}
        />
      </div>
      <p className="mt-2 text-sm text-foreground/60">
        Budget {formatGBP(MONTHLY_BUDGET)}
      </p>
    </section>
  );
}
