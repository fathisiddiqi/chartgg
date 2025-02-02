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
import { useChartStore } from "@/store/chart";
import { useEffect, useState } from "react";
import {
  CartesianGrid,
  LabelList,
  Line,
  LineChart,
  XAxis,
  YAxis,
} from "recharts";

const LineChartPreview = () => {
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
      {!chartData || chartData.length === 0 ? (
        <div className="flex h-full items-center justify-center">
          <p className="text-muted-foreground">No data available</p>
        </div>
      ) : (
        <LineChart
          accessibilityLayer
          data={chartData}
          margin={{
            left: 30,
            right: 30,
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
              axisLine={chartCustomization.yAxis.axisLine}
              tickLine={chartCustomization.yAxis.tickLine}
              reversed={chartCustomization.yAxis.reversed}
            />
          )}
          <ChartTooltip
            cursor={chartCustomization.tooltip.focused}
            trigger="click"
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
            <ChartLegend
              verticalAlign={chartCustomization.legend.verticalAlign}
              align={chartCustomization.legend.align}
              iconType="rect"
              payload={chartKeys.map((key) => ({
                value: key,
                type: "rect",
                color: `var(--color-${replaceSpaceWithUnderscore(key)})`,
                dataKey: key,
              }))}
              content={<ChartLegendContent />}
            />
          )}
          {chartKeys.map((key) => (
            <Line
              key={key}
              type="natural"
              dataKey={key}
              name={key}
              stroke={`var(--color-${replaceSpaceWithUnderscore(key)})`}
              strokeWidth={2}
              dot={chartCustomization.dot.show}
              activeDot={{
                r: chartCustomization.dot.activeSize,
              }}
            >
              {chartCustomization.labelist.key.show && (
                <LabelList
                  dataKey="label"
                  position={chartCustomization.labelist.key.position}
                  offset={chartCustomization.labelist.key.offset}
                  stroke="none"
                  fill={chartCustomization.labelist.key.color}
                  fontSize={10}
                  angle={
                    chartCustomization.labelist.key.orientation === "vertical"
                      ? -90
                      : 0
                  }
                />
              )}
              {chartCustomization.labelist.value.show && (
                <LabelList
                  dataKey={key}
                  position={chartCustomization.labelist.value.position}
                  offset={chartCustomization.labelist.value.offset}
                  stroke="none"
                  fill={chartCustomization.labelist.value.color}
                  fontSize={10}
                  angle={
                    chartCustomization.labelist.value.orientation === "vertical"
                      ? -90
                      : 0
                  }
                />
              )}
            </Line>
          ))}
        </LineChart>
      )}
    </ChartContainer>
  );
};

export default LineChartPreview;
