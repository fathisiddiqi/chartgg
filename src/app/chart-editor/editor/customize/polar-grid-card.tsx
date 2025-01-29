import { CustomizationCardProps } from "@/types";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/custom-ui/input";
import { Switch } from "@/components/custom-ui/switch";
import { Text } from "@/components/ui/text";

const PolarGridCard = ({
  chartCustomization,
  setChartCustomization,
}: CustomizationCardProps) => {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <Text variant="sm" className="font-bold">
          Polar Grid
        </Text>
        <Switch
          size="sm"
          checked={chartCustomization.polarGrid.show}
          onCheckedChange={() => {
            setChartCustomization({
              ...chartCustomization,
              polarGrid: {
                ...chartCustomization.polarGrid,
                show: !chartCustomization.polarGrid.show,
              },
            });
          }}
        />
      </div>
    </div>
  );
};

export default PolarGridCard;
