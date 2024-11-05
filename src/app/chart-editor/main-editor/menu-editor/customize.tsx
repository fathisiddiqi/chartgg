import TextAlign from "@/components/common/text-align";
import ThemeIcon from "@/components/icon/theme-icon";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/custom-ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Switch } from "@/components/custom-ui/switch";
import { Text } from "@/components/ui/text";
import {
  AreaChartVariants,
  BarChartVariants,
  ChartCustomization,
  ChartLabelistPosition,
  ChartLabelistPositions,
  ChartMainType,
  ChartMainVariant,
  ChartTheme,
  ChartThemes,
  ChartTooltipIndicator,
  ChartTooltipIndicators,
  ChartType,
  LineChartVariants,
  PieChartVariants,
  RadarChartVariants,
  RadialChartVariants,
  ScatterChartVariants,
  useChartStore,
} from "@/store/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/custom-ui/select";
import { replaceUnderscoreWithSpace, titleCase } from "@/lib/utils";
import { ColorInput } from "@/components/custom-ui/color-input";
import { Slider } from "@/components/ui/slider";

const Customize = () => {
  const { chartCustomization, setChartCustomization } = useChartStore(
    (state) => state
  );
  const { chartType, setChartType } = useChartStore((state) => state);

  return (
    <ScrollArea className="h-[calc(100vh-120px)]">
      <div className="p-4 space-y-4">
        {/* Chart Card */}
        <ChartCard
          chartCustomization={chartCustomization}
          setChartCustomization={setChartCustomization}
          chartType={chartType}
          setChartType={setChartType}
        />
        {/* TextCard */}
        <TextCard
          chartCustomization={chartCustomization}
          setChartCustomization={setChartCustomization}
        />
        {/* X Axis Card */}
        <XAxisCard
          chartCustomization={chartCustomization}
          setChartCustomization={setChartCustomization}
        />
        {/* Y Axis Card */}
        <YAxisCard
          chartCustomization={chartCustomization}
          setChartCustomization={setChartCustomization}
        />
        {/* Label Card */}
        <LabelistCard
          chartCustomization={chartCustomization}
          setChartCustomization={setChartCustomization}
        />
        {/* Legend Card */}
        <LegendCard
          chartCustomization={chartCustomization}
          setChartCustomization={setChartCustomization}
        />
        {/* Tooltip Card */}
        <TooltipCard
          chartCustomization={chartCustomization}
          setChartCustomization={setChartCustomization}
        />
        {/* Grid Card */}
        <GridCard
          chartCustomization={chartCustomization}
          setChartCustomization={setChartCustomization}
        />
      </div>
    </ScrollArea>
  );
};

export default Customize;

