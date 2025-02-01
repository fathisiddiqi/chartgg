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
import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  Rectangle,
  XAxis,
  YAxis,
} from "recharts";

const BarChartPreview = () => {
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
            {...(chartCustomization.active.show
              ? {
                  activeIndex: chartCustomization.active.index,
                  activeBar: (props: any) => (
                    <Rectangle
                      {...props}
                      fillOpacity={chartCustomization.active.fillOpacity}
                      fill={chartCustomization.active.fill}
                      stroke={chartCustomization.active.strokeColor}
                      strokeWidth={chartCustomization.active.strokeWidth}
                      strokeOpacity={chartCustomization.active.strokeOpacity}
                      strokeDasharray={
                        chartCustomization.active.strokeStyle === "dashed"
                          ? "8 8"
                          : chartCustomization.active.strokeStyle === "dotted"
                          ? "1 2"
                          : undefined
                      }
                      strokeDashoffset="2"
                    />
                  ),
                }
              : {})}
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
