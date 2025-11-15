export default function InitialModalContent() {
  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-2xl font-semibold text-foreground mb-2">
        Create a New Session
      </h2>
      <form className="w-full flex flex-col gap-3">
        <label
          className="text-sm font-medium text-foreground"
          htmlFor="session-name"
        >
          Session Name
        </label>
        <input
          id="session-name"
          type="text"
          placeholder="e.g., My Budget Session"
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gold transition"
        />
        <button
          type="submit"
          className="mt-4 w-full bg-gold text-white font-bold py-2 rounded hover:bg-gold/90 transition"
        >
          Create Session
        </button>
      </form>
    </div>
  );
}
