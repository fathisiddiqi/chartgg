import { CardProps } from "./props";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Switch } from "@/components/custom-ui/switch";
import { Text } from "@/components/ui/text";
import { Slider } from "@/components/ui/slider";

const DotCard = ({ chartCustomization, setChartCustomization }: CardProps) => {
  return (
    <Card>
      <CardHeader>
        <Text variant="sm" className="font-bold">
          Dot
        </Text>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex justify-between">
          <Text variant="label" className="font-medium">
            Show
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
        <div className="flex justify-between items-center">
          <Text variant="label" className="font-medium">
            Active Size
          </Text>
          <Slider
            defaultValue={[chartCustomization.dot.activeSize]}
            max={10}
            step={1}
            className="w-1/3"
            onValueChange={(value) =>
              setChartCustomization({
                ...chartCustomization,
                dot: {
                  ...chartCustomization.dot,
                  activeSize: value[0],
                },
              })
            }
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default DotCard;
