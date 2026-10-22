// app/(app)/cards/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { mockCards } from "@/features/cards/mock-data";
import { mockDecks } from "@/features/decks/mock-data";
import { CardList } from "@/components/cards/CardList";
import { PageHeader } from "@/components/layout/PageHeader";
import { buttonClasses } from "@/components/ui/Button";

export const metadata: Metadata = { title: "Mis tarjetas" };

export default function CardsPage() {
  const deckNames = new Map(mockDecks.map((deck) => [deck.id, deck.name]));

  return (
    <>
      <PageHeader
        title="Mis tarjetas"
        description={`${mockCards.length} frases guardadas`}
        actions={
          <Link
            href="/cards/new"
            className={buttonClasses("primary")}
          >
            + Nueva
          </Link>
        }
      />
      <CardList
        cards={mockCards}
        deckNames={deckNames}
      />
    </>
  );
}
