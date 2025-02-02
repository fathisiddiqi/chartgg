import { ChartMainType } from "@/store/chart";

type ChartCoordinateType = "cartesian" | "polar";

export const getChartCoordinateType = (type: ChartMainType) => {
  const coordinateType: Record<ChartMainType, ChartCoordinateType> = {
    bar: "cartesian",
    area: "cartesian",
    line: "cartesian",
    pie: "polar",
    radar: "polar",
    radial: "polar",
    scatter: "cartesian",
  };

  return coordinateType[type];
};
