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
