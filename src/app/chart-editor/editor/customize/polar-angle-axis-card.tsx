import { CustomizationCardProps } from "@/types";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/custom-ui/input";
import { Switch } from "@/components/custom-ui/switch";
import { Text } from "@/components/ui/text";

const PolarAngleAxisCard = ({
  chartCustomization,
  setChartCustomization,
}: CustomizationCardProps) => {
  return (
    <Card>
      <CardHeader>
        <Text variant="sm" className="font-bold">
          Polar Angle Axis
        </Text>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex justify-between items-center">
          <Text variant="label">Show</Text>
          <Switch
            size="sm"
            checked={chartCustomization.polarAngleAxis.show}
            onCheckedChange={() => {
              setChartCustomization({
                ...chartCustomization,
                polarAngleAxis: {
                  ...chartCustomization.polarAngleAxis,
                  show: !chartCustomization.polarAngleAxis.show,
                },
              });
            }}
          />
        </div>
        <div className="flex justify-between items-center">
          <Text variant="label">Axis Line</Text>
          <Switch
            size="sm"
            checked={chartCustomization.polarAngleAxis.axisLine}
            onCheckedChange={() => {
              setChartCustomization({
                ...chartCustomization,
                polarAngleAxis: {
                  ...chartCustomization.polarAngleAxis,
                  axisLine: !chartCustomization.polarAngleAxis.axisLine,
                },
              });
            }}
          />
        </div>
        <div className="flex justify-between items-center">
          <Text variant="label">Tick Line</Text>
          <Switch
            size="sm"
            checked={chartCustomization.polarAngleAxis.tickLine}
            onCheckedChange={() => {
              setChartCustomization({
                ...chartCustomization,
                polarAngleAxis: {
                  ...chartCustomization.polarAngleAxis,
                  tickLine: !chartCustomization.polarAngleAxis.tickLine,
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
            value={chartCustomization.polarAngleAxis.charLength}
            onChange={(e) =>
              setChartCustomization({
                ...chartCustomization,
                polarAngleAxis: {
                  ...chartCustomization.polarAngleAxis,
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

export default PolarAngleAxisCard;
