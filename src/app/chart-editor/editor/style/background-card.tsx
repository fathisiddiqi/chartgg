import ColorSelector from "@/components/common/color-selector";
import { Input } from "@/components/custom-ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/custom-ui/select";
import { Slider } from "@/components/ui/slider";
import { Text } from "@/components/ui/text";
import { getChartAspectRatio } from "@/lib/chart";
import {
  ChartAspectRatio,
  ChartAspectRatios,
  ChartColors,
} from "@/store/chart";
import { StyleCardProps } from "@/types";

const BackgroundCard = ({ chartStyle, setChartStyle }: StyleCardProps) => {
  return (
    <div className="space-y-2">
      <Text variant="sm" className="font-bold">
        Background
      </Text>
      <div className="flex flex-col space-y-2">
        <Text variant="label">Aspect Ratio</Text>
        <Select
          value={chartStyle.canvas.aspectRatio}
          onValueChange={(e) =>
            setChartStyle({
              ...chartStyle,
              canvas: {
                ...chartStyle.canvas,
                aspectRatio: e as ChartAspectRatio,
              },
            })
          }
        >
          <SelectTrigger variant="sm" className="w-full">
            <SelectValue>
              <Text variant="xs">
                {getChartAspectRatio(chartStyle.canvas.aspectRatio)}
              </Text>
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            {ChartAspectRatios.map(({ value, label }) => (
              <SelectItem
                key={value}
                value={value}
                onClick={() =>
                  setChartStyle({
                    ...chartStyle,
                    canvas: {
                      ...chartStyle.canvas,
                      aspectRatio: value,
                    },
                  })
                }
              >
                <Text variant="xs">{label}</Text>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-col space-y-2">
        <Text variant="label" className="font-medium">
          Color
        </Text>
        <div className="flex flex-row gap-2 pl-1">
          {ChartColors.map((color: string, id: number) => (
            <div
              key={id}
              className={
                chartStyle.canvas.background.color === color
                  ? `w-10 h-10 bg-secondary rounded-lg flex justify-center items-center cursor-pointer ring-1 ring-black ring-offset-1`
                  : `w-10 h-10 bg-secondary rounded-lg flex justify-center items-center cursor-pointer`
              }
              onClick={() =>
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
            >
              <div
                className={`w-8 h-8 rounded-lg flex justify-center items-center cursor-pointer`}
                style={{ backgroundColor: color }}
              />
            </div>
          ))}
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
            triggerClassName="w-10 h-10 bg-secondary"
            showColorText={false}
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
