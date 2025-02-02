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
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  Sector,
} from "recharts";

const RadarChartPreview = () => {
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
      {!chartKeys || chartKeys.length === 0 ? (
        <div className="flex h-full items-center justify-center">
          <p className="text-muted-foreground">No data available</p>
        </div>
      ) : (
        <RadarChart accessibilityLayer data={chartData}>
          <CartesianGrid
            vertical={chartCustomization.grid.vertical.show}
            horizontal={chartCustomization.grid.horizontal.show}
          />
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
          {chartCustomization.polarAngleAxis.show && (
            <PolarAngleAxis
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
              axisLine={chartCustomization.polarRadiusAxis.axisLine}
              tickLine={chartCustomization.polarRadiusAxis.tickLine}
              reversed={chartCustomization.polarRadiusAxis.reversed}
            />
          )}
          {chartCustomization.polarGrid.show && <PolarGrid />}
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
            <Radar
              key={key}
              dataKey={key}
              name={key}
              fill={`var(--color-${replaceSpaceWithUnderscore(key)})`}
              radius={4}
              fillOpacity={0.5}
              dot={chartCustomization.dot.show}
              activeDot={{
                r: chartCustomization.dot.activeSize,
              }}
            >
              {chartCustomization.labelist.value.show && (
                <LabelList
                  dataKey={key}
                  position={chartCustomization.labelist.value.position}
                  offset={chartCustomization.labelist.value.offset}
                  fill={chartCustomization.labelist.value.color}
                  stroke="none"
                  fontSize={10}
                  angle={
                    chartCustomization.labelist.value.orientation === "vertical"
                      ? -90
                      : 0
                  }
                />
              )}
              {chartCustomization.labelist.key.show && (
                <LabelList
                  dataKey="label"
                  position={chartCustomization.labelist.key.position}
                  offset={chartCustomization.labelist.key.offset}
                  stroke="none"
                  fontSize={10}
                  fill={chartCustomization.labelist.key.color}
                  angle={
                    chartCustomization.labelist.key.orientation === "vertical"
                      ? -90
                      : 0
                  }
                />
              )}
            </Radar>
          ))}
        </RadarChart>
      )}
    </ChartContainer>
  );
};

export default RadarChartPreview;
