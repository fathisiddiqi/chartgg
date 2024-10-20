import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { replaceSpaceWithUnderscore } from "@/lib/utils";
import { ChartCustomization, ChartData } from "@/store/chart";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

interface BarChartPreviewProps {
  data: ChartData[];
  config: ChartConfig;
  chartCustomization: ChartCustomization;
  chartKeys: string[];
}

const BarChartPreview = ({
  data: chartData,
  config: chartConfig,
  chartCustomization,
  chartKeys,
}: BarChartPreviewProps) => {
  return (
    <ChartContainer config={chartConfig}>
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid
          vertical={chartCustomization.grid.vertical.show}
          horizontal={chartCustomization.grid.horizontal.show}
        />
        {chartCustomization.label.xAxis.show && (
          <XAxis
            dataKey="label"
            tickLine={chartCustomization.label.xAxis.tickLine}
            tickMargin={10}
            axisLine={chartCustomization.label.xAxis.axisLine}
            tickFormatter={(value) =>
              value.slice(0, chartCustomization.label.xAxis.charLength)
            }
          />
        )}
        {chartCustomization.label.yAxis.show && (
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
          <Bar
            key={key}
            dataKey={key}
            name={key}
            fill={`var(--color-${replaceSpaceWithUnderscore(key)})`}
            radius={4}
          />
        ))}
      </BarChart>
    </ChartContainer>
  );
};

export default BarChartPreview;
