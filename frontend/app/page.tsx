import { DynamicIcon } from "lucide-react/dynamic";
import Image from "next/image";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center flex-1 text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold text-gold mb-4">
        Welcome to GoldGrapher
      </h1>
      <p className="max-w-xl text-lg md:text-xl text-foreground mb-8">
        Your all-in-one money management dashboard. Track your budgets, analyze
        your spending, and grow your wealth—all in one place.
      </p>
      <div className="flex gap-4 justify-center">
        <a
          href="/about"
          className="bg-gold text-foreground px-6 py-2 rounded-lg hover:bg-gold/80 transition flex items-center"
        >
          <span className="mr-2 flex items-center">
            <DynamicIcon name="arrow-right" size={19} />
          </span>
          <span>Get Started</span>
        </a>
        <a
          href="/about"
          className="border border-gold text-gold px-6 py-2 rounded-lg hover:bg-gold/20 transition flex items-center"
        >
          <span className="mr-2 flex items-center">
            <DynamicIcon name="info" size={19} />
          </span>
          <span>Learn More</span>
        </a>
      </div>
    </section>
  );
}
