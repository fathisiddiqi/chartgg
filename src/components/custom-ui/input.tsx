import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const inputVariants = cva(
  "flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "h-10",
        sm: "h-8 text-xs",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, type, max, onChange, onKeyDown, ...props }, ref) => {
    const handleKeyDownNumber = (e: React.KeyboardEvent<HTMLInputElement>) => {
      // Allow: backspace, delete, tab, escape, enter, arrows
      if (
        [
          "Backspace",
          "Delete",
          "Tab",
          "Escape",
          "Enter",
          "ArrowLeft",
          "ArrowRight",
        ].includes(e.key)
      ) {
        return;
      }

      // Prevent non-numeric characters
      if (!/[0-9]/.test(e.key)) {
        e.preventDefault();
      }

      // Call any existing onKeyDown handler
      if (onKeyDown) {
        onKeyDown(e);
      }
    };

    const handleChangeNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
      // Sanitize value by removing non-numeric characters
      const sanitizedValue = e.target.value.replace(/[^0-9]/g, "");

      if (max && Number(sanitizedValue) > Number(max)) {
        return;
      }

      // Create a new event with sanitized value
      const sanitizedEvent = {
        ...e,
        target: {
          ...e.target,
          value: sanitizedValue,
        },
      };

      // Call any existing onChange handler
      if (onChange) {
        onChange(sanitizedEvent as React.ChangeEvent<HTMLInputElement>);
      }
    };

    return (
      <input
        type={type === "number" ? "text" : type}
        className={cn(inputVariants({ variant, className }))}
        ref={ref}
        onKeyDown={type === "number" ? handleKeyDownNumber : undefined}
        onChange={type === "number" ? handleChangeNumber : undefined}
        inputMode="numeric"
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
