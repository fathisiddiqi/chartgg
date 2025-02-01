const ArcFrame = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full max-w-2xl mx-auto overflow-hidden rounded-xl shadow-lg bg-white border border-gray-200">
      {/* Code content */}
      <div className="p-4 bg-[#F2F2F7] text-gray-800 font-mono text-sm">
        <div className="shadow-lg">{children}</div>
      </div>
    </div>
  );
};

export default ArcFrame;
