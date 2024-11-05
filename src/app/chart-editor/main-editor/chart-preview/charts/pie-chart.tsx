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
import { Pie, PieChart } from "recharts";

const PieChartPreview = () => {
  const { chartData, chartCustomization } = useChartStore((state) => state);
  const chartColors = useChartColor(chartCustomization.chart.theme.selected);

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
  }, [pieChartKeys, chartCustomization.chart.theme.selected]);

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
        <Pie data={pieChartData} dataKey={chartKeys[0]} nameKey="label" />
      </PieChart>
    </ChartContainer>
  );
};

export default PieChartPreview;
