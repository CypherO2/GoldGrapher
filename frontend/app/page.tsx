import Link from "next/link";
import type { CSSProperties } from "react";
import { ArrowRight } from "lucide-react";

const embers = [
  { left: "4%", delay: "0s", duration: "10s", x: "90px", y: "-220px" },
  { left: "9%", delay: "1.1s", duration: "12s", x: "-50px", y: "-280px" },
  { left: "14%", delay: "0.4s", duration: "9s", x: "100px", y: "-200px" },
  { left: "19%", delay: "2s", duration: "11s", x: "-70px", y: "-260px" },
  { left: "25%", delay: "0.7s", duration: "13s", x: "60px", y: "-300px" },
  { left: "31%", delay: "2.8s", duration: "9.5s", x: "-90px", y: "-230px" },
  { left: "37%", delay: "1.4s", duration: "10.5s", x: "85px", y: "-270px" },
  { left: "43%", delay: "2.4s", duration: "8.5s", x: "-45px", y: "-190px" },
  { left: "49%", delay: "0.2s", duration: "12.5s", x: "110px", y: "-290px" },
  { left: "55%", delay: "1.8s", duration: "10s", x: "-80px", y: "-240px" },
  { left: "61%", delay: "3.2s", duration: "11.5s", x: "55px", y: "-310px" },
  { left: "67%", delay: "0.9s", duration: "9s", x: "-100px", y: "-220px" },
  { left: "73%", delay: "2.1s", duration: "12s", x: "75px", y: "-250px" },
  { left: "79%", delay: "1s", duration: "8s", x: "-60px", y: "-180px" },
  { left: "85%", delay: "2.6s", duration: "10s", x: "40px", y: "-270px" },
  { left: "91%", delay: "3.8s", duration: "11s", x: "-35px", y: "-210px" },
  { left: "7%", delay: "4.1s", duration: "10.5s", x: "120px", y: "-240px" },
  { left: "22%", delay: "4.6s", duration: "9.5s", x: "-55px", y: "-300px" },
  { left: "40%", delay: "3.5s", duration: "11s", x: "70px", y: "-260px" },
  { left: "58%", delay: "4.9s", duration: "10s", x: "-95px", y: "-230px" },
  { left: "76%", delay: "5.2s", duration: "12s", x: "50px", y: "-280px" },
  { left: "93%", delay: "4.3s", duration: "9s", x: "-40px", y: "-200px" },
] as const;

const ash = [
  { left: "3%", delay: "0s", duration: "16s", x: "70px", y: "110vh" },
  { left: "9%", delay: "1.2s", duration: "18s", x: "-55px", y: "114vh" },
  { left: "15%", delay: "2.4s", duration: "15s", x: "85px", y: "108vh" },
  { left: "21%", delay: "0.6s", duration: "19s", x: "-65px", y: "112vh" },
  { left: "27%", delay: "3.5s", duration: "17s", x: "50px", y: "116vh" },
  { left: "33%", delay: "1.8s", duration: "16.5s", x: "-80px", y: "110vh" },
  { left: "39%", delay: "4.1s", duration: "18.5s", x: "60px", y: "113vh" },
  { left: "45%", delay: "0.9s", duration: "15.5s", x: "-45px", y: "109vh" },
  { left: "51%", delay: "2.9s", duration: "17.5s", x: "75px", y: "115vh" },
  { left: "57%", delay: "5s", duration: "19s", x: "-70px", y: "111vh" },
  { left: "63%", delay: "1.5s", duration: "16s", x: "90px", y: "117vh" },
  { left: "69%", delay: "3.2s", duration: "18s", x: "-40px", y: "110vh" },
  { left: "75%", delay: "0.3s", duration: "17s", x: "55px", y: "114vh" },
  { left: "81%", delay: "2.2s", duration: "19.5s", x: "-75px", y: "112vh" },
  { left: "87%", delay: "4.6s", duration: "16.5s", x: "45px", y: "116vh" },
  { left: "93%", delay: "3.8s", duration: "18s", x: "-60px", y: "109vh" },
  { left: "6%", delay: "5.5s", duration: "17.5s", x: "95px", y: "113vh" },
  { left: "48%", delay: "6s", duration: "16s", x: "-85px", y: "115vh" },
  { left: "82%", delay: "5.8s", duration: "18.5s", x: "40px", y: "111vh" },
  { left: "24%", delay: "6.4s", duration: "17s", x: "-50px", y: "117vh" },
] as const;

type DriftStyle = CSSProperties & {
  "--ember-x"?: string;
  "--ember-y"?: string;
  "--ash-x"?: string;
  "--ash-y"?: string;
};

export default function Home() {
  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden bg-background">
      <div className="meander absolute inset-x-0 top-0 z-20" aria-hidden />

      <div
        className="hearth pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden
      >
        <div className="absolute inset-x-0 bottom-0 h-[40%] bg-[radial-gradient(ellipse_95%_55%_at_50%_100%,rgba(140,138,134,0.14),transparent_70%)]" />
        <div className="hearth-glow absolute inset-x-0 bottom-0 h-[44%]" />
        <div className="smoke smoke-a" />
        <div className="smoke smoke-b" />
        <div className="smoke smoke-c" />
        <div className="smoke smoke-d" />

        {embers.map((ember, index) => {
          const style: DriftStyle = {
            left: ember.left,
            animationDelay: ember.delay,
            animationDuration: ember.duration,
            "--ember-x": ember.x,
            "--ember-y": ember.y,
          };

          return (
            <span
              key={`ember-${index}`}
              className={`ember ${index % 3 === 0 ? "ember-dim" : ""}`}
              style={style}
            />
          );
        })}

        {ash.map((flake, index) => {
          const style: DriftStyle = {
            left: flake.left,
            animationDelay: flake.delay,
            animationDuration: flake.duration,
            "--ash-x": flake.x,
            "--ash-y": flake.y,
          };

          return (
            <span
              key={`ash-${index}`}
              className={`ash ${index % 3 === 0 ? "ash-wide" : ""}`}
              style={style}
            />
          );
        })}
      </div>

      <div className="relative z-10 flex flex-1 flex-col justify-end px-8 pb-24 pt-28 md:justify-center md:px-16 md:pb-24 md:pt-0 lg:px-24">
        <div className="max-w-xl">
          <p className="home-fade mb-3 font-display text-xs uppercase tracking-[0.38em] text-clay">
            Manage your money like a god.
          </p>
          <p className="home-fade home-fade-delay-1 mb-5 font-display text-5xl tracking-[0.06em] text-foreground md:text-7xl lg:text-8xl">
            Chthon
          </p>
          <h1 className="home-fade home-fade-delay-2 mb-4 text-2xl font-semibold leading-snug text-foreground md:text-3xl">
            Where your money is judged, and your budget balanced.
          </h1>
          <p className="home-fade home-fade-delay-2 mb-10 max-w-md text-base leading-relaxed text-muted md:text-lg">
            Track budgets, spending, and balances in one ledger.
          </p>
          <Link
            href="/dashboard"
            className="home-fade home-fade-delay-3 inline-flex items-center gap-2 border border-clay bg-clay px-6 py-3 text-sm font-semibold tracking-[0.12em] text-background transition-colors duration-200 hover:bg-transparent hover:text-clay"
          >
            Pay the ferryman last.
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>
      </div>

      <div className="meander absolute inset-x-0 bottom-0 z-20" aria-hidden />
    </section>
  );
}
