import { Button } from "@/components/custom-ui/button";
import { Card } from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronDown, CopyIcon, DownloadIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const exportScaleOptions = [
  {
    value: 1,
    label: "1x",
  },
  {
    value: 2,
    label: "2x",
  },
  {
    value: 3,
    label: "3x",
  },
];

const DownloadCard = () => {
  const [exportScale, setExportScale] = useState<number>(1);
  const [openExportScale, setOpenExportScale] = useState<boolean>(false);
  const openExportScaleTriggerRef = useRef<HTMLButtonElement>(null);
  const [exportScaleDropdownContentWidth, setExportScaleDropdownContentWidth] =
    useState<number>(0);

  useEffect(() => {
    if (openExportScaleTriggerRef.current) {
      setExportScaleDropdownContentWidth(
        openExportScaleTriggerRef.current.offsetWidth
      );
    }
  }, [openExportScale]);

  return (
    <Card className="p-3 flex space-x-3 items-center justify-end">
      <Popover open={openExportScale} onOpenChange={setOpenExportScale}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            ref={openExportScaleTriggerRef}
            className="w-[4 rem] justify-between"
          >
            {exportScale}
            <ChevronDown className="h-4 w-4 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="w-auto p-0"
          style={{ width: exportScaleDropdownContentWidth }}
          align="start"
        >
          <div className="flex flex-col">
            {exportScaleOptions.map((option, index) => (
              <Button
                key={index}
                variant="ghost"
                className="justify-start rounded-none"
                onClick={() => {
                  setOpenExportScale(false);
                  setExportScale(option.value);
                }}
              >
                {option.label}
              </Button>
            ))}
          </div>
        </PopoverContent>
      </Popover>
      <Button variant="outline" size="sm" className="flex items-center gap-x-2">
        <CopyIcon className="w-4 h-4" />
        Copy
      </Button>
      <Button variant="outline" size="sm" className="flex items-center gap-x-2">
        <DownloadIcon className="w-4 h-4" />
        Download
      </Button>
    </Card>
  );
};

export default DownloadCard;
