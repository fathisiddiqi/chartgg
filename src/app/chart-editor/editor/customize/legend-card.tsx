import { CustomizationCardProps } from "@/types";
import { Switch } from "@/components/custom-ui/switch";
import { Text } from "@/components/ui/text";
import HorizontalAlign from "@/components/common/horizontal-align";
import VerticalAlign from "@/components/common/vertical-align";

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
      <div className="flex flex-row justify-between items-center space-x-2 mt-3">
        <div className="w-3/6 space-y-2">
          <Text variant="label">Vertical Align</Text>
          <VerticalAlign
            align={chartCustomization.legend.verticalAlign}
            setAlign={(align: "top" | "middle" | "bottom") => {
              setChartCustomization({
                ...chartCustomization,
                legend: {
                  ...chartCustomization.legend,
                  verticalAlign: align,
                },
              });
            }}
          />
        </div>
        <div className="w-3/6 space-y-2">
          <Text variant="label">Align</Text>
          <HorizontalAlign
            align={chartCustomization.legend.align}
            setAlign={(align: "left" | "center" | "right") => {
              setChartCustomization({
                ...chartCustomization,
                legend: {
                  ...chartCustomization.legend,
                  align: align,
                },
              });
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default LegendCard;
