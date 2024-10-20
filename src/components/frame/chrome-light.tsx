import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  MoreVertical,
  Plus,
  RefreshCw,
} from "lucide-react";

export default function ChromeLightFrame({
  children,
}: {
  children: React.ReactNode;
}) {
  const [url, setUrl] = useState("https://example.com");
  const [tabName, setTabName] = useState("New Tab");
  const [isEditingUrl, setIsEditingUrl] = useState(false);
  const [isEditingTab, setIsEditingTab] = useState(false);

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  const handleTabNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTabName(e.target.value);
  };

  const handleUrlKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setIsEditingUrl(false);
    }
  };

  const handleTabNameKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setIsEditingTab(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto overflow-hidden rounded-lg shadow-lg bg-gray-100">
      {/* Window frame */}
      <div className="flex items-center px-4 py-2 bg-gray-200">
        {/* Window controls */}
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        {/* Tab bar */}
        <div className="flex items-center flex-grow ml-4">
          <div className="flex items-center px-3 py-1 bg-white rounded-t-lg">
            {isEditingTab ? (
              <input
                type="text"
                value={tabName}
                onChange={handleTabNameChange}
                onBlur={() => setIsEditingTab(false)}
                onKeyDown={handleTabNameKeyDown}
                className="w-full text-sm text-gray-600 bg-transparent outline-none"
                autoFocus
              />
            ) : (
              <span
                className="text-sm text-gray-600 cursor-text"
                onClick={() => setIsEditingTab(true)}
              >
                {tabName}
              </span>
            )}
          </div>
          <button
            className="p-1 ml-2 text-gray-500 hover:bg-gray-300 rounded"
            disabled
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>
      {/* Address bar */}
      <div className="flex items-center px-4 py-2 bg-gray-100 border-b border-gray-200">
        <button className="p-1 mr-1 text-gray-500 hover:bg-gray-200 rounded">
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button className="p-1 mr-1 text-gray-500 hover:bg-gray-200 rounded">
          <ChevronRight className="w-4 h-4" />
        </button>
        <button className="p-1 mr-2 text-gray-500 hover:bg-gray-200 rounded">
          <RefreshCw className="w-4 h-4" />
        </button>
        <div className="flex-grow px-3 py-1 bg-white border border-gray-300 rounded-full">
          {isEditingUrl ? (
            <input
              type="text"
              value={url}
              onChange={handleUrlChange}
              onBlur={() => setIsEditingUrl(false)}
              onKeyDown={handleUrlKeyDown}
              className="w-full text-sm text-gray-600 bg-transparent outline-none"
              autoFocus
            />
          ) : (
            <span
              className="text-sm text-gray-600 cursor-text"
              onClick={() => setIsEditingUrl(true)}
            >
              {url}
            </span>
          )}
        </div>
        <button className="p-1 ml-2 text-gray-500 hover:bg-gray-200 rounded">
          <MoreVertical className="w-4 h-4" />
        </button>
      </div>
      {/* Content area */}
      <div className="bg-white">{children}</div>
    </div>
  );
}
