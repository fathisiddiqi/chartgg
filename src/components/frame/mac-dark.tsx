import React from "react";

export default function MacDarkFrame({
  children,
  width,
}: {
  children: React.ReactNode;
  width?: number;
}) {
  return (
    <div
      className="w-full mx-auto overflow-hidden rounded-lg shadow-lg bg-gray-900"
      style={{ width }}
    >
      {/* Window frame */}
      <div className="flex items-center px-4 py-2 bg-gray-800">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
      </div>
      {/* Code content */}
      <div className="p-0 bg-gray-900 text-gray-300 font-mono text-sm">
        {children}
      </div>
    </div>
  );
}
