export const ColorIcon = ({
  color = "currentColor",
  size = 24,
  className = "",
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    {...props}
  >
    <circle cx="12" cy="12" r="10" fill={color} />
  </svg>
);

export default ColorIcon;
