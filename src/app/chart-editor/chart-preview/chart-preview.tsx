import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartMainType, useChartStore } from "@/store/chart";
import { icons } from "lucide-react";
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

const ChartPreview = () => {
  const { chartType, chartStyle, chartCustomization } = useChartStore(
    (state) => state
  );
  const { backgroundColor } = useChartTheme(chartStyle.content.theme.selected);

  return (
    <div
      className="h-[calc(100vh-100px)] w-full flex justify-center items-center relative rounded-md"
      style={{
        backgroundColor: `rgba(${hexToRGB(
          chartStyle.canvas.background.color
        )}, ${chartStyle.canvas.background.opacity})`,
        borderRadius: chartStyle.canvas.border.radius,
      }}
    >
      <div
        style={{
          objectFit: "contain",
        }}
        className="flex items-center justify-center mx-auto scale-50"
      >
        {/* Chart Container */}
        <div
          style={{
            transform: `scale(${chartStyle.content.scale / 60}) rotate(${
              chartStyle.content.rotate
            }deg)`,
            boxShadow: chartStyle.content.shadow,
            padding: 0,
            width: chartStyle.content.width,
          }}
        >
          {/* Chart Frame */}
          <ChartFrame frame={chartStyle.content.frame}>
            {/* Chart Content */}
            <Card
              className="shadow-none border-none rounded-none"
              style={{
                backgroundColor,
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
