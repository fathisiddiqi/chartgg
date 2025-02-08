"use client";

import { useChartStore } from "@/store/chart";
import ChooseChartType from "./choose-chart-type";
import { ScrollArea } from "@/components/custom-ui/scroll-area";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { InfoIcon } from "lucide-react";

const Chart = () => {
  const { chartType, setChartType } = useChartStore((state) => state);

  return (
    <ScrollArea className="h-[65vh] md:h-[calc(100vh-200px)]" isThumbHidden>
      {/* Choose chart type */}
      <ChooseChartType chartType={chartType} setChartType={setChartType} />

      {(chartType.type === "pie" || chartType.type === "radial") && (
        <Alert>
          <InfoIcon size={16} />
          <AlertTitle className="text-xs">Data Limitation</AlertTitle>
          <AlertDescription className="text-xs">
            Only first column of data that shown to chart
          </AlertDescription>
        </Alert>
      )}
    </ScrollArea>
  );
};

export default Chart;
