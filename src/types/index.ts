import { ChartCustomization, ChartScreenshot } from "@/store/chart";

export interface CustomizationCardProps {
  chartCustomization: ChartCustomization;
  setChartCustomization: (customization: ChartCustomization) => void;
}

export interface ScreenshotCardProps {
  chartScreenshot: ChartScreenshot;
  setChartScreenshot: (screenshot: ChartScreenshot) => void;
}
