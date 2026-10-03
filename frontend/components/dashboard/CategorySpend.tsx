import { formatGBP, getCategoryTotals } from "./money";
import type { ExpenseItem } from "@/components/tables/expenseData";

type CategorySpendProps = {
  expenses: ExpenseItem[];
};

export default function CategorySpend({ expenses }: CategorySpendProps) {
  const categories = getCategoryTotals(expenses);
  const max = categories[0]?.total ?? 0;

  return (
    <section className="flex min-h-0 flex-col">
      <h2 className="mb-4 font-display text-lg tracking-wide text-foreground">
        Spend by category
      </h2>
      {categories.length === 0 ? (
        <p className="text-sm text-muted">No spending yet.</p>
      ) : (
        <ul className="flex flex-col gap-3">
          {categories.map(({ category, total }) => {
            const width = max > 0 ? (total / max) * 100 : 0;

            return (
              <li key={category}>
                <div className="mb-1 flex items-baseline justify-between gap-3 text-sm">
                  <span className="text-muted">{category}</span>
                  <span className="font-medium tabular-nums text-foreground">
                    {formatGBP(total)}
                  </span>
                </div>
                <div className="h-2 overflow-hidden bg-gate">
                  <div
                    className="h-full bg-clay transition-[width] duration-500 ease-out"
                    style={{ width: `${width}%` }}
                  />
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
