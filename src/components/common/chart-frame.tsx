import { type ChartFrame } from "@/store/chart";
import WindowsLightFrame from "../frame/windows-light";
import WindowsDarkFrame from "../frame/windows-dark";
import MackLigthFrame from "../frame/mac-light";
import ChromeLightFrame from "../frame/chrome-light";
import MackDarkFrame from "../frame/mac-dark";
import ChromeDarkFrame from "../frame/chrome-dark";
import ArcFrame from "../frame/arc";
import StrokeFrame from "../frame/stroke";

const ChartFrame = ({
  frame,
  size,
  children,
}: {
  frame: ChartFrame;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  children: React.ReactNode;
}) => {
  const frameMap: Record<ChartFrame, JSX.Element> = {
    none: <>{children}</>,
    macos_light: <MackLigthFrame>{children}</MackLigthFrame>,
    macos_dark: <MackDarkFrame>{children}</MackDarkFrame>,
    arc: <ArcFrame>{children}</ArcFrame>,
    stroke: <StrokeFrame>{children}</StrokeFrame>,
  };

  return frameMap[frame];
};

export default ChartFrame;
