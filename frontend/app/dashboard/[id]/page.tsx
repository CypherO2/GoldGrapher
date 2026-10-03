import MetricCards from "@/components/cards/MetricCards";
import BudgetMeter from "@/components/dashboard/BudgetMeter";
import CategorySpend from "@/components/dashboard/CategorySpend";
import UpcomingPayments from "@/components/dashboard/UpcomingPayments";
import DashBar from "@/components/misc/DashBar";
import VisualTable from "@/components/tables/VisualTable";
import { exampleDate } from "./example";

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-10 bg-background px-6 py-8 md:px-10">
      <DashBar />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {exampleDate.map((card) => (
          <MetricCards
            key={card.cardTitle}
            cardTitle={card.cardTitle}
            cardValue={card.cardValue}
            cardColour={card.cardColour}
          />
        ))}
      </div>

      <div className="grid gap-10 lg:grid-cols-2">
        <CategorySpend />
        <div className="flex flex-col gap-10">
          <BudgetMeter />
          <UpcomingPayments />
        </div>
      </div>

      <VisualTable />
    </div>
  );
}
