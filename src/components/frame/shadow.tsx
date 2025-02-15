// shadow frame
import { cn } from "@/lib/utils";
import React from "react";

export default function ShadowFrame({
  children,
  className,
  width,
  transform,
  scale,
  shadow,
  borderRadius,
}: {
  children: React.ReactNode;
  className?: string;
  width?: number;
  transform?: string;
  scale?: number;
  shadow?: string;
  borderRadius?: number;
}) {
  return (
    <div
      className={cn("relative", className)}
      style={{
        width,
        transform,
        scale,
        borderRadius: borderRadius,
      }}
    >
      <div
        className="absolute inset-0 -translate-x-2 translate-y-2 bg-black"
        style={{
          borderRadius: borderRadius,
        }}
      />
      <div
        className={"relative rounded-lg border border-black bg-white p-6"}
        style={{
          borderRadius: borderRadius,
        }}
      >
        {children}
      </div>
    </div>
  );
}
