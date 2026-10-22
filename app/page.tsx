// app/page.tsx
import Link from "next/link";
import { buttonClasses } from "@/components/ui/Button";

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-dvh max-w-3xl flex-col items-center justify-center px-4 text-center">
      <p className="text-sm font-semibold tracking-widest text-indigo-600 uppercase">
        Memozora
      </p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
        Frases en inglés que no se te olvidan
      </h1>
      <p className="mt-4 text-lg text-slate-600">
        Guárdalas, repásalas justo antes de olvidarlas y mira tu progreso cada
        día.
      </p>
      <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
        <Link
          href="/register"
          className={buttonClasses("primary", "px-6 py-3")}
        >
          Crear cuenta gratis
        </Link>
        <Link
          href="/login"
          className={buttonClasses("secondary", "px-6 py-3")}
        >
          Ya tengo cuenta
        </Link>
      </div>
    </main>
  );
}
