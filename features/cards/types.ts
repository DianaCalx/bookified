// features/cards/types.ts
export type Card = {
  id: string;
  userId: string;
  deckId: string | null;
  front: string;
  back: string;
  example: string | null;
  notes: string | null;
  isFavorite: boolean;
  intervalDays: number;
  repetitions: number;
  lapses: number;
  nextReviewAt: Date;
  lastReviewedAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
};
