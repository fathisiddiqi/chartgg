import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useChartStore } from "@/store/chart";
import ContentCard from "./content-card";
import BackgroundCard from "./background-card";

const Screenshot = () => {
  const { setChartStyle, chartStyle } = useChartStore((state) => state);

  return (
    <ScrollArea className="h-[calc(100vh-130px)]">
      {/* General Card */}
      <ContentCard chartStyle={chartStyle} setChartStyle={setChartStyle} />

      {/* Background Card */}
      <BackgroundCard chartStyle={chartStyle} setChartStyle={setChartStyle} />
      <ScrollBar hidden />
    </ScrollArea>
  );
};

export default Screenshot;
