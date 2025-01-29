import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Switch } from "@/components/custom-ui/switch";
import { Text } from "@/components/ui/text";
import { CustomizationCardProps } from "@/types";

const YAxisCard = ({
  chartCustomization,
  setChartCustomization,
}: CustomizationCardProps) => {
  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <Text variant="sm" className="font-bold">
          Y-Axis
        </Text>
        <Switch
          size="sm"
          checked={chartCustomization.yAxis.show}
          onCheckedChange={() => {
            setChartCustomization({
              ...chartCustomization,
              yAxis: {
                ...chartCustomization.yAxis,
                show: !chartCustomization.yAxis.show,
              },
            });
          }}
        />
      </div>
      <div className="flex justify-between">
        <Text variant="label">Axis Line</Text>
        <Switch
          size="sm"
          checked={chartCustomization.yAxis.axisLine}
          onCheckedChange={() => {
            setChartCustomization({
              ...chartCustomization,
              yAxis: {
                ...chartCustomization.yAxis,
                axisLine: !chartCustomization.yAxis.axisLine,
              },
            });
          }}
          disabled={!chartCustomization.yAxis.show}
        />
      </div>
      <div className="flex justify-between">
        <Text variant="label">Tick Line</Text>
        <Switch
          size="sm"
          checked={chartCustomization.yAxis.tickLine}
          onCheckedChange={() => {
            setChartCustomization({
              ...chartCustomization,
              yAxis: {
                ...chartCustomization.yAxis,
                tickLine: !chartCustomization.yAxis.tickLine,
              },
            });
          }}
          disabled={!chartCustomization.yAxis.show}
        />
      </div>
      <div className="flex justify-between">
        <Text variant="label">Reversed</Text>
        <Switch
          size="sm"
          checked={chartCustomization.yAxis.reversed}
          onCheckedChange={() => {
            setChartCustomization({
              ...chartCustomization,
              yAxis: {
                ...chartCustomization.yAxis,
                reversed: !chartCustomization.yAxis.reversed,
              },
            });
          }}
          disabled={!chartCustomization.yAxis.show}
        />
      </div>
    </div>
  );
};

export default YAxisCard;
