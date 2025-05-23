import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/custom-ui/chart";
import useChartTheme from "@/hook/use-chart-theme";
import { replaceSpaceWithUnderscore } from "@/lib/utils";
import { ChartData, useChartStore } from "@/store/chart";
import { useEffect, useState } from "react";
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";

const RadialChartPreview = () => {
  const { chartData, chartCustomization, chartStyle } = useChartStore(
    (state) => state
  );
  const { colors: chartColors } = useChartTheme(
    chartStyle.content.theme.selected
  );

  const [chartKeys, setChartKeys] = useState<string[]>([]);
  const [chartConfig, setChartConfig] = useState<ChartConfig>({});
  const [radialChartData, setRadialChartData] = useState<ChartData[]>([]);
  const [radialChartKeys, setRadialChartKeys] = useState<string[]>([]);

  useEffect(() => {
    if (chartData?.length > 0) {
      setRadialChartKeys(chartData.map((item) => item.label));
      setChartKeys(
        Object.keys(chartData[0]).filter(
          (key) => key !== "id" && key !== "label"
        )
      );
    }
  }, [chartData]);

  useEffect(() => {
    if (radialChartKeys?.length > 0) {
      setChartConfig((prevConfig) => ({
        ...prevConfig,
        ...Object.fromEntries(
          radialChartKeys.map((key, index) => [
            replaceSpaceWithUnderscore(key),
            {
              label: key,
              color: `hsl(${chartColors[index + 1]})`,
            },
          ])
        ),
      }));
    }

    setRadialChartData(
      chartData.map((item, index) => ({
        ...item,
        fill: `hsl(${chartColors[index + 1]})`,
      }))
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [radialChartKeys, chartStyle.content.theme.selected]);

  return (
    <ChartContainer config={chartConfig}>
      {!chartData || chartData.length === 0 ? (
        <div className="flex h-full items-center justify-center">
          <p className="text-muted-foreground">No data available</p>
        </div>
      ) : (
        <RadialBarChart
          accessibilityLayer
          data={radialChartData}
          margin={{
            left: 12,
            right: 12,
            top: 12,
          }}
        >
          <ChartTooltip
            cursor={chartCustomization.tooltip.focused}
            trigger="click"
            content={
              <ChartTooltipContent
                nameKey={chartKeys[0]}
                indicator={
                  chartCustomization.tooltip.indicator !== "none"
                    ? chartCustomization.tooltip.indicator
                    : undefined
                }
                hideIndicator={chartCustomization.tooltip.indicator === "none"}
                hideLabel
              />
            }
            active={!!chartCustomization.tooltip.show}
            defaultIndex={
              chartCustomization.tooltip.show
                ? chartCustomization.tooltip.showTooltipIndex
                : undefined
            }
          />
          {chartCustomization.polarAngleAxis.show && (
            <PolarAngleAxis
              angleAxisId="angleAxis"
              dataKey="label"
              tickLine={chartCustomization.polarAngleAxis.tickLine}
              axisLine={chartCustomization.polarAngleAxis.axisLine}
              tickFormatter={(value: string) =>
                value.slice(0, chartCustomization.polarAngleAxis.charLength)
              }
            />
          )}
          {chartCustomization.polarRadiusAxis.show && (
            <PolarRadiusAxis
              radiusAxisId="radiusAxis"
              axisLine={chartCustomization.polarRadiusAxis.axisLine}
              tickLine={chartCustomization.polarRadiusAxis.tickLine}
              reversed={chartCustomization.polarRadiusAxis.reversed}
            />
          )}
          {chartCustomization.legend.show && (
            <ChartLegend
              verticalAlign={chartCustomization.legend.verticalAlign}
              align={chartCustomization.legend.align}
              content={<ChartLegendContent key="label" nameKey="label" />}
            />
          )}
          {chartCustomization.polarGrid.show && <PolarGrid />}
          <RadialBar
            dataKey={chartKeys[0]}
            {...{
              angleAxisId: "angleAxis",
              radiusAxisId: "radiusAxis",
            }}
          />
        </RadialBarChart>
      )}
    </ChartContainer>
  );
};

export default RadialChartPreview;
