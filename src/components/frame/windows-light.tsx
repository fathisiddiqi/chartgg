import { Minus, Square, X } from "lucide-react";

export default function WindowsLightFrame({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full max-w-2xl mx-auto overflow-hidden rounded-lg shadow-lg bg-white border border-gray-300">
      {/* Window frame */}
      <div className="flex items-center justify-end px-2 py-2 bg-gray-100 border-b border-gray-300">
        {/* Window controls - now right-aligned */}
        <div className="flex space-x-2">
          <div className="text-gray-600 hover:bg-gray-200 rounded">
            <Minus className="w-3 h-3" />
          </div>
          <div className="text-gray-600 hover:bg-gray-200 rounded">
            <Square className="w-3 h-3" />
          </div>
          <div className="text-gray-600 hover:bg-red-100 rounded">
            <X className="w-3 h-3" />
          </div>
        </div>
      </div>
      {/* Content area */}
      <div className="p-4 bg-white text-gray-800 font-mono text-sm">
        {children}
      </div>
    </div>
  );
}