interface CardProps {
  chartCustomization: ChartCustomization;
  setChartCustomization: (customization: ChartCustomization) => void;
}

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
          <AccordionItem value="chart-2">
            <AccordionTrigger>
              <Text variant="label">Background</Text>
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex justify-between items-center">
                <Text variant="xs">Color</Text>
                <div className="flex items-center space-x-2">
                  <ColorInput
                    variant="sm"
                    value={chartCustomization.chart.background.color}
                    onChange={(e) =>
                      setChartCustomization({
                        ...chartCustomization,
                        chart: {
                          ...chartCustomization.chart,
                          background: {
                            ...chartCustomization.chart.background,
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
          <AccordionItem value="chart-2">
            <AccordionTrigger>
              <Text variant="label">Border</Text>
            </AccordionTrigger>
            <AccordionContent className="space-y-2">
              <div className="flex justify-between items-center">
                <Text variant="xs">Width</Text>
                <Input
                  variant="sm"
                  type="text"
                  value={chartCustomization.chart.border.width}
                  onChange={(e) =>
                    setChartCustomization({
                      ...chartCustomization,
                      chart: {
                        ...chartCustomization.chart,
                        border: {
                          ...chartCustomization.chart.border,
                          width: Number(e.target.value),
                        },
                      },
                    })
                  }
                  className="flex-1 bg-white text-gray-900 border-gray-300 max-w-[2.25rem] p-1 text-center"
                />
              </div>
              <div className="flex justify-between items-center">
                <Text variant="xs">Radius</Text>
                <Input
                  variant="sm"
                  type="text"
                  value={chartCustomization.chart.border.radius}
                  onChange={(e) =>
                    setChartCustomization({
                      ...chartCustomization,
                      chart: {
                        ...chartCustomization.chart,
                        border: {
                          ...chartCustomization.chart.border,
                          radius: Number(e.target.value),
                        },
                      },
                    })
                  }
                  className="flex-1 bg-white text-gray-900 border-gray-300 max-w-[2.25rem] p-1 text-center"
                />
              </div>
              <div className="flex justify-between items-center">
                <Text variant="xs">Color</Text>
                <div className="flex items-center space-x-2">
                  <ColorInput
                    variant="sm"
                    value={chartCustomization.chart.border.color}
                    onChange={(e) =>
                      setChartCustomization({
                        ...chartCustomization,
                        chart: {
                          ...chartCustomization.chart,
                          border: {
                            ...chartCustomization.chart.border,
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
          <AccordionItem value="chart-3">
            <AccordionTrigger>
              <Text variant="label">Content</Text>
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex justify-between items-center">
                <Text variant="xs">Width</Text>
                <Input
                  variant="sm"
                  type="text"
                  value={chartCustomization.chart.content.width}
                  onChange={(e) =>
                    setChartCustomization({
                      ...chartCustomization,
                      chart: {
                        ...chartCustomization.chart,
                        content: {
                          ...chartCustomization.chart.content,
                          width: Number(e.target.value),
                        },
                      },
                    })
                  }
                  className="flex-1 bg-white text-gray-900 border-gray-300 max-w-[2.5rem] p-1 text-center"
                />
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
};

const TextCard = ({ chartCustomization, setChartCustomization }: CardProps) => {
  return (
    <Card>
      <CardContent>
        <Text variant="sm" className="mt-3 font-bold">
          Text
        </Text>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <Text variant="label">Title</Text>
            </AccordionTrigger>
            <AccordionContent className="space-y-4 mb-3">
              <Input
                variant="sm"
                placeholder="Input title here"
                value={chartCustomization.text.title.text}
                onChange={(e) =>
                  setChartCustomization({
                    ...chartCustomization,
                    text: {
                      ...chartCustomization.text,
                      title: {
                        ...chartCustomization.text.title,
                        text: e.target.value,
                      },
                    },
                  })
                }
                className="mb-3"
              />

              <div className="flex items-center space-x-4">
                <div className="flex-1 space-y-2">
                  <Text variant="label">Text Color</Text>
                  <div className="flex items-center space-x-2">
                    <ColorInput
                      variant="sm"
                      value={chartCustomization.text.title.color}
                      onChange={(e) =>
                        setChartCustomization({
                          ...chartCustomization,
                          text: {
                            ...chartCustomization.text,
                            title: {
                              ...chartCustomization.text.title,
                              color: e.target.value,
                            },
                          },
                        })
                      }
                    />
                    <Input
                      variant="sm"
                      type="text"
                      value={chartCustomization.text.title.color}
                      onChange={(e) =>
                        setChartCustomization({
                          ...chartCustomization,
                          text: {
                            ...chartCustomization.text,
                            title: {
                              ...chartCustomization.text.title,
                              color: e.target.value,
                            },
                          },
                        })
                      }
                      className="flex-1 bg-white text-gray-900 border-gray-300"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Text variant="label">Text Align</Text>
                  <TextAlign
                    textAlign={chartCustomization.text.title.align}
                    setTextAlign={(textAlign: "left" | "center" | "right") => {
                      setChartCustomization({
                        ...chartCustomization,
                        text: {
                          ...chartCustomization.text,
                          title: {
                            ...chartCustomization.text.title,
                            align: textAlign,
                          },
                        },
                      });
                    }}
                  />
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <Text variant="label">Subtitle</Text>
            </AccordionTrigger>
            <AccordionContent className="space-y-4 mb-3">
              <Input
                variant="sm"
                placeholder="Input subtitle here"
                value={chartCustomization.text.subtitle.text}
                onChange={(e) =>
                  setChartCustomization({
                    ...chartCustomization,
                    text: {
                      ...chartCustomization.text,
                      subtitle: {
                        ...chartCustomization.text.subtitle,
                        text: e.target.value,
                      },
                    },
                  })
                }
                className="mb-3"
              />
              <div className="flex items-center space-x-4">
                <div className="flex-1 space-y-2">
                  <Text variant="label">Text Color</Text>
                  <div className="flex items-center space-x-2">
                    <ColorInput
                      variant="sm"
                      value={chartCustomization.text.subtitle.color}
                      onChange={(e) =>
                        setChartCustomization({
                          ...chartCustomization,
                          text: {
                            ...chartCustomization.text,
                            subtitle: {
                              ...chartCustomization.text.subtitle,
                              color: e.target.value,
                            },
                          },
                        })
                      }
                    />
                    <Input
                      variant="sm"
                      type="text"
                      value={chartCustomization.text.subtitle.color}
                      onChange={(e) =>
                        setChartCustomization({
                          ...chartCustomization,
                          text: {
                            ...chartCustomization.text,
                            subtitle: {
                              ...chartCustomization.text.subtitle,
                              color: e.target.value,
                            },
                          },
                        })
                      }
                      className="flex-1 bg-white text-gray-900 border-gray-300"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Text variant="label">Text Align</Text>
                  <TextAlign
                    textAlign={chartCustomization.text.subtitle.align}
                    setTextAlign={(textAlign: "left" | "center" | "right") => {
                      setChartCustomization({
                        ...chartCustomization,
                        text: {
                          ...chartCustomization.text,
                          subtitle: {
                            ...chartCustomization.text.subtitle,
                            align: textAlign,
                          },
                        },
                      });
                    }}
                  />
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <Text variant="label">Footer</Text>
            </AccordionTrigger>
            <AccordionContent className="space-y-4 mb-3">
              <Input
                variant="sm"
                placeholder="Input footer here"
                value={chartCustomization.text.footerTitle.text}
                onChange={(e) =>
                  setChartCustomization({
                    ...chartCustomization,
                    text: {
                      ...chartCustomization.text,
                      footerTitle: {
                        ...chartCustomization.text.footerTitle,
                        text: e.target.value,
                      },
                    },
                  })
                }
                className="mb-3"
              />
              <div className="flex items-center space-x-4">
                <div className="flex-1 space-y-2">
                  <Text variant="label">Text Color</Text>
                  <div className="flex items-center space-x-2">
                    <ColorInput
                      variant="sm"
                      value={chartCustomization.text.footerTitle.color}
                      onChange={(e) =>
                        setChartCustomization({
                          ...chartCustomization,
                          text: {
                            ...chartCustomization.text,
                            footerTitle: {
                              ...chartCustomization.text.footerTitle,
                            },
                          },
                        })
                      }
                    />
                    <Input
                      variant="sm"
                      type="text"
                      value={chartCustomization.text.footerTitle.color}
                      onChange={(e) =>
                        setChartCustomization({
                          ...chartCustomization,
                          text: {
                            ...chartCustomization.text,
                            footerTitle: {
                              ...chartCustomization.text.footerTitle,
                              color: e.target.value,
                            },
                          },
                        })
                      }
                      className="flex-1 bg-white text-gray-900 border-gray-300"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Text variant="label">Text Align</Text>
                  <TextAlign
                    textAlign={chartCustomization.text.footerTitle.align}
                    setTextAlign={(textAlign: "left" | "center" | "right") => {
                      setChartCustomization({
                        ...chartCustomization,
                        text: {
                          ...chartCustomization.text,
                          footerTitle: {
                            ...chartCustomization.text.footerTitle,
                            align: textAlign,
                          },
                        },
                      });
                    }}
                  />
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <Text variant="label">Footer Subtitle</Text>
            </AccordionTrigger>
            <AccordionContent className="space-y-4 mb-3">
              <Input
                variant="sm"
                placeholder="Input description here"
                value={chartCustomization.text.footerSubtitle.text}
                onChange={(e) =>
                  setChartCustomization({
                    ...chartCustomization,
                    text: {
                      ...chartCustomization.text,
                      footerSubtitle: {
                        ...chartCustomization.text.footerSubtitle,
                        text: e.target.value,
                      },
                    },
                  })
                }
                className="mb-3"
              />
              <div className="flex items-center space-x-4">
                <div className="flex-1 space-y-2">
                  <Text variant="label">Text Color</Text>
                  <div className="flex items-center space-x-2">
                    <ColorInput
                      variant="sm"
                      value={chartCustomization.text.footerSubtitle.color}
                      onChange={(e) =>
                        setChartCustomization({
                          ...chartCustomization,
                          text: {
                            ...chartCustomization.text,
                            footerSubtitle: {
                              ...chartCustomization.text.footerSubtitle,
                            },
                          },
                        })
                      }
                    />
                    <Input
                      variant="sm"
                      type="text"
                      value={chartCustomization.text.footerSubtitle.color}
                      onChange={(e) =>
                        setChartCustomization({
                          ...chartCustomization,
                          text: {
                            ...chartCustomization.text,
                            footerSubtitle: {
                              ...chartCustomization.text.footerSubtitle,
                              color: e.target.value,
                            },
                          },
                        })
                      }
                      className="flex-1 bg-white text-gray-900 border-gray-300"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Text variant="label">Text Align</Text>
                  <TextAlign
                    textAlign={chartCustomization.text.footerSubtitle.align}
                    setTextAlign={(textAlign: "left" | "center" | "right") => {
                      setChartCustomization({
                        ...chartCustomization,
                        text: {
                          ...chartCustomization.text,
                          footerSubtitle: {
                            ...chartCustomization.text.footerSubtitle,
                            align: textAlign,
                          },
                        },
                      });
                    }}
                  />
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
};

const LabelistCard = ({
  chartCustomization,
  setChartCustomization,
}: CardProps) => {
  return (
    <Card>
      <CardContent className="space-y-2">
        <Text variant="sm" className="font-bold mt-3">
          Labelist
        </Text>
        <Accordion type="single" collapsible>
          <AccordionItem value="grid-1">
            <AccordionTrigger>
              <Text variant="label">Label</Text>
            </AccordionTrigger>
            <AccordionContent className="space-y-4 mb-3">
              <div className="flex justify-between items-center">
                <Text variant="xs">Show</Text>
                <Switch
                  size="sm"
                  checked={chartCustomization.labelist.key.show}
                  onCheckedChange={() =>
                    setChartCustomization({
                      ...chartCustomization,
                      labelist: {
                        ...chartCustomization.labelist,
                        key: {
                          ...chartCustomization.labelist.key,
                          show: !chartCustomization.labelist.key.show,
                        },
                      },
                    })
                  }
                />
              </div>
              <div className="flex justify-between items-center">
                <Text variant="xs" className="font-medium">
                  Position
                </Text>
                <Select
                  value={chartCustomization.labelist.key.position}
                  onValueChange={(e) =>
                    setChartCustomization({
                      ...chartCustomization,
                      labelist: {
                        ...chartCustomization.labelist,
                        key: {
                          ...chartCustomization.labelist.key,
                          position: e as ChartLabelistPosition,
                        },
                      },
                    })
                  }
                >
                  <SelectTrigger variant="sm" className="w-[8rem]">
                    <SelectValue>
                      <Text variant="sm">
                        {titleCase(chartCustomization.labelist.key.position)}
                      </Text>
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    {ChartLabelistPositions.map((position) => (
                      <SelectItem
                        key={position}
                        value={position}
                        onClick={() =>
                          setChartCustomization({
                            ...chartCustomization,
                            labelist: {
                              ...chartCustomization.labelist,
                              key: {
                                ...chartCustomization.labelist.key,
                                position: position,
                              },
                            },
                          })
                        }
                      >
                        <Text variant="sm">{titleCase(position)}</Text>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex justify-between items-center">
                <Text variant="xs" className="font-medium">
                  Offset
                </Text>
                <Slider
                  defaultValue={[chartCustomization.labelist.key.offset]}
                  max={50}
                  step={1}
                  className="w-1/3"
                  onValueChange={(value) =>
                    setChartCustomization({
                      ...chartCustomization,
                      labelist: {
                        ...chartCustomization.labelist,
                        key: {
                          ...chartCustomization.labelist.key,
                          offset: value[0],
                        },
                      },
                    })
                  }
                />
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="grid-1">
            <AccordionTrigger>
              <Text variant="label">Value</Text>
            </AccordionTrigger>
            <AccordionContent className="space-y-4 mb-3">
              <div className="flex justify-between items-center">
                <Text variant="xs">Show</Text>
                <Switch
                  size="sm"
                  checked={chartCustomization.labelist.value.show}
                  onCheckedChange={() =>
                    setChartCustomization({
                      ...chartCustomization,
                      labelist: {
                        ...chartCustomization.labelist,
                        value: {
                          ...chartCustomization.labelist.value,
                          show: !chartCustomization.labelist.value.show,
                        },
                      },
                    })
                  }
                />
              </div>
              <div className="flex justify-between items-center">
                <Text variant="xs" className="font-medium">
                  Position
                </Text>
                <Select
                  value={chartCustomization.labelist.value.position}
                  onValueChange={(e) =>
                    setChartCustomization({
                      ...chartCustomization,
                      labelist: {
                        ...chartCustomization.labelist,
                        value: {
                          ...chartCustomization.labelist.value,
                          position: e as ChartLabelistPosition,
                        },
                      },
                    })
                  }
                >
                  <SelectTrigger variant="sm" className="w-[8rem]">
                    <SelectValue>
                      <Text variant="sm">
                        {titleCase(chartCustomization.labelist.value.position)}
                      </Text>
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    {ChartLabelistPositions.map((position) => (
                      <SelectItem
                        key={position}
                        value={position}
                        onClick={() =>
                          setChartCustomization({
                            ...chartCustomization,
                            labelist: {
                              ...chartCustomization.labelist,
                              value: {
                                ...chartCustomization.labelist.value,
                                position: position,
                              },
                            },
                          })
                        }
                      >
                        <Text variant="sm">{titleCase(position)}</Text>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex justify-between items-center">
                <Text variant="xs" className="font-medium">
                  Offset
                </Text>
                <Slider
                  defaultValue={[chartCustomization.labelist.value.offset]}
                  max={50}
                  step={1}
                  className="w-1/3"
                  onValueChange={(value) =>
                    setChartCustomization({
                      ...chartCustomization,
                      labelist: {
                        ...chartCustomization.labelist,
                        value: {
                          ...chartCustomization.labelist.value,
                          offset: value[0],
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

const XAxisCard = ({
  chartCustomization,
  setChartCustomization,
}: CardProps) => {
  return (
    <Card>
      <CardHeader>
        <Text variant="sm" className="font-bold">
          X-Axis
        </Text>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex justify-between items-center">
          <Text variant="label">Show</Text>
          <Switch
            size="sm"
            checked={chartCustomization.xAxis.show}
            onCheckedChange={() => {
              setChartCustomization({
                ...chartCustomization,
                xAxis: {
                  ...chartCustomization.xAxis,
                  show: !chartCustomization.xAxis.show,
                },
              });
            }}
          />
        </div>
        <div className="flex justify-between items-center">
          <Text variant="label">Axis Line</Text>
          <Switch
            size="sm"
            checked={chartCustomization.xAxis.axisLine}
            onCheckedChange={() => {
              setChartCustomization({
                ...chartCustomization,
                xAxis: {
                  ...chartCustomization.xAxis,
                  axisLine: !chartCustomization.xAxis.axisLine,
                },
              });
            }}
          />
        </div>
        <div className="flex justify-between items-center">
          <Text variant="label">Tick Line</Text>
          <Switch
            size="sm"
            checked={chartCustomization.xAxis.tickLine}
            onCheckedChange={() => {
              setChartCustomization({
                ...chartCustomization,
                xAxis: {
                  ...chartCustomization.xAxis,
                  tickLine: !chartCustomization.xAxis.tickLine,
                },
              });
            }}
          />
        </div>
        <div className="flex justify-between items-center">
          <Text variant="label">Character Length</Text>
          <Input
            variant="sm"
            type="text"
            value={chartCustomization.xAxis.charLength}
            onChange={(e) =>
              setChartCustomization({
                ...chartCustomization,
                xAxis: {
                  ...chartCustomization.xAxis,
                  charLength: Number(e.target.value),
                },
              })
            }
            className="flex-1 bg-white text-gray-900 border-gray-300 max-w-[2.25rem] p-1 text-center"
          />
        </div>
      </CardContent>
    </Card>
  );
};

const YAxisCard = ({
  chartCustomization,
  setChartCustomization,
}: CardProps) => {
  return (
    <Card>
      <CardHeader>
        <Text variant="sm" className="font-bold">
          Y-Axis
        </Text>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex justify-between">
          <Text variant="label">Show</Text>
          <Switch
            size="sm"
            checked={chartCustomization.yAxis.show}
            onCheckedChange={() => {
              setChartCustomization({
                ...chartCustomization,
                yAxis: {
                  ...chartCustomization.yAxis,
                  show: !chartCustomization.yAxis.show,
                },
              });
            }}
          />
        </div>
        <div className="flex justify-between">
          <Text variant="label">Axis Line</Text>
          <Switch
            size="sm"
            checked={chartCustomization.yAxis.axisLine}
            onCheckedChange={() => {
              setChartCustomization({
                ...chartCustomization,
                yAxis: {
                  ...chartCustomization.yAxis,
                  axisLine: !chartCustomization.yAxis.axisLine,
                },
              });
            }}
          />
        </div>
        <div className="flex justify-between">
          <Text variant="label">Tick Line</Text>
          <Switch
            size="sm"
            checked={chartCustomization.yAxis.tickLine}
            onCheckedChange={() => {
              setChartCustomization({
                ...chartCustomization,
                yAxis: {
                  ...chartCustomization.yAxis,
                  tickLine: !chartCustomization.yAxis.tickLine,
                },
              });
            }}
          />
        </div>
        <div className="flex justify-between">
          <Text variant="label">Reversed</Text>
          <Switch
            size="sm"
            checked={chartCustomization.yAxis.reversed}
            onCheckedChange={() => {
              setChartCustomization({
                ...chartCustomization,
                yAxis: {
                  ...chartCustomization.yAxis,
                  reversed: !chartCustomization.yAxis.reversed,
                },
              });
            }}
          />
        </div>
      </CardContent>
    </Card>
  );
};

const LegendCard = ({
  chartCustomization,
  setChartCustomization,
}: CardProps) => {
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

const TooltipCard = ({
  chartCustomization,
  setChartCustomization,
}: CardProps) => {
  return (
    <Card>
      <CardHeader>
        <Text variant="sm" className="font-bold">
          Tooltip
        </Text>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex justify-between items-center">
          <Text variant="label" className="font-medium">
            Show
          </Text>
          <Switch
            size="sm"
            checked={chartCustomization.tooltip.show}
            onCheckedChange={() =>
              setChartCustomization({
                ...chartCustomization,
                tooltip: {
                  ...chartCustomization.tooltip,
                  show: !chartCustomization.tooltip.show,
                },
              })
            }
          />
        </div>
        <div className="flex justify-between items-center">
          <Text variant="label" className="font-medium">
            Show Tooltip Index
          </Text>
          <Input
            variant="sm"
            type="text"
            value={chartCustomization.tooltip.showTooltipIndex + 1}
            onChange={(e) =>
              setChartCustomization({
                ...chartCustomization,
                tooltip: {
                  ...chartCustomization.tooltip,
                  showTooltipIndex: Number(e.target.value) - 1,
                },
              })
            }
            className="flex-1 bg-white text-gray-900 border-gray-300 max-w-[2.25rem] p-1 text-center"
          />
        </div>
        <div className="flex justify-between items-center">
          <Text variant="label" className="font-medium">
            Focus Mode
          </Text>
          <Switch
            size="sm"
            checked={chartCustomization.tooltip.focused}
            onCheckedChange={() =>
              setChartCustomization({
                ...chartCustomization,
                tooltip: {
                  ...chartCustomization.tooltip,
                  focused: !chartCustomization.tooltip.focused,
                },
              })
            }
          />
        </div>
        <div className="flex justify-between items-center">
          <Text variant="label" className="font-medium">
            Indicator
          </Text>
          <Select
            value={chartCustomization.tooltip.indicator}
            onValueChange={(e) =>
              setChartCustomization({
                ...chartCustomization,
                tooltip: {
                  ...chartCustomization.tooltip,
                  indicator: e as ChartTooltipIndicator,
                },
              })
            }
          >
            <SelectTrigger variant="sm" className="w-[8rem]">
              <SelectValue>
                <Text variant="sm">
                  {titleCase(chartCustomization.tooltip.indicator)}
                </Text>
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              {ChartTooltipIndicators.map((indicator) => (
                <SelectItem
                  key={indicator}
                  value={indicator}
                  onClick={() =>
                    setChartCustomization({
                      ...chartCustomization,
                      tooltip: {
                        ...chartCustomization.tooltip,
                        indicator: indicator,
                      },
                    })
                  }
                >
                  <Text variant="sm">{titleCase(indicator)}</Text>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  );
};

const GridCard = ({ chartCustomization, setChartCustomization }: CardProps) => {
  return (
    <Card>
      <CardHeader>
        <Text variant="sm" className="font-bold">
          Grid
        </Text>
      </CardHeader>
      <CardContent className="space-y-2">
        <Accordion type="single" collapsible>
          <AccordionItem value="grid-1">
            <AccordionTrigger>
              <Text variant="label">Horizontal</Text>
            </AccordionTrigger>
            <AccordionContent className="space-y-4 mb-3">
              <div className="flex justify-between items-center">
                <Text variant="xs">Show</Text>
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
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="grid-1">
            <AccordionTrigger>
              <Text variant="label">Vertical</Text>
            </AccordionTrigger>
            <AccordionContent className="space-y-4 mb-3">
              <div className="flex justify-between items-center">
                <Text variant="xs">Show</Text>
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
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
};
