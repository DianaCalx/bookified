// components/layout/nav-items.ts
export const NAV_ITEMS = [
  { href: "/dashboard", label: "Inicio", icon: "🏠" },
  { href: "/review", label: "Repasar", icon: "🧠" },
  { href: "/cards", label: "Tarjetas", icon: "🗂️" },
  { href: "/decks", label: "Mazos", icon: "📚" },
  { href: "/statistics", label: "Progreso", icon: "📊" },
  { href: "/settings", label: "Ajustes", icon: "⚙️" },
] as const;

// /cards/new también marca "Tarjetas" como activa
export function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}
