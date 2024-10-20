import { Minus, Square, X } from "lucide-react";

export default function WindowsDarkFrame({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full max-w-2xl mx-auto overflow-hidden rounded-lg shadow-lg bg-gray-900 border border-gray-700">
      {/* Window frame */}
      <div className="flex items-center justify-end px-2 py-2 bg-gray-800 border-b border-gray-700">
        {/* Window controls - right-aligned */}
        <div className="flex space-x-2">
          <div className="text-gray-300 hover:bg-gray-700 rounded">
            <Minus className="w-3 h-3" />
          </div>
          <div className="text-gray-300 hover:bg-gray-700 rounded">
            <Square className="w-3 h-3" />
          </div>
          <div className="text-gray-300 hover:bg-red-900 rounded">
            <X className="w-3 h-3" />
          </div>
        </div>
      </div>
      {/* Content area */}
      <div className="p-4 bg-gray-900 text-gray-100 font-mono text-sm">
        {children}
      </div>
    </div>
  );
}
