import { formatGBP, getCategoryTotals } from "./money";

export default function CategorySpend() {
  const categories = getCategoryTotals();
  const max = categories[0]?.total ?? 0;

  return (
    <section className="flex min-h-0 flex-col">
      <h2 className="mb-4 text-lg font-semibold text-foreground">
        Spend by category
      </h2>
      <ul className="flex flex-col gap-3">
        {categories.map(({ category, total }) => {
          const width = max > 0 ? (total / max) * 100 : 0;

          return (
            <li key={category}>
              <div className="mb-1 flex items-baseline justify-between gap-3 text-sm">
                <span className="text-foreground/80">{category}</span>
                <span className="font-medium tabular-nums text-foreground">
                  {formatGBP(total)}
                </span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-neutral-100">
                <div
                  className="h-full rounded-full bg-gold transition-[width] duration-500 ease-out"
                  style={{ width: `${width}%` }}
                />
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
