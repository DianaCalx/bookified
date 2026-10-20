import { z } from "zod";

import {
  ACCEPTED_IMAGE_TYPES,
  ACCEPTED_PDF_TYPES,
  MAX_FILE_SIZE,
  MAX_IMAGE_SIZE,
  voiceOptions,
} from "@/lib/constant";

const voiceIds = Object.values(voiceOptions).map((voice) => voice.id) as [
  string,
  ...string[],
];

export const UploadSchema = z.object({
  file: z
    .instanceof(File, { message: "Please upload a PDF file." })
    .refine(
      (file) => ACCEPTED_PDF_TYPES.includes(file.type),
      "Only PDF files are accepted.",
    )
    .refine(
      (file) => file.size <= MAX_FILE_SIZE,
      "File must be 50MB or smaller.",
    ),
  cover: z
    .instanceof(File)
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file.type),
      "Only JPG, PNG or WEBP images are accepted.",
    )
    .refine(
      (file) => file.size <= MAX_IMAGE_SIZE,
      "Image must be 10MB or smaller.",
    )
    .optional(),
  title: z
    .string()
    .trim()
    .min(1, "Title is required.")
    .max(200, "Title is too long."),
  author: z
    .string()
    .trim()
    .min(1, "Author name is required.")
    .max(150, "Author name is too long."),
  voiceId: z.enum(voiceIds, { message: "Please choose a voice." }),
});
