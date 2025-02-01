const ArcFrame = ({
  children,
  width,
}: {
  children: React.ReactNode;
  width?: number;
}) => {
  return (
    <div
      className="w-full mx-auto overflow-hidden rounded-xl shadow-lg bg-white border border-gray-200"
      style={{ width }}
    >
      {/* Code content */}
      <div className="p-4 bg-[#F2F2F7] text-gray-800 font-mono text-sm">
        <div className="shadow-lg">{children}</div>
      </div>
    </div>
  );
};

export default ArcFrame;
