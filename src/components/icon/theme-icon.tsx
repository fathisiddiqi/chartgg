import { cn } from "@/lib/utils";
import { ChartTheme } from "@/store/chart";
import React from "react";

const Color = ({
  colors,
  isActive,
}: {
  colors: string[];
  isActive: boolean;
}) => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        "cursor-pointer",
        isActive && "ring-2 ring-blue-500 ring-offset-1 rounded-sm"
      )}
    >
      <rect width="40" height="40" rx="8" fill="white" />
      <path d="M0 8C0 3.58172 3.58172 0 8 0H20V20H0V8Z" fill={colors[0]} />
      <path d="M20 0H32C36.4183 0 40 3.58172 40 8V20H20V0Z" fill={colors[1]} />
      <path d="M0 20H20V40H8C3.58172 40 0 36.4183 0 32V20Z" fill={colors[2]} />
      <path
        d="M20 20H40V32C40 36.4183 36.4183 40 32 40H20V20Z"
        fill={colors[3]}
      />
    </svg>
  );
};

const iconColors = {
  default: ["#40A69F", "#E17B60", "#1D2B4C", "#E8C547"],
  palette: ["#1D2B4C", "#E8C547", "#40A69F", "#E17B60"],
  shappire: ["#4285F4", "#34A853", "#FBBC05", "#EA4335"],
  ruby: ["#FF5252", "#FF8A80", "#C51162", "#F50057"],
  emerald: ["#1B5E20", "#4CAF50", "#087F23", "#2E7D32"],
  daylight: ["#795548", "#6D4C41", "#5D4037", "#4E342E"],
  midnight: ["#9E9E9E", "#757575", "#616161", "#424242"],
};

const ThemeIcon = ({
  variant,
  isActive,
}: {
  variant: ChartTheme;
  isActive?: boolean;
}) => {
  return <Color colors={iconColors[variant]} isActive={isActive ?? false} />;
};

export default ThemeIcon;
