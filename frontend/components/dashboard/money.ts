import { expenseData } from "@/components/tables/expenseData";

export function parseMoney(amount: string): number {
  return Number(amount.replace(/[^0-9.-]/g, "")) || 0;
}

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

export function getCategoryTotals(
  items: typeof expenseData = expenseData
): CategoryTotal[] {
  const totals = new Map<string, number>();

  for (const item of items) {
    totals.set(
      item.category,
      (totals.get(item.category) ?? 0) + parseMoney(item.amount)
    );
  }

  return [...totals.entries()]
    .map(([category, total]) => ({ category, total }))
    .sort((a, b) => b.total - a.total);
}
