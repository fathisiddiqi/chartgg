import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Text } from "@/components/ui/text";
import {
  BrushIcon,
  CatIcon,
  ChartAreaIcon,
  SlidersHorizontalIcon,
  SquareIcon,
  TableIcon,
} from "lucide-react";
import Data from "./menu-editor/data";
import Customize from "./menu-editor/customize";
import Screenshot from "./menu-editor/screenshot";
import ChartPreview from "./chart-preview/chart-preview";
import Chart from "./menu-editor/chart";

const MainEditor = () => {
  return (
    <div className="flex flex-row gap-4 p-4">
      <Tabs
        defaultValue="chart"
        className="flex flex-row w-[450px]"
        orientation="vertical"
      >
        <TabsList className="flex flex-col w-[90px] h-[calc(100vh-100px)] py-4 space-y-4 rounded-md bg-muted justify-start bg-white border border-gray-200 shadow-sm">
          <TabsTrigger
            value="chart"
            className="data-[state=active]:shadow-none flex flex-col space-y-2"
          >
            <ChartAreaIcon size="24" className="mx-auto" />
            <Text variant="xs">Chart</Text>
          </TabsTrigger>
          <TabsTrigger
            value="data"
            className="data-[state=active]:shadow-none flex flex-col space-y-2"
          >
            <TableIcon size="24" className="mx-auto" />
            <Text variant="xs">Data</Text>
          </TabsTrigger>
          <TabsTrigger
            value="customization"
            className="data-[state=active]:shadow-none flex flex-col space-y-2"
          >
            <SlidersHorizontalIcon size="24" className="mx-auto" />
            <Text variant="xs">Customize</Text>
          </TabsTrigger>
          <TabsTrigger
            value="style"
            className="data-[state=active]:shadow-none flex flex-col space-y-2"
          >
            <BrushIcon size="24" className="mx-auto" />
            <Text variant="xs">Style</Text>
          </TabsTrigger>
        </TabsList>
        <Card className="h-[calc(100vh-100px)] w-[360px] ml-4">
          <CardContent className="p-4">
            <TabsContent value="chart">
              <Chart />
            </TabsContent>
            <TabsContent value="data">
              <Data />
            </TabsContent>
            <TabsContent value="customization">
              <Customize />
            </TabsContent>
            <TabsContent value="style">
              <Screenshot />
            </TabsContent>
          </CardContent>
        </Card>
      </Tabs>
      <div className="w-full">
        <ChartPreview />
      </div>
    </div>
  );
};

export default MainEditor;
