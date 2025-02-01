import { CustomizationCardProps } from "@/types";
import { Switch } from "@/components/custom-ui/switch";
import { Text } from "@/components/ui/text";
import { ChartLabelistPosition, ChartLabelistPositions } from "@/store/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/custom-ui/select";
import { titleCase } from "@/lib/utils";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/custom-ui/input";
import { Separator } from "@/components/ui/separator";

const LabelistCard = ({
  chartCustomization,
  setChartCustomization,
}: CustomizationCardProps) => {
  return (
    <div className="space-y-2">
      <Text variant="sm" className="font-bold mt-3">
        Labelist
      </Text>
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <Text variant="label">Label</Text>
          <Switch
            size="sm"
            checked={chartCustomization.labelist.key.show}
            onCheckedChange={() =>
              setChartCustomization({
                ...chartCustomization,
                labelist: {
                  ...chartCustomization.labelist,
                  key: {
                    ...chartCustomization.labelist.key,
                    show: !chartCustomization.labelist.key.show,
                  },
                },
              })
            }
          />
        </div>
        <div className="flex flex-col space-y-2">
          <Text variant="label">Position</Text>
          <Select
            value={chartCustomization.labelist.key.position}
            onValueChange={(e) =>
              setChartCustomization({
                ...chartCustomization,
                labelist: {
                  ...chartCustomization.labelist,
                  key: {
                    ...chartCustomization.labelist.key,
                    position: e as ChartLabelistPosition,
                  },
                },
              })
            }
            disabled={!chartCustomization.labelist.key.show}
          >
            <SelectTrigger className="w-full" variant="sm">
              <SelectValue>
                <Text variant="xs">
                  {titleCase(chartCustomization.labelist.key.position)}
                </Text>
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              {ChartLabelistPositions.map((position) => (
                <SelectItem
                  key={position}
                  value={position}
                  onClick={() =>
                    setChartCustomization({
                      ...chartCustomization,
                      labelist: {
                        ...chartCustomization.labelist,
                        key: {
                          ...chartCustomization.labelist.key,
                          position: position,
                        },
                      },
                    })
                  }
                >
                  <Text variant="xs">{titleCase(position)}</Text>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col">
          <Text variant="label">Offset</Text>
          <div className="flex">
            <Slider
              value={[chartCustomization.labelist.key.offset]}
              min={0}
              max={30}
              step={1}
              onValueChange={(value) =>
                setChartCustomization({
                  ...chartCustomization,
                  labelist: {
                    ...chartCustomization.labelist,
                    key: {
                      ...chartCustomization.labelist.key,
                      offset: value[0],
                    },
                  },
                })
              }
              className="flex-1"
              disabled={!chartCustomization.labelist.key.show}
            />
            <Input
              variant="sm"
              type="number"
              value={chartCustomization.labelist.key.offset}
              onChange={(e) => {
                setChartCustomization({
                  ...chartCustomization,
                  labelist: {
                    ...chartCustomization.labelist,
                    key: {
                      ...chartCustomization.labelist.key,
                      offset: Number(e.target.value),
                    },
                  },
                });
              }}
              max={30}
              className="ml-2 w-10 p-0 text-center"
              disabled={!chartCustomization.labelist.key.show}
            />
          </div>
        </div>
      </div>
      <Separator className="my-2" />
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <Text variant="label">Value</Text>
          <Switch
            size="sm"
            checked={chartCustomization.labelist.value.show}
            onCheckedChange={() =>
              setChartCustomization({
                ...chartCustomization,
                labelist: {
                  ...chartCustomization.labelist,
                  value: {
                    ...chartCustomization.labelist.value,
                    show: !chartCustomization.labelist.value.show,
                  },
                },
              })
            }
          />
        </div>
        <div className="flex flex-col space-y-2">
          <Text variant="label">Position</Text>
          <Select
            value={chartCustomization.labelist.value.position}
            onValueChange={(e) =>
              setChartCustomization({
                ...chartCustomization,
                labelist: {
                  ...chartCustomization.labelist,
                  value: {
                    ...chartCustomization.labelist.value,
                    position: e as ChartLabelistPosition,
                  },
                },
              })
            }
            disabled={!chartCustomization.labelist.value.show}
          >
            <SelectTrigger className="w-full" variant="sm">
              <SelectValue>
                <Text variant="xs">
                  {titleCase(chartCustomization.labelist.value.position)}
                </Text>
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              {ChartLabelistPositions.map((position) => (
                <SelectItem
                  key={position}
                  value={position}
                  onClick={() =>
                    setChartCustomization({
                      ...chartCustomization,
                      labelist: {
                        ...chartCustomization.labelist,
                        value: {
                          ...chartCustomization.labelist.value,
                          position: position,
                        },
                      },
                    })
                  }
                >
                  <Text variant="xs">{titleCase(position)}</Text>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col">
          <Text variant="label">Offset</Text>
          <div className="flex">
            <Slider
              value={[chartCustomization.labelist.value.offset]}
              min={0}
              max={50}
              step={1}
              onValueChange={(value) =>
                setChartCustomization({
                  ...chartCustomization,
                  labelist: {
                    ...chartCustomization.labelist,
                    value: {
                      ...chartCustomization.labelist.value,
                      offset: value[0],
                    },
                  },
                })
              }
              className="flex-1"
              disabled={!chartCustomization.labelist.value.show}
            />
            <Input
              variant="sm"
              type="number"
              value={chartCustomization.labelist.value.offset}
              onChange={(e) => {
                setChartCustomization({
                  ...chartCustomization,
                  labelist: {
                    ...chartCustomization.labelist,
                    value: {
                      ...chartCustomization.labelist.value,
                      offset: Number(e.target.value),
                    },
                  },
                });
              }}
              max={50}
              className="ml-2 w-10 p-0 text-center"
              disabled={!chartCustomization.labelist.value.show}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabelistCard;
