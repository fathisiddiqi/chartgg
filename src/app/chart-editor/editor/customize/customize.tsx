"use client";

import { ScrollArea } from "@/components/custom-ui/scroll-area";
import {
  ChartCustomizationFeature,
  ChartMainType,
  useChartStore,
} from "@/store/chart";
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
  const { chartCustomization, setChartCustomization, chartType } =
    useChartStore((state) => state);

  const { chartData } = useChartStore((state) => state);

  return (
    <ScrollArea className="h-[calc(100vh-130px)]" isThumbHidden>
      {chartCustomizeMatrix[chartType.type]["text"] && (
        <TextCard
          chartCustomization={chartCustomization}
          setChartCustomization={setChartCustomization}
        />
      )}

      {/* X Axis Card */}
      {chartCustomizeMatrix[chartType.type]["xAxis"] && (
        <>
          <Separator className="my-4" />
          <XAxisCard
            chartCustomization={chartCustomization}
            setChartCustomization={setChartCustomization}
          />
        </>
      )}

      {chartCustomizeMatrix[chartType.type]["yAxis"] && (
        <>
          <Separator className="my-4" />

          {/* Y Axis Card */}
          <YAxisCard
            chartCustomization={chartCustomization}
            setChartCustomization={setChartCustomization}
          />
        </>
      )}

      {chartCustomizeMatrix[chartType.type]["polarAngleAxis"] && (
        <>
          <Separator className="my-4" />

          {/* Polar Angle Axis Card */}
          <PolarAngleAxisCard
            chartCustomization={chartCustomization}
            setChartCustomization={setChartCustomization}
          />
        </>
      )}

      {chartCustomizeMatrix[chartType.type]["polarRadiusAxis"] && (
        <>
          <Separator className="my-4" />

          {/* Polar Radius Axis Card */}
          <PolarRadiusAxisCard
            chartCustomization={chartCustomization}
            setChartCustomization={setChartCustomization}
          />
        </>
      )}

      {chartCustomizeMatrix[chartType.type]["labelist"] && (
        <>
          <Separator className="my-4" />

          {/* Label Card */}
          <LabelistCard
            chartCustomization={chartCustomization}
            setChartCustomization={setChartCustomization}
            chartType={chartType}
          />
        </>
      )}

      {chartCustomizeMatrix[chartType.type]["legend"] && (
        <>
          <Separator className="my-4" />

          {/* Legend Card */}
          <LegendCard
            chartCustomization={chartCustomization}
            setChartCustomization={setChartCustomization}
          />
        </>
      )}

      {chartCustomizeMatrix[chartType.type]["tooltip"] && (
        <>
          <Separator className="my-4" />

          {/* Tooltip Card */}
          <TooltipCard
            chartCustomization={chartCustomization}
            setChartCustomization={setChartCustomization}
            chartData={chartData}
          />
        </>
      )}

      {chartCustomizeMatrix[chartType.type]["grid"] && (
        <>
          <Separator className="my-4" />

          {/* Grid Card */}
          <GridCard
            chartCustomization={chartCustomization}
            setChartCustomization={setChartCustomization}
          />
        </>
      )}

      {chartCustomizeMatrix[chartType.type]["polarGrid"] && (
        <>
          <Separator className="my-4" />

          {/* Polar Grid Card */}
          <PolarGridCard
            chartCustomization={chartCustomization}
            setChartCustomization={setChartCustomization}
          />
        </>
      )}

      {chartCustomizeMatrix[chartType.type]["active"] && (
        <>
          <Separator className="my-4" />

          {/* Active Card */}
          <ActiveCard
            chartCustomization={chartCustomization}
            setChartCustomization={setChartCustomization}
            chartData={chartData}
          />
        </>
      )}

      {chartCustomizeMatrix[chartType.type]["dot"] && (
        <>
          <Separator className="my-4" />

          {/* Dot Card */}
          <DotCard
            chartCustomization={chartCustomization}
            setChartCustomization={setChartCustomization}
          />
        </>
      )}

      <div className="my-4" />
    </ScrollArea>
  );
};

export default Customize;

const chartCustomizeMatrix: Record<
  ChartMainType,
  Record<ChartCustomizationFeature, boolean>
> = {
  bar: {
    text: true,
    xAxis: true,
    yAxis: true,
    polarAngleAxis: false,
    polarRadiusAxis: false,
    legend: true,
    tooltip: true,
    grid: true,
    polarGrid: false,
    labelist: true,
    active: true,
    dot: false,
  },
  line: {
    text: true,
    xAxis: true,
    yAxis: true,
    polarAngleAxis: false,
    polarRadiusAxis: false,
    legend: true,
    tooltip: true,
    grid: true,
    polarGrid: false,
    labelist: true,
    active: false,
    dot: true,
  },
  area: {
    text: true,
    xAxis: true,
    yAxis: true,
    polarAngleAxis: false,
    polarRadiusAxis: false,
    legend: true,
    tooltip: true,
    grid: true,
    polarGrid: false,
    labelist: false,
    active: false,
    dot: false,
  },
  scatter: {
    text: true,
    xAxis: true,
    yAxis: true,
    polarAngleAxis: false,
    polarRadiusAxis: false,
    legend: true,
    tooltip: true,
    grid: true,
    polarGrid: false,
    labelist: true,
    active: true,
    dot: false,
  },
  pie: {
    text: true,
    xAxis: false,
    yAxis: false,
    polarAngleAxis: true,
    polarRadiusAxis: true,
    legend: true,
    tooltip: true,
    grid: false,
    polarGrid: false,
    labelist: true,
    active: true,
    dot: false,
  },
  radar: {
    text: true,
    xAxis: false,
    yAxis: false,
    polarAngleAxis: true,
    polarRadiusAxis: true,
    legend: true,
    tooltip: true,
    grid: false,
    polarGrid: true,
    labelist: true,
    active: false,
    dot: true,
  },
  radial: {
    text: true,
    xAxis: false,
    yAxis: false,
    polarAngleAxis: true,
    polarRadiusAxis: true,
    legend: true,
    tooltip: true,
    grid: false,
    polarGrid: true,
    labelist: true,
    active: true,
    dot: false,
  },
};
