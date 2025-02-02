import { AlignVerticalJustifyCenter, AlignVerticalJustifyEnd, AlignVerticalJustifyStart } from "lucide-react";
import { Toggle } from "../custom-ui/toggle";

const VerticalAlign = ({
  verticalAlign,
  setVerticalAlign,
  disabled,
}: {
  verticalAlign: "top" | "middle" | "bottom";
  setVerticalAlign: (verticalAlign: "top" | "middle" | "bottom") => void;
  disabled?: boolean;
}) => {
  return (
    <div className="flex space-x-1">
      <Toggle
        pressed={verticalAlign === "top"}
        disabled={disabled}
        onPressedChange={() => setVerticalAlign("top")}
        size="sm"
      >
        <AlignVerticalJustifyStart className="h-4 w-4" />
      </Toggle>
      <Toggle
        pressed={verticalAlign === "middle"}
        disabled={disabled}
        onPressedChange={() => setVerticalAlign("middle")}
        size="sm"
      >
        <AlignVerticalJustifyCenter className="h-4 w-4" />
      </Toggle>
      <Toggle
        pressed={verticalAlign === "bottom"}
        disabled={disabled}
        onPressedChange={() => setVerticalAlign("bottom")}
        size="sm"
      >
        <AlignVerticalJustifyEnd className="h-4 w-4" />
      </Toggle>
    </div>
  );
};

export default VerticalAlign;