import { CustomizationCardProps } from "@/types";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/custom-ui/input";
import { Switch } from "@/components/custom-ui/switch";
import { Text } from "@/components/ui/text";

const PolarRadiusAxisCard = ({
  chartCustomization,
  setChartCustomization,
}: CustomizationCardProps) => {
  return (
    <Card>
      <CardHeader>
        <Text variant="sm" className="font-bold">
          Polar Radius Axis
        </Text>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex justify-between items-center">
          <Text variant="label">Show</Text>
          <Switch
            size="sm"
            checked={chartCustomization.polarRadiusAxis.show}
            onCheckedChange={() => {
              setChartCustomization({
                ...chartCustomization,
                polarRadiusAxis: {
                  ...chartCustomization.polarRadiusAxis,
                  show: !chartCustomization.polarRadiusAxis.show,
                },
              });
            }}
          />
        </div>
        <div className="flex justify-between items-center">
          <Text variant="label">Axis Line</Text>
          <Switch
            size="sm"
            checked={chartCustomization.polarRadiusAxis.axisLine}
            onCheckedChange={() => {
              setChartCustomization({
                ...chartCustomization,
                polarRadiusAxis: {
                  ...chartCustomization.polarRadiusAxis,
                  axisLine: !chartCustomization.polarRadiusAxis.axisLine,
                },
              });
            }}
          />
        </div>
        <div className="flex justify-between items-center">
          <Text variant="label">Tick Line</Text>
          <Switch
            size="sm"
            checked={chartCustomization.polarRadiusAxis.tickLine}
            onCheckedChange={() => {
              setChartCustomization({
                ...chartCustomization,
                polarRadiusAxis: {
                  ...chartCustomization.polarRadiusAxis,
                  tickLine: !chartCustomization.polarRadiusAxis.tickLine,
                },
              });
            }}
          />
        </div>
        <div className="flex justify-between">
          <Text variant="label">Reversed</Text>
          <Switch
            size="sm"
            checked={chartCustomization.polarRadiusAxis.reversed}
            onCheckedChange={() => {
              setChartCustomization({
                ...chartCustomization,
                polarRadiusAxis: {
                  ...chartCustomization.polarRadiusAxis,
                  reversed: !chartCustomization.polarRadiusAxis.reversed,
                },
              });
            }}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default PolarRadiusAxisCard;
