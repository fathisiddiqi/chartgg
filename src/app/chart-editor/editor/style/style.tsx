"use client";

import { ScrollArea } from "@/components/custom-ui/scroll-area";
import { useChartStore } from "@/store/chart";
import ContentCard from "./content-card";
import BackgroundCard from "./background-card";
import { Separator } from "@/components/ui/separator";

const Screenshot = () => {
  const { setChartStyle, chartStyle } = useChartStore((state) => state);

  return (
    <ScrollArea className="h-[65vh] md:h-[calc(100vh-200px)]" isThumbHidden>
      {/* General Card */}
      <ContentCard chartStyle={chartStyle} setChartStyle={setChartStyle} />

      <Separator className="my-4" />

      {/* Background Card */}
      <BackgroundCard chartStyle={chartStyle} setChartStyle={setChartStyle} />
    </ScrollArea>
  );
};

export default Screenshot;
