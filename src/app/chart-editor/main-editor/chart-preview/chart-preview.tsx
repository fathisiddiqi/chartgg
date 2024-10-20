import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useChartStore } from "@/store/chart";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { icons } from "lucide-react";
import { useEffect, useState } from "react";
import { hexToRGB, replaceSpaceWithUnderscore } from "@/lib/utils";
import useChartColor from "@/hook/use-chart-colors";
import { Input } from "@/components/custom-ui/input";
import ChromeLightFrame from "@/components/frame/chrome-light";
import ChartFrame from "@/components/common/chart-frame";

const ChartPreview = () => {
  const { chartType, chartData, chartScreenshot, chartCustomization } =
    useChartStore((state) => state);
  const chartColors = useChartColor(chartCustomization.chart.theme.selected);

  const [chartKeys, setChartKeys] = useState<string[]>([]);
  const [chartConfig, setChartConfig] = useState<ChartConfig>({});

  useEffect(() => {
    if (chartData?.length > 0) {
      setChartKeys(
        Object.keys(chartData[0]).filter(
          (key) => key !== "id" && key !== "label"
        )
      );
    }
  }, [chartData]);

  useEffect(() => {
    if (chartKeys?.length > 0) {
      setChartConfig((prevConfig) => ({
        ...prevConfig,
        ...Object.fromEntries(
          chartKeys.map((key, index) => [
            replaceSpaceWithUnderscore(key),
            {
              label: key,
              color: `hsl(${chartColors[index + 1]})`,
            },
          ])
        ),
      }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chartKeys, chartCustomization.chart.theme.selected]);

  return (
    <div className="w-full h-full bg-gray-50 flex justify-center items-center relative">
      <div className="w-2/12 flex gap-2 absolute top-4 right-4">
        <div className="relative">
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
        <div className="relative">
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
      {/* Background component */}
      <div
        style={{
          width: `${chartScreenshot.canvas.width}px`,
          height: `${chartScreenshot.canvas.height}px`,
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
          }}
        >
          {/* Chart Frame */}
          <ChartFrame frame={chartScreenshot.content.frame}>
            {/* Chart Content */}
            <Card
              style={{
                backgroundColor: chartCustomization.chart.background.color,
                borderColor: chartCustomization.chart.border.color,
                borderRadius: chartCustomization.chart.border.radius,
                borderWidth: chartCustomization.chart.border.width,
                width: chartCustomization.chart.content.width,
              }}
            >
              <CardHeader>
                <CardTitle>{chartCustomization.text.title.text}</CardTitle>
                <CardDescription>
                  {chartCustomization.text.title.text}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={chartConfig}>
                  <BarChart accessibilityLayer data={chartData}>
                    <CartesianGrid
                      vertical={chartCustomization.grid.vertical.show}
                      horizontal={chartCustomization.grid.horizontal.show}
                    />
                    {chartCustomization.label.xAxis.show && (
                      <XAxis
                        dataKey="label"
                        tickLine={chartCustomization.label.xAxis.tickLine}
                        tickMargin={10}
                        axisLine={chartCustomization.label.xAxis.axisLine}
                        tickFormatter={(value) =>
                          value.slice(
                            0,
                            chartCustomization.label.xAxis.charLength
                          )
                        }
                      />
                    )}
                    {chartCustomization.label.yAxis.show && (
                      <YAxis
                        axisLine={false}
                        tickLine={false}
                        reversed={false}
                      />
                    )}
                    <ChartTooltip
                      cursor={chartCustomization.tooltip.focused}
                      content={
                        <ChartTooltipContent
                          indicator={
                            chartCustomization.tooltip.indicator !== "none"
                              ? chartCustomization.tooltip.indicator
                              : undefined
                          }
                          hideIndicator={
                            chartCustomization.tooltip.indicator === "none"
                          }
                        />
                      }
                      active={!!chartCustomization.tooltip.show}
                      defaultIndex={
                        chartCustomization.tooltip.show
                          ? chartCustomization.tooltip.showTooltipIndex
                          : undefined
                      }
                    />
                    {chartCustomization.legend.show && (
                      <>
                        {chartKeys.length > 0 &&
                          chartKeys.map((key) => (
                            <ChartLegend
                              key={key}
                              content={
                                <ChartLegendContent
                                  nameKey={replaceSpaceWithUnderscore(key)}
                                />
                              }
                            />
                          ))}
                      </>
                    )}
                    {chartKeys.map((key) => (
                      <Bar
                        key={key}
                        dataKey={key}
                        name={key}
                        fill={`var(--color-${replaceSpaceWithUnderscore(key)})`}
                        radius={4}
                      />
                    ))}
                  </BarChart>
                </ChartContainer>
              </CardContent>
              <CardFooter className="flex-col items-start gap-2 text-sm">
                <div className="flex gap-2 font-medium leading-none">
                  {chartCustomization.text.footerTitle.text}
                </div>
                <div className="leading-none text-muted-foreground">
                  {chartCustomization.text.footerSubtitle.text}
                </div>
              </CardFooter>
            </Card>
          </ChartFrame>
        </div>
      </div>
    </div>
  );
};

const FooterTitleIcon = ({ iconInStr }: { iconInStr: string }) => {
  const LucideIcon = icons[iconInStr as keyof typeof icons];

  return (
    <LucideIcon className="w-4 h-4 text-muted-foreground" aria-hidden="true" />
  );
};

export default ChartPreview;
