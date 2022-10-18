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
  className,
  onClick,
  fullWidth,
  append,
}: ButtonProps) {
  let fixedClassName =
    "group relative flex w-full justify-center items-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 h-9 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 " +
    append;

  if (!fullWidth) {
    fixedClassName = fixedClassName.replace("w-full", "w-auto");
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={className || fixedClassName}
    >
      {children}
    </button>
  );
}
