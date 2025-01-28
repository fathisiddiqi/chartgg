import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useChartStore } from "@/store/chart";
import ContentCard from "./content-card";
import BackgroundCard from "./background-card";

const Screenshot = () => {
  const { setChartScreenshot, chartScreenshot } = useChartStore(
    (state) => state
  );

  return (
    <ScrollArea className="h-[calc(100vh-120px)]">
      <div className="p-4 space-y-4 justify-between">
        <div className="space-y-4">
          {/* General Card */}
          <ContentCard
            chartScreenshot={chartScreenshot}
            setChartScreenshot={setChartScreenshot}
          />

          {/* Background Card */}
          <BackgroundCard
            chartScreenshot={chartScreenshot}
            setChartScreenshot={setChartScreenshot}
          />
        </div>
      </div>
      <ScrollBar hidden />
    </ScrollArea>
  );
};

export default Screenshot;
