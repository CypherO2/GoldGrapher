import { CalendarClock } from "lucide-react";
import { formatGBP } from "./money";

const upcoming = [
  { name: "Adobe Creative Cloud", due: "3 Apr", amount: 300 },
  { name: "AWS hosting", due: "5 Apr", amount: 1249.99 },
  { name: "Office rent share", due: "8 Apr", amount: 850 },
  { name: "Phone plan", due: "12 Apr", amount: 35 },
] as const;

export default function UpcomingPayments() {
  return (
    <section>
      <h2 className="mb-4 text-lg font-semibold text-foreground">
        Upcoming payments
      </h2>
      <ul className="divide-y divide-neutral-200 border-y border-neutral-200">
        {upcoming.map((item) => (
          <li
            key={item.name}
            className="flex items-center justify-between gap-4 py-3"
          >
            <div className="flex min-w-0 items-center gap-3">
              <CalendarClock
                className="size-4 shrink-0 text-gold"
                aria-hidden
              />
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-foreground">
                  {item.name}
                </p>
                <p className="text-xs text-foreground/55">Due {item.due}</p>
              </div>
            </div>
            <span className="shrink-0 text-sm font-medium tabular-nums text-foreground">
              {formatGBP(item.amount)}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
