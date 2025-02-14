export type ChartTooltipIndicator = "line" | "dot" | "dashed" | "none";

export const ChartTooltipIndicators: ChartTooltipIndicator[] = [
  "line",
  "dot",
  "dashed",
  "none",
];

export type ChartLabelistPosition =
  | "top"
  | "left"
  | "right"
  | "bottom"
  | "inside"
  | "outside"
  | "insideLeft"
  | "insideRight"
  | "insideTop"
  | "insideBottom"
  | "insideTopLeft"
  | "insideBottomLeft"
  | "insideTopRight"
  | "insideBottomRight"
  | "insideStart"
  | "insideEnd"
  | "end"
  | "center"
  | "centerTop"
  | "centerBottom"
  | "middle";

export const ChartLabelistPositions: ChartLabelistPosition[] = [
  "top",
  "left",
  "right",
  "bottom",
  "inside",
  "outside",
  "insideLeft",
  "insideRight",
  "insideTop",
  "insideBottom",
  "insideTopLeft",
  "insideBottomLeft",
  "insideTopRight",
  "insideBottomRight",
  "insideStart",
  "insideEnd",
  "end",
  "center",
  "centerTop",
  "centerBottom",
  "middle",
];

export const ChartLabelistPositionsOfCartesian: Array<
  "top" | "left" | "right" | "bottom" | "center"
> = ["top", "left", "right", "bottom", "center"];

export const ChartLabelistPositionsOfPolar: Array<
  "inside" | "outside" | "center"
> = ["inside", "outside", "center"];

export type ChartStrokeStyle = "solid" | "dashed" | "dotted" | "none";
export const ChartStrokeStyles: ChartStrokeStyle[] = [
  "solid",
  "dashed",
  "dotted",
  "none",
];

export type ChartTextFontFamily = "inter" | "poppins" | "roboto";
export const ChartTextFontFamilies: ChartTextFontFamily[] = [
  "inter",
  "poppins",
  "roboto",
];

export type ChartOrientation = "horizontal" | "vertical";
export const ChartOrientations: ChartOrientation[] = ["horizontal", "vertical"];

export interface ChartCustomization {
  text: {
    title: {
      show: boolean;
      text: string;
      color: string;
      textAlign: "left" | "center" | "right";
      textDecoration: "none" | "underline";
      fontFamily: ChartTextFontFamily;
      fontStyle: "normal" | "italic";
      fontWeight: "normal" | "bold";
    };
    subtitle: {
      show: boolean;
      text: string;
      color: string;
      textAlign: "left" | "center" | "right";
      textDecoration: "none" | "underline";
      fontFamily: ChartTextFontFamily;
      fontStyle: "normal" | "italic";
      fontWeight: "normal" | "bold";
    };
    footerTitle: {
      show: boolean;
      text: string;
      color: string;
      textAlign: "left" | "center" | "right";
      textDecoration: "none" | "underline";
      fontFamily: ChartTextFontFamily;
      fontStyle: "bold" | "normal" | "italic" | "oblique";
      fontWeight: "normal" | "bold";
    };
    footerSubtitle: {
      show: boolean;
      text: string;
      color: string;
      textAlign: "left" | "center" | "right";
      textDecoration: "none" | "underline";
      fontFamily: ChartTextFontFamily;
      fontStyle: "bold" | "normal" | "italic" | "oblique";
      fontWeight: "normal" | "bold";
    };
  };
  labelist: {
    key: {
      show: boolean;
      position: ChartLabelistPosition;
      offset: number;
      color: string;
      orientation: "horizontal" | "vertical";
    };
    value: {
      show: boolean;
      position: ChartLabelistPosition;
      offset: number;
      color: string;
      orientation: "horizontal" | "vertical";
    };
  };
  xAxis: {
    show: boolean;
    charLength: number;
    tickLine: boolean;
    axisLine: boolean;
  };
  yAxis: {
    show: boolean;
    tickLine: boolean;
    axisLine: boolean;
    reversed: boolean;
  };
  polarAngleAxis: {
    show: boolean;
    tickLine: boolean;
    axisLine: boolean;
    charLength: number;
  };
  polarRadiusAxis: {
    show: boolean;
    tickLine: boolean;
    axisLine: boolean;
    reversed: boolean;
  };
  legend: {
    show: boolean;
    verticalAlign: "top" | "middle" | "bottom";
    align: "left" | "center" | "right";
  };
  tooltip: {
    show: boolean;
    showTooltipIndex: number;
    indicator: ChartTooltipIndicator;
    focused: boolean;
  };
  grid: {
    horizontal: {
      show: boolean;
    };
    vertical: {
      show: boolean;
    };
  };
  polarGrid: {
    show: boolean;
  };
  dot: {
    show: boolean;
    activeSize: number;
    activeIndex: number;
  };
  active: {
    show: boolean;
    index: number;
    fill: string;
    fillOpacity: number;
    strokeColor: string;
    strokeOpacity: number;
    strokeWidth: number;
    strokeStyle: ChartStrokeStyle;
  };
}
