"use client";

import { useState } from "react";

const CATEGORY_OPTIONS = [
  "Travel",
  "IT Services",
  "Subscriptions",
  "Client Meal",
  "Professional Development",
  "Office",
  "Team Outing",
  "Equipment",
  "Other",
];

const RECURRING_OPTIONS = [
  { value: "daily", label: "Daily" },
  { value: "weekly", label: "Weekly" },
  { value: "monthly", label: "Monthly" },
  { value: "yearly", label: "Yearly" },
];

export default function ExpenseAddModal({
  onClose,
  onAdd,
}: {
  onClose?: () => void;
  onAdd?: (data: any) => void;
}) {
  const [expenseName, setExpenseName] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [amount, setAmount] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [isRecurring, setIsRecurring] = useState(false);
  const [recurringFrequency, setRecurringFrequency] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const expense = {
      expenseName,
      category,
      company,
      amount,
      additionalInfo,
      isRecurring,
      recurringFrequency: isRecurring ? recurringFrequency : null,
    };
    if (onAdd) onAdd(expense);
    if (onClose) onClose();
  }

  return (
    <div className="fixed z-40 inset-0 bg-black/30 flex items-center justify-center">
      <div className="bg-white border border-black/20 rounded-lg shadow-lg w-full max-w-md p-7 relative">
        <button
          className="absolute top-3 right-4 text-lg text-neutral-600 hover:text-black"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        <h2 className="text-xl font-semibold mb-5">Add Expense</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="expenseName"
            >
              Expense Name
            </label>
            <input
              id="expenseName"
              type="text"
              value={expenseName}
              onChange={(e) => setExpenseName(e.target.value)}
              required
              className="input input-bordered w-full bg-white border border-black/20"
              placeholder="e.g. Flight to NYC"
            />
          </div>
          <div>
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="category"
            >
              Category
            </label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
              className="select select-bordered w-full bg-white border border-black/20"
            >
              <option value="" disabled>
                Select Category
              </option>
              {CATEGORY_OPTIONS.map((c) => (
                <option key={c} value={c} className="hover:bg-black/10">
                  {c}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="company">
              Company
            </label>
            <input
              id="company"
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              required
              className="input input-bordered w-full bg-white border border-black/20"
              placeholder="e.g. Zemlak, Daniel and Leannon"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="amount">
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
              className="input input-bordered w-full bg-white border border-black/20"
              placeholder="e.g. 545.00"
            />
          </div>
          <div>
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="additionalInfo"
            >
              Additional Info
            </label>
            <textarea
              id="additionalInfo"
              value={additionalInfo}
              onChange={(e) => setAdditionalInfo(e.target.value)}
              rows={2}
              className="textarea textarea-bordered w-full bg-white border border-black/20"
              placeholder="Any additional notes..."
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
              <span>Recurring Expense</span>
            </label>
            {isRecurring && (
              <div className="mt-2">
                <label
                  className="block text-xs font-medium mb-1"
                  htmlFor="recurringFrequency"
                >
                  Recurs
                </label>
                <select
                  id="recurringFrequency"
                  required={isRecurring}
                  value={recurringFrequency}
                  onChange={(e) => setRecurringFrequency(e.target.value)}
                  className="select select-bordered w-full bg-white border border-black/20"
                >
                  <option value="" disabled>
                    Select Frequency
                  </option>
                  {RECURRING_OPTIONS.map((opt) => (
                    <option
                      key={opt.value}
                      value={opt.value}
                      className="hover:bg-black/20"
                    >
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>
          <div className="flex justify-end mt-6 gap-3">
            <button
              type="button"
              className="btn bg-neutral-200 text-neutral-700 hover:bg-neutral-300"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn bg-gold text-foreground font-semibold hover:bg-gold/90"
            >
              Add Expense
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
