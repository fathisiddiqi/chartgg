import {
  AlignVerticalJustifyCenter,
  AlignVerticalJustifyEnd,
  AlignVerticalJustifyStart,
} from "lucide-react";
import { Toggle } from "../custom-ui/toggle";

const VerticalAlign = ({
  align,
  setAlign,
  disabled,
}: {
  align: "top" | "middle" | "bottom";
  setAlign: (align: "top" | "middle" | "bottom") => void;
  disabled?: boolean;
}) => {
  return (
    <div className="flex space-x-1">
      <Toggle
        pressed={align === "top"}
        disabled={disabled}
        onPressedChange={() => setAlign("top")}
        size="sm"
      >
        <AlignVerticalJustifyStart className="h-4 w-4" />
      </Toggle>
      <Toggle
        pressed={align === "middle"}
        disabled={disabled}
        onPressedChange={() => setAlign("middle")}
        size="sm"
      >
        <AlignVerticalJustifyCenter className="h-4 w-4" />
      </Toggle>
      <Toggle
        pressed={align === "bottom"}
        disabled={disabled}
        onPressedChange={() => setAlign("bottom")}
        size="sm"
      >
        <AlignVerticalJustifyEnd className="h-4 w-4" />
      </Toggle>
    </div>
  );
};

export default VerticalAlign;
