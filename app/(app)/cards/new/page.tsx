// app/(app)/cards/new/page.tsx
import type { Metadata } from "next";
import { mockDecks } from "@/features/decks/mock-data";
import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";

export const metadata: Metadata = { title: "Nueva tarjeta" };

export default function NewCardPage() {
  return (
    <>
      <PageHeader title="Nueva tarjeta" />
      <form className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <Input
          label="Frase en inglés"
          name="front"
          placeholder="to figure out"
        />
        <Textarea
          label="Significado"
          name="back"
          rows={2}
          placeholder="entender, averiguar"
        />
        <Textarea
          label="Ejemplo (opcional)"
          name="example"
          rows={2}
        />
        <Select
          label="Mazo"
          name="deckId"
          defaultValue=""
        >
          <option value="">Sin mazo</option>
          {mockDecks.map((deck) => (
            <option
              key={deck.id}
              value={deck.id}
            >
              {deck.name}
            </option>
          ))}
        </Select>
        <Textarea
          label="Notas (opcional)"
          name="notes"
        />
        <Button
          type="submit"
          className="w-full sm:w-auto"
        >
          Guardar
        </Button>
      </form>
    </>
  );
}
