// features/decks/mock-data.ts
// Datos falsos para construir las pantallas antes de tener Supabase (se borra en la Fase 5).
import { DEMO_USER_ID } from "@/lib/demo-user";
import type { Deck } from "./types";

// IDs fijos y exportados: así features/cards/mock-data.ts puede referenciarlos
// por nombre (phrasalVerbs, work) en vez de copiar el UUID a mano.
// Formato UUID válido para que Zod los acepte sin quejarse en la Fase 2.
export const MOCK_DECK_IDS = {
  phrasalVerbs: "00000000-0000-4000-a000-0000000000d1",
  work: "00000000-0000-4000-a000-0000000000d2",
} as const;

export const mockDecks: Deck[] = [
  {
    id: MOCK_DECK_IDS.phrasalVerbs,
    userId: DEMO_USER_ID,
    name: "Phrasal verbs",
    description: null,
    createdAt: new Date(),
  },
  {
    id: MOCK_DECK_IDS.work,
    userId: DEMO_USER_ID,
    name: "Trabajo",
    description: "Inglés de oficina",
    createdAt: new Date(),
  },
];
