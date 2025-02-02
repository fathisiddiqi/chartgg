import { ChartDownloadFileType } from "@/store/chart";
import { useMutation } from "@tanstack/react-query";
import { toJpeg, toPng, toSvg } from "html-to-image";
import jsPDF from "jspdf";

export const useDownloadChart = () => {
  const chartDownloadByFileType: Record<
    ChartDownloadFileType,
    ({
      chartRef,
      quality,
      width,
      height,
    }: {
      chartRef: any;
      quality: number;
      width: number;
      height: number;
    }) => Promise<void>
  > = {
    jpeg: async ({ chartRef, quality, width, height }) => {
      if (chartRef?.current) {
        toJpeg(chartRef.current, {
          cacheBust: true,
          width: width,
          height: height,
          quality: quality,
          pixelRatio: width / height,
        })
          .then((dataUrl) => {
            const link = document.createElement("a");
            link.download = "chart.jpg";
            link.href = dataUrl;
            link.click();
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    png: async ({ chartRef, quality, width, height }) => {
      if (chartRef?.current) {
        toPng(chartRef.current, {
          cacheBust: true,
          width: width,
          height: height,
          quality: quality,
          pixelRatio: width / height,
        })
          .then((dataUrl) => {
            const link = document.createElement("a");
            link.download = "chart.png";
            link.href = dataUrl;
            link.click();
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    svg: async ({ chartRef, quality, width, height }) => {
      if (chartRef?.current) {
        toSvg(chartRef.current, {
          cacheBust: true,
          width: width,
          height: height,
          quality: quality,
          pixelRatio: width / height,
        })
          .then((dataUrl) => {
            const link = document.createElement("a");
            link.download = "chart.svg";
            link.href = dataUrl;
            link.click();
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    pdf: async ({ chartRef, quality, width, height }) => {
      if (chartRef?.current) {
        toPng(chartRef.current, {
          cacheBust: true,
          width: width,
          height: height,
          quality: quality,
        })
          .then((dataUrl) => {
            const pdf = new jsPDF("l", "mm", "a4");

            pdf.addImage(dataUrl, "PNG", 0, 0, width, height);
            pdf.save("chart.pdf");
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
  };

  return useMutation({
    mutationKey: ["download-chart"],
    mutationFn: async ({
      type,
      quality,
      chartRef,
    }: {
      type: ChartDownloadFileType;
      quality: number;
      chartRef: any;
    }) =>
      chartDownloadByFileType[type]({
        chartRef,
        quality: 1,
        width: chartRef?.current?.width,
        height: chartRef?.current?.height,
      }),
  });
};
