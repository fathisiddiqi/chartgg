import { CardProps } from "./props";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/custom-ui/switch";
import { Text } from "@/components/ui/text";
import { ChartLabelistPosition, ChartLabelistPositions } from "@/store/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/custom-ui/select";
import { titleCase } from "@/lib/utils";
import { Slider } from "@/components/ui/slider";

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

export default LabelistCard;
