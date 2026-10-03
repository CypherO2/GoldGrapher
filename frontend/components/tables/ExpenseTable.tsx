"use client";

import { useState } from "react";
import { Trash2 } from "lucide-react";
import ExpenseAddModal from "@/components/modals/ExpenseModal/ExpenseAdd";
import { formatGBP } from "@/components/dashboard/money";
import {
  getCategoryIcon,
  getCategoryIconClass,
  type ExpenseItem,
  type NewExpenseInput,
} from "@/components/tables/expenseData";

const ROWS_PER_PAGE = 6;

type ExpenseTableProps = {
  expenses: ExpenseItem[];
  onAdd: (input: NewExpenseInput) => void;
  onRemove: (id: string) => void;
};

export default function ExpenseTable({
  expenses,
  onAdd,
  onRemove,
}: ExpenseTableProps) {
  const [page, setPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const totalPages = Math.max(1, Math.ceil(expenses.length / ROWS_PER_PAGE));
  const currentPage = Math.min(page, totalPages);
  const pagedData = expenses.slice(
    (currentPage - 1) * ROWS_PER_PAGE,
    currentPage * ROWS_PER_PAGE
  );

  return (
    <>
      {isModalOpen && (
        <ExpenseAddModal
          onClose={() => setIsModalOpen(false)}
          onAdd={(input) => {
            onAdd(input);
            setPage(1);
          }}
        />
      )}

      <div className="naiskos-border w-full max-w-full overflow-x-auto bg-surface p-4">
        <div className="mb-3 flex items-center justify-between gap-3">
          <h2 className="font-[family-name:var(--font-display)] text-lg tracking-wide text-foreground">
            Expenses
          </h2>
          <button
            type="button"
            className="border border-clay bg-clay px-4 py-2 text-sm font-semibold tracking-wide text-background transition-colors hover:bg-transparent hover:text-clay"
            onClick={() => setIsModalOpen(true)}
          >
            Add expense
          </button>
        </div>

        {expenses.length === 0 ? (
          <p className="py-10 text-center text-sm text-muted">
            No expenses yet. Add one to start tracking.
          </p>
        ) : (
          <>
            <table className="w-full min-w-[640px] text-left text-sm text-foreground">
              <thead>
                <tr className="border-b border-clay/25 bg-gate">
                  <th className="px-3 py-3 font-semibold text-muted">Expense</th>
                  <th className="px-3 py-3 font-semibold text-muted">Company</th>
                  <th className="px-3 py-3 font-semibold text-muted">Amount</th>
                  <th className="px-3 py-3">
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {pagedData.map((item, index) => {
                  const Icon = getCategoryIcon(item.category);

                  return (
                    <tr
                      key={item.id}
                      className={`${
                        index < pagedData.length - 1
                          ? "border-b border-clay/15"
                          : ""
                      } hover:bg-gate/80`}
                    >
                      <td className="px-3 py-3 align-middle">
                        <div className="flex items-center gap-3">
                          <div
                            className={`flex size-11 items-center justify-center ${getCategoryIconClass(
                              item.category
                            )}`}
                          >
                            <Icon className="size-5" aria-hidden />
                          </div>
                          <div>
                            <div className="font-semibold">{item.name}</div>
                            <div className="text-xs text-muted">
                              {item.category}
                              {item.recurring ? ` · ${item.recurring}` : ""}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-3 py-3 align-middle text-muted">
                        {item.company}
                      </td>
                      <td className="px-3 py-3 align-middle font-medium tabular-nums text-gold">
                        {formatGBP(item.amount)}
                      </td>
                      <td className="px-3 py-3 align-middle">
                        <button
                          type="button"
                          aria-label={`Remove ${item.name}`}
                          className="inline-flex items-center gap-1 rounded-sm px-2 py-1 text-sm text-ember transition-colors hover:bg-ember/15"
                          onClick={() => onRemove(item.id)}
                        >
                          <Trash2 className="size-4" aria-hidden />
                          Remove
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            <div className="mt-4 flex items-center justify-end gap-2 px-1">
              <button
                type="button"
                className="border border-clay bg-clay px-3 py-1 text-sm font-semibold text-background transition-colors hover:bg-transparent hover:text-clay disabled:cursor-not-allowed disabled:opacity-50"
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              <span className="text-sm text-muted">
                Page {currentPage} of {totalPages}
              </span>
              <button
                type="button"
                className="border border-clay bg-clay px-3 py-1 text-sm font-semibold text-background transition-colors hover:bg-transparent hover:text-clay disabled:cursor-not-allowed disabled:opacity-50"
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
