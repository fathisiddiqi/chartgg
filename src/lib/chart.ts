import {
  ChartAspectRatio,
  ChartAspectRatios,
  ChartMainType,
} from "@/store/chart";

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

export const getChartAspectRatio = (value: ChartAspectRatio) => {
  return ChartAspectRatios.find((ratio) => ratio.value === value)?.label;
};

export const getChartLayoutWidthAndHeightFromAspectRatio = (
  value: ChartAspectRatio
) => {
  const sizeClass: Record<ChartAspectRatio, string> = {
    "1/1": "w-auto h-full",
    "4/3": "w-auto h-full",
    "4/5": "w-auto h-full",
    "9/16": "w-auto h-auto",
    "1.91/1": "w-full h-auto",
    "16/9": "w-full h-auto",
    auto: "w-full h-full",
  };

  return sizeClass[value];
};

export const getWatermarkPositionBasedOnAspectRatio = (
  value: ChartAspectRatio
) => {
  const position: Record<ChartAspectRatio, string> = {
    "1/1": "center",
    "4/3": "center",
    "4/5": "center",
    "9/16": "center",
    "1.91/1": "center",
    "16/9": "center",
    auto: "center",
  };

  return position[value];
};
