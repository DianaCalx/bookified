// components/ui/Input.tsx
import type { ComponentProps } from "react";
import { fieldClasses } from "./field-styles";

type InputProps = ComponentProps<"input"> & {
  label: string;
  errors?: string[];
};

export function Input({
  label,
  errors,
  id,
  name,
  className,
  ...props
}: InputProps) {
  const inputId = id ?? name;
  const error = errors?.[0];

  return (
    <div className="space-y-1">
      <label
        htmlFor={inputId}
        className="block text-sm font-medium text-slate-700"
      >
        {label}
      </label>
      <input
        id={inputId}
        name={name}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${inputId}-error` : undefined}
        className={fieldClasses(Boolean(error), className)}
        {...props}
      />
      {error && (
        <p
          id={`${inputId}-error`}
          className="text-sm text-red-600"
        >
          {error}
        </p>
      )}
    </div>
  );
}
