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
import { ChartData, useChartStore } from "@/store/chart";
import { useEffect, useState } from "react";
import { LabelList, Pie, PieChart, Sector } from "recharts";
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
  const [pieChartData, setPieChartData] = useState<ChartData[]>([]);
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
      setChartConfig((prevConfig) => ({
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
      }));
    }

    setPieChartData(
      chartData.map((item, index) => ({
        ...item,
        fill: `hsl(${chartColors[index + 1]})`,
      }))
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pieChartKeys, chartStyle.content.theme.selected]);

  return (
    <ChartContainer config={chartConfig}>
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
        <ChartLegend content={<ChartLegendContent nameKey="label" />} />
        <Pie
          data={pieChartData}
          dataKey={chartKeys[0]}
          nameKey="label"
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
              className="fill-foreground"
              fontSize={10}
            />
          )}
          {chartCustomization.labelist.key.show && (
            <LabelList
              dataKey="label"
              position={chartCustomization.labelist.key.position}
              offset={chartCustomization.labelist.key.offset}
              fill="#000000"
              fontSize={10}
            />
          )}
        </Pie>
      </PieChart>
    </ChartContainer>
  );
};

export default PieChartPreview;
