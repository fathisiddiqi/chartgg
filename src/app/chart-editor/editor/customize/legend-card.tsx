import { CustomizationCardProps } from "@/types";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Switch } from "@/components/custom-ui/switch";
import { Text } from "@/components/ui/text";

const LegendCard = ({
  chartCustomization,
  setChartCustomization,
}: CustomizationCardProps) => {
  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <Text variant="sm" className="font-bold">
          Legend
        </Text>
        <Switch
          size="sm"
          checked={chartCustomization.legend.show}
          onCheckedChange={() =>
            setChartCustomization({
              ...chartCustomization,
              legend: {
                ...chartCustomization.legend,
                show: !chartCustomization.legend.show,
              },
            })
          }
        />
      </div>
    </div>
  );
};

export default LegendCard;
