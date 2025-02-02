import { CustomizationCardProps } from "@/types";
import { Text } from "@/components/ui/text";
import { Switch } from "@/components/custom-ui/switch";
import { Input } from "@/components/custom-ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/custom-ui/select";
import { ChartData, ChartStrokeStyle, ChartStrokeStyles } from "@/store/chart";
import { titleCase } from "@/lib/utils";
import { Slider } from "@/components/ui/slider";
import ColorSelector from "@/components/common/color-selector";

const ActiveCard = ({
  chartCustomization,
  setChartCustomization,
  chartData,
}: CustomizationCardProps & { chartData: ChartData[] }) => {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <Text variant="sm" className="font-bold">
          Active
        </Text>
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
      <div className="flex flex-col">
        <Text variant="label">Index</Text>
        <div className="flex">
          <Slider
            value={[chartCustomization.active.index + 1]}
            min={0}
            max={Number(chartData.length)}
            step={1}
            onValueChange={(value) =>
              setChartCustomization({
                ...chartCustomization,
                active: {
                  ...chartCustomization.active,
                  index: value[0] - 1,
                },
              })
            }
            className="flex-1"
            disabled={!chartCustomization.active.show}
          />
          <Input
            variant="sm"
            type="number"
            value={chartCustomization.active.index + 1}
            onChange={(e) => {
              setChartCustomization({
                ...chartCustomization,
                active: {
                  ...chartCustomization.active,
                  index: Number(e.target.value) - 1,
                },
              });
            }}
            max={10}
            className="ml-2 w-10 p-0 text-center"
            disabled={!chartCustomization.active.show}
          />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <Text variant="label">Fill Color</Text>
        <ColorSelector
          selectedColor={chartCustomization.active.fill}
          setSelectedColor={(color) =>
            setChartCustomization({
              ...chartCustomization,
              active: {
                ...chartCustomization.active,
                fill: color,
              },
            })
          }
          triggerClassName="w-28"
          disabled={!chartCustomization.active.show}
        />
      </div>
      <div className="flex flex-col">
        <Text variant="label">Fill Opacity</Text>
        <div className="flex">
          <Slider
            value={[chartCustomization.active.fillOpacity]}
            max={1}
            step={0.1}
            onValueChange={(value) =>
              setChartCustomization({
                ...chartCustomization,
                active: {
                  ...chartCustomization.active,
                  fillOpacity: value[0],
                },
              })
            }
            className="flex-1"
            disabled={!chartCustomization.active.show}
          />
          <Input
            variant="sm"
            type="number"
            value={chartCustomization.active.fillOpacity}
            onChange={(e) => {
              setChartCustomization({
                ...chartCustomization,
                active: {
                  ...chartCustomization.active,
                  fillOpacity: Number(e.target.value),
                },
              });
            }}
            max={1}
            className="ml-2 w-10 p-0 text-center"
            disabled={!chartCustomization.active.show}
          />
        </div>
      </div>
      <div className="flex flex-col space-y-2">
        <Text variant="label">Stroke Style</Text>
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
          disabled={!chartCustomization.active.show}
        >
          <SelectTrigger variant="sm" className="w-full">
            <SelectValue>
              <Text variant="xs">
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
                <Text variant="xs">{titleCase(style)}</Text>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="flex justify-between items-center">
        <Text variant="label">Stroke Color</Text>
        <ColorSelector
          selectedColor={chartCustomization.active.strokeColor}
          setSelectedColor={(color) =>
            setChartCustomization({
              ...chartCustomization,
              active: {
                ...chartCustomization.active,
                strokeColor: color,
              },
            })
          }
          triggerClassName="w-28"
          disabled={!chartCustomization.active.show}
        />
      </div>
      <div className="flex flex-col">
        <Text variant="label">Stroke Opacity</Text>
        <div className="flex">
          <Slider
            value={[chartCustomization.active.strokeOpacity]}
            max={1}
            step={0.1}
            onValueChange={(value) =>
              setChartCustomization({
                ...chartCustomization,
                active: {
                  ...chartCustomization.active,
                  strokeOpacity: value[0],
                },
              })
            }
            className="flex-1"
            disabled={!chartCustomization.active.show}
          />
          <Input
            variant="sm"
            type="number"
            value={chartCustomization.active.strokeOpacity}
            onChange={(e) => {
              setChartCustomization({
                ...chartCustomization,
                active: {
                  ...chartCustomization.active,
                  strokeOpacity: Number(e.target.value),
                },
              });
            }}
            max={1}
            className="ml-2 w-10 p-0 text-center"
            disabled={!chartCustomization.active.show}
          />
        </div>
      </div>
      <div className="flex flex-col">
        <Text variant="label">Stroke Width</Text>
        <div className="flex">
          <Slider
            value={[chartCustomization.active.strokeWidth]}
            min={0}
            max={10}
            step={1}
            onValueChange={(value) =>
              setChartCustomization({
                ...chartCustomization,
                active: {
                  ...chartCustomization.active,
                  strokeWidth: value[0],
                },
              })
            }
            className="flex-1"
            disabled={!chartCustomization.active.show}
          />
          <Input
            variant="sm"
            type="number"
            value={chartCustomization.active.strokeWidth}
            onChange={(e) => {
              setChartCustomization({
                ...chartCustomization,
                active: {
                  ...chartCustomization.active,
                  strokeWidth: Number(e.target.value),
                },
              });
            }}
            max={10}
            className="ml-2 w-10 p-0 text-center"
            disabled={!chartCustomization.active.show}
          />
        </div>
      </div>
    </div>
  );
};

export default ActiveCard;
