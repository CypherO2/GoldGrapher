import { CalendarClock } from "lucide-react";
import { formatGBP } from "./money";
import type { ExpenseItem } from "@/components/tables/expenseData";

type UpcomingPaymentsProps = {
  expenses: ExpenseItem[];
};

const frequencyLabel: Record<string, string> = {
  daily: "Daily",
  weekly: "Weekly",
  monthly: "Monthly",
  yearly: "Yearly",
};

export default function UpcomingPayments({ expenses }: UpcomingPaymentsProps) {
  const upcoming = expenses
    .filter((item) => item.recurring)
    .sort((a, b) => b.amount - a.amount);

  return (
    <section>
      <h2 className="mb-4 font-[family-name:var(--font-display)] text-lg tracking-wide text-foreground">
        Upcoming payments
      </h2>
      {upcoming.length === 0 ? (
        <p className="text-sm text-muted">
          Mark an expense as recurring to see it here.
        </p>
      ) : (
        <ul className="divide-y divide-clay/20 border-y border-clay/25">
          {upcoming.map((item) => (
            <li
              key={item.id}
              className="flex items-center justify-between gap-4 py-3"
            >
              <div className="flex min-w-0 items-center gap-3">
                <CalendarClock
                  className="size-4 shrink-0 text-clay"
                  aria-hidden
                />
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-foreground">
                    {item.name}
                  </p>
                  <p className="text-xs text-muted">
                    {item.recurring
                      ? frequencyLabel[item.recurring]
                      : "Recurring"}{" "}
                    · {item.company}
                  </p>
                </div>
              </div>
              <span className="shrink-0 text-sm font-medium tabular-nums text-gold">
                {formatGBP(item.amount)}
              </span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
