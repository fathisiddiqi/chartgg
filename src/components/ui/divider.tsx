import { cn } from "@/lib/utils";
import React from "react";

const Divider = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("border border-muted", className)}
      {...props}
    ></div>
  );
});

Divider.displayName = "Divider";

export { Divider };
