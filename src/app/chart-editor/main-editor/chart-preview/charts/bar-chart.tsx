import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import useChartColor from "@/hook/use-chart-colors";
import { replaceSpaceWithUnderscore } from "@/lib/utils";
import { ChartCustomization, ChartData, useChartStore } from "@/store/chart";
import { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  XAxis,
  YAxis,
} from "recharts";

const BarChartPreview = () => {
  const { chartType, chartData, chartCustomization } = useChartStore(
    (state) => state
  );
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
    <ChartContainer config={chartConfig}>
      <BarChart
        accessibilityLayer
        data={chartData}
        margin={{
          left: 20,
          right: 10,
          top: 20,
          bottom: 12,
        }}
      >
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
          <YAxis
            tickLine={chartCustomization.yAxis.tickLine}
            reversed={chartCustomization.yAxis.reversed}
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
          <Bar
            key={key}
            dataKey={key}
            name={key}
            fill={`var(--color-${replaceSpaceWithUnderscore(key)})`}
            radius={4}
            width={10}
          >
            {chartCustomization.labelist.value.show && (
              <LabelList
                dataKey={key}
                position={chartCustomization.labelist.value.position}
                offset={chartCustomization.labelist.value.offset}
                className="fill-foreground"
                fontSize={10}
              />
            )}
            {chartCustomization.labelist.key.show && (
              <LabelList
                dataKey="label"
                position={chartCustomization.labelist.key.position}
                offset={chartCustomization.labelist.key.offset}
                fill="#fff"
                fontSize={10}
              />
            )}
          </Bar>
        ))}
      </BarChart>
    </ChartContainer>
  );
};

export default BarChartPreview;
