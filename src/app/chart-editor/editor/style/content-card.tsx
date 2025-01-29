import ChartFrame from "@/components/common/chart-frame";
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
import { ChartFrames, ChartShadowStyles } from "@/store/chart";
import { StyleCardProps } from "@/types";

const ContentCard = ({ chartStyle, setChartStyle }: StyleCardProps) => {
  return (
    <Card>
      <CardContent className="space-y-3">
        <Text variant="sm" className="mt-3 font-bold">
          Content
        </Text>
        <Accordion type="single" collapsible>
          <AccordionItem value="general-1">
            <AccordionTrigger>
              <Text variant="label">Frames</Text>
            </AccordionTrigger>
            <AccordionContent className="space-y-4 mb-3">
              <div className="flex flex-wrap gap-3 p-3 bg-gray-200">
                {ChartFrames.map((frame) => (
                  <div
                    key={frame}
                    onClick={() =>
                      setChartStyle({
                        ...chartStyle,
                        content: {
                          ...chartStyle.content,
                          frame: frame,
                        },
                      })
                    }
                    className={
                      chartStyle.content.frame === frame
                        ? `cursor-pointer border border-black rounded-md w-36 h-32 flex items-center justify-center`
                        : `cursor-pointer w-36 h-32 flex items-center justify-center`
                    }
                  >
                    <ChartFrame frame={frame} size="xs">
                      <div className="w-36 h-14"></div>
                    </ChartFrame>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="flex justify-between">
          <Text variant="label" className="font-medium">
            Scale
          </Text>
          <Slider
            defaultValue={[chartStyle.content.scale]}
            max={150}
            step={1}
            className="w-1/3"
            onValueChange={(value) =>
              setChartStyle({
                ...chartStyle,
                content: { ...chartStyle.content, scale: value[0] },
              })
            }
          />
        </div>
        <div className="flex justify-between">
          <Text variant="label" className="font-medium">
            Rotate
          </Text>
          <Slider
            defaultValue={[chartStyle.content.rotate]}
            max={360}
            step={1}
            className="w-1/3"
            onValueChange={(value) =>
              setChartStyle({
                ...chartStyle,
                content: { ...chartStyle.content, rotate: value[0] },
              })
            }
          />
        </div>
        <div className="flex justify-between items-center">
          <Text variant="label" className="font-medium">
            Background Color
          </Text>
          <div className="flex items-center space-x-2">
            <ColorInput
              variant="sm"
              value={chartStyle.content.background.color}
              onChange={(e) =>
                setChartStyle({
                  ...chartStyle,
                  content: {
                    ...chartStyle.content,
                    background: {
                      ...chartStyle.content.background,
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
            Width
          </Text>
          <Slider
            defaultValue={[chartStyle.content.width]}
            max={600}
            min={300}
            step={100}
            className="w-1/3"
            onValueChange={(value) =>
              setChartStyle({
                ...chartStyle,
                content: { ...chartStyle.content, width: value[0] },
              })
            }
          />
        </div>

        <Accordion type="single" collapsible>
          <AccordionItem value="chart-2">
            <AccordionTrigger>
              <Text variant="label">Border</Text>
            </AccordionTrigger>
            <AccordionContent className="space-y-2 pt-2">
              <div className="flex justify-between items-center">
                <Text variant="xs">Width</Text>
                <Slider
                  defaultValue={[chartStyle.content.border.width]}
                  max={15}
                  min={1}
                  step={1}
                  className="w-1/3"
                  onValueChange={(value) =>
                    setChartStyle({
                      ...chartStyle,
                      content: {
                        ...chartStyle.content,
                        border: {
                          ...chartStyle.content.border,
                          width: value[0],
                        },
                      },
                    })
                  }
                />
              </div>
              <div className="flex justify-between items-center">
                <Text variant="xs">Radius</Text>
                <Slider
                  defaultValue={[chartStyle.content.border.radius]}
                  max={30}
                  min={1}
                  step={1}
                  className="w-1/3"
                  onValueChange={(value) =>
                    setChartStyle({
                      ...chartStyle,
                      content: {
                        ...chartStyle.content,
                        border: {
                          ...chartStyle.content.border,
                          radius: value[0],
                        },
                      },
                    })
                  }
                />
              </div>
              <div className="flex justify-between items-center">
                <Text variant="xs">Color</Text>
                <div className="flex items-center space-x-2">
                  <ColorInput
                    variant="sm"
                    value={chartStyle.content.border.color}
                    onChange={(e) =>
                      setChartStyle({
                        ...chartStyle,
                        content: {
                          ...chartStyle.content,
                          border: {
                            ...chartStyle.content.border,
                            color: e.target.value,
                          },
                        },
                      })
                    }
                  />
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible>
          <AccordionItem value="general-1">
            <AccordionTrigger>
              <Text variant="label">Shadow</Text>
            </AccordionTrigger>
            <AccordionContent className="space-y-4 mb-3">
              <div className="flex flex-wrap gap-3 p-3 bg-gray-200">
                {ChartShadowStyles.map(({ id, className, property }) => (
                  <div
                    key={id}
                    className={
                      chartStyle.content.shadow === property
                        ? `w-12 h-12 bg-white ${className} rounded-lg flex justify-center items-center cursor-pointer border border-black`
                        : `w-12 h-12 bg-white ${className} rounded-lg flex justify-center items-center cursor-pointer`
                    }
                    onClick={() =>
                      setChartStyle({
                        ...chartStyle,
                        content: {
                          ...chartStyle.content,
                          shadow: property,
                        },
                      })
                    }
                  >
                    <Text variant="label" className="text-center">
                      {id}
                    </Text>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default ContentCard;
