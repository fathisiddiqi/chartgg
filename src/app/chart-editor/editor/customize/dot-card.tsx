import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Switch } from "@/components/custom-ui/switch";
import { Text } from "@/components/ui/text";
import { Slider } from "@/components/ui/slider";
import { CustomizationCardProps } from "@/types";
import { Input } from "@/components/custom-ui/input";

const DotCard = ({
  chartCustomization,
  setChartCustomization,
}: CustomizationCardProps) => {
  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <Text variant="sm" className="font-bold">
          Dot
        </Text>
        <Switch
          size="sm"
          checked={chartCustomization.dot.show}
          onCheckedChange={() =>
            setChartCustomization({
              ...chartCustomization,
              dot: {
                ...chartCustomization.dot,
                show: !chartCustomization.dot.show,
              },
            })
          }
        />
      </div>
      <div className="flex flex-col">
        <Text variant="label" className="font-medium">
          Active Size
        </Text>
        <div className="flex">
          <Slider
            value={[chartCustomization.dot.activeSize]}
            min={0}
            max={10}
            step={1}
            onValueChange={(value) =>
              setChartCustomization({
                ...chartCustomization,
                dot: {
                  ...chartCustomization.dot,
                  activeSize: value[0],
                },
              })
            }
            className="flex-1"
            disabled={!chartCustomization.dot.show}
          />
          <Input
            variant="sm"
            type="number"
            value={chartCustomization.dot.activeSize}
            onChange={(e) => {
              setChartCustomization({
                ...chartCustomization,
                dot: {
                  ...chartCustomization.dot,
                  activeSize: Number(e.target.value),
                },
              });
            }}
            max={10}
            className="ml-2 w-10"
            disabled={!chartCustomization.dot.show}
          />
        </div>
      </div>
    </div>
  );
};

export default DotCard;
