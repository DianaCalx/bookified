// components/cards/CardItem.tsx
import type { Card } from "@/features/cards/types";
import { Badge } from "@/components/ui/Badge";

export function CardItem({
  card,
  deckName,
}: {
  card: Card;
  deckName?: string;
}) {
  return (
    <article className="h-full rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="font-semibold">{card.front}</h3>
          <p className="text-sm text-slate-600">{card.back}</p>
        </div>
        {card.isFavorite && (
          <span
            aria-label="Favorita"
            className="text-rose-500"
          >
            ♥
          </span>
        )}
      </div>
      {card.example && (
        <p className="mt-3 text-sm text-slate-500 italic">“{card.example}”</p>
      )}
      {deckName && <Badge className="mt-3">{deckName}</Badge>}
    </article>
  );
}
