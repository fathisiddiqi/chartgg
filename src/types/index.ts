import { ChartCustomization, ChartStyle } from "@/store/chart";

export interface CustomizationCardProps {
  chartCustomization: ChartCustomization;
  setChartCustomization: (customization: ChartCustomization) => void;
}

export interface StyleCardProps {
  chartStyle: ChartStyle;
  setChartStyle: (style: ChartStyle) => void;
}
