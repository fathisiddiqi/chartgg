import { type ChartFrame } from "@/store/chart";
import MackLigthFrame from "../frame/mac-light";
import MackDarkFrame from "../frame/mac-dark";
import ArcFrame from "../frame/arc";
import StrokeFrame from "../frame/stroke";
import { JSX } from "react";

const ChartFrame = ({
  frame,
  children,
  width,
  boxShadow,
  transform,
  scale,
  borderRadius,
}: {
  children: React.ReactNode;
  frame: ChartFrame;
  width?: number;
  boxShadow?: string;
  transform?: string;
  scale?: number;
  borderRadius?: number;
}) => {
  const frameMap: Record<ChartFrame, JSX.Element> = {
    none: (
      <div
        style={{
          width,
          boxShadow,
          transform,
          scale,
          borderRadius: borderRadius ?? 0,
        }}
      >
        {children}
      </div>
    ),
    macos_light: (
      <MackLigthFrame
        width={width}
        boxShadow={boxShadow}
        transform={transform}
        scale={scale}
        borderRadius={borderRadius}
      >
        {children}
      </MackLigthFrame>
    ),
    macos_dark: (
      <MackDarkFrame
        width={width}
        boxShadow={boxShadow}
        transform={transform}
        scale={scale}
        borderRadius={borderRadius}
      >
        {children}
      </MackDarkFrame>
    ),
    arc: (
      <ArcFrame
        width={width}
        boxShadow={boxShadow}
        transform={transform}
        scale={scale}
        borderRadius={borderRadius}
      >
        {children}
      </ArcFrame>
    ),
    stroke: (
      <StrokeFrame
        width={width}
        boxShadow={boxShadow}
        transform={transform}
        scale={scale}
        borderRadius={borderRadius}
      >
        {children}
      </StrokeFrame>
    ),
  };

  return frameMap[frame];
};

export default ChartFrame;
