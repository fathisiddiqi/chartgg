import { CardProps } from "./props";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/custom-ui/input";
import { Switch } from "@/components/custom-ui/switch";
import { Text } from "@/components/ui/text";
import { ChartTooltipIndicator, ChartTooltipIndicators } from "@/store/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/custom-ui/select";
import { titleCase } from "@/lib/utils";

const TooltipCard = ({
  chartCustomization,
  setChartCustomization,
}: CardProps) => {
  return (
    <Card>
      <CardHeader>
        <Text variant="sm" className="font-bold">
          Tooltip
        </Text>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex justify-between items-center">
          <Text variant="label" className="font-medium">
            Show
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
            Show Tooltip Index
          </Text>
          <Input
            variant="sm"
            type="text"
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
            className="flex-1 bg-white text-gray-900 border-gray-300 max-w-[2.25rem] p-1 text-center"
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
          />
        </div>
        <div className="flex justify-between items-center">
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
          >
            <SelectTrigger variant="sm" className="w-[8rem]">
              <SelectValue>
                <Text variant="sm">
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
                  <Text variant="sm">{titleCase(indicator)}</Text>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  );
};

export default TooltipCard;
