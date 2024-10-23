import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const colorInputVariants = cva(
  "border-input bg-background focus-visible:ring-ring focus-visible:ring-offset-background",
  {
    variants: {
      variant: {
        default: "h-10 w-10",
        sm: "h-8 max-w-[2.25rem]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface ColorInputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof colorInputVariants> {}

const ColorInput = React.forwardRef<HTMLInputElement, ColorInputProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <div className="relative inline-block">
        <input
          type="color"
          className={cn(
            colorInputVariants({ variant }),
            "appearance-none cursor-pointer border rounded-md",
            className
          )}
          ref={ref}
          {...props}
        />
        <div
          className={cn(
            "absolute  pointer-events-none border rounded-md",
            variant === "sm" ? "border-2" : "border-4",
            "border-background"
          )}
        />
      </div>
    );
  }
);
ColorInput.displayName = "ColorInput";

export { ColorInput, colorInputVariants };
