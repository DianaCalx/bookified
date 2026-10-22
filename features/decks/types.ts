// features/decks/types.ts
export type Deck = {
  id: string;
  userId: string;
  name: string;
  description: string | null;
  createdAt: Date;
};
