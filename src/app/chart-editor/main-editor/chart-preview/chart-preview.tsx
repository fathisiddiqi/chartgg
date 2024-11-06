import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartMainType, ChartType, useChartStore } from "@/store/chart";
import { ArrowDown, icons } from "lucide-react";
import { hexToRGB, titleCase } from "@/lib/utils";
import { Input } from "@/components/custom-ui/input";
import ChartFrame from "@/components/common/chart-frame";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import ChooseChart from "../choose-chart/choose-chart";
import { useState } from "react";
import { Text } from "@/components/ui/text";
import BarChartPreview from "./charts/bar-chart";
import LineChartPreview from "./charts/line-chart";
import PieChartPreview from "./charts/pie-chart";
import AreaChartPreview from "./charts/area-chart";
import RadarChartPreview from "./charts/radar-chart";
import RadialChartPreview from "./charts/radial-chart";
import ScatterChartPreview from "./charts/scatter-chart";

const ChartPreview = () => {
  const { chartType, chartScreenshot, chartCustomization } = useChartStore(
    (state) => state
  );

  return (
    <div className="w-full h-full bg-gray-50 flex justify-center items-center relative">
      <ActionMenu chartType={chartType} />
      {/* Background component */}
      <div
        style={{
          width: `${chartScreenshot.canvas.width}px`,
          minWidth: `${chartScreenshot.canvas.width}px`,
          height: `${chartScreenshot.canvas.height}px`,
          minHeight: `${chartScreenshot.canvas.height}px`,
          backgroundColor: `rgba(${hexToRGB(
            chartScreenshot.canvas.background.color
          )}, ${chartScreenshot.canvas.background.opacity})`,
          borderRadius: chartScreenshot.canvas.border.radius,
        }}
        className="flex items-center justify-center mx-auto scale-50"
      >
        {/* Chart Container */}
        <div
          style={{
            transform: `scale(${chartScreenshot.content.scale / 60}) rotate(${
              chartScreenshot.content.rotate
            }deg)`,
            boxShadow: chartScreenshot.content.shadow,
            padding: 0,
          }}
        >
          {/* Chart Frame */}
          <ChartFrame frame={chartScreenshot.content.frame}>
            {/* Chart Content */}
            <Card
              style={{
                backgroundColor: chartScreenshot.content.background.color,
                borderColor: chartScreenshot.content.border.color,
                borderRadius: chartScreenshot.content.border.radius,
                borderWidth: chartScreenshot.content.border.width,
                width: chartScreenshot.content.width,
              }}
              className="shadow-none"
            >
              <CardHeader>
                <CardTitle
                  style={{
                    color: chartCustomization.text.title.color,
                  }}
                >
                  {chartCustomization.text.title.text}
                </CardTitle>
                <CardDescription
                  style={{ color: chartCustomization.text.subtitle.color }}
                >
                  {chartCustomization.text.title.text}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ChartTypePreview chartType={chartType.type} />
              </CardContent>
              <CardFooter className="flex-col items-start gap-2 text-sm">
                <div
                  className="flex gap-2 font-medium leading-none"
                  style={{
                    color: chartCustomization.text.footerTitle.color,
                  }}
                >
                  {chartCustomization.text.footerTitle.text}
                </div>
                <div
                  className="leading-none text-muted-foreground"
                  style={{
                    color: chartCustomization.text.footerSubtitle.color,
                  }}
                >
                  {chartCustomization.text.footerSubtitle.text}
                </div>
              </CardFooter>
            </Card>
          </ChartFrame>
        </div>
      </div>
    </div>
  );
};

export default ChartPreview;

const FooterTitleIcon = ({ iconInStr }: { iconInStr: string }) => {
  const LucideIcon = icons[iconInStr as keyof typeof icons];

  return (
    <LucideIcon className="w-4 h-4 text-muted-foreground" aria-hidden="true" />
  );
};

const ActionMenu = ({ chartType }: { chartType: ChartType }) => {
  const { chartScreenshot } = useChartStore((state) => state);

  const [openChooseChart, setOpenChooseChart] = useState(false);

  return (
    <div className="w-full flex justify-between gap-2 absolute top-4 left-4 right-10 z-10">
      <div className="relative space-x-2">
        <Popover open={openChooseChart} onOpenChange={setOpenChooseChart}>
          <PopoverTrigger className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-8 rounded-md px-3 bg-primary text-primary-foreground hover:bg-primary/90">
            <Text variant="xs">Type: {titleCase(chartType.type)}</Text>
            <ArrowDown className="w-4 h-4 ml-2" />
          </PopoverTrigger>
          <PopoverContent className="w-full ml-4">
            <ChooseChart setOpenChooseChart={setOpenChooseChart} />
          </PopoverContent>
        </Popover>
      </div>
      <div className="relative flex gap-2 mr-8">
        <div className="relative w-24">
          <Input
            variant="sm"
            type="numeric"
            value={chartScreenshot.canvas.width || ""}
            onChange={(e) =>
              useChartStore.setState({
                chartScreenshot: {
                  ...chartScreenshot,
                  canvas: {
                    ...chartScreenshot.canvas,
                    width: parseInt(e.target.value),
                  },
                },
              })
            }
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
            px
          </span>
        </div>
        <div className="relative w-24">
          <Input
            variant="sm"
            type="numeric"
            value={chartScreenshot.canvas.height}
            onChange={(e) =>
              useChartStore.setState({
                chartScreenshot: {
                  ...chartScreenshot,
                  canvas: {
                    ...chartScreenshot.canvas,
                    height: parseInt(e.target.value),
                  },
                },
              })
            }
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
            px
          </span>
        </div>
      </div>
    </div>
  );
};

const ChartTypePreview = ({ chartType }: { chartType: ChartMainType }) => {
  const chartTypeToPreview: Record<ChartMainType, JSX.Element> = {
    bar: <BarChartPreview />,
    line: <LineChartPreview />,
    pie: <PieChartPreview />,
    area: <AreaChartPreview />,
    radar: <RadarChartPreview />,
    radial: <RadialChartPreview />,
    scatter: <ScatterChartPreview />,
  };

  return chartTypeToPreview[chartType];
};
