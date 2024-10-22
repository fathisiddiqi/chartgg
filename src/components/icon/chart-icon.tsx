export const RadarChart = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 1.5,
  className = "",
  ...props
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Radar Chart Grid Lines */}
      <path d="M12,12 L12,2 M12,12 L21,7 M12,12 L21,17 M12,12 L12,22 M12,12 L3,17 M12,12 L3,7" />

      {/* Outer Pentagon */}
      <path d="M12,2 L21,7 L21,17 L12,22 L3,17 L3,7 Z" />

      {/* Data Pentagon */}
      <path d="M12,5 L18,9 L18,15 L12,19 L6,15 L6,9 Z" />
    </svg>
  );
};

export const RadialChart = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 1.5,
  className = "",
  ...props
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Grid Circles */}
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />

      {/* Segment Lines */}
      <path d="M12,2 L12,4" />
      <path d="M12,20 L12,22" />
      <path d="M2,12 L4,12" />
      <path d="M20,12 L22,12" />
    </svg>
  );
};
