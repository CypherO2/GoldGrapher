import MetricCards from "@/components/cards/MetricCards";
import { exampleDate } from "./example";
import DashBar from "@/components/misc/DashBar";
import VisualTable from "@/components/tables/VisualTable";

export default function Dashboard() {
  return (
    <div className="flex flex-col bg-background">
      <DashBar />
      <div className="grid md:grid-cols-5 gap-6 mx-4">
        {exampleDate.map((card, idx) => (
          <MetricCards
            key={idx}
            cardTitle={card.cardTitle}
            cardValue={card.cardValue}
            cardColour={card.cardColour}
          />
        ))}
      </div>
      <VisualTable />
    </div>
  );
}
