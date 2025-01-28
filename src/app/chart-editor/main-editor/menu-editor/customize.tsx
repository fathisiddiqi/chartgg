import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useChartStore } from "@/store/chart";
import TextCard from "./chart/text-card";
import XAxisCard from "./customize/x-axis-card";
import LabelistCard from "./customize/labelist-card";
import LegendCard from "./customize/legend-card";
import TooltipCard from "./customize/tooltip-card";
import GridCard from "./customize/grid-card";
import YAxisCard from "./customize/y-axis-card";
import DotCard from "./customize/dot-card";
import ActiveCard from "./customize/active-card";
import PolarGridCard from "./customize/polar-grid-card";
import PolarRadiusAxisCard from "./customize/polar-radius-axis-card";
import PolarAngleAxisCard from "./customize/polar-angle-axis-card";

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
