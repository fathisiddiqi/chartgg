const ArcFrame = ({
  children,
  width,
  boxShadow,
  transform,
  scale,
  borderRadius,
}: {
  children: React.ReactNode;
  width?: number;
  boxShadow?: string;
  transform?: string;
  scale?: number;
  borderRadius?: number;
}) => {
  return (
    <div
      className="w-full mx-auto overflow-hidden shadow-lg bg-white border border-gray-200"
      style={{ width, boxShadow, transform, scale, borderRadius }}
    >
      {/* Code content */}
      <div className="p-4 bg-[#F2F2F7] text-gray-800 font-mono text-sm">
        <div className="shadow-lg">{children}</div>
      </div>
    </div>
  );
};

export default ArcFrame;
