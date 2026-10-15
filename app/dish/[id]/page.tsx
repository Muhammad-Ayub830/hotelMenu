import DishDetail from "./dish-detail";
import { dishes } from "../../dishes";

export function generateStaticParams() {
  return dishes.map(({ id }) => ({ id }));
}

export default async function DishPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const dish = dishes.find((d) => d.id === id);
  return <DishDetail dish={dish} />;
}