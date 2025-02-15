"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartAspectRatio, ChartMainType, useChartStore } from "@/store/chart";
import { cn, hexToRGB } from "@/lib/utils";
import { Input } from "@/components/custom-ui/input";
import ChartFrame from "@/components/common/chart-frame";
import BarChartPreview from "./charts/bar-chart";
import LineChartPreview from "./charts/line-chart";
import PieChartPreview from "./charts/pie-chart";
import AreaChartPreview from "./charts/area-chart";
import RadarChartPreview from "./charts/radar-chart";
import RadialChartPreview from "./charts/radial-chart";
import ScatterChartPreview from "./charts/scatter-chart";
import useChartTheme from "@/hook/use-chart-theme";
import { Text } from "@/components/ui/text";
import { useRef, useEffect, JSX } from "react";
import Image from "next/image";
import {
  getChartLayoutWidthAndHeightFromAspectRatio,
  getWatermarkPositionBasedOnAspectRatio,
  getChartMaxWidthFromAspectRatio,
  getChartMaxHeightFromAspectRatio,
  getScaleFromAspectRatio,
} from "@/lib/chart";
import { useIsMobile } from "@/hook/use-mobile";

const ChartPreview = () => {
  const { chartType, chartStyle, chartCustomization, setChartDownload } =
    useChartStore((state) => state);
  const { backgroundColor } = useChartTheme(chartStyle.content.theme.selected);
  const chartRef = useRef<HTMLDivElement>(null!);
  const isMobile = useIsMobile();

  useEffect(() => {
    setChartDownload({
      chartRef,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chartRef]);

  return (
    <div className="relative w-full h-[80vh] md:h-[calc(100vh-100px)] flex justify-center items-center rounded-md overflow-auto p-4">
      <ChartLayout
        ref={chartRef}
        aspectRatio={chartStyle.canvas.aspectRatio}
        borderRadius={chartStyle.canvas.border.radius}
        backgroundColor={`rgba(${hexToRGB(
          chartStyle.canvas.background.color
        )}, ${chartStyle.canvas.background.opacity})`}
      >
        {/* Chart Frame */}
        <ChartFrame
          frame={chartStyle.content.frame}
          width={chartStyle.content.width}
          transform={`scale(${chartStyle.content.scale / 60}) rotate(${
            chartStyle.content.rotate
          }deg)`}
          boxShadow={chartStyle.content.shadow}
          scale={getScaleFromAspectRatio(
            chartStyle.canvas.aspectRatio,
            isMobile
          )}
          borderRadius={chartStyle.content.radius}
          className={cn(
            getChartMaxWidthFromAspectRatio(chartStyle.canvas.aspectRatio),
            getChartMaxHeightFromAspectRatio(chartStyle.canvas.aspectRatio)
          )}
        >
          {/* Chart Content */}
          <Card
            className="shadow-none border-none rounded-none"
            style={{
              backgroundColor,
              borderRadius: chartStyle.content.radius,
            }}
          >
            <CardHeader>
              {chartCustomization.text.title.show && (
                <CardTitle
                  className={cn(
                    "text-muted-foreground",
                    chartCustomization.text.title.fontFamily === "roboto"
                      ? "font-roboto"
                      : chartCustomization.text.title.fontFamily === "poppins"
                      ? "font-poppins"
                      : "font-sans"
                  )}
                  style={{
                    color: chartCustomization.text.title.color,
                    textAlign: chartCustomization.text.title.textAlign,
                    textDecoration:
                      chartCustomization.text.title.textDecoration,
                    fontStyle: chartCustomization.text.title.fontStyle,
                    fontWeight: chartCustomization.text.title.fontWeight,
                  }}
                >
                  {chartCustomization.text.title.text}
                </CardTitle>
              )}
              {chartCustomization.text.subtitle.show && (
                <CardDescription
                  className={cn(
                    "text-muted-foreground",
                    chartCustomization.text.subtitle.fontFamily === "roboto"
                      ? "font-roboto"
                      : chartCustomization.text.subtitle.fontFamily ===
                        "poppins"
                      ? "font-poppins"
                      : "font-sans"
                  )}
                  style={{
                    color: chartCustomization.text.subtitle.color,
                    textAlign: chartCustomization.text.subtitle.textAlign,
                    textDecoration:
                      chartCustomization.text.subtitle.textDecoration,
                    fontStyle: chartCustomization.text.subtitle.fontStyle,
                    fontWeight: chartCustomization.text.subtitle.fontWeight,
                  }}
                >
                  {chartCustomization.text.subtitle.text}
                </CardDescription>
              )}
            </CardHeader>
            <CardContent>
              <ChartTypePreview chartType={chartType.type} />
              <div className="mt-4">
                {chartCustomization.text.footerTitle.show && (
                  <div
                    className={cn(
                      "text-muted-foreground",
                      chartCustomization.text.footerSubtitle.fontFamily ===
                        "roboto"
                        ? "font-roboto"
                        : chartCustomization.text.footerSubtitle.fontFamily ===
                          "poppins"
                        ? "font-poppins"
                        : "font-sans"
                    )}
                    style={{
                      color: chartCustomization.text.footerTitle.color,
                      textAlign: chartCustomization.text.footerTitle.textAlign,
                      textDecoration:
                        chartCustomization.text.footerTitle.textDecoration,
                      fontStyle: chartCustomization.text.footerTitle.fontStyle,
                      fontWeight:
                        chartCustomization.text.footerTitle.fontWeight,
                    }}
                  >
                    {chartCustomization.text.footerTitle.text}
                  </div>
                )}
                {chartCustomization.text.footerSubtitle.show && (
                  <div
                    className={cn(
                      "text-muted-foreground",
                      chartCustomization.text.footerSubtitle.fontFamily ===
                        "roboto"
                        ? "font-roboto"
                        : chartCustomization.text.footerSubtitle.fontFamily ===
                          "poppins"
                        ? "font-poppins"
                        : "font-sans"
                    )}
                    style={{
                      color: chartCustomization.text.footerSubtitle.color,
                      textAlign:
                        chartCustomization.text.footerSubtitle.textAlign,
                      textDecoration:
                        chartCustomization.text.footerSubtitle.textDecoration,
                      fontStyle:
                        chartCustomization.text.footerSubtitle.fontStyle,
                      fontWeight:
                        chartCustomization.text.footerSubtitle.fontWeight,
                    }}
                  >
                    {chartCustomization.text.footerSubtitle.text}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </ChartFrame>
        <Watermark
          className={getWatermarkPositionBasedOnAspectRatio(
            chartStyle.canvas.aspectRatio
          )}
        />
      </ChartLayout>
    </div>
  );
};

export default ChartPreview;

const ActionMenu = () => {
  const { chartStyle } = useChartStore((state) => state);

  return (
    <div className="w-full flex justify-between gap-2 absolute top-4 left-4 right-10 z-10">
      <div className="relative flex gap-2 mr-8">
        <div className="relative w-24">
          <Input
            variant="sm"
            type="numeric"
            value={chartStyle.canvas.width || ""}
            onChange={(e) =>
              useChartStore.setState({
                chartStyle: {
                  ...chartStyle,
                  canvas: {
                    ...chartStyle.canvas,
                    width: parseInt(e.target.value),
                  },
                },
              })
            }
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
            px
          </span>
        </div>
        <div className="relative w-24">
          <Input
            variant="sm"
            type="numeric"
            value={chartStyle.canvas.height}
            onChange={(e) =>
              useChartStore.setState({
                chartStyle: {
                  ...chartStyle,
                  canvas: {
                    ...chartStyle.canvas,
                    height: parseInt(e.target.value),
                  },
                },
              })
            }
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
            px
          </span>
        </div>
      </div>
    </div>
  );
};

const ChartLayout = ({
  children,
  aspectRatio,
  backgroundColor,
  borderRadius,
  ref,
  className,
}: {
  children: React.ReactNode;
  aspectRatio: ChartAspectRatio;
  backgroundColor?: string;
  borderRadius?: number;
  ref?: React.Ref<HTMLDivElement>;
  className?: string;
}) => {
  return (
    <div
      ref={ref}
      className={cn(
        "relative flex justify-center items-center max-h-[90vh] md:max-h-[87vh] max-w-[90vw] md:max-w-[calc(100vw-500px)]",
        getChartLayoutWidthAndHeightFromAspectRatio(aspectRatio),
        className
      )}
      style={{
        aspectRatio: aspectRatio,
        backgroundColor: backgroundColor,
        borderRadius: borderRadius,
      }}
    >
      {children}
    </div>
  );
};

const ChartTypePreview = ({ chartType }: { chartType: ChartMainType }) => {
  const chartTypeToPreview: Record<ChartMainType, JSX.Element> = {
    bar: <BarChartPreview />,
    line: <LineChartPreview />,
    pie: <PieChartPreview />,
    area: <AreaChartPreview />,
    radar: <RadarChartPreview />,
    radial: <RadialChartPreview />,
    scatter: <ScatterChartPreview />,
  };

  return chartTypeToPreview[chartType];
};

const Watermark = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "absolute bg-white/50 p-2 rounded-md shadow-lg z-10 opacity-70",
        className
      )}
    >
      <div className="flex gap-1 md:gap-2 my-auto h-full">
        <Text variant="xs" className="m-auto block md:hidden">
          made with
        </Text>
        <Text variant="sm" className="m-auto hidden md:block">
          made with
        </Text>
        <Image
          width={14}
          height={14}
          src="/logo.svg"
          alt="logo"
          className="w-[14px] h-[14px] object-contain m-auto"
        />
        <Text variant="sm" className="font-bold m-auto hidden md:block">
          Chartgg
        </Text>
        <Text variant="xs" className="font-bold m-auto block md:hidden">
          Chartgg
        </Text>
      </div>
    </div>
  );
};
