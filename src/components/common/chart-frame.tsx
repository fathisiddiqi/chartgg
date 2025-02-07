import { type ChartFrame } from "@/store/chart";
import MackLigthFrame from "../frame/mac-light";
import MackDarkFrame from "../frame/mac-dark";
import ArcFrame from "../frame/arc";
import StrokeFrame from "../frame/stroke";
import { JSX } from "react";

const ChartFrame = ({
  frame,
  size,
  children,
  width,
}: {
  frame: ChartFrame;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  width?: number;
  children: React.ReactNode;
}) => {
  const frameMap: Record<ChartFrame, JSX.Element> = {
    none: <div style={{ width }}>{children}</div>,
    macos_light: <MackLigthFrame width={width}>{children}</MackLigthFrame>,
    macos_dark: <MackDarkFrame width={width}>{children}</MackDarkFrame>,
    arc: <ArcFrame width={width}>{children}</ArcFrame>,
    stroke: <StrokeFrame width={width}>{children}</StrokeFrame>,
  };

  return frameMap[frame];
};

export default ChartFrame;
