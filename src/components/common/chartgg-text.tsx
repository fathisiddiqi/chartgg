import { cn } from "@/lib/utils";

interface ChartggTextProps {
  className?: string;
  showBeta?: boolean;
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
}

const sizeClasses = {
  sm: "text-lg",
  md: "text-xl",
  lg: "text-2xl",
  xl: "text-3xl",
  "2xl": "text-4xl",
};

export function ChartggText({
  className,
  showBeta = false,
  size = "lg",
}: ChartggTextProps) {
  return (
    <div className="flex items-center space-x-2">
      <h3
        className={cn(
          sizeClasses[size],
          "font-extrabold bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 animate-gradient bg-[length:200%_auto] bg-clip-text text-transparent font-poppins transition-all duration-300 hover:scale-105",
          className
        )}
      >
        Chartgg
      </h3>
      {showBeta && (
        <span className="ml-2.5 inline-flex items-center rounded-md bg-gradient-to-r from-purple-600/20 via-pink-500/20 to-orange-500/20 backdrop-blur-sm px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-orange-500 ring-1 ring-inset ring-orange-500/30 shadow-sm transition-all duration-300 hover:shadow-orange-500/20">
          Beta
        </span>
      )}
    </div>
  );
}
