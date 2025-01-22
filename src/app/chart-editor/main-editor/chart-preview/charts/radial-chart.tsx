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
import { ChartData, useChartStore } from "@/store/chart";
import { useEffect, useState } from "react";
import { RadialBar, RadialBarChart } from "recharts";

const RadialChartPreview = () => {
  const { chartData, chartCustomization } = useChartStore((state) => state);
  const chartColors = useChartColor(chartCustomization.theme.palette.selected);

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
  }, [radialChartKeys, chartCustomization.theme.palette.selected]);

  return (
    <ChartContainer config={chartConfig}>
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
        <RadialBar dataKey={chartKeys[0]} background />
      </RadialBarChart>
    </ChartContainer>
  );
};

export default RadialChartPreview;
