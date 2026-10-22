// app/(app)/review/page.tsx
import type { Metadata } from "next";
import { Flashcard } from "@/components/review/Flashcard";

export const metadata: Metadata = { title: "Repasar" };

export default function ReviewPage() {
  return (
    <div className="mx-auto max-w-xl">
      <Flashcard
        front="to figure out"
        back="entender, averiguar"
        example="I can't figure out this bug."
      />
    </div>
  );
}
