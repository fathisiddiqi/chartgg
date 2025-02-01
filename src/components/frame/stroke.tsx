const StrokeFrame = ({
  children,
  width,
}: {
  children: React.ReactNode;
  width?: number;
}) => {
  return (
    <div
      className="w-full mx-auto overflow-hidden rounded-lg shadow-lg bg-white border border-gray-200"
      style={{ width }}
    >
      {/* Code content */}
      <div className="p-0 border-4 border-black">{children}</div>
    </div>
  );
};

export default StrokeFrame;
