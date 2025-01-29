"use client";

import { useState } from "react";
import { ChevronDown, Ban, Paintbrush } from "lucide-react";
import { HexColorPicker } from "react-colorful";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

const colorGroups = [
  [
    "#000000",
    "#424242",
    "#616161",
    "#757575",
    "#9E9E9E",
    "#BDBDBD",
    "#E0E0E0",
    "#FFFFFF",
  ],
  [
    "#D32F2F",
    "#F44336",
    "#FF5722",
    "#FF9800",
    "#FFC107",
    "#FFEB3B",
    "#FFEE58",
    "#FFF59D",
  ],
  [
    "#C2185B",
    "#E91E63",
    "#9C27B0",
    "#673AB7",
    "#3F51B5",
    "#2196F3",
    "#03A9F4",
    "#00BCD4",
  ],
  [
    "#00695C",
    "#009688",
    "#4CAF50",
    "#8BC34A",
    "#CDDC39",
    "#AFB42B",
    "#827717",
    "#EF6C00",
  ],
];

const simpleColors = [
  "#000000",
  "#FFFFFF",
  "#4A90E2",
  "#1B3A57",
  "#F5A623",
  "#417505",
  "#9013FE",
  "#50E3C2",
];

export default function ColorSelector({
  selectedColor,
  setSelectedColor,
  triggerClassName,
  disabled,
}: {
  selectedColor: string;
  setSelectedColor: (color: string) => void;
  triggerClassName?: string;
  disabled?: boolean;
}) {
  const [isCustom, setIsCustom] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
    setIsCustom(false);
    setIsOpen(false);
  };

  const handleCustomColorChange = (color: string) => {
    setSelectedColor(color);
    setIsCustom(true);
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className={cn("w-32 justify-between", triggerClassName)}
          disabled={disabled}
        >
          <div className="flex items-center">
            {selectedColor === "none" ? (
              <Ban className="w-4 h-4 mr-2 text-muted-foreground" />
            ) : (
              <div
                className="w-4 h-4 rounded-full mr-2"
                style={{ backgroundColor: selectedColor }}
              />
            )}
            <span className="text-sm">
              {selectedColor === "none"
                ? "None"
                : isCustom
                ? "Custom"
                : selectedColor}
            </span>
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-64 p-0">
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">Colors</h3>
          <div className="mb-4">
            <Button
              variant="ghost"
              className="w-full justify-start px-2 py-1 h-auto font-normal"
              onClick={() => handleColorChange("none")}
            >
              <Ban className="w-4 h-4 mr-2 text-muted-foreground" />
              None
            </Button>
          </div>
          {colorGroups.map((group, groupIndex) => (
            <div key={groupIndex} className="flex mb-2">
              {group.map((color) => (
                <Button
                  key={color}
                  variant="ghost"
                  className="w-6 h-6 p-0 rounded-full mr-1"
                  style={{ backgroundColor: color }}
                  onClick={() => handleColorChange(color)}
                  aria-label={`Select color ${color}`}
                />
              ))}
            </div>
          ))}
          <h4 className="text-sm font-semibold mt-4 mb-2">SIMPLE LIGHT</h4>
          <div className="flex flex-wrap">
            {simpleColors.map((color) => (
              <Button
                key={color}
                variant="ghost"
                className="w-6 h-6 p-0 rounded-full mr-1 mb-1"
                style={{ backgroundColor: color }}
                onClick={() => handleColorChange(color)}
                aria-label={`Select color ${color}`}
              />
            ))}
          </div>
          <div className="mt-4">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="ghost"
                  className="w-full justify-start px-2 py-1 h-auto font-normal"
                >
                  <Paintbrush className="w-4 h-4 mr-2" />
                  Custom color
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-4">
                <HexColorPicker
                  color={selectedColor}
                  onChange={handleCustomColorChange}
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
