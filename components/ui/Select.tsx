// components/ui/Select.tsx
import type { ComponentProps } from "react";
import { fieldClasses } from "./field-styles";

type SelectProps = ComponentProps<"select"> & {
  label: string;
  errors?: string[];
};

export function Select({
  label,
  errors,
  id,
  name,
  className,
  children,
  ...props
}: SelectProps) {
  const fieldId = id ?? name;
  const error = errors?.[0];

  return (
    <div className="space-y-1">
      <label
        htmlFor={fieldId}
        className="block text-sm font-medium text-slate-700"
      >
        {label}
      </label>
      <select
        id={fieldId}
        name={name}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${fieldId}-error` : undefined}
        className={fieldClasses(Boolean(error), className)}
        {...props}
      >
        {children}
      </select>
      {error && (
        <p
          id={`${fieldId}-error`}
          className="text-sm text-red-600"
        >
          {error}
        </p>
      )}
    </div>
  );
}
