import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  RefreshCw,
  MoreVertical,
  Plus,
} from "lucide-react";

// Simple variant utility function
const createVariants = (
  baseClasses: string,
  variants: Record<string, Record<string, string>>
) => {
  return (props: { [key: string]: string | undefined }) => {
    let classes = baseClasses;
    Object.entries(props).forEach(([key, value]) => {
      if (value && variants[key] && variants[key][value]) {
        classes += " " + variants[key][value];
      }
    });
    return classes;
  };
};

// Variant definitions
const windowVariants = createVariants(
  "mx-auto overflow-hidden rounded-lg shadow-lg bg-gray-900",
  {
    size: {
      xs: "max-w-sm text-xs",
      sm: "max-w-md",
      md: "max-w-2xl",
      lg: "max-w-4xl",
      xl: "max-w-6xl",
    },
  }
);

const iconVariants = createVariants("", {
  size: {
    xs: "w-2 h-2",
    sm: "w-3 h-3",
    md: "w-4 h-4",
    lg: "w-5 h-5",
    xl: "w-6 h-6",
  },
});

const controlDotVariants = createVariants("rounded-full", {
  size: {
    xs: "w-1 h-1",
    sm: "w-2 h-2",
    md: "w-3 h-3",
    lg: "w-4 h-4",
    xl: "w-5 h-5",
  },
});

interface BrowserWindowProps {
  children: React.ReactNode;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}

export default function BrowserWindow({
  children,
  size = "md",
}: BrowserWindowProps) {
  const [tabName, setTabName] = useState("New Tab");
  const [url, setUrl] = useState("https://example.com");
  const [isEditingTab, setIsEditingTab] = useState(false);
  const [isEditingUrl, setIsEditingUrl] = useState(false);

  const handleTabNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTabName(e.target.value);
  };

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  const handleTabNameKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      setIsEditingTab(false);
    }
  };

  const handleUrlKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      setIsEditingUrl(false);
    }
  };

  return (
    <div className={windowVariants({ size })}>
      {/* Window frame */}
      <div className="flex items-center px-4 py-2 bg-gray-800">
        {/* Window controls */}
        <div className="flex space-x-2">
          <div className={controlDotVariants({ size }) + " bg-red-500"}></div>
          <div
            className={controlDotVariants({ size }) + " bg-yellow-500"}
          ></div>
          <div className={controlDotVariants({ size }) + " bg-green-500"}></div>
        </div>
        {/* Tab bar */}
        <div className="flex items-center flex-grow ml-4">
          <div className="flex items-center px-3 py-1 bg-gray-700 rounded-t-lg">
            {isEditingTab ? (
              <input
                type="text"
                value={tabName}
                onChange={handleTabNameChange}
                onBlur={() => setIsEditingTab(false)}
                onKeyDown={handleTabNameKeyDown}
                className="w-full text-sm text-gray-300 bg-transparent outline-none"
                autoFocus
              />
            ) : (
              <span
                className="text-sm text-gray-300 cursor-text"
                onClick={() => setIsEditingTab(true)}
              >
                {tabName}
              </span>
            )}
          </div>
          <button className="p-1 ml-2 text-gray-400 hover:bg-gray-700 rounded">
            <Plus className={iconVariants({ size })} />
          </button>
        </div>
      </div>
      {/* Address bar */}
      <div className="flex items-center px-4 py-2 bg-gray-800 border-b border-gray-700">
        <button className="p-1 mr-1 text-gray-400 hover:bg-gray-700 rounded">
          <ChevronLeft className={iconVariants({ size })} />
        </button>
        <button className="p-1 mr-1 text-gray-400 hover:bg-gray-700 rounded">
          <ChevronRight className={iconVariants({ size })} />
        </button>
        <button className="p-1 mr-2 text-gray-400 hover:bg-gray-700 rounded">
          <RefreshCw className={iconVariants({ size })} />
        </button>
        <div className="flex-grow px-3 py-1 bg-gray-700 border border-gray-600 rounded-full">
          {isEditingUrl ? (
            <input
              type="text"
              value={url}
              onChange={handleUrlChange}
              onBlur={() => setIsEditingUrl(false)}
              onKeyDown={handleUrlKeyDown}
              className="w-full text-sm text-gray-300 bg-transparent outline-none"
              autoFocus
            />
          ) : (
            <span
              className="text-sm text-gray-300 cursor-text"
              onClick={() => setIsEditingUrl(true)}
            >
              {url}
            </span>
          )}
        </div>
        <button className="p-1 ml-2 text-gray-400 hover:bg-gray-700 rounded">
          <MoreVertical className={iconVariants({ size })} />
        </button>
      </div>
      {/* Content area */}
      <div className="bg-black">{children}</div>
    </div>
  );
}
