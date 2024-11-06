import ChartCanvasLayout from "@/components/common/chart-canvas-layout";
import ChartFrame from "@/components/common/chart-frame";
import { Button } from "@/components/custom-ui/button";
import { ColorInput } from "@/components/custom-ui/color-input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Slider } from "@/components/ui/slider";
import { Text } from "@/components/ui/text";
import { replaceUnderscoreWithSpace, titleCase } from "@/lib/utils";
import {
  ChartBackgroundLayouts,
  ChartFrames,
  ChartScreenshot,
  ChartShadowStyles,
  useChartStore,
} from "@/store/chart";
import { ChevronDown, CopyIcon, DownloadIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Screenshot = () => {
  const { setChartScreenshot, chartScreenshot } = useChartStore(
    (state) => state
  );

  return (
    <ScrollArea className="h-[calc(100vh-120px)]">
      <div className="p-4 space-y-4 justify-between">
        <div className="space-y-4">
          {/* General Card */}
          <ContentCard
            chartScreenshot={chartScreenshot}
            setChartScreenshot={setChartScreenshot}
          />

          {/* Background Card */}
          <BackgroundCard
            chartScreenshot={chartScreenshot}
            setChartScreenshot={setChartScreenshot}
          />
        </div>

        {/* Download Card */}
        <DownloadCard />
      </div>
    </ScrollArea>
  );
};

export default Screenshot;

interface CardProps {
  chartScreenshot: ChartScreenshot;
  setChartScreenshot: (screenshot: ChartScreenshot) => void;
}

const ContentCard = ({ chartScreenshot, setChartScreenshot }: CardProps) => {
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
                      setChartScreenshot({
                        ...chartScreenshot,
                        content: {
                          ...chartScreenshot.content,
                          frame: frame,
                        },
                      })
                    }
                    className={
                      chartScreenshot.content.frame === frame
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
            defaultValue={[chartScreenshot.content.scale]}
            max={150}
            step={1}
            className="w-1/3"
            onValueChange={(value) =>
              setChartScreenshot({
                ...chartScreenshot,
                content: { ...chartScreenshot.content, scale: value[0] },
              })
            }
          />
        </div>
        <div className="flex justify-between">
          <Text variant="label" className="font-medium">
            Rotate
          </Text>
          <Slider
            defaultValue={[chartScreenshot.content.rotate]}
            max={360}
            step={1}
            className="w-1/3"
            onValueChange={(value) =>
              setChartScreenshot({
                ...chartScreenshot,
                content: { ...chartScreenshot.content, rotate: value[0] },
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
              value={chartScreenshot.content.background.color}
              onChange={(e) =>
                setChartScreenshot({
                  ...chartScreenshot,
                  content: {
                    ...chartScreenshot.content,
                    background: {
                      ...chartScreenshot.content.background,
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
            defaultValue={[chartScreenshot.content.width]}
            max={600}
            min={300}
            step={100}
            className="w-1/3"
            onValueChange={(value) =>
              setChartScreenshot({
                ...chartScreenshot,
                content: { ...chartScreenshot.content, width: value[0] },
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
                  defaultValue={[chartScreenshot.content.border.width]}
                  max={15}
                  min={1}
                  step={1}
                  className="w-1/3"
                  onValueChange={(value) =>
                    setChartScreenshot({
                      ...chartScreenshot,
                      content: {
                        ...chartScreenshot.content,
                        border: {
                          ...chartScreenshot.content.border,
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
                  defaultValue={[chartScreenshot.content.border.radius]}
                  max={30}
                  min={1}
                  step={1}
                  className="w-1/3"
                  onValueChange={(value) =>
                    setChartScreenshot({
                      ...chartScreenshot,
                      content: {
                        ...chartScreenshot.content,
                        border: {
                          ...chartScreenshot.content.border,
                          width: value[0],
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
                    value={chartScreenshot.content.border.color}
                    onChange={(e) =>
                      setChartScreenshot({
                        ...chartScreenshot,
                        content: {
                          ...chartScreenshot.content,
                          border: {
                            ...chartScreenshot.content.border,
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
                      chartScreenshot.content.shadow === property
                        ? `w-12 h-12 bg-white ${className} rounded-lg flex justify-center items-center cursor-pointer border border-black`
                        : `w-12 h-12 bg-white ${className} rounded-lg flex justify-center items-center cursor-pointer`
                    }
                    onClick={() =>
                      setChartScreenshot({
                        ...chartScreenshot,
                        content: {
                          ...chartScreenshot.content,
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

const BackgroundCard = ({ chartScreenshot, setChartScreenshot }: CardProps) => {
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

const exportScaleOptions = [
  {
    value: 1,
    label: "1x",
  },
  {
    value: 2,
    label: "2x",
  },
  {
    value: 3,
    label: "3x",
  },
];

const DownloadCard = () => {
  const [exportScale, setExportScale] = useState<number>(1);
  const [openExportScale, setOpenExportScale] = useState<boolean>(false);
  const openExportScaleTriggerRef = useRef<HTMLButtonElement>(null);
  const [exportScaleDropdownContentWidth, setExportScaleDropdownContentWidth] =
    useState<number>(0);

  useEffect(() => {
    if (openExportScaleTriggerRef.current) {
      setExportScaleDropdownContentWidth(
        openExportScaleTriggerRef.current.offsetWidth
      );
    }
  }, [openExportScale]);

  return (
    <Card className="p-3 flex space-x-3 items-center justify-end">
      <Popover open={openExportScale} onOpenChange={setOpenExportScale}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            ref={openExportScaleTriggerRef}
            className="w-[4 rem] justify-between"
          >
            {exportScale}
            <ChevronDown className="h-4 w-4 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="w-auto p-0"
          style={{ width: exportScaleDropdownContentWidth }}
          align="start"
        >
          <div className="flex flex-col">
            {exportScaleOptions.map((option, index) => (
              <Button
                key={index}
                variant="ghost"
                className="justify-start rounded-none"
                onClick={() => {
                  setOpenExportScale(false);
                  setExportScale(option.value);
                }}
              >
                {option.label}
              </Button>
            ))}
          </div>
        </PopoverContent>
      </Popover>
      <Button variant="outline" size="sm" className="flex items-center gap-x-2">
        <CopyIcon className="w-4 h-4" />
        Copy
      </Button>
      <Button variant="outline" size="sm" className="flex items-center gap-x-2">
        <DownloadIcon className="w-4 h-4" />
        Download
      </Button>
    </Card>
  );
};
