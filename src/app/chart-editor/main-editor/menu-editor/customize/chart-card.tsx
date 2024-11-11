import {
  AreaChartVariants,
  BarChartVariants,
  ChartMainType,
  ChartMainVariant,
  ChartStrokeStyle,
  ChartStrokeStyles,
  ChartTheme,
  ChartThemes,
  ChartType,
  LineChartVariants,
  PieChartVariants,
  RadarChartVariants,
  RadialChartVariants,
  ScatterChartVariants,
} from "@/store/chart";
import { CardProps } from "./props";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/custom-ui/select";
import { Text } from "@/components/ui/text";
import { replaceUnderscoreWithSpace, titleCase } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ThemeIcon from "@/components/icon/theme-icon";
import { Switch } from "@/components/custom-ui/switch";
import { Input } from "@/components/custom-ui/input";
import { ColorInput } from "@/components/custom-ui/color-input";
import { Slider } from "@/components/ui/slider";

const ChartVariantSelectItem = ({ chartType }: { chartType: ChartType }) => {
  const items: Record<ChartMainType, ChartMainVariant[]> = {
    area: AreaChartVariants,
    bar: BarChartVariants,
    line: LineChartVariants,
    pie: PieChartVariants,
    radar: RadarChartVariants,
    radial: RadialChartVariants,
    scatter: ScatterChartVariants,
  };

  return items[chartType.type].map((item) => (
    <SelectItem key={item} value={item}>
      <Text variant="sm">{titleCase(replaceUnderscoreWithSpace(item))}</Text>
    </SelectItem>
  ));
};

