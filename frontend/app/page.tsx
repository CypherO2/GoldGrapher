import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <section className="relative flex min-h-screen flex-col justify-end overflow-hidden px-8 pb-16 pt-24 md:justify-center md:px-16 md:pb-24 md:pt-0 lg:px-24">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_75%_15%,rgba(226,164,31,0.22),transparent_55%),radial-gradient(ellipse_45%_35%_at_5%_90%,rgba(23,23,23,0.06),transparent_50%),linear-gradient(160deg,#ffffff_0%,#fafafa_55%,#f5f5f5_100%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-16 top-1/4 h-[28rem] w-[28rem] rounded-full border border-gold/25 md:right-8 md:h-[36rem] md:w-[36rem]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-4 top-[30%] h-[20rem] w-[20rem] rounded-full border border-gold/15 md:right-24 md:h-[26rem] md:w-[26rem]"
        aria-hidden
      />
      <div
        className="home-rise pointer-events-none absolute bottom-0 right-0 h-48 w-full bg-[linear-gradient(90deg,transparent_0%,rgba(226,164,31,0.08)_40%,rgba(226,164,31,0.18)_100%)] md:h-64"
        aria-hidden
      />

      <div className="relative z-10 max-w-xl">
        <p className="home-fade mb-4 font-[family-name:var(--font-display)] text-5xl tracking-tight text-gold md:text-7xl lg:text-8xl">
          GoldGrapher
        </p>
        <h1 className="home-fade home-fade-delay-1 mb-4 text-2xl font-semibold leading-snug text-foreground md:text-3xl">
          See where your money goes.
        </h1>
        <p className="home-fade home-fade-delay-2 mb-10 max-w-md text-base leading-relaxed text-foreground/75 md:text-lg">
          Track budgets, spending, and balances without juggling spreadsheets.
        </p>
        <Link
          href="/dashboard"
          className="home-fade home-fade-delay-3 inline-flex items-center gap-2 rounded-md bg-foreground px-6 py-3 text-sm font-medium text-gold transition-colors duration-200 hover:bg-foreground/90"
        >
          Open dashboard
          <ArrowRight className="size-4" aria-hidden />
        </Link>
      </div>
    </section>
  );
}
