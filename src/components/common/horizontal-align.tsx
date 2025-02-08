import { AlignCenter, AlignLeft, AlignRight } from "lucide-react";
import { Toggle } from "../custom-ui/toggle";

const HorizontalAlign = ({
  align,
  setAlign,
  disabled,
}: {
  align: "left" | "center" | "right";
  setAlign: (align: "left" | "center" | "right") => void;
  disabled?: boolean;
}) => {
  return (
    <div className="flex space-x-1">
      <Toggle
        pressed={align === "left"}
        disabled={disabled}
        onPressedChange={() => setAlign("left")}
        size="sm"
      >
        <AlignLeft className="h-4 w-4" />
      </Toggle>
      <Toggle
        pressed={align === "center"}
        disabled={disabled}
        onPressedChange={() => setAlign("center")}
        size="sm"
      >
        <AlignCenter className="h-4 w-4" />
      </Toggle>
      <Toggle
        pressed={align === "right"}
        disabled={disabled}
        onPressedChange={() => setAlign("right")}
        size="sm"
      >
        <AlignRight className="h-4 w-4" />
      </Toggle>
    </div>
  );
};

export default HorizontalAlign;
