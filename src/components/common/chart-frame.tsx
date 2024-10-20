import { type ChartFrame } from "@/store/chart";
import WindowsLightFrame from "../frame/windows-light";
import WindowsDarkFrame from "../frame/windows-dark";
import MackLigthFrame from "../frame/mac-light";
import ChromeLightFrame from "../frame/chrome-light";
import MackDarkFrame from "../frame/mac-dark";
import ChromeDarkFrame from "../frame/chrome-dark";

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
    none: (
      <div className="w-full max-w-2xl mx-auto overflow-hidden rounded-lg shadow-lg bg-white border border-gray-200">
        {/* Window frame */}
        <div className="flex items-center px-4 py-2">
          <div className="flex space-x-2">
            <div className="w-3 h-3"></div>
            <div className="w-3 h-3"></div>
            <div className="w-3 h-3"></div>
          </div>
        </div>
        {/* Code content */}
        <div className="p-4 bg-white text-gray-800 font-mono text-sm">
          {children}
        </div>
      </div>
    ),
    window_light: <WindowsLightFrame>{children}</WindowsLightFrame>,
    window_dark: <WindowsDarkFrame>{children}</WindowsDarkFrame>,
    macos_light: <MackLigthFrame>{children}</MackLigthFrame>,
    macos_dark: <MackDarkFrame>{children}</MackDarkFrame>,
    chrome_light: <ChromeLightFrame>{children}</ChromeLightFrame>,
    chrome_dark: <ChromeDarkFrame size={size}>{children}</ChromeDarkFrame>,
  };

  return frameMap[frame];
};

export default ChartFrame;
