// components/cards/CardList.tsx
import type { Card } from "@/features/cards/types";
import { CardItem } from "./CardItem";

export function CardList({
  cards,
  deckNames,
}: {
  cards: Card[];
  deckNames: Map<string, string>;
}) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {cards.map((card) => (
        <li key={card.id}>
          <CardItem
            card={card}
            deckName={card.deckId ? deckNames.get(card.deckId) : undefined}
          />
        </li>
      ))}
    </ul>
  );
}
