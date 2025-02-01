import { ScrollArea } from "@/components/custom-ui/scroll-area";
import { useChartStore } from "@/store/chart";
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
import { Separator } from "@/components/ui/separator";
import TextCard from "./text-card";

const Customize = () => {
  const { chartCustomization, setChartCustomization } = useChartStore(
    (state) => state
  );

  const { chartData } = useChartStore((state) => state);

  return (
    <ScrollArea className="h-[calc(100vh-130px)]" isThumbHidden>
      <TextCard
        chartCustomization={chartCustomization}
        setChartCustomization={setChartCustomization}
      />

      <Separator className="my-4" />

      {/* X Axis Card */}
      <XAxisCard
        chartCustomization={chartCustomization}
        setChartCustomization={setChartCustomization}
      />

      <Separator className="my-4" />

      {/* Y Axis Card */}
      <YAxisCard
        chartCustomization={chartCustomization}
        setChartCustomization={setChartCustomization}
      />

      <Separator className="my-4" />

      {/* Polar Angle Axis Card */}
      <PolarAngleAxisCard
        chartCustomization={chartCustomization}
        setChartCustomization={setChartCustomization}
      />

      <Separator className="my-4" />

      {/* Polar Radius Axis Card */}
      <PolarRadiusAxisCard
        chartCustomization={chartCustomization}
        setChartCustomization={setChartCustomization}
      />

      <Separator className="my-4" />

      {/* Label Card */}
      <LabelistCard
        chartCustomization={chartCustomization}
        setChartCustomization={setChartCustomization}
      />

      <Separator className="my-4" />

      {/* Legend Card */}
      <LegendCard
        chartCustomization={chartCustomization}
        setChartCustomization={setChartCustomization}
      />

      <Separator className="my-4" />

      {/* Tooltip Card */}
      <TooltipCard
        chartCustomization={chartCustomization}
        setChartCustomization={setChartCustomization}
        chartData={chartData}
      />

      <Separator className="my-4" />

      {/* Grid Card */}
      <GridCard
        chartCustomization={chartCustomization}
        setChartCustomization={setChartCustomization}
      />

      <Separator className="my-4" />

      <PolarGridCard
        chartCustomization={chartCustomization}
        setChartCustomization={setChartCustomization}
      />

      <Separator className="my-4" />

      <ActiveCard
        chartCustomization={chartCustomization}
        setChartCustomization={setChartCustomization}
        chartData={chartData}
      />

      <Separator className="my-4" />

      {/* Dot Card */}
      <DotCard
        chartCustomization={chartCustomization}
        setChartCustomization={setChartCustomization}
      />

      <div className="my-4" />
    </ScrollArea>
  );
};

export default Customize;
