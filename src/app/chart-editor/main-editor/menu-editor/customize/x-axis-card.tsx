import { CardProps } from "./props";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/custom-ui/input";
import { Switch } from "@/components/custom-ui/switch";
import { Text } from "@/components/ui/text";

const XAxisCard = ({
  chartCustomization,
  setChartCustomization,
}: CardProps) => {
  return (
    <Card>
      <CardHeader>
        <Text variant="sm" className="font-bold">
          X-Axis
        </Text>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex justify-between items-center">
          <Text variant="label">Show</Text>
          <Switch
            size="sm"
            checked={chartCustomization.xAxis.show}
            onCheckedChange={() => {
              setChartCustomization({
                ...chartCustomization,
                xAxis: {
                  ...chartCustomization.xAxis,
                  show: !chartCustomization.xAxis.show,
                },
              });
            }}
          />
        </div>
        <div className="flex justify-between items-center">
          <Text variant="label">Axis Line</Text>
          <Switch
            size="sm"
            checked={chartCustomization.xAxis.axisLine}
            onCheckedChange={() => {
              setChartCustomization({
                ...chartCustomization,
                xAxis: {
                  ...chartCustomization.xAxis,
                  axisLine: !chartCustomization.xAxis.axisLine,
                },
              });
            }}
          />
        </div>
        <div className="flex justify-between items-center">
          <Text variant="label">Tick Line</Text>
          <Switch
            size="sm"
            checked={chartCustomization.xAxis.tickLine}
            onCheckedChange={() => {
              setChartCustomization({
                ...chartCustomization,
                xAxis: {
                  ...chartCustomization.xAxis,
                  tickLine: !chartCustomization.xAxis.tickLine,
                },
              });
            }}
          />
        </div>
        <div className="flex justify-between items-center">
          <Text variant="label">Character Length</Text>
          <Input
            variant="sm"
            type="text"
            value={chartCustomization.xAxis.charLength}
            onChange={(e) =>
              setChartCustomization({
                ...chartCustomization,
                xAxis: {
                  ...chartCustomization.xAxis,
                  charLength: Number(e.target.value),
                },
              })
            }
            className="flex-1 bg-white text-gray-900 border-gray-300 max-w-[2.25rem] p-1 text-center"
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default XAxisCard;
