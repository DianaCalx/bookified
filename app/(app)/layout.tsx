import { Sidebar } from "@/components/layout/Sidebar";
import { MobileNav } from "@/components/layout/MobileNav";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh md:flex">
      <Sidebar />
      <main className="flex-1 px-4 pt-6 pb-24 md:px-8 md:pb-8">
        <div className="mx-auto max-w-4xl">{children}</div>
      </main>
      <MobileNav />
    </div>
  );
}
