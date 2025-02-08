// Happy frame

import React from "react";

export default function GradientFrame({
  children,
  width,
  transform,
  scale,
  borderRadius = 16,
  backgroundColor = "white",
  borderWidth = 3,
}: {
  children: React.ReactNode;
  width?: number;
  transform?: string;
  scale?: number;
  borderRadius?: number;
  backgroundColor?: string;
  borderWidth?: number;
}) {
  return (
    <div
      className="relative w-full mx-auto"
      style={{
        width,
        transform,
        scale,
        padding: `${borderWidth}px`,
        background:
          "linear-gradient(45deg, #FF9A9E, #FAD0C4, #FFC1D5, #FFB8D1)",
        borderRadius: borderRadius
          ? `${borderRadius + borderWidth}px`
          : `${16 + borderWidth}px`,
      }}
    >
      {/* Main content with inner shadow */}
      <div
        className="overflow-hidden relative"
        style={{
          borderRadius: borderRadius ? `${borderRadius}px` : "16px",
          backgroundColor,
          boxShadow: `
            inset 0 2px 4px rgba(255, 154, 158, 0.2),
            0 4px 12px rgba(255, 154, 158, 0.2),
            0 8px 24px rgba(255, 154, 158, 0.1)
          `,
          animation: "happyFloat 3s ease-in-out infinite",
        }}
      >
        <style>
          {`
            @keyframes happyFloat {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-5px); }
            }
          `}
        </style>
        {children}
      </div>
    </div>
  );
}
