import React from "react";

const ChartCanvasLayout = ({
  id,
  width,
  height,
}: {
  id: string;
  width: number;
  height: number;
}) => {
  return (
    <div
      className="bg-white border border-gray-300 w-16 max-h-20 rounded-md flex items-center justify-center" // w-16 = 64px
      style={{
        aspectRatio: `${width}/${height}`,
      }}
    >
      <div className="text-[8px]">
        {width}x{height}px
      </div>
    </div>
  );
};

export default ChartCanvasLayout;
