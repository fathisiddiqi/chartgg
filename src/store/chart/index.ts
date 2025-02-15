import { create } from "zustand";
import { ChartData } from "./data";
import { ChartCustomization } from "./customization";
import { ChartStyle } from "./style";
import { ChartDownload } from "./download";

export * from "./data";
export * from "./style";
export * from "./customization";
export * from "./download";

export type ChartType = {
  type: ChartMainType;
  variant: ChartMainVariant;
};

export type ChartMainType =
  | "bar"
  | "line"
  | "pie"
  | "area"
  | "radar"
  | "radial"
  | "scatter";

export type ChartMainVariant =
  | BarChartVariant
  | LineChartVariant
  | AreaChartVariant
  | PieChartVariant
  | RadarChartVariant
  | RadialChartVariant
  | ScatterChartVariant;

export type BarChartVariant =
  | "default"
  | "horizontal"
  | "stacked"
  | "horizontal_stacked";
export const BarChartVariants: BarChartVariant[] = [
  "default",
  "horizontal",
  "stacked",
  "horizontal_stacked",
];

export type LineChartVariant = "default" | "linear" | "step";
export const LineChartVariants: LineChartVariant[] = [
  "default",
  "linear",
  "step",
];

export type AreaChartVariant = "default" | "linear" | "step" | "stacked";
export const AreaChartVariants: AreaChartVariant[] = [
  "default",
  "linear",
  "step",
  "stacked",
];

export type PieChartVariant = "default" | "donut";
export const PieChartVariants: PieChartVariant[] = ["default", "donut"];

export type RadarChartVariant = "default" | "line";
export const RadarChartVariants: RadarChartVariant[] = ["default", "line"];

export type RadialChartVariant = "default" | "stacked";
export const RadialChartVariants: RadialChartVariant[] = ["default", "stacked"];

export type ScatterChartVariant = "default" | "line";
export const ScatterChartVariants: ScatterChartVariant[] = ["default", "line"];

export type ChartCustomizationFeature =
  | "text"
  | "labelist"
  | "xAxis"
  | "yAxis"
  | "polarAngleAxis"
  | "polarRadiusAxis"
  | "legend"
  | "tooltip"
  | "grid"
  | "polarGrid"
  | "dot"
  | "active";

interface ChartState {
  chartType: ChartType;
  setChartType: (chartType: ChartType) => void;
  chartData: ChartData[];
  setChartData: (data: ChartData[]) => void;
  chartCustomization: ChartCustomization;
  setChartCustomization: (customization: ChartCustomization) => void;
  chartStyle: ChartStyle;
  setChartStyle: (style: ChartStyle) => void;
  chartDownload: ChartDownload;
  setChartDownload: (download: ChartDownload) => void;
}

export const useChartStore = create<ChartState>()((set) => ({
  chartType: {
    type: "bar",
    variant: "default",
  },
  setChartType: (chartType: ChartType) => set({ chartType }),
  chartData: [],
  setChartData: (data: ChartData[]) => set({ chartData: data }),
  chartCustomization: {
    text: {
      title: {
        show: true,
        text: "Report Title",
        color: "#000000",
        textAlign: "left",
        textDecoration: "none",
        fontFamily: "inter",
        fontStyle: "normal",
        fontWeight: "bold",
      },
      subtitle: {
        show: true,
        text: "20 June - 12 August 2024",
        color: "#000000",
        textAlign: "left",
        textDecoration: "none",
        fontFamily: "inter",
        fontStyle: "normal",
        fontWeight: "normal",
      },
      footerTitle: {
        show: true,
        text: "Trending up 20% since last month",
        color: "#000000",
        textAlign: "left",
        textDecoration: "none",
        fontFamily: "inter",
        fontStyle: "normal",
        fontWeight: "normal",
      },
      footerSubtitle: {
        show: true,
        text: "Showing total visitors for the last 6 months",
        color: "#000000",
        textAlign: "left",
        textDecoration: "none",
        fontFamily: "inter",
        fontStyle: "normal",
        fontWeight: "normal",
      },
    },
    labelist: {
      key: {
        show: false,
        position: "center",
        offset: 12,
        color: "#FFFFFF",
        orientation: "horizontal",
      },
      value: {
        show: false,
        position: "center",
        offset: 12,
        color: "#000000",
        orientation: "horizontal",
      },
    },
    xAxis: {
      show: true,
      charLength: 3,
      tickLine: false,
      axisLine: false,
    },
    yAxis: {
      show: false,
      axisLine: false,
      tickLine: false,
      reversed: false,
    },
    polarAngleAxis: {
      show: false,
      axisLine: false,
      tickLine: false,
      charLength: 3,
    },
    polarRadiusAxis: {
      show: false,
      axisLine: false,
      tickLine: false,
      reversed: false,
    },
    legend: {
      show: true,
      verticalAlign: "bottom",
      align: "center",
    },
    tooltip: {
      show: false,
      showTooltipIndex: 0,
      indicator: "line",
      focused: false,
    },
    grid: {
      horizontal: {
        show: false,
      },
      vertical: {
        show: false,
      },
    },
    polarGrid: {
      show: true,
    },
    dot: {
      show: false,
      activeIndex: 1,
      activeSize: 2,
    },
    active: {
      show: false,
      index: 0,
      fill: "#000000",
      fillOpacity: 0.5,
      strokeStyle: "solid",
      strokeColor: "#000000",
      strokeOpacity: 1,
      strokeWidth: 2,
    },
  },
  setChartCustomization: (customization: ChartCustomization) =>
    set({ chartCustomization: customization }),
  chartStyle: {
    content: {
      theme: {
        selected: "default",
        type: "light",
      },
      frame: "none",
      shadow: "0 0 #0000",
      scale: 100,
      rotate: 0,
      width: 500,
      radius: 0,
    },
    canvas: {
      background: {
        color: "#E5E7EB",
        opacity: 1,
      },
      aspectRatio: "auto",
      width: 1616,
      height: 1414,
      border: {
        radius: 0,
      },
    },
  },
  setChartStyle: (style: ChartStyle) => set({ chartStyle: style }),
  chartDownload: {
    chartRef: null,
  },
  setChartDownload: (download: ChartDownload) =>
    set({ chartDownload: download }),
}));
