import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useChartStore } from "@/store/chart";
import TextCard from "../chart/text-card";
import XAxisCard from "./x-axis-card";
import LabelistCard from "./labelist-card";
import LegendCard from "./legend-card";
import TooltipCard from "./tooltip-card";
import GridCard from "./grid-card";
import YAxisCard from "./y-axis-card";
import DotCard from "./dot-card";
import ActiveCard from "./active-card";
import PolarGridCard from "./polar-grid-card";
import PolarRadiusAxisCard from "./polar-radius-axis-card";
import PolarAngleAxisCard from "./polar-angle-axis-card";

const Customize = () => {
  const { chartCustomization, setChartCustomization } = useChartStore(
    (state) => state
  );

  return (
    <ScrollArea className="h-[calc(100vh-120px)]">
      {/* X Axis Card */}
      <XAxisCard
        chartCustomization={chartCustomization}
        setChartCustomization={setChartCustomization}
      />
      {/* Y Axis Card */}
      <YAxisCard
        chartCustomization={chartCustomization}
        setChartCustomization={setChartCustomization}
      />
      {/* Polar Angle Axis Card */}
      <PolarAngleAxisCard
        chartCustomization={chartCustomization}
        setChartCustomization={setChartCustomization}
      />
      {/* Polar Radius Axis Card */}
      <PolarRadiusAxisCard
        chartCustomization={chartCustomization}
        setChartCustomization={setChartCustomization}
      />
      {/* Label Card */}
      <LabelistCard
        chartCustomization={chartCustomization}
        setChartCustomization={setChartCustomization}
      />
      {/* Legend Card */}
      <LegendCard
        chartCustomization={chartCustomization}
        setChartCustomization={setChartCustomization}
      />
      {/* Tooltip Card */}
      <TooltipCard
        chartCustomization={chartCustomization}
        setChartCustomization={setChartCustomization}
      />
      {/* Grid Card */}
      <GridCard
        chartCustomization={chartCustomization}
        setChartCustomization={setChartCustomization}
      />
      <PolarGridCard
        chartCustomization={chartCustomization}
        setChartCustomization={setChartCustomization}
      />
      <ActiveCard
        chartCustomization={chartCustomization}
        setChartCustomization={setChartCustomization}
      />
      {/* Dot Card */}
      <DotCard
        chartCustomization={chartCustomization}
        setChartCustomization={setChartCustomization}
      />
    </ScrollArea>
  );
};

export default Customize;
