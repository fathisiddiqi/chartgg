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

export const BarChartIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 1.5,
  className = "",
  ...props
}) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" y1="20" x2="12" y2="10" />
      <line x1="18" y1="20" x2="18" y2="4" />
      <line x1="6" y1="20" x2="6" y2="16" />
    </svg>
  );
};

export const PaletteIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
  ...props
}) => (
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
    <circle cx="13.5" cy="6.5" r=".5" />
    <circle cx="17.5" cy="10.5" r=".5" />
    <circle cx="8.5" cy="7.5" r=".5" />
    <circle cx="6.5" cy="12.5" r=".5" />
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
  </svg>
);

export const ShareIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
  ...props
}) => (
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
    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
    <polyline points="16 6 12 2 8 6" />
    <line x1="12" y1="2" x2="12" y2="15" />
  </svg>
);
