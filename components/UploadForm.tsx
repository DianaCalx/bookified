"use client";

import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FileText, ImageIcon } from "lucide-react";

import FileUploadField from "@/components/FileUploadField";
import InputField from "@/components/InputField";
import LoadingOverlay from "@/components/LoadingOverlay";
import VoiceSelector from "@/components/VoiceSelector";
import { FieldError, FieldGroup } from "@/components/ui/field";
import {
  ACCEPTED_IMAGE_TYPES,
  ACCEPTED_PDF_TYPES,
  DEFAULT_VOICE,
  voiceOptions,
} from "@/lib/constant";
import { UploadSchema } from "@/lib/zod";
import type { BookUploadFormValues } from "@/types";

const UploadForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { control, handleSubmit } = useForm<BookUploadFormValues>({
    resolver: zodResolver(UploadSchema),
    defaultValues: {
      title: "",
      author: "",
      voiceId: voiceOptions[DEFAULT_VOICE as keyof typeof voiceOptions].id,
    },
  });

  const onSubmit = async (values: BookUploadFormValues) => {
    setIsSubmitting(true);
    try {
      // TODO: wire up to the synthesis pipeline
      console.log(values);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <FieldGroup className="gap-8">
          <FileUploadField
            control={control}
            name="file"
            label="Upload Book PDF"
            acceptTypes={ACCEPTED_PDF_TYPES}
            disabled={isSubmitting}
            icon={FileText}
            placeholder="Click to upload a PDF"
            hint="PDF file (max 50MB)"
          />

          <FileUploadField
            control={control}
            name="cover"
            label="Upload Book Cover Image"
            acceptTypes={ACCEPTED_IMAGE_TYPES}
            disabled={isSubmitting}
            icon={ImageIcon}
            placeholder="Click to upload the cover image"
            hint="Leave blank to auto-generate it from the PDF"
          />

          <InputField
            control={control}
            name="title"
            label="Title"
            placeholder="ex: Rich Dad Poor Dad"
            disabled={isSubmitting}
          />

          <InputField
            control={control}
            name="author"
            label="Author Name"
            placeholder="ex: Robert Kiyosaki"
            disabled={isSubmitting}
          />

          <Controller
            control={control}
            name="voiceId"
            render={({ field, fieldState }) => (
              <div className="space-y-2">
                <label className="form-label">Choose Assistance Voice</label>
                <VoiceSelector
                  value={field.value}
                  onChange={field.onChange}
                  disabled={isSubmitting}
                />
                <FieldError
                  errors={fieldState.error ? [fieldState.error] : undefined}
                />
              </div>
            )}
          />

          <button type="submit" disabled={isSubmitting} className="form-btn">
            Begin Synthesis
          </button>
        </FieldGroup>
      </form>

      {isSubmitting && <LoadingOverlay />}
    </>
  );
};

export default UploadForm;
