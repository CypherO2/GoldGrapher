"use client";
import { useState } from "react";
import { DynamicIcon } from "lucide-react/dynamic";
import { expenseData as initialExpenseData, ExpenseItem } from "./expenseData";
import ExpenseAddModal from "../modals/ExpenseModal/ExpenseAdd";

const ROWS_PER_PAGE = 6;

// Map category to icon name
function getIconForCategory(category: string): string {
  const iconMap: Record<string, string> = {
    Travel: "plane",
    "IT Services": "server",
    Subscriptions: "key-round",
    "Client Meal": "utensils",
    "Professional Development": "badge-dollar-sign",
    Office: "cookie",
    "Team Outing": "wine",
    Equipment: "laptop",
    Other: "receipt",
  };
  return iconMap[category] || "receipt";
}

// Map category to icon background color
function getIconBgColorForCategory(category: string): string {
  const colorMap: Record<string, string> = {
    Travel: "bg-black-100 text-black-500",
    "IT Services": "bg-indigo-100 text-indigo-500",
    Subscriptions: "bg-yellow-100 text-yellow-600",
    "Client Meal": "bg-rose-100 text-rose-500",
    "Professional Development": "bg-green-100 text-green-600",
    Office: "bg-orange-100 text-orange-500",
    "Team Outing": "bg-pink-100 text-pink-500",
    Equipment: "bg-lime-100 text-lime-700",
    Other: "bg-neutral-100 text-neutral-600",
  };
  return colorMap[category] || "bg-neutral-100 text-neutral-600";
}

export default function VisualTable() {
  const [page, setPage] = useState(1);
  const [expenses, setExpenses] = useState<ExpenseItem[]>(initialExpenseData);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const totalPages = Math.ceil(expenses.length / ROWS_PER_PAGE);

  const pagedData = expenses.slice(
    (page - 1) * ROWS_PER_PAGE,
    page * ROWS_PER_PAGE
  );

  function goToPage(newPage: number) {
    if (newPage < 1 || newPage > totalPages) return;
    setPage(newPage);
  }

  function handleAddExpense() {
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  function handleAddExpenseData(data: any) {
    const newExpense: ExpenseItem = {
      id: String(expenses.length + 1),
      expenseName: data.expenseName,
      category: data.category,
      iconName: getIconForCategory(data.category),
      iconBgColor: getIconBgColorForCategory(data.category),
      companyName: data.company,
      vendor: data.company, // Using company as vendor for now
      amount: `$${parseFloat(data.amount).toFixed(2)}`,
      amountColor: "text-black",
    };
    setExpenses([...expenses, newExpense]);
    // Reset to first page if we're on a later page and it's now empty
    if (page > 1 && pagedData.length === ROWS_PER_PAGE) {
      setPage(1);
    }
  }

  return (
    <>
      {isModalOpen && (
        <ExpenseAddModal
          onClose={handleCloseModal}
          onAdd={handleAddExpenseData}
        />
      )}
      <div className="overflow-x-auto rounded-lg bg-background p-4 w-full max-w-full">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-semibold">Expenses</h2>
          <button
            className="btn btn-sm rounded bg-gold text-foreground hover:bg-gold/80 px-5 py-2 font-semibold shadow"
            onClick={handleAddExpense}
          >
            + Add Expense
          </button>
        </div>
        <table className="min-w-[700px] w-full text-sm text-left text-foreground bg-background">
          <thead>
            <tr className="bg-neutral-50 border-b border-neutral-200">
              <th className="px-3 py-3">
                <label>
                  <input
                    type="checkbox"
                    className="accent-gold w-4 h-4 rounded"
                  />
                </label>
              </th>
              <th className="px-3 py-3 font-semibold tracking-wide">Expense</th>
              <th className="px-3 py-3 font-semibold tracking-wide">Company</th>
              <th className="px-3 py-3 font-semibold tracking-wide">Amount</th>
              <th className="px-3 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {pagedData.map((item, index) => (
              <tr
                key={item.id}
                className={`${
                  index < pagedData.length - 1 ? "border-b" : ""
                } hover:bg-neutral-50 transition-colors`}
              >
                <td className="px-3 py-3 align-middle">
                  <label>
                    <input
                      type="checkbox"
                      className="accent-gold w-4 h-4 rounded"
                    />
                  </label>
                </td>
                <td className="px-3 py-3 align-middle">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center">
                      <div
                        className={`mask mask-squircle w-12 h-12 flex items-center justify-center ${
                          item.iconBgColor || ""
                        }`}
                      >
                        <DynamicIcon
                          name={item.iconName as any}
                          className={
                            item.iconBgColor ? "w-7 h-7" : "mx-auto my-auto"
                          }
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold">{item.expenseName}</div>
                      <div className="text-xs text-neutral-500">
                        {item.category}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-3 py-3 align-middle">
                  {item.companyName}
                  <br />
                  <span className="badge badge-outline border-gold text-gold mt-1 bg-gold/10">
                    {item.vendor}
                  </span>
                </td>
                <td
                  className={`px-3 py-3 align-middle ${item.amountColor} font-medium`}
                >
                  {item.amount}
                </td>
                <td className="px-3 py-3 align-middle">
                  <button className="btn btn-xs rounded bg-gold text-foreground hover:bg-gold/80 px-4 py-1 font-semibold shadow">
                    Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-end items-center mt-4 px-1">
          <button
            className="btn btn-xs rounded bg-gold text-foreground hover:bg-gold/80 px-3 py-1 font-semibold shadow disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => goToPage(page - 1)}
            disabled={page === 1}
          >
            Previous
          </button>
          <span className="text-sm text-neutral-700 mx-2">
            Page {page} of {totalPages}
          </span>
          <button
            className="btn btn-xs rounded bg-gold text-foreground hover:bg-gold/80 px-3 py-1 font-semibold shadow disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => goToPage(page + 1)}
            disabled={page === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}
