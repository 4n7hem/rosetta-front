type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
  type?: "button" | "submit";
  fullWidth?: boolean;
  append?: string;
};

export function Button({
  children,
  type,
  className = "",
  onClick,
  fullWidth,
  append = "",
}: ButtonProps) {
  let fixedClassName =
    "w-full flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-secondary-500 py-2 h-9 text-base font-medium text-white shadow-sm" +
    append;

  if (!fullWidth) {
    fixedClassName = fixedClassName.replace("w-full", "w-auto");
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${fixedClassName}  ${className}`}
    >
      {children}
    </button>
  );
}
