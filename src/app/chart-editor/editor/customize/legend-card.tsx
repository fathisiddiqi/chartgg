import { CustomizationCardProps } from "@/types";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Switch } from "@/components/custom-ui/switch";
import { Text } from "@/components/ui/text";

const LegendCard = ({
  chartCustomization,
  setChartCustomization,
}: CustomizationCardProps) => {
  return (
    <Card>
      <CardHeader>
        <Text variant="sm" className="font-bold">
          Legend
        </Text>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between">
          <Text variant="label" className="font-medium">
            Show
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
      </CardContent>
    </Card>
  );
};

export default LegendCard;
