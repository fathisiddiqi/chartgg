import { ChartScreenshot } from "@/store/chart";

export interface CardProps {
  chartScreenshot: ChartScreenshot;
  setChartScreenshot: (screenshot: ChartScreenshot) => void;
}
