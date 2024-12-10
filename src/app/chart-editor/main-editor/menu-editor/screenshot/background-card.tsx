import ChartCanvasLayout from "@/components/common/chart-canvas-layout";
import { ColorInput } from "@/components/custom-ui/color-input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Text } from "@/components/ui/text";
import { replaceUnderscoreWithSpace, titleCase } from "@/lib/utils";
import { ChartBackgroundLayouts } from "@/store/chart";
import { ScreenshotCardProps } from "@/types";

const BackgroundCard = ({
  chartScreenshot,
  setChartScreenshot,
}: ScreenshotCardProps) => {
  return (
    <Card>
      <CardContent className="space-y-3">
        <Text variant="sm" className="mt-3 font-bold">
          Background
        </Text>
        <Accordion type="single" collapsible>
          <AccordionItem value="general-1">
            <AccordionTrigger>
              <Text variant="label">Layout</Text>
            </AccordionTrigger>
            <AccordionContent className="space-y-4 mb-3">
              <div className="flex flex-wrap gap-3 p-3 bg-gray-200">
                {ChartBackgroundLayouts.map(({ id, width, height }) => (
                  <div
                    key={id}
                    className={
                      chartScreenshot.canvas.width === width &&
                      chartScreenshot.canvas.height === height
                        ? `cursor-pointer border border-black rounded-md w-24 h-24 flex items-center justify-center`
                        : `cursor-pointer w-24 h-24 flex items-center justify-center`
                    }
                    onClick={() =>
                      setChartScreenshot({
                        ...chartScreenshot,
                        canvas: {
                          ...chartScreenshot.canvas,
                          width: width,
                          height: height,
                        },
                      })
                    }
                  >
                    <div className="flex flex-col items-center justify-center">
                      <ChartCanvasLayout
                        id={id}
                        width={width}
                        height={height}
                      />
                      <Text variant="label">
                        {titleCase(replaceUnderscoreWithSpace(id))}
                      </Text>
                    </div>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="flex justify-between items-center">
          <Text variant="label" className="font-medium">
            Color
          </Text>
          <div className="flex items-center space-x-2">
            <ColorInput
              variant="sm"
              value={chartScreenshot.canvas.background.color}
              onChange={(e) =>
                setChartScreenshot({
                  ...chartScreenshot,
                  canvas: {
                    ...chartScreenshot.canvas,
                    background: {
                      ...chartScreenshot.canvas.background,
                      color: e.target.value,
                    },
                  },
                })
              }
            />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <Text variant="label" className="font-medium">
            Opacity
          </Text>
          <Slider
            defaultValue={[chartScreenshot.canvas.background.opacity]}
            max={1}
            step={0.1}
            className="w-1/3"
            onValueChange={(value) =>
              setChartScreenshot({
                ...chartScreenshot,
                canvas: {
                  ...chartScreenshot.canvas,
                  background: {
                    ...chartScreenshot.canvas.background,
                    opacity: value[0],
                  },
                },
              })
            }
          />
        </div>
        <div className="flex justify-between items-center">
          <Text variant="label" className="font-medium">
            Radius
          </Text>
          <Slider
            defaultValue={[chartScreenshot.canvas.border.radius]}
            max={100}
            step={1}
            className="w-1/3"
            onValueChange={(value) =>
              setChartScreenshot({
                ...chartScreenshot,
                canvas: {
                  ...chartScreenshot.canvas,
                  border: {
                    ...chartScreenshot.canvas.border,
                    radius: value[0],
                  },
                },
              })
            }
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default BackgroundCard;
