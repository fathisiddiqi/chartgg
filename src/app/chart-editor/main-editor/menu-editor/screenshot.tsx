import { ScrollArea } from "@/components/ui/scroll-area";
import { useChartStore } from "@/store/chart";
import ContentCard from "./screenshot/content-card";
import BackgroundCard from "./screenshot/background-card";
import DownloadCard from "./screenshot/download-card";

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

        {/* Download Card */}
        <DownloadCard />
      </div>
    </ScrollArea>
  );
};

export default Screenshot;
