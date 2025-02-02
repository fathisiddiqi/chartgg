import { AlignCenter, AlignLeft, AlignRight } from "lucide-react";
import { Toggle } from "../custom-ui/toggle";

const TextAlign = ({
  textAlign,
  setTextAlign,
  disabled,
}: {
  textAlign: "left" | "center" | "right";
  setTextAlign: (textAlign: "left" | "center" | "right") => void;
  disabled?: boolean;
}) => {
  return (
    <div className="flex space-x-1">
      <Toggle
        pressed={textAlign === "left"}
        disabled={disabled}
        onPressedChange={() => setTextAlign("left")}
        size="sm"
      >
        <AlignLeft className="h-4 w-4" />
      </Toggle>
      <Toggle
        pressed={textAlign === "center"}
        disabled={disabled}
        onPressedChange={() => setTextAlign("center")}
        size="sm"
      >
        <AlignCenter className="h-4 w-4" />
      </Toggle>
      <Toggle
        pressed={textAlign === "right"}
        disabled={disabled}
        onPressedChange={() => setTextAlign("right")}
        size="sm"
      >
        <AlignRight className="h-4 w-4" />
      </Toggle>
    </div>
  );
};

export default TextAlign;
