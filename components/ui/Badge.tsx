// components/ui/Badge.tsx
import { twMerge } from "tailwind-merge";

export function Badge({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={twMerge(
        "inline-flex items-center rounded-full bg-indigo-50 px-2.5 py-0.5 text-xs font-medium text-indigo-700",
        className,
      )}
    >
      {children}
    </span>
  );
}