const ChartCard = ({
  chartCustomization,
  setChartCustomization,
  chartType,
  setChartType,
}: CardProps & {
  chartType: ChartType;
  setChartType: (chartType: ChartType) => void;
}) => {
  return (
    <Card>
      <CardContent className="space-y-2">
        <Text variant="sm" className="font-bold mt-3">
          Chart
        </Text>
        {/* <div className="flex justify-between items-center">
            <Text variant="label" className="font-medium">
              Variant
            </Text>
            <Select
              value={chartType.variant}
              onValueChange={(e) =>
                setChartType({
                  ...chartType,
                  variant: e as ChartMainVariant,
                })
              }
            >
              <SelectTrigger variant="sm" className="w-[8rem]">
                <SelectValue>
                  <Text variant="sm">
                    {titleCase(replaceUnderscoreWithSpace(chartType.variant))}
                  </Text>
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                <ChartVariantSelectItem chartType={chartType} />
              </SelectContent>
            </Select>
          </div> */}
        <Accordion type="single" collapsible>
          <AccordionItem value="chart-1">
            <AccordionTrigger>
              <Text variant="label">Theme</Text>
            </AccordionTrigger>
            <AccordionContent className="space-y-4 mb-3 p-3">
              <div className="grid grid-cols-5 gap-4">
                {ChartThemes.map((theme, index) => (
                  <div
                    className="cursor-pointer"
                    key={index}
                    onClick={() =>
                      setChartCustomization({
                        ...chartCustomization,
                        chart: {
                          ...chartCustomization.chart,
                          theme: {
                            ...chartCustomization.chart.theme,
                            selected: theme,
                          },
                        },
                      })
                    }
                  >
                    <ThemeIcon
                      variant={theme as ChartTheme}
                      isActive={
                        chartCustomization.chart.theme.selected === theme
                      }
                    />
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible>
          <AccordionItem value="chart-3">
            <AccordionTrigger>
              <Text variant="label">Active</Text>
            </AccordionTrigger>
            <AccordionContent className="space-y-2">
              <div className="flex justify-between items-center">
                <Text variant="xs">Show</Text>
                <Switch
                  size="sm"
                  checked={chartCustomization.chart.active.show}
                  onCheckedChange={() =>
                    setChartCustomization({
                      ...chartCustomization,
                      chart: {
                        ...chartCustomization.chart,
                        active: {
                          ...chartCustomization.chart.active,
                          show: !chartCustomization.chart.active.show,
                        },
                      },
                    })
                  }
                />
              </div>
              <div className="flex justify-between items-center">
                <Text variant="xs">Active Index</Text>
                <Input
                  variant="sm"
                  type="text"
                  value={chartCustomization.chart.active.index}
                  onChange={(e) =>
                    setChartCustomization({
                      ...chartCustomization,
                      chart: {
                        ...chartCustomization.chart,
                        active: {
                          ...chartCustomization.chart.active,
                          index: Number(e.target.value),
                        },
                      },
                    })
                  }
                  className="flex-1 bg-white text-gray-900 border-gray-300 max-w-[2.5rem] p-1 text-center"
                />
              </div>
              <div className="flex justify-between items-center">
                <Text variant="xs">Fill Color</Text>
                <ColorInput
                  variant="sm"
                  value={chartCustomization.chart.active.fill}
                  onChange={(e) =>
                    setChartCustomization({
                      ...chartCustomization,
                      chart: {
                        ...chartCustomization.chart,
                        active: {
                          ...chartCustomization.chart.active,
                          fill: e.target.value,
                        },
                      },
                    })
                  }
                />
              </div>
              <div className="flex justify-between items-center">
                <Text variant="xs" className="font-medium">
                  Fill Opacity
                </Text>
                <Slider
                  defaultValue={[chartCustomization.chart.active.fillOpacity]}
                  max={1}
                  step={0.1}
                  className="w-1/3"
                  onValueChange={(value) =>
                    setChartCustomization({
                      ...chartCustomization,
                      chart: {
                        ...chartCustomization.chart,
                        active: {
                          ...chartCustomization.chart.active,
                          fillOpacity: value[0],
                        },
                      },
                    })
                  }
                />
              </div>
              <div className="flex justify-between items-center">
                <Text variant="xs" className="font-medium">
                  Stroke Style
                </Text>
                <Select
                  value={chartCustomization.chart.active.strokeStyle}
                  onValueChange={(e) =>
                    setChartCustomization({
                      ...chartCustomization,
                      chart: {
                        ...chartCustomization.chart,
                        active: {
                          ...chartCustomization.chart.active,
                          strokeStyle: e as ChartStrokeStyle,
                        },
                      },
                    })
                  }
                >
                  <SelectTrigger variant="sm" className="w-[8rem]">
                    <SelectValue>
                      <Text variant="sm">
                        {titleCase(chartCustomization.chart.active.strokeStyle)}
                      </Text>
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    {ChartStrokeStyles.map((style) => (
                      <SelectItem
                        key={style}
                        value={style}
                        onClick={() =>
                          setChartCustomization({
                            ...chartCustomization,
                            chart: {
                              ...chartCustomization.chart,
                              active: {
                                ...chartCustomization.chart.active,
                                strokeStyle: style,
                              },
                            },
                          })
                        }
                      >
                        <Text variant="sm">{titleCase(style)}</Text>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex justify-between items-center">
                <Text variant="xs" className="font-medium">
                  Stroke Opacity
                </Text>
                <Slider
                  defaultValue={[chartCustomization.chart.active.strokeOpacity]}
                  max={1}
                  step={0.1}
                  className="w-1/3"
                  onValueChange={(value) =>
                    setChartCustomization({
                      ...chartCustomization,
                      chart: {
                        ...chartCustomization.chart,
                        active: {
                          ...chartCustomization.chart.active,
                          strokeOpacity: value[0],
                        },
                      },
                    })
                  }
                />
              </div>
              <div className="flex justify-between items-center">
                <Text variant="xs" className="font-medium">
                  Stroke Width
                </Text>
                <Slider
                  defaultValue={[chartCustomization.chart.active.strokeWidth]}
                  max={10}
                  step={1}
                  className="w-1/3"
                  onValueChange={(value) =>
                    setChartCustomization({
                      ...chartCustomization,
                      chart: {
                        ...chartCustomization.chart,
                        active: {
                          ...chartCustomization.chart.active,
                          strokeWidth: value[0],
                        },
                      },
                    })
                  }
                />
              </div>
              <div className="flex justify-between items-center">
                <Text variant="xs">Stroke Color</Text>
                <ColorInput
                  variant="sm"
                  value={chartCustomization.chart.active.strokeColor}
                  onChange={(e) =>
                    setChartCustomization({
                      ...chartCustomization,
                      chart: {
                        ...chartCustomization.chart,
                        active: {
                          ...chartCustomization.chart.active,
                          strokeColor: e.target.value,
                        },
                      },
                    })
                  }
                />
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default ChartCard;
