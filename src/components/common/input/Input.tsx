import React from "react";
import { ChangeEventHandler } from "react";

type InputProps = {
  id: string;
  name: string;
  type: string;
  value?: string;
  required?: boolean;
  labelText?: string;
  placeholder?: string;
  labelClassName?: string;
  inputClassName?: string;
  containerClassName?: string;
  autoComplete?: string;
  onChange?: ChangeEventHandler;
};

export const Input = React.forwardRef(({
  id,
  name,
  type,
  value,
  required,
  labelText,
  placeholder,
  labelClassName,
  inputClassName,
  containerClassName,
  autoComplete,
  onChange
}: InputProps, ref) => {
  
  return (
    <div
      className={containerClassName || "mb-2"}
    >
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
          value={value}
          autoComplete={autoComplete}
          required={required}
          className={
            inputClassName ||
            "block w-full flex-1 rounded border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          }
          placeholder={placeholder}
          onChange={onChange}
          ref={ref}
        />
      </div>
    </div>
  )
})
