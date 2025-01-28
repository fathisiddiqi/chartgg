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
import ThemeIcon from "@/components/icon/color-palette-icon";

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
}: CustomizationCardProps & {
  chartType: ChartType;
  setChartType: (chartType: ChartType) => void;
}) => {
  return (
    <div>
      <Text variant="sm" className="font-bold mt-3">
        Theme
      </Text>
      <Text variant="label" className="mt-3">
        Color Palette
      </Text>
      <div className="flex flex-wrap gap-3 mt-3 mx-4">
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
              isActive={chartCustomization.theme.palette.selected === palette}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorPaletteCard;
