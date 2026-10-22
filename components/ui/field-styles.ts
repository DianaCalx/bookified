// components/ui/field-styles.ts
import { twMerge } from "tailwind-merge";

export function fieldClasses(hasError: boolean, className = "") {
  const state = hasError
    ? "border-red-400 focus:ring-red-200"
    : "border-slate-300 focus:border-indigo-500 focus:ring-indigo-200";
  return twMerge(
    "w-full rounded-lg border bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:ring-2",
    state,
    className,
  );
}
