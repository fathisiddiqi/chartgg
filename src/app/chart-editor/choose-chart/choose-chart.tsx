import { Card, CardContent } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { useChartStore } from "@/store/chart";
import { AreaChart, BarChart, LineChart, PieChart } from "lucide-react";

const ChooseChart = () => {
  const { setChartType } = useChartStore((state) => state);

  return (
    <div className="text-center mx-auto mt-40">
      <Text variant="4xl">Choose your chart</Text>
      <div className="grid grid-cols-4 gap-4 mt-10">
        <Card
          className="w-32 h-32 cursor-pointer"
          onClick={() => setChartType("bar")}
        >
          <CardContent className="flex flex-col justify-center items-center p-4 gap-2">
            <Text variant="sm">Bar Chart</Text>
            <BarChart size={64} />
          </CardContent>
        </Card>
        <Card
          className="w-32 h-32 cursor-pointer"
          onClick={() => setChartType("line")}
        >
          <CardContent className="flex flex-col justify-center items-center p-4 gap-2">
            <Text variant="sm">Line Chart</Text>
            <LineChart size={64} />
          </CardContent>
        </Card>
        <Card
          className="w-32 h-32 cursor-pointer"
          onClick={() => setChartType("pie")}
        >
          <CardContent className="flex flex-col justify-center items-center p-4 gap-2">
            <Text variant="sm">Pie Chart</Text>
            <PieChart size={64} />
          </CardContent>
        </Card>
        <Card
          className="w-32 h-32 cursor-pointer"
          onClick={() => setChartType("area")}
        >
          <CardContent className="flex flex-col justify-center items-center p-4 gap-2">
            <Text variant="sm">Area Chart</Text>
            <AreaChart size={64} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ChooseChart;
