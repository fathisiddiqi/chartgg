"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Text } from "@/components/ui/text";
import Data from "./data/data";
import Customize from "./customize/customize";
import {
  BrushIcon,
  ChartAreaIcon,
  SlidersHorizontalIcon,
  TableIcon,
} from "lucide-react";
import Style from "./style/style";
import { Card, CardContent } from "@/components/ui/card";
import Chart from "./chart/chart";

const Editor = () => {
  return (
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
            <Style />
          </TabsContent>
        </CardContent>
      </Card>
    </Tabs>
  );
};

export default Editor;
