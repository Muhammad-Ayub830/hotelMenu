import Link from "next/link";
import { dishes } from "./dishes";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white px-6 py-10">
      <h1 className="text-4xl font-bold text-center mb-2">Our Menu</h1>
      <p className="text-center text-neutral-400 mb-10">Tap a dish to view it in 3D</p>

      <div className="max-w-5xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {dishes.map((dish) => (
          <Link
            key={dish.id}
            href={`/dish/${dish.id}`}
            className="rounded-2xl bg-neutral-900 border border-neutral-800 p-6 hover:border-amber-500 hover:-translate-y-1 transition"
          >
            <div className="text-7xl text-center mb-4">{dish.emoji}</div>
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">{dish.name}</h2>
              <span className="text-amber-400 font-bold">Rs. {dish.price}</span>
            </div>
            <p className="text-sm text-neutral-400 mt-2">{dish.description}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}