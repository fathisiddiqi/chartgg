import { CustomizationCardProps } from "@/types";
import { Switch } from "@/components/custom-ui/switch";
import { Text } from "@/components/ui/text";

const GridCard = ({
  chartCustomization,
  setChartCustomization,
}: CustomizationCardProps) => {
  return (
    <div className="space-y-2">
      <Text variant="sm" className="font-bold">
        Grid
      </Text>
      <div className="flex justify-between items-center">
        <Text variant="label">Horizontal</Text>
        <Switch
          size="sm"
          checked={chartCustomization.grid.horizontal.show}
          onCheckedChange={() =>
            setChartCustomization({
              ...chartCustomization,
              grid: {
                ...chartCustomization.grid,
                horizontal: {
                  ...chartCustomization.grid.horizontal,
                  show: !chartCustomization.grid.horizontal.show,
                },
              },
            })
          }
        />
      </div>
      <div className="flex justify-between items-center">
        <Text variant="label">Vertical</Text>
        <Switch
          size="sm"
          checked={chartCustomization.grid.vertical.show}
          onCheckedChange={() =>
            setChartCustomization({
              ...chartCustomization,
              grid: {
                ...chartCustomization.grid,
                vertical: {
                  ...chartCustomization.grid.vertical,
                  show: !chartCustomization.grid.vertical.show,
                },
              },
            })
          }
        />
      </div>
    </div>
  );
};

export default GridCard;
