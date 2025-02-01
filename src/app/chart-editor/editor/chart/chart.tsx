import { useChartStore } from "@/store/chart";
import ChooseChartType from "./choose-chart-type";
import { ScrollArea, ScrollBar } from "@/components/custom-ui/scroll-area";

const Chart = () => {
  const { chartType, setChartType } = useChartStore((state) => state);

  return (
    <ScrollArea className="h-[calc(100vh-130px)]" isThumbHidden>
      {/* Choose chart type */}
      <ChooseChartType chartType={chartType} setChartType={setChartType} />
    </ScrollArea>
  );
};

export default Chart;
