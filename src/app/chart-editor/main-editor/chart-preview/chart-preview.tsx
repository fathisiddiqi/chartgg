import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartMainType, ChartType, useChartStore } from "@/store/chart";
import { ArrowDown, icons } from "lucide-react";
import { cn, hexToRGB, titleCase } from "@/lib/utils";
import { Input } from "@/components/custom-ui/input";
import ChartFrame from "@/components/common/chart-frame";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import ChooseChart from "../menu-editor/chart";
import { useState } from "react";
import { Text } from "@/components/ui/text";
import BarChartPreview from "./charts/bar-chart";
import LineChartPreview from "./charts/line-chart";
import PieChartPreview from "./charts/pie-chart";
import AreaChartPreview from "./charts/area-chart";
import RadarChartPreview from "./charts/radar-chart";
import RadialChartPreview from "./charts/radial-chart";
import ScatterChartPreview from "./charts/scatter-chart";

const ChartPreview = () => {
  const { chartType, chartScreenshot, chartCustomization } = useChartStore(
    (state) => state
  );

  return (
    <div className="h-[calc(100vh-100px)] w-full bg-gray-50 flex justify-center items-center relative ">
      <div
        style={{
          objectFit: "contain",
          backgroundColor: `rgba(${hexToRGB(
            chartScreenshot.canvas.background.color
          )}, ${chartScreenshot.canvas.background.opacity})`,
          borderRadius: chartScreenshot.canvas.border.radius,
        }}
        className="flex items-center justify-center mx-auto scale-50"
      >
        {/* Chart Container */}
        <div
          style={{
            transform: `scale(${chartScreenshot.content.scale / 60}) rotate(${
              chartScreenshot.content.rotate
            }deg)`,
            boxShadow: chartScreenshot.content.shadow,
            padding: 0,
          }}
        >
          {/* Chart Frame */}
          <ChartFrame frame={chartScreenshot.content.frame}>
            {/* Chart Content */}
            <Card
              style={{
                backgroundColor: chartScreenshot.content.background.color,
                borderColor: chartScreenshot.content.border.color,
                borderRadius: chartScreenshot.content.border.radius,
                borderWidth: chartScreenshot.content.border.width,
                width: chartScreenshot.content.width,
              }}
              className="shadow-none"
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
              </CardContent>

              <CardFooter className="flex-col gap-2 text-sm"></CardFooter>
            </Card>
          </ChartFrame>
        </div>
      </div>
    </div>
  );
};

export default ChartPreview;

const FooterTitleIcon = ({ iconInStr }: { iconInStr: string }) => {
  const LucideIcon = icons[iconInStr as keyof typeof icons];

  return (
    <LucideIcon className="w-4 h-4 text-muted-foreground" aria-hidden="true" />
  );
};

const ActionMenu = () => {
  const { chartScreenshot } = useChartStore((state) => state);

  return (
    <div className="w-full flex justify-between gap-2 absolute top-4 left-4 right-10 z-10">
      <div className="relative flex gap-2 mr-8">
        <div className="relative w-24">
          <Input
            variant="sm"
            type="numeric"
            value={chartScreenshot.canvas.width || ""}
            onChange={(e) =>
              useChartStore.setState({
                chartScreenshot: {
                  ...chartScreenshot,
                  canvas: {
                    ...chartScreenshot.canvas,
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
            value={chartScreenshot.canvas.height}
            onChange={(e) =>
              useChartStore.setState({
                chartScreenshot: {
                  ...chartScreenshot,
                  canvas: {
                    ...chartScreenshot.canvas,
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
