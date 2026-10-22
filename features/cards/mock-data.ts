// features/cards/mock-data.ts
// Datos falsos para construir las pantallas antes de tener Supabase (se borra en la Fase 5).
import { DEMO_USER_ID } from "@/lib/demo-user";
import { MOCK_DECK_IDS } from "@/features/decks/mock-data";
import type { Card } from "./types";

let counter = 0; // da un id distinto a cada tarjeta sin tener que escribirlo a mano

// "Fábrica": evita repetir los 13 campos de Card en cada tarjeta de la lista de abajo.
// extra permite sobreescribir solo los campos que te interesan (deckId, example, etc.)
function mockCard(
  front: string,
  back: string,
  extra: Partial<Card> = {},
): Card {
  counter += 1;
  const now = new Date();
  return {
    id: `00000000-0000-4000-a000-${String(counter).padStart(12, "0")}`,
    userId: DEMO_USER_ID,
    deckId: null, // por defecto sin mazo; extra lo puede sobreescribir
    front,
    back,
    example: null,
    notes: null,
    isFavorite: false,
    // Reglas de una tarjeta recién creada: todavía no se ha repasado nunca.
    intervalDays: 0,
    repetitions: 0,
    lapses: 0,
    nextReviewAt: now, // se repasa hoy mismo
    lastReviewedAt: null,
    createdAt: now,
    updatedAt: now,
    ...extra, // pisa cualquiera de los valores de arriba
  };
}

const { phrasalVerbs, work } = MOCK_DECK_IDS;

export const mockCards: Card[] = [
  mockCard("to figure out", "entender, averiguar", {
    deckId: phrasalVerbs,
    example: "I can't figure out this bug.",
    isFavorite: true,
  }),
  mockCard("to give up", "rendirse", {
    deckId: phrasalVerbs,
    example: "Don't give up now!",
  }),
  mockCard("to look forward to", "tener ganas de", {
    deckId: phrasalVerbs,
    example: "I'm looking forward to the trip.",
  }),
  mockCard("to run out of", "quedarse sin", {
    deckId: phrasalVerbs,
    lapses: 3,
  }),
  mockCard("by the way", "por cierto", {
    example: "By the way, did you call her?",
  }),
  mockCard("to follow up", "dar seguimiento", {
    deckId: work,
    example: "I'll follow up by email.",
  }),
  mockCard("deadline", "fecha límite", { deckId: work, isFavorite: true }),
  mockCard("to catch up", "ponerse al día", {
    example: "Let's catch up over coffee.",
  }),
];
