"use client";

import { useState } from "react";
import MetricCards from "@/components/cards/MetricCards";
import BudgetMeter from "@/components/dashboard/BudgetMeter";
import CategorySpend from "@/components/dashboard/CategorySpend";
import UpcomingPayments from "@/components/dashboard/UpcomingPayments";
import { formatGBP, getDashboardMetrics } from "@/components/dashboard/money";
import DashBar from "@/components/misc/DashBar";
import ExpenseTable from "@/components/tables/ExpenseTable";
import {
  createExpense,
  seedExpenses,
  type ExpenseItem,
  type NewExpenseInput,
} from "@/components/tables/expenseData";

export default function DashboardClient() {
  const [expenses, setExpenses] = useState<ExpenseItem[]>(seedExpenses);
  const metrics = getDashboardMetrics(expenses);

  function handleAdd(input: NewExpenseInput) {
    setExpenses((prev) => [...prev, createExpense(input)]);
  }

  function handleRemove(id: string) {
    setExpenses((prev) => prev.filter((item) => item.id !== id));
  }

  const cards = [
    {
      cardTitle: "Balance",
      cardValue: formatGBP(metrics.balance),
      cardColour: metrics.balance >= 0 ? "gold" : "red",
    },
    {
      cardTitle: "Spent",
      cardValue: formatGBP(metrics.spent),
      cardColour: "red",
    },
    {
      cardTitle: "Budget left",
      cardValue: formatGBP(metrics.budgetLeft),
      cardColour: metrics.budgetLeft >= 0 ? "green" : "red",
    },
    {
      cardTitle: "Recurring",
      cardValue: formatGBP(metrics.recurringTotal),
      cardColour: "gold",
    },
    {
      cardTitle: "Subscriptions",
      cardValue: metrics.subscriptionCount,
      cardColour: "green",
    },
  ] as const;

  return (
    <div className="flex flex-col gap-10 bg-background px-6 py-8 md:px-10">
      <DashBar expenseCount={expenses.length} />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {cards.map((card) => (
          <MetricCards
            key={card.cardTitle}
            cardTitle={card.cardTitle}
            cardValue={card.cardValue}
            cardColour={card.cardColour}
          />
        ))}
      </div>

      <div className="grid gap-10 lg:grid-cols-2">
        <CategorySpend expenses={expenses} />
        <div className="flex flex-col gap-10">
          <BudgetMeter spent={metrics.spent} />
          <UpcomingPayments expenses={expenses} />
        </div>
      </div>

      <ExpenseTable
        expenses={expenses}
        onAdd={handleAdd}
        onRemove={handleRemove}
      />
    </div>
  );
}
