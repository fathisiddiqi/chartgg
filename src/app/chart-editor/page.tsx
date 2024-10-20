"use client";

import Navbar from "@/components/common/navbar";
import { useChartStore } from "@/store/chart";
import ChooseChart from "./choose-chart/choose-chart";
import MainEditor from "./main-editor/main-editor";

export default function ChartEditor() {
  const { chartType } = useChartStore((state) => state);

  return (
    <main className="flex h-screen flex-col w-full">
      <Navbar />
      {chartType === "" ? <ChooseChart /> : <MainEditor />}
    </main>
  );
}
