import { CustomizationCardProps } from "@/types";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/custom-ui/input";
import { Switch } from "@/components/custom-ui/switch";
import { Text } from "@/components/ui/text";
import { Slider } from "@/components/ui/slider";

const XAxisCard = ({
  chartCustomization,
  setChartCustomization,
}: CustomizationCardProps) => {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <Text variant="sm" className="font-bold">
          X-Axis
        </Text>
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
          disabled={!chartCustomization.xAxis.show}
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
          disabled={!chartCustomization.xAxis.show}
        />
      </div>
      <div className="flex flex-col">
        <Text variant="label">Character Length</Text>
        <div className="flex items-center">
          <Slider
            value={[chartCustomization.xAxis.charLength]}
            min={0}
            max={8}
            step={1}
            onValueChange={(value) =>
              setChartCustomization({
                ...chartCustomization,
                xAxis: {
                  ...chartCustomization.xAxis,
                  charLength: value[0],
                },
              })
            }
            className="flex-1"
            disabled={!chartCustomization.xAxis.show}
          />
          <Input
            variant="sm"
            type="number" // Change to number type for numeric input
            value={chartCustomization.xAxis.charLength}
            onChange={(e) => {
              setChartCustomization({
                ...chartCustomization,
                xAxis: {
                  ...chartCustomization.xAxis,
                  charLength: Number(e.target.value),
                },
              });
            }}
            max={8}
            className="ml-2 w-10"
            disabled={!chartCustomization.xAxis.show}
          />
        </div>
      </div>
    </div>
  );
};

export default XAxisCard;
