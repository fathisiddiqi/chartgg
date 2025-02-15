import { type ChartFrame } from "@/store/chart";
import MacLightFrame from "../frame/mac-light";
import MackDarkFrame from "../frame/mac-dark";
import ArcFrame from "../frame/arc";
import StrokeFrame from "../frame/stroke";
import { JSX } from "react";
import ShadowFrame from "../frame/shadow";

const ChartFrame = ({
  children,
  frame,
  className,
  width,
  boxShadow,
  transform,
  scale,
  borderRadius,
}: {
  children: React.ReactNode;
  frame: ChartFrame;
  className?: string;
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
        className={className}
      >
        {children}
      </div>
    ),
    macos_light: (
      <MacLightFrame
        width={width}
        boxShadow={boxShadow}
        transform={transform}
        scale={scale}
        borderRadius={borderRadius}
        className={className}
      >
        {children}
      </MacLightFrame>
    ),
    macos_dark: (
      <MackDarkFrame
        width={width}
        boxShadow={boxShadow}
        transform={transform}
        scale={scale}
        borderRadius={borderRadius}
        className={className}
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
        className={className}
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
        className={className}
      >
        {children}
      </StrokeFrame>
    ),
    shadow: (
      <ShadowFrame
        width={width}
        transform={transform}
        scale={scale}
        borderRadius={borderRadius}
        className={className}
      >
        {children}
      </ShadowFrame>
    ),
  };

  return frameMap[frame];
};

export default ChartFrame;
