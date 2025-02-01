import ColorSelector from "@/components/common/color-selector";
import { Input } from "@/components/custom-ui/input";
import { Slider } from "@/components/ui/slider";
import { Text } from "@/components/ui/text";
import { StyleCardProps } from "@/types";

const BackgroundCard = ({ chartStyle, setChartStyle }: StyleCardProps) => {
  return (
    <div className="space-y-2">
      <Text variant="sm" className="font-bold">
        Background
      </Text>
      <div className="flex justify-between items-center">
        <Text variant="label" className="font-medium">
          Color
        </Text>
        <div className="flex items-center space-x-2">
          <ColorSelector
            selectedColor={chartStyle.canvas.background.color}
            setSelectedColor={(color) =>
              setChartStyle({
                ...chartStyle,
                canvas: {
                  ...chartStyle.canvas,
                  background: {
                    ...chartStyle.canvas.background,
                    color: color,
                  },
                },
              })
            }
            triggerClassName="w-28"
          />
        </div>
      </div>
      <div className="flex flex-col">
        <Text variant="label" className="font-medium">
          Opacity
        </Text>
        <div className="flex items-center">
          <Slider
            value={[chartStyle.canvas.background.opacity]}
            min={0}
            max={1}
            step={0.1}
            className="flex-1"
            onValueChange={(value) =>
              setChartStyle({
                ...chartStyle,
                canvas: {
                  ...chartStyle.canvas,
                  background: {
                    ...chartStyle.canvas.background,
                    opacity: value[0],
                  },
                },
              })
            }
          />
          <Input
            variant="sm"
            type="number"
            value={chartStyle.canvas.background.opacity}
            onChange={(e) => {
              setChartStyle({
                ...chartStyle,
                canvas: {
                  ...chartStyle.canvas,
                  background: {
                    ...chartStyle.canvas.background,
                    opacity: Number(e.target.value),
                  },
                },
              });
            }}
            max={1}
            className="ml-2 w-10 p-0 text-center"
          />
        </div>
      </div>
      <div className="flex flex-col">
        <Text variant="label" className="font-medium">
          Radius
        </Text>
        <div className="flex items-center">
          <Slider
            value={[chartStyle.canvas.border.radius]}
            max={100}
            step={1}
            className="flex-1"
            onValueChange={(value) =>
              setChartStyle({
                ...chartStyle,
                canvas: {
                  ...chartStyle.canvas,
                  border: {
                    ...chartStyle.canvas.border,
                    radius: value[0],
                  },
                },
              })
            }
          />
          <Input
            variant="sm"
            type="number"
            value={chartStyle.canvas.border.radius}
            onChange={(e) => {
              setChartStyle({
                ...chartStyle,
                canvas: {
                  ...chartStyle.canvas,
                  border: {
                    ...chartStyle.canvas.border,
                    radius: Number(e.target.value),
                  },
                },
              });
            }}
            max={100}
            className="ml-2 w-10 p-0 text-center"
          />
        </div>
      </div>
    </div>
  );
};

export default BackgroundCard;
