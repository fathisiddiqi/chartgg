import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import useChartTheme from "@/hook/use-chart-theme";
import { replaceSpaceWithUnderscore } from "@/lib/utils";
import { useChartStore } from "@/store/chart";
import { useEffect, useState } from "react";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

const AreaChartPreview = () => {
  const { chartData, chartCustomization, chartStyle } = useChartStore(
    (state) => state
  );
  const { colors: chartColors } = useChartTheme(
    chartStyle.content.theme.selected
  );

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
  }, [chartKeys, chartStyle.content.theme.selected]);

  return (
    <ChartContainer config={chartConfig}>
      <AreaChart accessibilityLayer data={chartData}>
        <CartesianGrid
          vertical={chartCustomization.grid.vertical.show}
          horizontal={chartCustomization.grid.horizontal.show}
        />
        {chartCustomization.xAxis.show && (
          <XAxis
            dataKey="label"
            tickLine={chartCustomization.xAxis.tickLine}
            tickMargin={10}
            axisLine={chartCustomization.xAxis.axisLine}
            tickFormatter={(value) =>
              value.slice(0, chartCustomization.xAxis.charLength)
            }
          />
        )}
        {chartCustomization.yAxis.show && (
          <YAxis axisLine={false} tickLine={false} reversed={false} />
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
              hideIndicator={chartCustomization.tooltip.indicator === "none"}
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
          <Area
            key={key}
            dataKey={key}
            name={key}
            fill={`var(--color-${replaceSpaceWithUnderscore(key)})`}
            radius={4}
          />
        ))}
      </AreaChart>
    </ChartContainer>
  );
};

export default AreaChartPreview;
