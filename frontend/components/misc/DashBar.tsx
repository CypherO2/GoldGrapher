export default function DashBar() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4">
      <h1 className="text-2xl font-semibold text-foreground">This month</h1>
      <div className="flex items-center gap-2">
        <label htmlFor="month-picker" className="text-sm text-foreground/70">
          Month
        </label>
        <input
          id="month-picker"
          type="month"
          className="rounded border border-neutral-300 bg-background p-2 text-foreground outline-gold"
          defaultValue={new Date().toISOString().slice(0, 7)}
        />
      </div>
    </div>
  );
}
