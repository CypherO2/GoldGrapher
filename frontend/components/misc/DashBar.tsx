export default function DashBar() {
  return (
    <div className="flex justify-between items-center mb-8">
      <h2 className="text-2xl font-semibold text-foreground">
        Dashboard Overview
      </h2>
      {/* Calendar picker on far-right */}
      <div className="flex items-center">
        {/* Replace the following input with your preferred calendar component or library */}
        <label htmlFor="month-picker" className="mr-2 text-foreground text-sm">
          Select Month:
        </label>
        <input
          id="month-picker"
          type="month"
          className="border border-gray-300 rounded p-2 outline-gold bg-background text-foreground"
          defaultValue={new Date().toISOString().slice(0, 7)}
          // Optionally: onChange={...}
        />
      </div>
    </div>
  );
}
