import { Bold, Italic, Underline } from "lucide-react";
import { Toggle } from "../custom-ui/toggle";

const FontStyle = ({
  fontStyle,
  setFontStyle,
  fontWeight,
  setFontWeight,
  textDecoration,
  setTextDecoration,
}: {
  fontStyle: "normal" | "italic";
  setFontStyle: (fontStyle: "normal" | "italic") => void;
  fontWeight: "normal" | "bold";
  setFontWeight: (fontWeight: "normal" | "bold") => void;
  textDecoration: "none" | "underline";
  setTextDecoration: (textDecoration: "none" | "underline") => void;
  disabled?: boolean;
}) => {
  return (
    <div className="flex space-x-1">
      <Toggle
        aria-label="Toggle bold"
        pressed={fontWeight === "bold"}
        onPressedChange={(pressed) =>
          setFontWeight(pressed ? "bold" : "normal")
        }
        size="sm"
      >
        <Bold className="h-4 w-4" />
      </Toggle>
      <Toggle
        aria-label="Toggle italic"
        pressed={fontStyle === "italic"}
        onPressedChange={(pressed) =>
          setFontStyle(pressed ? "italic" : "normal")
        }
        size="sm"
      >
        <Italic className="h-4 w-4" />
      </Toggle>
      <Toggle
        aria-label="Toggle strikethrough"
        pressed={textDecoration === "underline"}
        onPressedChange={(pressed) =>
          setTextDecoration(pressed ? "underline" : "none")
        }
        size="sm"
      >
        <Underline className="h-4 w-4" />
      </Toggle>
    </div>
  );
};

export default FontStyle;
