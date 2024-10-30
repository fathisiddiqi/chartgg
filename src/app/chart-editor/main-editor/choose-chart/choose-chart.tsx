import { RadarChart, RadialChart } from "@/components/icon/chart-icon";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Text } from "@/components/ui/text";
import { ChartMainType, ChartType, useChartStore } from "@/store/chart";
import {
  AreaChart,
  BarChart,
  LineChart,
  PieChart,
  ScatterChart,
} from "lucide-react";

const ChooseChart = ({
  setOpenChooseChart,
}: {
  setOpenChooseChart: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { setChartType } = useChartStore((state) => state);

  const handleChangeChart = (chartType: ChartMainType) => {
    setChartType({
      type: chartType,
      variant: "default",
    });
    setOpenChooseChart(false);
  };

  return (
    <div className="text-center mx-auto mt-3">
      <ScrollArea>
        <div className="grid grid-cols-4 gap-4 items-center justify-center">
          <Card
            className="w-24 h-24 cursor-pointer"
            onClick={() => handleChangeChart("bar")}
          >
            <CardContent className="flex flex-col justify-center items-center p-4 gap-2">
              <Text variant="label">Bar</Text>
              <BarChart size={24} />
            </CardContent>
          </Card>
          <Card
            className="w-24 h-24 cursor-pointer"
            onClick={() => handleChangeChart("line")}
          >
            <CardContent className="flex flex-col justify-center items-center p-4 gap-2">
              <Text variant="label">Line</Text>
              <LineChart size={24} />
            </CardContent>
          </Card>
          <Card
            className="w-24 h-24 cursor-pointer"
            onClick={() => handleChangeChart("pie")}
          >
            <CardContent className="flex flex-col justify-center items-center p-4 gap-2">
              <Text variant="label">Pie</Text>
              <PieChart size={24} />
            </CardContent>
          </Card>
          <Card
            className="w-24 h-24 cursor-pointer"
            onClick={() => handleChangeChart("area")}
          >
            <CardContent className="flex flex-col justify-center items-center p-4 gap-2">
              <Text variant="label">Area</Text>
              <AreaChart size={24} />
            </CardContent>
          </Card>
          <Card
            className="w-24 h-24 cursor-pointer"
            onClick={() => handleChangeChart("radar")}
          >
            <CardContent className="flex flex-col justify-center items-center p-4 gap-2">
              <Text variant="label">Radar</Text>
              <RadarChart size={24} />
            </CardContent>
          </Card>
          <Card
            className="w-24 h-24 cursor-pointer"
            onClick={() => handleChangeChart("radial")}
          >
            <CardContent className="flex flex-col justify-center items-center p-4 gap-2">
              <Text variant="label">Radial</Text>
              <RadialChart size={24} />
            </CardContent>
          </Card>
          <Card
            className="w-24 h-24 cursor-pointer"
            onClick={() => handleChangeChart("scatter")}
          >
            <CardContent className="flex flex-col justify-center items-center p-4 gap-2">
              <Text variant="label">Scatter</Text>
              <ScatterChart size={24} />
            </CardContent>
          </Card>
        </div>
      </ScrollArea>
    </div>
  );
};

export default ChooseChart;
