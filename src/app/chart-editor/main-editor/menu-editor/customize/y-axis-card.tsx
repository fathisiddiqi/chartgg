import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Switch } from "@/components/custom-ui/switch";
import { Text } from "@/components/ui/text";
import { CardProps } from "./props";

const YAxisCard = ({
  chartCustomization,
  setChartCustomization,
}: CardProps) => {
  return (
    <Card>
      <CardHeader>
        <Text variant="sm" className="font-bold">
          Y-Axis
        </Text>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex justify-between">
          <Text variant="label">Show</Text>
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
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default YAxisCard;
