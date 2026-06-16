type StarDecorProps = {
  className?: string;
  color?: string;
  size?: number;
};

export default function StarDecor({
  className,
  color = "#7B2FBE",
  size = 24,
}: StarDecorProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
    >
      <path
        d="M12 1.5C12.84 6.98 17.02 11.16 22.5 12C17.02 12.84 12.84 17.02 12 22.5C11.16 17.02 6.98 12.84 1.5 12C6.98 11.16 11.16 6.98 12 1.5Z"
        fill={color}
      />
    </svg>
  );
}
