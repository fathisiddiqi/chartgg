import { Separator } from "@/components/ui/separator";
import { useChartStore } from "@/store/chart";
import ColorPaletteCard from "./color-palette-card";
import ChooseChartType from "./choose-chart-type";
import TextCard from "./text-card";
import { ScrollArea, ScrollBar } from "@/components/custom-ui/scroll-area";

const Chart = () => {
  const { chartType, setChartType } = useChartStore((state) => state);
  const { chartCustomization, setChartCustomization } = useChartStore(
    (state) => state
  );

  return (
    <ScrollArea className="h-[calc(100vh-130px)]" isThumbHidden>
      {/* Choose chart type */}
      <ChooseChartType chartType={chartType} setChartType={setChartType} />
      <Separator className="my-4" />
      {/* Chart Card */}
      <ColorPaletteCard
        chartCustomization={chartCustomization}
        setChartCustomization={setChartCustomization}
        chartType={chartType}
        setChartType={setChartType}
      />
      <Separator className="my-4" />
      {/* TextCard */}
      <TextCard
        chartCustomization={chartCustomization}
        setChartCustomization={setChartCustomization}
      />
    </ScrollArea>
  );
};

export default Chart;
