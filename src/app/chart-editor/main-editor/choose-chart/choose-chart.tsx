import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Text } from "@/components/ui/text";
import { useChartStore } from "@/store/chart";
import { AreaChart, BarChart, LineChart, PieChart } from "lucide-react";

const ChooseChart = () => {
  const { setChartType } = useChartStore((state) => state);

  return (
    <div className="text-center mx-auto mt-3">
      <Text variant="base" className="font-bold">
        Choose your chart
      </Text>
      <ScrollArea>
        <div className="grid grid-rows-4 gap-4 mt-10 items-center justify-center">
          <Card
            className="w-24 h-24 cursor-pointer"
            onClick={() => setChartType("bar")}
          >
            <CardContent className="flex flex-col justify-center items-center p-4 gap-2">
              <Text variant="label">Bar Chart</Text>
              <BarChart size={24} />
            </CardContent>
          </Card>
          <Card
            className="w-24 h-24 cursor-pointer"
            onClick={() => setChartType("line")}
          >
            <CardContent className="flex flex-col justify-center items-center p-4 gap-2">
              <Text variant="label">Line Chart</Text>
              <LineChart size={24} />
            </CardContent>
          </Card>
          <Card
            className="w-24 h-24 cursor-pointer"
            onClick={() => setChartType("pie")}
          >
            <CardContent className="flex flex-col justify-center items-center p-4 gap-2">
              <Text variant="label">Pie Chart</Text>
              <PieChart size={24} />
            </CardContent>
          </Card>
          <Card
            className="w-24 h-24 cursor-pointer"
            onClick={() => setChartType("area")}
          >
            <CardContent className="flex flex-col justify-center items-center p-4 gap-2">
              <Text variant="label">Area Chart</Text>
              <AreaChart size={24} />
            </CardContent>
          </Card>
        </div>
      </ScrollArea>
    </div>
  );
};

export default ChooseChart;
