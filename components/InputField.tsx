"use client";

import { Controller, type FieldValues } from "react-hook-form";

import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import type { InputFieldProps } from "@/types";

const InputField = <T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  disabled,
}: InputFieldProps<T>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <Field data-invalid={!!fieldState.error}>
          <FieldLabel htmlFor={name} className="form-label">
            {label}
          </FieldLabel>
          <Input
            {...field}
            id={name}
            placeholder={placeholder}
            disabled={disabled}
            aria-invalid={!!fieldState.error}
            className="form-input"
          />
          <FieldError errors={fieldState.error ? [fieldState.error] : undefined} />
        </Field>
      )}
    />
  );
};

export default InputField;
