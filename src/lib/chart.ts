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
    "1/1": "w-[358px] h-[358px] md:w-auto md:h-full",
    "4/3": "w-[358px] h-[300px] md:w-auto md:h-full",
    "4/5": "w-[300px] h-[358px] md:w-auto md:h-full",
    "9/16": "w-[358px] h-[600px] md:w-auto md:h-auto",
    "1.91/1": "w-[358px] h-[260px] md:w-full md:h-auto",
    "16/9": "w-[358px] h-[200px] md:w-full md:h-auto",
    auto: "w-full h-full md:w-full md:h-full",
  };

  return sizeClass[value];
};

export const getWatermarkPositionBasedOnAspectRatio = (
  value: ChartAspectRatio
) => {
  const position: Record<ChartAspectRatio, string> = {
    "1/1": "bottom-[3%] left-1/2 -translate-x-1/2",
    "4/3": "bottom-[3%] left-1/2 -translate-x-1/2",
    "4/5": "bottom-[3%] left-1/2 -translate-x-1/2",
    "9/16": "bottom-[3%] left-1/2 -translate-x-1/2",
    "1.91/1": "bottom-[3%] left-1/2 -translate-x-1/2",
    "16/9": "bottom-[3%] left-1/2 -translate-x-1/2",
    auto: "bottom-[3%] left-1/2 -translate-x-1/2",
  };

  return position[value];
};

export const getChartMaxWidthFromAspectRatio = (value: ChartAspectRatio) => {
  const maxWidth: Record<ChartAspectRatio, string> = {
    "1/1": "max-w-[600px]",
    "4/3": "max-w-[800px]",
    "4/5": "max-w-[480px]",
    "9/16": "max-w-[360px]",
    "1.91/1": "max-w-[1200px]",
    "16/9": "max-w-[960px]",
    auto: "max-w-[800px]",
  };

  return maxWidth[value];
};

export const getChartMaxHeightFromAspectRatio = (value: ChartAspectRatio) => {
  const maxHeight: Record<ChartAspectRatio, string> = {
    "1/1": "max-h-[600px]",
    "4/3": "max-h-[800px]",
    "4/5": "max-h-[480px]",
    "9/16": "max-h-[360px]",
    "1.91/1": "max-h-[1200px]",
    "16/9": "max-h-[960px]",
    auto: "max-h-[800px]",
  };

  return maxHeight[value];
};

export const getScaleFromAspectRatio = (
  value: ChartAspectRatio,
  isMobile: boolean
) => {
  const scaleMobile: Record<ChartAspectRatio, number> = {
    "1/1": 0.4,
    "4/3": 0.4,
    "4/5": 0.4,
    "9/16": 0.4,
    "1.91/1": 0.3,
    "16/9": 0.3,
    auto: 0.4,
  };

  const scaleDesktop: Record<ChartAspectRatio, number> = {
    "1/1": 0.5,
    "4/3": 0.5,
    "4/5": 0.5,
    "9/16": 0.5,
    "1.91/1": 0.5,
    "16/9": 0.5,
    auto: 0.5,
  };

  return isMobile ? scaleMobile[value] : scaleDesktop[value];
};
