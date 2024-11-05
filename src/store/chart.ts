import { LabelPosition } from "recharts/types/component/Label";
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

export type ChartTheme =
  | "default"
  | "palette"
  | "shappire"
  | "ruby"
  | "emerald"
  | "daylight"
  | "midnight";

export const ChartThemes: ChartTheme[] = [
  "default",
  "palette",
  "shappire",
  "ruby",
  "emerald",
  "daylight",
  "midnight",
];

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

export interface ChartCustomization {
  chart: {
    theme: {
      type: "light" | "dark";
      selected: ChartTheme;
    };
    background: {
      color: string;
    };
    border: {
      width: number;
      radius: number;
      color: string;
    };
    content: {
      width: number;
    };
  };
  text: {
    title: {
      text: string;
      color: string;
      align: "left" | "center" | "right";
    };
    subtitle: {
      text: string;
      color: string;
      align: "left" | "center" | "right";
    };
    footerTitle: {
      text: string;
      color: string;
      align: "left" | "center" | "right";
    };
    footerSubtitle: {
      text: string;
      color: string;
      align: "left" | "center" | "right";
    };
  };
  labelist: {
    key: {
      show: boolean;
      position: ChartLabelistPosition;
      offset: number;
    };
    value: {
      show: boolean;
      position: ChartLabelistPosition;
      offset: number;
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
  legend: {
    show: boolean;
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
    id: "sm",
    property: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    className: "shadow-sm",
  },
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
  {
    id: "inner",
    className: "shadow-inner",
    property: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
  },
];

export type ChartFrame =
  | "none"
  | "window_light"
  | "window_dark"
  | "macos_light"
  | "macos_dark"
  | "chrome_light"
  | "chrome_dark";

export const ChartFrames: ChartFrame[] = [
  "none",
  "window_light",
  "window_dark",
  "macos_light",
  "macos_dark",
  // "chrome_light",
  // "chrome_dark",
];

export interface ChartScreenshot {
  content: {
    frame: ChartFrame;
    scale: number;
    rotate: number;
    shadow: string;
  };
  canvas: {
    width: number;
    height: number;
    background: {
      color: string;
      opacity: number;
    };
    border: {
      radius: number;
    };
  };
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
  chartScreenshot: ChartScreenshot;
  setChartScreenshot: (screenshot: ChartScreenshot) => void;
}

export const useChartStore = create<ChartState>()((set) => ({
  chartType: {
    type: "bar",
    variant: "default",
  },
  setChartType: (chartType: ChartType) => set({ chartType }),
  chartData: [
    {
      id: 1,
      label: "January",
      "Data 1": 1000,
    },
    {
      id: 2,
      label: "February",
      "Data 1": 2000,
    },
    {
      id: 3,
      label: "March",
      "Data 1": 1000,
    },
  ],
  setChartData: (data: ChartData[]) => set({ chartData: data }),
  chartCustomization: {
    chart: {
      theme: {
        type: "light",
        selected: "default",
      },
      background: {
        color: "#fff",
      },
      border: {
        width: 0,
        radius: 8,
        color: "#fff",
      },
      content: {
        width: 500,
      },
    },
    text: {
      title: {
        text: "Report Title",
        color: "#000000",
        align: "left",
      },
      subtitle: {
        text: "20 June - 12 August 2024",
        color: "#000000",
        align: "left",
      },
      footerTitle: {
        text: "Trending up 20% since last month",
        color: "#000000",
        align: "left",
      },
      footerSubtitle: {
        text: "Showing total visitors for the last 6 months",
        color: "#000000",
        align: "left",
      },
    },
    labelist: {
      key: {
        show: false,
        position: "outside",
        offset: 12,
      },
      value: {
        show: false,
        position: "top",
        offset: 12,
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
    legend: {
      show: true,
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
  },
  setChartCustomization: (customization: ChartCustomization) =>
    set({ chartCustomization: customization }),
  chartScreenshot: {
    content: {
      frame: "none",
      scale: 100,
      rotate: 0,
      shadow: "0 0 #0000",
    },
    canvas: {
      background: {
        color: "#e5e7eb",
        opacity: 0.1,
      },
      width: 1616,
      height: 1414,
      border: {
        radius: 8,
      },
    },
  },
  setChartScreenshot: (screenshot: ChartScreenshot) =>
    set({ chartScreenshot: screenshot }),
}));
