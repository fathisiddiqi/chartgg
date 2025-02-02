import { CustomizationCardProps } from "@/types";
import { Input } from "@/components/custom-ui/input";
import { Switch } from "@/components/custom-ui/switch";
import { Text } from "@/components/ui/text";
import {
  ChartData,
  ChartTooltipIndicator,
  ChartTooltipIndicators,
} from "@/store/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/custom-ui/select";
import { titleCase } from "@/lib/utils";
import { Slider } from "@/components/ui/slider";

const TooltipCard = ({
  chartCustomization,
  setChartCustomization,
  chartData,
}: CustomizationCardProps & {
  chartData?: ChartData[];
}) => {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <Text variant="sm" className="font-bold">
          Tooltip
        </Text>
        <Switch
          size="sm"
          checked={chartCustomization.tooltip.show}
          onCheckedChange={() =>
            setChartCustomization({
              ...chartCustomization,
              tooltip: {
                ...chartCustomization.tooltip,
                show: !chartCustomization.tooltip.show,
              },
            })
          }
        />
      </div>
      <div className="flex justify-between items-center">
        <Text variant="label" className="font-medium">
          Focus Mode
        </Text>
        <Switch
          size="sm"
          checked={chartCustomization.tooltip.focused}
          onCheckedChange={() =>
            setChartCustomization({
              ...chartCustomization,
              tooltip: {
                ...chartCustomization.tooltip,
                focused: !chartCustomization.tooltip.focused,
              },
            })
          }
          disabled={!chartCustomization.tooltip.show}
        />
      </div>
      <div className="flex flex-col space-y-2">
        <Text variant="label" className="font-medium">
          Tooltip Index
        </Text>
        <div className="flex space-x-2">
          <Slider
            defaultValue={[chartCustomization.tooltip.showTooltipIndex + 1]}
            min={1}
            max={chartData?.length}
            step={1}
            className="flex-1"
            onValueChange={(value) => {
              setChartCustomization({
                ...chartCustomization,
                tooltip: {
                  ...chartCustomization.tooltip,
                  showTooltipIndex: value[0] - 1,
                },
              });
            }}
            disabled={!chartCustomization.tooltip.show}
          />
          <Input
            variant="sm"
            type="number"
            value={chartCustomization.tooltip.showTooltipIndex + 1}
            onChange={(e) =>
              setChartCustomization({
                ...chartCustomization,
                tooltip: {
                  ...chartCustomization.tooltip,
                  showTooltipIndex: Number(e.target.value) - 1,
                },
              })
            }
            max={Number(chartData?.length)}
            className="flex-1 bg-white text-gray-900 border-gray-300 max-w-[2.25rem] p-1 text-center"
            disabled={!chartCustomization.tooltip.show}
          />
        </div>
      </div>
      <div className="flex flex-col space-y-2">
        <Text variant="label" className="font-medium">
          Indicator
        </Text>
        <Select
          value={chartCustomization.tooltip.indicator}
          onValueChange={(e) =>
            setChartCustomization({
              ...chartCustomization,
              tooltip: {
                ...chartCustomization.tooltip,
                indicator: e as ChartTooltipIndicator,
              },
            })
          }
          disabled={!chartCustomization.tooltip.show}
        >
          <SelectTrigger className="w-full" variant="sm">
            <SelectValue>
              <Text variant="xs">
                {titleCase(chartCustomization.tooltip.indicator)}
              </Text>
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            {ChartTooltipIndicators.map((indicator) => (
              <SelectItem
                key={indicator}
                value={indicator}
                onClick={() =>
                  setChartCustomization({
                    ...chartCustomization,
                    tooltip: {
                      ...chartCustomization.tooltip,
                      indicator: indicator,
                    },
                  })
                }
              >
                <Text variant="xs">{titleCase(indicator)}</Text>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default TooltipCard;
