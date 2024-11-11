import { ChartCustomization } from "@/store/chart";

export interface CardProps {
  chartCustomization: ChartCustomization;
  setChartCustomization: (customization: ChartCustomization) => void;
}
