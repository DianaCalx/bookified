// components/review/Flashcard.tsx
"use client";

import { useState } from "react";
import { buttonClasses } from "@/components/ui/Button";

// example es string | null (no undefined): así llega una columna nullable de Postgres.
type FlashcardProps = {
  front: string;
  back: string;
  example: string | null;
};

export function Flashcard({ front, back, example }: FlashcardProps) {
  // Estado local, propio de esta tarjeta. Empieza oculto: toda tarjeta nueva arranca así.
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
      <p className="text-xs font-semibold tracking-wider text-slate-400 uppercase">
        Inglés
      </p>
      {/* front: la pregunta, siempre visible */}
      <p className="mt-2 text-3xl font-bold">{front}</p>

      {revealed ? (
        // Respuesta + ejemplo (si existe), solo después de revelar
        <div className="mt-6 border-t border-slate-100 pt-6">
          <p className="text-xl text-slate-700">{back}</p>
          {example && <p className="mt-3 text-slate-500 italic">“{example}”</p>}
        </div>
      ) : (
        // Antes de revelar: solo este botón. onClick cambia el estado local.
        <button
          type="button"
          onClick={() => setRevealed(true)}
          className={buttonClasses("primary", "mt-8")}
        >
          Mostrar respuesta
        </button>
      )}
    </div>
  );
}
