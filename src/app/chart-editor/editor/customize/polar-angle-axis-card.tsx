import { CustomizationCardProps } from "@/types";
import { Input } from "@/components/custom-ui/input";
import { Switch } from "@/components/custom-ui/switch";
import { Text } from "@/components/ui/text";
import { Slider } from "@/components/ui/slider";

const PolarAngleAxisCard = ({
  chartCustomization,
  setChartCustomization,
}: CustomizationCardProps) => {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <Text variant="sm" className="font-bold">
          Polar Angle Axis
        </Text>
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
          disabled={!chartCustomization.polarAngleAxis.show}
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
          disabled={!chartCustomization.polarAngleAxis.show}
        />
      </div>
      <div className="flex flex-col">
        <Text variant="label">Character Length</Text>
        <div className="flex items-center">
          <Slider
            value={[chartCustomization.polarAngleAxis.charLength]}
            min={0}
            max={8}
            step={1}
            onValueChange={(value) =>
              setChartCustomization({
                ...chartCustomization,
                polarAngleAxis: {
                  ...chartCustomization.polarAngleAxis,
                  charLength: value[0],
                },
              })
            }
            className="flex-1"
            disabled={!chartCustomization.polarAngleAxis.show}
          />
          <Input
            variant="sm"
            type="number" // Change to number type for numeric input
            value={chartCustomization.polarAngleAxis.charLength}
            onChange={(e) => {
              setChartCustomization({
                ...chartCustomization,
                polarAngleAxis: {
                  ...chartCustomization.polarAngleAxis,
                  charLength: Number(e.target.value),
                },
              });
            }}
            max={8}
            className="ml-2 w-10 p-0 text-center"
            disabled={!chartCustomization.polarAngleAxis.show}
          />
        </div>
      </div>
    </div>
  );
};

export default PolarAngleAxisCard;
