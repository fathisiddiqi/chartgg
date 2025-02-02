import { Input } from "@/components/custom-ui/input";
import {
  ArcFrameIcon,
  MacDarkFrameIcon,
  MacLightFrameIcon,
  NoneFrameIcon,
  StrokeFrameIcon,
} from "@/components/icon/frame-icon";
import { Slider } from "@/components/ui/slider";
import { Text } from "@/components/ui/text";
import {
  ChartFrame,
  ChartFrames,
  ChartShadowStyles,
  ChartTheme,
  ChartThemes,
} from "@/store/chart";
import { StyleCardProps } from "@/types";
import ThemeIcon from "@/components/icon/color-palette-icon";

const ContentCard = ({ chartStyle, setChartStyle }: StyleCardProps) => {
  return (
    <div className="space-y-2">
      <Text variant="sm" className="font-bold">
        Content
      </Text>
      <div>
        <Text variant="label">Frames</Text>
        <div className="grid grid-cols-2 gap-4 justify-around p-3">
          {ChartFrames.map((frame) => (
            <div
              key={frame}
              onClick={() =>
                setChartStyle({
                  ...chartStyle,
                  content: {
                    ...chartStyle.content,
                    frame: frame,
                  },
                })
              }
              className={
                chartStyle.content.frame === frame
                  ? `cursor-pointer border border-black rounded-md flex w-32 h-24 items-center justify-center bg-secondary`
                  : `cursor-pointer flex w-32 h-24 items-center justify-center bg-secondary rounded-md`
              }
            >
              <ChartFrameIcon frame={frame} />
            </div>
          ))}
        </div>
      </div>
      <div>
        <Text variant="label" className="mt-3">
          Theme
        </Text>
        <div className="flex flex-wrap gap-3 mt-3 mx-4">
          {ChartThemes.map((theme, index) => (
            <div
              className="cursor-pointer"
              key={index}
              onClick={() =>
                setChartStyle({
                  ...chartStyle,
                  content: {
                    ...chartStyle.content,
                    theme: {
                      ...chartStyle.content.theme,
                      selected: theme,
                    },
                  },
                })
              }
            >
              <ThemeIcon
                variant={theme as ChartTheme}
                isActive={chartStyle.content.theme.selected === theme}
              />
            </div>
          ))}
        </div>
      </div>
      <div>
        <Text variant="label">Shadow</Text>
        <div className="grid grid-cols-4 gap-4 p-3">
          {ChartShadowStyles.map(({ id, className, property }) => (
            <div
              key={id}
              className={
                chartStyle.content.shadow === property
                  ? `w-14 h-14 bg-secondary rounded-lg flex justify-center items-center cursor-pointer border border-black`
                  : `w-14 h-14 bg-secondary rounded-lg flex justify-center items-center cursor-pointer`
              }
              onClick={() =>
                setChartStyle({
                  ...chartStyle,
                  content: {
                    ...chartStyle.content,
                    shadow: property,
                  },
                })
              }
            >
              <div
                className={`w-10 h-10 bg-white ${className} rounded-lg flex justify-center items-center cursor-pointer`}
              >
                <Text variant="label" className="text-center text-[9px]">
                  {id}
                </Text>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col">
        <Text variant="label">Scale</Text>
        <div className="flex items-center">
          <Slider
            value={[chartStyle.content.scale]}
            min={0}
            max={150}
            step={1}
            className="flex-1"
            onValueChange={(value) =>
              setChartStyle({
                ...chartStyle,
                content: { ...chartStyle.content, scale: value[0] },
              })
            }
          />
          <Input
            variant="sm"
            type="number"
            value={chartStyle.content.scale}
            onChange={(e) => {
              setChartStyle({
                ...chartStyle,
                content: {
                  ...chartStyle.content,
                  scale: Number(e.target.value),
                },
              });
            }}
            max={150}
            className="ml-2 w-10 p-0 text-center"
          />
        </div>
      </div>
      <div className="flex flex-col">
        <Text variant="label">Rotate</Text>
        <div className="flex items-center">
          <Slider
            value={[chartStyle.content.rotate]}
            min={0}
            max={360}
            step={1}
            className="flex-1"
            onValueChange={(value) =>
              setChartStyle({
                ...chartStyle,
                content: { ...chartStyle.content, rotate: value[0] },
              })
            }
          />
          <Input
            variant="sm"
            type="number"
            value={chartStyle.content.rotate}
            onChange={(e) => {
              setChartStyle({
                ...chartStyle,
                content: {
                  ...chartStyle.content,
                  rotate: Number(e.target.value),
                },
              });
            }}
            max={360}
            className="ml-2 w-10 p-0 text-center"
          />
        </div>
      </div>

      <div className="flex flex-col">
        <Text variant="label">Width</Text>
        <div className="flex items-center">
          <Slider
            value={[chartStyle.content.width]}
            min={300}
            max={850}
            step={50}
            className="flex-1"
            onValueChange={(value) =>
              setChartStyle({
                ...chartStyle,
                content: { ...chartStyle.content, width: value[0] },
              })
            }
          />
          <Input
            variant="sm"
            type="number"
            value={chartStyle.content.width}
            onChange={(e) => {
              setChartStyle({
                ...chartStyle,
                content: {
                  ...chartStyle.content,
                  width: Number(e.target.value),
                },
              });
            }}
            max={1000}
            className="ml-2 w-10 p-0 text-center"
          />
        </div>
      </div>
    </div>
  );
};

export default ContentCard;

const ChartFrameIcon = ({
  frame,
  size,
}: {
  frame: ChartFrame;
  size?: number;
}) => {
  const frameMap: Record<ChartFrame, JSX.Element> = {
    none: <NoneFrameIcon size={size} />,
    macos_light: <MacLightFrameIcon size={size} />,
    macos_dark: <MacDarkFrameIcon size={size} />,
    arc: <ArcFrameIcon size={size} />,
    stroke: <StrokeFrameIcon size={size} />,
  };

  return frameMap[frame];
};
