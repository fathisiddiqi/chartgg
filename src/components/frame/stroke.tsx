const StrokeFrame = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full max-w-2xl mx-auto overflow-hidden rounded-lg shadow-lg bg-white border border-gray-200">
      {/* Code content */}
      <div className="p-0 border-4 border-black">{children}</div>
    </div>
  );
};

export default StrokeFrame;
