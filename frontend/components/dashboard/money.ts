import type { ExpenseItem } from "@/components/tables/expenseData";

export const MONTHLY_BUDGET = 5000;
export const STARTING_BALANCE = 8000;

export function formatGBP(value: number): string {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  }).format(value);
}

export type CategoryTotal = {
  category: string;
  total: number;
};

export function sumAmounts(items: ExpenseItem[]): number {
  return items.reduce((sum, item) => sum + item.amount, 0);
}

export function getCategoryTotals(items: ExpenseItem[]): CategoryTotal[] {
  const totals = new Map<string, number>();

  for (const item of items) {
    totals.set(item.category, (totals.get(item.category) ?? 0) + item.amount);
  }

  return [...totals.entries()]
    .map(([category, total]) => ({ category, total }))
    .sort((a, b) => b.total - a.total);
}

export type DashboardMetrics = {
  balance: number;
  spent: number;
  budgetLeft: number;
  recurringTotal: number;
  subscriptionCount: number;
};

export function getDashboardMetrics(items: ExpenseItem[]): DashboardMetrics {
  const spent = sumAmounts(items);
  const recurringTotal = sumAmounts(items.filter((item) => item.recurring));
  const subscriptionCount = items.filter(
    (item) => item.category === "Subscriptions" || item.recurring
  ).length;

  return {
    balance: STARTING_BALANCE - spent,
    spent,
    budgetLeft: MONTHLY_BUDGET - spent,
    recurringTotal,
    subscriptionCount,
  };
}
