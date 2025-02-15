import { cn } from "@/lib/utils";

const StrokeFrame = ({
  children,
  className,
  width,
  boxShadow,
  transform,
  scale,
  borderRadius,
}: {
  children: React.ReactNode;
  className?: string;
  width?: number;
  boxShadow?: string;
  transform?: string;
  scale?: number;
  borderRadius?: number;
}) => {
  return (
    <div
      className={cn(
        "w-full mx-auto overflow-hidden shadow-lg bg-white border border-gray-200",
        className
      )}
      style={{ width, boxShadow, transform, scale, borderRadius: borderRadius }}
    >
      {/* Code content */}
      <div
        className="p-0 border-4 border-black"
        style={{ borderRadius: borderRadius }}
      >
        {children}
      </div>
    </div>
  );
};

export default StrokeFrame;
