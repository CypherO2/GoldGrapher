"use client";

import { useState } from "react";
import {
  CATEGORIES,
  RECURRING_FREQUENCIES,
  type Category,
  type NewExpenseInput,
  type RecurringFrequency,
} from "@/components/tables/expenseData";

type ExpenseAddModalProps = {
  onClose: () => void;
  onAdd: (input: NewExpenseInput) => void;
};

function isCategory(value: string): value is Category {
  return (CATEGORIES as readonly string[]).includes(value);
}

function isRecurringFrequency(value: string): value is RecurringFrequency {
  return (RECURRING_FREQUENCIES as readonly string[]).includes(value);
}

export default function ExpenseAddModal({
  onClose,
  onAdd,
}: ExpenseAddModalProps) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");
  const [isRecurring, setIsRecurring] = useState(false);
  const [recurringFrequency, setRecurringFrequency] = useState("");

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!isCategory(category)) return;

    const parsedAmount = Number(amount);
    if (!Number.isFinite(parsedAmount) || parsedAmount < 0) return;

    const input: NewExpenseInput = {
      name: name.trim(),
      category,
      company: company.trim(),
      amount: parsedAmount,
      ...(note.trim() ? { note: note.trim() } : {}),
    };

    if (isRecurring && isRecurringFrequency(recurringFrequency)) {
      input.recurring = recurringFrequency;
    }

    onAdd(input);
    onClose();
  }

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/30 p-4">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="add-expense-title"
        className="relative w-full max-w-md rounded-lg border border-black/20 bg-white p-7 shadow-lg"
      >
        <button
          type="button"
          className="absolute top-3 right-4 text-lg text-neutral-600 hover:text-black"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        <h2 id="add-expense-title" className="mb-5 text-xl font-semibold">
          Add expense
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="mb-1 block text-sm font-medium" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="input input-bordered w-full border border-black/20 bg-white"
              placeholder="e.g. Flight to NYC"
            />
          </div>
          <div>
            <label
              className="mb-1 block text-sm font-medium"
              htmlFor="category"
            >
              Category
            </label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
              className="select select-bordered w-full border border-black/20 bg-white"
            >
              <option value="" disabled>
                Select category
              </option>
              {CATEGORIES.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium" htmlFor="company">
              Company
            </label>
            <input
              id="company"
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              required
              className="input input-bordered w-full border border-black/20 bg-white"
              placeholder="e.g. AWS"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium" htmlFor="amount">
              Amount (£)
            </label>
            <input
              id="amount"
              type="number"
              inputMode="decimal"
              min="0"
              step="0.01"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
              className="input input-bordered w-full border border-black/20 bg-white"
              placeholder="e.g. 545.00"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium" htmlFor="note">
              Note
            </label>
            <textarea
              id="note"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              rows={2}
              className="textarea textarea-bordered w-full border border-black/20 bg-white"
              placeholder="Optional"
            />
          </div>
          <div>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                className="checkbox border border-black/20"
                checked={isRecurring}
                onChange={(e) => setIsRecurring(e.target.checked)}
              />
              <span>Recurring</span>
            </label>
            {isRecurring && (
              <div className="mt-2">
                <label
                  className="mb-1 block text-xs font-medium"
                  htmlFor="recurringFrequency"
                >
                  Frequency
                </label>
                <select
                  id="recurringFrequency"
                  required={isRecurring}
                  value={recurringFrequency}
                  onChange={(e) => setRecurringFrequency(e.target.value)}
                  className="select select-bordered w-full border border-black/20 bg-white"
                >
                  <option value="" disabled>
                    Select frequency
                  </option>
                  {RECURRING_FREQUENCIES.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>
          <div className="mt-6 flex justify-end gap-3">
            <button
              type="button"
              className="btn bg-neutral-200 text-neutral-700 hover:bg-neutral-300"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn bg-gold font-semibold text-foreground hover:bg-gold/90"
            >
              Add expense
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
