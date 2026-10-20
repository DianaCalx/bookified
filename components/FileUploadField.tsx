"use client";

import { useRef, useState } from "react";
import { Controller, type FieldValues } from "react-hook-form";
import { X } from "lucide-react";

import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { cn } from "@/lib/utils";
import type { FileUploadFieldProps } from "@/types";

const FileUploadField = <T extends FieldValues>({
  control,
  name,
  label,
  acceptTypes,
  disabled,
  icon: Icon,
  placeholder,
  hint,
}: FileUploadFieldProps<T>) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => {
        const { value, onChange, onBlur, ref, name: fieldName } = field;
        const file = value as File | undefined;

        const setRefs = (node: HTMLInputElement | null) => {
          inputRef.current = node;
          ref(node);
        };

        const handleFiles = (files: FileList | null) => {
          const nextFile = files?.[0];
          if (nextFile) onChange(nextFile);
        };

        const clearFile = () => {
          onChange(undefined);
          if (inputRef.current) inputRef.current.value = "";
        };

        return (
          <Field data-invalid={!!fieldState.error}>
            <FieldLabel htmlFor={fieldName} className="form-label">
              {label}
            </FieldLabel>

            <div
              role="button"
              tabIndex={disabled ? -1 : 0}
              aria-disabled={disabled}
              onClick={() => !disabled && inputRef.current?.click()}
              onKeyDown={(event) => {
                if (disabled) return;
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  inputRef.current?.click();
                }
              }}
              onDragOver={(event) => {
                event.preventDefault();
                if (!disabled) setIsDragging(true);
              }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={(event) => {
                event.preventDefault();
                setIsDragging(false);
                if (!disabled) handleFiles(event.dataTransfer.files);
              }}
              className={cn(
                "upload-dropzone",
                file && "upload-dropzone-uploaded",
                isDragging && "border-[var(--accent-warm)] bg-gray-50",
                disabled && "pointer-events-none opacity-50",
              )}
            >
              <input
                ref={setRefs}
                id={fieldName}
                name={fieldName}
                type="file"
                accept={acceptTypes.join(",")}
                disabled={disabled}
                className="hidden"
                onBlur={onBlur}
                onChange={(event) => handleFiles(event.target.files)}
              />

              {file ? (
                <div className="flex items-center gap-2 px-4">
                  <span className="upload-dropzone-text max-w-[260px] truncate">
                    {file.name}
                  </span>
                  <button
                    type="button"
                    className="upload-dropzone-remove"
                    onClick={(event) => {
                      event.stopPropagation();
                      clearFile();
                    }}
                    aria-label={`Remove ${file.name}`}
                  >
                    <X className="size-4" />
                  </button>
                </div>
              ) : (
                <>
                  <Icon className="upload-dropzone-icon" />
                  <p className="upload-dropzone-text">{placeholder}</p>
                  <p className="upload-dropzone-hint">{hint}</p>
                </>
              )}
            </div>

            <FieldError errors={fieldState.error ? [fieldState.error] : undefined} />
          </Field>
        );
      }}
    />
  );
};

export default FileUploadField;
