type InputProps = {
  id: string;
  name: string;
  type: string;
  required?: boolean;
  labelText?: string;
  placeholder?: string;
  labelClassName?: string;
  inputClassName?: string;
  autoComplete?: string;
};

export function Input({
  id,
  name,
  type,
  required,
  labelText,
  placeholder,
  labelClassName,
  inputClassName,
  autoComplete,
}: InputProps) {
  return (
    <div>
      <label
        htmlFor="name"
        className={labelClassName || "flex text-sm font-medium text-gray-700 "}
      >
        {labelText}
      </label>
      <div className="relative mt-1 rounded-md shadow-sm">
        <input
          id={id}
          name={name}
          type={type}
          autoComplete={autoComplete}
          required={required}
          className={
            inputClassName ||
            "block w-full flex-1 rounded border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          }
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}
