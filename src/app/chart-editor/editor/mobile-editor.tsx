"use client";

import { Text } from "@/components/ui/text";
import Data from "./data/data";
import Customize from "./customize/customize";
import {
  BrushIcon,
  ChartAreaIcon,
  SlidersHorizontalIcon,
  TableIcon,
} from "lucide-react";
import Style from "./style/style";
import Chart from "./chart/chart";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useState } from "react";

const MobileEditor = () => {
  const [activeTab, setActiveTab] = useState("chart");
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const getSheetTitle = () => {
    switch (activeTab) {
      case "chart":
        return "Chart Settings";
      case "data":
        return "Data Input";
      case "customization":
        return "Customize Chart";
      case "style":
        return "Style Options";
      default:
        return "";
    }
  };

  return (
    <div className="w-full relative">
      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen} modal={false}>
        <SheetContent side="bottom" className="h-[80vh] shadow-lg">
          <SheetHeader>
            <SheetTitle>{getSheetTitle()}</SheetTitle>
          </SheetHeader>
          <div className="mt-6">
            {activeTab === "chart" && <Chart />}
            {activeTab === "data" && <Data />}
            {activeTab === "customization" && <Customize />}
            {activeTab === "style" && <Style />}
          </div>
        </SheetContent>
      </Sheet>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 shadow-2xl">
        <div className="grid grid-cols-4 gap-2">
          <button
            onClick={() => {
              setActiveTab("chart");
              setIsSheetOpen(true);
            }}
            className={`flex flex-col items-center justify-center p-2 ${
              activeTab === "chart" ? "text-primary" : "text-muted-foreground"
            }`}
          >
            <ChartAreaIcon size="20" />
            <Text variant="xs">Chart</Text>
          </button>
          <button
            onClick={() => {
              setActiveTab("data");
              setIsSheetOpen(true);
            }}
            className={`flex flex-col items-center justify-center p-2 ${
              activeTab === "data" ? "text-primary" : "text-muted-foreground"
            }`}
          >
            <TableIcon size="20" />
            <Text variant="xs">Data</Text>
          </button>
          <button
            onClick={() => {
              setActiveTab("customization");
              setIsSheetOpen(true);
            }}
            className={`flex flex-col items-center justify-center p-2 ${
              activeTab === "customization"
                ? "text-primary"
                : "text-muted-foreground"
            }`}
          >
            <SlidersHorizontalIcon size="20" />
            <Text variant="xs">Customize</Text>
          </button>
          <button
            onClick={() => {
              setActiveTab("style");
              setIsSheetOpen(true);
            }}
            className={`flex flex-col items-center justify-center p-2 ${
              activeTab === "style" ? "text-primary" : "text-muted-foreground"
            }`}
          >
            <BrushIcon size="20" />
            <Text variant="xs">Style</Text>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileEditor;
