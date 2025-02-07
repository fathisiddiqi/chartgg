const StrokeFrame = ({
  children,
  width,
  boxShadow,
  transform,
  scale,
}: {
  children: React.ReactNode;
  width?: number;
  boxShadow?: string;
  transform?: string;
  scale?: number;
}) => {
  return (
    <div
      className="w-full mx-auto overflow-hidden rounded-lg shadow-lg bg-white border border-gray-200"
      style={{ width, boxShadow, transform, scale }}
    >
      {/* Code content */}
      <div className="p-0 border-4 border-black">{children}</div>
    </div>
  );
};

export default StrokeFrame;
