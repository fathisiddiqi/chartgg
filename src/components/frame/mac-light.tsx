import { cn } from "@/lib/utils";
import React from "react";

export default function MacLightFrame({
  children,
  className,
  width,
  boxShadow,
  transform,
  scale,
  borderRadius,
}: {
  children: React.ReactNode;
  className?: string;
  width?: number;
  boxShadow?: string;
  transform?: string;
  scale?: number;
  borderRadius?: number;
}) {
  return (
    <div
      className={cn(
        "w-full mx-auto overflow-hidden shadow-lg bg-white border border-gray-200",
        className
      )}
      style={{
        width,
        boxShadow,
        transform,
        scale,
        borderRadius: borderRadius ? `${borderRadius}px` : undefined,
      }}
    >
      {/* Window frame */}
      <div className="flex items-center px-4 py-2 bg-gray-100 border-b border-gray-200">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
      </div>
      {/* Code content */}
      <div className="p-0 bg-white text-gray-800 font-mono text-sm">
        {children}
      </div>
    </div>
  );
}
