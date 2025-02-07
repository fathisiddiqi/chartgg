const ArcFrame = ({
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
      className="w-full mx-auto overflow-hidden rounded-xl shadow-lg bg-white border border-gray-200"
      style={{ width, boxShadow, transform, scale }}
    >
      {/* Code content */}
      <div className="p-4 bg-[#F2F2F7] text-gray-800 font-mono text-sm">
        <div className="shadow-lg">{children}</div>
      </div>
    </div>
  );
};

export default ArcFrame;
