import {
  AreaChartVariants,
  BarChartVariants,
  ChartColorPalette,
  ChartMainType,
  ChartMainVariant,
  ChartType,
  LineChartVariants,
  PieChartVariants,
  RadarChartVariants,
  RadialChartVariants,
  ScatterChartVariants,
} from "@/store/chart";
import { CustomizationCardProps } from "@/types";
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

const ColorPaletteCard = ({
  chartCustomization,
  setChartCustomization,
  chartType,
  setChartType,
}: CustomizationCardProps & {
  chartType: ChartType;
  setChartType: (chartType: ChartType) => void;
}) => {
  return (
    <Card>
      <CardContent className="space-y-2">
        <Text variant="sm" className="font-bold mt-3">
          Theme
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
              <Text variant="label">Color Palette</Text>
            </AccordionTrigger>
            <AccordionContent className="space-y-4 mb-3 p-3">
              <div className="grid grid-cols-5 gap-4">
                {ChartColorPalette.map((palette, index) => (
                  <div
                    className="cursor-pointer"
                    key={index}
                    onClick={() =>
                      setChartCustomization({
                        ...chartCustomization,
                        theme: {
                          ...chartCustomization.theme,
                          palette: {
                            ...chartCustomization.theme.palette,
                            selected: palette,
                          },
                        },
                      })
                    }
                  >
                    <ThemeIcon
                      variant={palette as ChartColorPalette}
                      isActive={
                        chartCustomization.theme.palette.selected === palette
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

export default ColorPaletteCard;
