// components/layout/Sidebar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS, isActive } from "./nav-items";

export function Sidebar({ children }: { children?: React.ReactNode }) {
  const pathname = usePathname();

  return (
    // hidden: oculto por defecto (móvil) · md:flex: visible desde 768px hacia arriba
    <aside className="sticky top-0 hidden h-dvh w-60 shrink-0 flex-col border-r border-slate-200 bg-white p-4 md:flex">
      <Link
        href="/dashboard"
        className="mb-8 px-3 text-xl font-bold tracking-tight text-indigo-600"
      >
        Memozora
      </Link>

      <nav className="flex flex-1 flex-col gap-1">
        {NAV_ITEMS.map((item) => {
          const active = isActive(pathname, item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition ${
                active
                  ? "bg-indigo-50 text-indigo-700"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              <span aria-hidden>{item.icon}</span>
              {item.label}
            </Link>
          );
        })}
      </nav>

      {children && (
        <div className="space-y-2 border-t border-slate-200 pt-4">
          {children}
        </div>
      )}
    </aside>
  );
}
