import { create } from "zustand";

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

export type ChartBackgroundLayout = {
  id: string;
  width: number;
  height: number;
};

export const ChartBackgroundLayouts: ChartBackgroundLayout[] = [
  {
    id: "default",
    width: 1616,
    height: 1414,
  },
  {
    id: "landscape",
    width: 1920,
    height: 1080,
  },
  {
    id: "portrait",
    width: 1080,
    height: 1920,
  },
  {
    id: "instagram_post",
    width: 1080,
    height: 1080,
  },
  {
    id: "instagram_story",
    width: 1080,
    height: 1920,
  },
  {
    id: "twitter",
    width: 1200,
    height: 675,
  },
  {
    id: "linkedin",
    width: 1200,
    height: 630,
  },
];

export const ChartShadowStyles: {
  id: string;
  className: string;
  property: string;
}[] = [
  { id: "none", className: "shadow-none", property: "0 0 #0000" },
  {
    id: "normal",
    property: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
    className: "shadow",
  },
  {
    id: "md",
    className: "shadow-md",
    property:
      "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
  },
  {
    id: "lg",
    className: "shadow-lg",
    property:
      "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
  },
  {
    id: "xl",
    className: "shadow-xl",
    property:
      "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
  },
  {
    id: "2xl",
    className: "shadow-2xl",
    property: "0 25px 50px -12px rgb(0 0 0 / 0.25)",
  },
];

export const ChartColors: string[] = [
  "#E5E7EB",
  "#5F3B00",
  "#A31355",
  "#004A54",
  "#303685",
];

export type ChartFrame =
  | "none"
  | "macos_light"
  | "macos_dark"
  | "arc"
  | "stroke"
  | "shadow";

export const ChartFrames: ChartFrame[] = [
  "none",
  "macos_light",
  "macos_dark",
  "stroke",
  "arc",
  "shadow",
];

export type ChartTheme =
  | "default"
  | "palette"
  | "shappire"
  | "ruby"
  | "emerald"
  | "daylight";

export const ChartThemes: ChartTheme[] = [
  "default",
  "palette",
  "shappire",
  "ruby",
  "emerald",
  "daylight",
];

export type ChartAspectRatio =
  | "auto"
  | "1/1"
  | "4/5"
  | "1.91/1"
  | "9/16"
  | "16/9"
  | "4/3";

export const ChartAspectRatios: {
  value: ChartAspectRatio;
  label: string;
}[] = [
  { value: "auto", label: "Auto" },
  { value: "1/1", label: "Square - 1:1 (Feed for IG, FB, Twitter)" },
  { value: "4/5", label: "Potrait - 4:5 (Feed for IG, FB)" },
  { value: "9/16", label: "Potrait - 9:16 (Story for IG, FB)" },
  {
    value: "1.91/1",
    label: "Landscape - 1.91:1 (Feed for LinkedIn, IG, FB)",
  },
  { value: "16/9", label: "Landscape - 16:9 (Thumbnail for Youtube)" },
  { value: "4/3", label: "Landscape - 4:3 (Feed for Whatsapp)" },
];

export interface ChartStyle {
  content: {
    theme: {
      selected: ChartTheme;
      type: "light" | "dark";
    };
    frame: ChartFrame;
    scale: number;
    rotate: number;
    width: number;
    shadow: string;
    radius: number;
  };
  canvas: {
    width: number;
    height: number;
    background: {
      color: string;
      opacity: number;
    };
    aspectRatio: ChartAspectRatio;
    border: {
      radius: number;
    };
  };
}

export type ChartDownloadFileType = "jpeg" | "png" | "svg" | "pdf";

export interface ChartDownload {
  chartRef: React.RefObject<HTMLDivElement> | null;
}

export interface ChartData {
  id: number;
  label: string;
  [key: string]: number | string;
}

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
        opacity: 0.8,
      },
      aspectRatio: "1/1",
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
