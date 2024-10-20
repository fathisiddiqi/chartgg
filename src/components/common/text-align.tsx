import { AlignCenter, AlignLeft, AlignRight } from "lucide-react";
import { Button } from "../ui/button";

const TextAlign = ({
  textAlign,
  setTextAlign,
}: {
  textAlign: "left" | "center" | "right";
  setTextAlign: (textAlign: "left" | "center" | "right") => void;
}) => {
  return (
    <div className="flex space-x-1">
      <Button
        variant={textAlign === "left" ? "default" : "outline"}
        size="sm"
        onClick={() => setTextAlign("left")}
      >
        <AlignLeft className="h-4 w-4" />
      </Button>
      <Button
        variant={textAlign === "center" ? "default" : "outline"}
        size="sm"
        onClick={() => setTextAlign("center")}
      >
        <AlignCenter className="h-4 w-4" />
      </Button>
      <Button
        variant={textAlign === "right" ? "default" : "outline"}
        size="sm"
        onClick={() => setTextAlign("right")}
      >
        <AlignRight className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default TextAlign;
