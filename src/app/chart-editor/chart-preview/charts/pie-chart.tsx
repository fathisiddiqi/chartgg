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
  LabelList,
  Pie,
  PieChart,
  PolarAngleAxis,
  PolarRadiusAxis,
  Sector,
} from "recharts";
import { PieSectorDataItem } from "recharts/types/polar/Pie";

const PieChartPreview = () => {
  const { chartData, chartCustomization, chartStyle } = useChartStore(
    (state) => state
  );
  const { colors: chartColors } = useChartTheme(
    chartStyle.content.theme.selected
  );

  const [chartKeys, setChartKeys] = useState<string[]>([]);
  const [chartConfig, setChartConfig] = useState<ChartConfig>({});
  const [pieChartData, setPieChartData] = useState<
    Array<ChartData & { fill: string }>
  >([]);
  const [pieChartKeys, setPieChartKeys] = useState<string[]>([]);

  useEffect(() => {
    if (chartData?.length > 0) {
      setPieChartKeys(chartData.map((item) => item.label));
      setChartKeys(
        Object.keys(chartData[0]).filter(
          (key) => key !== "id" && key !== "label"
        )
      );
    }
  }, [chartData]);

  useEffect(() => {
    if (pieChartKeys?.length > 0) {
      const config = (prevConfig: ChartConfig) => ({
        ...prevConfig,
        ...Object.fromEntries(
          pieChartKeys.map((key, index) => [
            replaceSpaceWithUnderscore(key),
            {
              label: key,
              color: `hsl(${chartColors[index + 1]})`,
            },
          ])
        ),
        [chartKeys[0]]: {
          label: chartKeys[0],
          color: `hsl(${chartColors[1]})`,
        },
      });

      setChartConfig(config);
    }

    setPieChartData(
      chartData.map((item, index) => ({
        id: item.id,
        label: item.label,
        [chartKeys[0]]: Number(item[chartKeys[0]]),
        fill: `hsl(${chartColors[index + 1]})`,
      }))
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pieChartKeys, chartStyle.content.theme.selected]);

  return (
    <ChartContainer config={chartConfig}>
      {!chartData || chartData.length === 0 ? (
        <div className="flex h-full items-center justify-center">
          <p className="text-muted-foreground">No data available</p>
        </div>
      ) : (
        <PieChart
          accessibilityLayer
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

          <Pie
            data={pieChartData}
            dataKey={chartKeys[0]}
            nameKey="label"
            {...{
              angleAxisId: "angleAxis",
              radiusAxisId: "radiusAxis",
            }}
            {...(chartCustomization.active.show
              ? {
                  activeIndex: chartCustomization.active.index,
                  activeShape: ({
                    outerRadius = 0,
                    ...props
                  }: PieSectorDataItem) => (
                    <Sector
                      {...props}
                      outerRadius={outerRadius + 10}
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
                dataKey={chartKeys[0]}
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
          </Pie>
        </PieChart>
      )}
    </ChartContainer>
  );
};

export default PieChartPreview;
