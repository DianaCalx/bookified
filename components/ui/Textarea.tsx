// components/ui/Textarea.tsx
import type { ComponentProps } from "react";
import { fieldClasses } from "./field-styles";

type TextareaProps = ComponentProps<"textarea"> & {
  label: string;
  errors?: string[];
};

export function Textarea({
  label,
  errors,
  id,
  name,
  className,
  rows = 3,
  ...props
}: TextareaProps) {
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
      <textarea
        id={fieldId}
        name={name}
        rows={rows}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${fieldId}-error` : undefined}
        className={fieldClasses(Boolean(error), className)}
        {...props}
      />
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
