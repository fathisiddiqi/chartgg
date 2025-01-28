import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { CustomizationCardProps } from "@/types";
import { Text } from "@/components/ui/text";
import { Switch } from "@/components/custom-ui/switch";
import { Input } from "@/components/custom-ui/input";
import { ColorInput } from "@/components/custom-ui/color-input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/custom-ui/select";
import { ChartStrokeStyle, ChartStrokeStyles } from "@/store/chart";
import { titleCase } from "@/lib/utils";
import { Slider } from "@/components/ui/slider";
const ActiveCard = ({
  chartCustomization,
  setChartCustomization,
}: CustomizationCardProps) => {
  return (
    <Card>
      <CardHeader>
        <Text variant="sm" className="font-bold">
          Active
        </Text>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex justify-between items-center">
          <Text variant="label">Show</Text>
          <Switch
            size="sm"
            checked={chartCustomization.active.show}
            onCheckedChange={() =>
              setChartCustomization({
                ...chartCustomization,
                active: {
                  ...chartCustomization.active,
                  show: !chartCustomization.active.show,
                },
              })
            }
          />
        </div>
        <div className="flex justify-between items-center">
          <Text variant="label">Active Index</Text>
          <Input
            variant="sm"
            type="text"
            value={chartCustomization.active.index}
            onChange={(e) =>
              setChartCustomization({
                ...chartCustomization,
                active: {
                  ...chartCustomization.active,
                  index: Number(e.target.value),
                },
              })
            }
            className="flex-1 bg-white text-gray-900 border-gray-300 max-w-[2.5rem] p-1 text-center"
          />
        </div>
        <div className="flex justify-between items-center">
          <Text variant="label">Fill Color</Text>
          <ColorInput
            variant="sm"
            value={chartCustomization.active.fill}
            onChange={(e) =>
              setChartCustomization({
                ...chartCustomization,
                active: {
                  ...chartCustomization.active,
                  fill: e.target.value,
                },
              })
            }
          />
        </div>
        <div className="flex justify-between items-center">
          <Text variant="label" className="font-medium">
            Fill Opacity
          </Text>
          <Slider
            defaultValue={[chartCustomization.active.fillOpacity]}
            max={1}
            step={0.1}
            className="w-1/3"
            onValueChange={(value) =>
              setChartCustomization({
                ...chartCustomization,
                active: {
                  ...chartCustomization.active,
                  fillOpacity: value[0],
                },
              })
            }
          />
        </div>
        <div className="flex justify-between items-center">
          <Text variant="label" className="font-medium">
            Stroke Style
          </Text>
          <Select
            value={chartCustomization.active.strokeStyle}
            onValueChange={(e) =>
              setChartCustomization({
                ...chartCustomization,
                active: {
                  ...chartCustomization.active,
                  strokeStyle: e as ChartStrokeStyle,
                },
              })
            }
          >
            <SelectTrigger variant="sm" className="w-[8rem]">
              <SelectValue>
                <Text variant="sm">
                  {titleCase(chartCustomization.active.strokeStyle)}
                </Text>
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              {ChartStrokeStyles.map((style) => (
                <SelectItem
                  key={style}
                  value={style}
                  onClick={() =>
                    setChartCustomization({
                      ...chartCustomization,
                      active: {
                        ...chartCustomization.active,
                        strokeStyle: style,
                      },
                    })
                  }
                >
                  <Text variant="sm">{titleCase(style)}</Text>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex justify-between items-center">
          <Text variant="label" className="font-medium">
            Stroke Opacity
          </Text>
          <Slider
            defaultValue={[chartCustomization.active.strokeOpacity]}
            max={1}
            step={0.1}
            className="w-1/3"
            onValueChange={(value) =>
              setChartCustomization({
                ...chartCustomization,
                active: {
                  ...chartCustomization.active,
                  strokeOpacity: value[0],
                },
              })
            }
          />
        </div>
        <div className="flex justify-between items-center">
          <Text variant="label" className="font-medium">
            Stroke Width
          </Text>
          <Slider
            defaultValue={[chartCustomization.active.strokeWidth]}
            max={10}
            step={1}
            className="w-1/3"
            onValueChange={(value) =>
              setChartCustomization({
                ...chartCustomization,
                active: {
                  ...chartCustomization.active,
                  strokeWidth: value[0],
                },
              })
            }
          />
        </div>
        <div className="flex justify-between items-center">
          <Text variant="label">Stroke Color</Text>
          <ColorInput
            variant="sm"
            value={chartCustomization.active.strokeColor}
            onChange={(e) =>
              setChartCustomization({
                ...chartCustomization,
                active: {
                  ...chartCustomization.active,
                  strokeColor: e.target.value,
                },
              })
            }
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default ActiveCard;
