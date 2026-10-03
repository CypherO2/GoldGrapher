import {
  BadgeDollarSign,
  Cookie,
  KeyRound,
  Laptop,
  Plane,
  Receipt,
  Server,
  Utensils,
  Wine,
  type LucideIcon,
} from "lucide-react";

export const CATEGORIES = [
  "Travel",
  "IT Services",
  "Subscriptions",
  "Client Meal",
  "Professional Development",
  "Office",
  "Team Outing",
  "Equipment",
  "Other",
] as const;

export type Category = (typeof CATEGORIES)[number];

export const RECURRING_FREQUENCIES = [
  "daily",
  "weekly",
  "monthly",
  "yearly",
] as const;

export type RecurringFrequency = (typeof RECURRING_FREQUENCIES)[number];

export type ExpenseItem = {
  id: string;
  name: string;
  category: Category;
  company: string;
  amount: number;
  note?: string;
  recurring?: RecurringFrequency;
};

export type NewExpenseInput = {
  name: string;
  category: Category;
  company: string;
  amount: number;
  note?: string;
  recurring?: RecurringFrequency;
};

const categoryIcons: Record<Category, LucideIcon> = {
  Travel: Plane,
  "IT Services": Server,
  Subscriptions: KeyRound,
  "Client Meal": Utensils,
  "Professional Development": BadgeDollarSign,
  Office: Cookie,
  "Team Outing": Wine,
  Equipment: Laptop,
  Other: Receipt,
};

const categoryIconClass: Record<Category, string> = {
  Travel: "bg-gate text-clay",
  "IT Services": "bg-gate text-gold",
  Subscriptions: "bg-gate text-gold",
  "Client Meal": "bg-gate text-ember",
  "Professional Development": "bg-gate text-emerald-300",
  Office: "bg-gate text-clay",
  "Team Outing": "bg-gate text-clay",
  Equipment: "bg-gate text-gold",
  Other: "bg-gate text-muted",
};

export function getCategoryIcon(category: Category): LucideIcon {
  return categoryIcons[category];
}

export function getCategoryIconClass(category: Category): string {
  return categoryIconClass[category];
}

export function createExpense(input: NewExpenseInput): ExpenseItem {
  return {
    id: crypto.randomUUID(),
    name: input.name,
    category: input.category,
    company: input.company,
    amount: input.amount,
    ...(input.note ? { note: input.note } : {}),
    ...(input.recurring ? { recurring: input.recurring } : {}),
  };
}

export const seedExpenses: ExpenseItem[] = [
  {
    id: "1",
    name: "Flight to NYC",
    category: "Travel",
    company: "American Airlines",
    amount: 545,
  },
  {
    id: "2",
    name: "Cloud Hosting",
    category: "IT Services",
    company: "AWS",
    amount: 1249.99,
    recurring: "monthly",
  },
  {
    id: "3",
    name: "Software Licenses",
    category: "Subscriptions",
    company: "Adobe",
    amount: 300,
    recurring: "monthly",
  },
  {
    id: "4",
    name: "Lunch Meeting",
    category: "Client Meal",
    company: "Gramercy Tavern",
    amount: 140.75,
  },
  {
    id: "5",
    name: "Conference Registration",
    category: "Professional Development",
    company: "JSWorld",
    amount: 925.5,
  },
  {
    id: "6",
    name: "Taxi to Airport",
    category: "Travel",
    company: "Yellow Cab",
    amount: 56.9,
  },
  {
    id: "7",
    name: "Office Snacks",
    category: "Office",
    company: "Instacart",
    amount: 89.76,
  },
  {
    id: "8",
    name: "Team Dinner",
    category: "Team Outing",
    company: "Olive Garden",
    amount: 270,
  },
  {
    id: "9",
    name: "Laptop Purchase",
    category: "Equipment",
    company: "Best Buy",
    amount: 1200,
  },
  {
    id: "10",
    name: "Coffee for Meeting",
    category: "Client Meal",
    company: "Starbucks",
    amount: 34.25,
  },
  {
    id: "11",
    name: "Phone plan",
    category: "Subscriptions",
    company: "EE",
    amount: 35,
    recurring: "monthly",
  },
];
