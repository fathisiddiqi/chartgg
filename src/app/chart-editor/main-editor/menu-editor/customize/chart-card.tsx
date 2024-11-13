import {
  AreaChartVariants,
  BarChartVariants,
  ChartMainType,
  ChartMainVariant,
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
import { SelectItem } from "@/components/custom-ui/select";
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
      </CardContent>
    </Card>
  );
};

export default ChartCard;
