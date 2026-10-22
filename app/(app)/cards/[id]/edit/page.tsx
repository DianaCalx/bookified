// app/cards/[id]/edit/page.tsx
export default async function EditCardPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <h1 className="text-2xl font-bold">Editar tarjeta {id}</h1>;
}
