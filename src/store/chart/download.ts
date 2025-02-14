export type ChartDownloadFileType = "jpeg" | "png" | "svg" | "pdf";

export interface ChartDownload {
  chartRef: React.RefObject<HTMLDivElement> | null;
}
