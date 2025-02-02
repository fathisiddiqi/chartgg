import { Card, CardContent } from "@/components/ui/card";
import {
  AreaChart,
  BarChart,
  LineChart,
  PieChart,
  ScatterChart,
} from "lucide-react";
import { RadarChart, RadialChart } from "@/components/icon/chart-icon";
import {
  AreaChartVariants,
  BarChartVariants,
  ChartMainType,
  ChartMainVariant,
  ChartType,
  LineChartVariants,
  PieChartVariants,
  RadarChartVariants,
  RadialChartVariants,
  ScatterChartVariants,
} from "@/store/chart";
import { SelectItem } from "@/components/custom-ui/select";
import { Text } from "@/components/ui/text";
import { replaceUnderscoreWithSpace, titleCase } from "@/lib/utils";

const ChooseChartType = ({
  chartType,
  setChartType,
}: {
  chartType: ChartType;
  setChartType: (chartType: ChartType) => void;
}) => {
  const handleChangeChart = (chartType: ChartMainType) => {
    setChartType({
      type: chartType,
      variant: "default",
    });
  };

  return (
    <div>
      <Text variant="sm" className="font-bold">
        Type
      </Text>
      <div className="grid grid-cols-3 gap-2 space-y-2 items-center justify-evenly py-4">
        <Card
          className={
            chartType.type === "bar"
              ? "w-24 h-24 cursor-pointer border-black"
              : "w-24 h-24 cursor-pointer text-muted-foreground"
          }
          onClick={() => handleChangeChart("bar")}
        >
          <CardContent className="flex flex-col justify-center items-center p-4 gap-2">
            <Text variant="xs">Bar</Text>
            <BarChart size={24} />
          </CardContent>
        </Card>
        <Card
          className={
            chartType.type === "line"
              ? "w-24 h-24 cursor-pointer border-black"
              : "w-24 h-24 cursor-pointer text-muted-foreground"
          }
          onClick={() => handleChangeChart("line")}
        >
          <CardContent className="flex flex-col justify-center items-center p-4 gap-2">
            <Text variant="xs">Line</Text>
            <LineChart size={24} />
          </CardContent>
        </Card>
        <Card
          className={
            chartType.type === "pie"
              ? "w-24 h-24 cursor-pointer border-black"
              : "w-24 h-24 cursor-pointer text-muted-foreground"
          }
          onClick={() => handleChangeChart("pie")}
        >
          <CardContent
            className={
              chartType.type === "pie"
                ? "flex flex-col justify-center items-center p-4 gap-2"
                : "flex flex-col justify-center items-center p-4 gap-2 text-muted-foreground"
            }
          >
            <Text variant="xs">Pie</Text>
            <PieChart size={24} />
          </CardContent>
        </Card>
        <Card
          className={
            chartType.type === "area"
              ? "w-24 h-24 cursor-pointer border-black"
              : "w-24 h-24 cursor-pointer text-muted-foreground"
          }
          onClick={() => handleChangeChart("area")}
        >
          <CardContent className="flex flex-col justify-center items-center p-4 gap-2">
            <Text variant="xs">Area</Text>
            <AreaChart size={24} />
          </CardContent>
        </Card>
        <Card
          className={
            chartType.type === "radar"
              ? "w-24 h-24 cursor-pointer border-black"
              : "w-24 h-24 cursor-pointer text-muted-foreground"
          }
          onClick={() => handleChangeChart("radar")}
        >
          <CardContent className="flex flex-col justify-center items-center p-4 gap-2">
            <Text variant="xs">Radar</Text>
            <RadarChart size={24} />
          </CardContent>
        </Card>
        {/* <Card
          className={
            chartType.type === "radial"
              ? "w-24 h-24 cursor-pointer border-black"
              : "w-24 h-24 cursor-pointer text-muted-foreground"
          }
          onClick={() => handleChangeChart("radial")}
        >
          <CardContent className="flex flex-col justify-center items-center p-4 gap-2">
            <Text variant="xs">Radial</Text>
            <RadialChart size={24} />
          </CardContent>
        </Card> */}
        <Card
          className={
            chartType.type === "scatter"
              ? "w-24 h-24 cursor-pointer border-black"
              : "w-24 h-24 cursor-pointer text-muted-foreground"
          }
          onClick={() => handleChangeChart("scatter")}
        >
          <CardContent className="flex flex-col justify-center items-center p-4 gap-2">
            <Text variant="xs">Scatter</Text>
            <ScatterChart size={24} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ChooseChartType;

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
