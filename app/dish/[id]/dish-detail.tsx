"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import type { Dish } from "../../dishes";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ModelViewer = "model-viewer" as any;

export default function DishDetail({ dish }: { dish: Dish | undefined }) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const viewerRef = useRef<any>(null);
  const [loadMs, setLoadMs] = useState<number | null>(null);

  useEffect(() => {
    import("@google/model-viewer");
    const start = performance.now();
    const el = viewerRef.current;
    if (!el) return;
    const onLoad = () => setLoadMs(Math.round(performance.now() - start));
    el.addEventListener("load", onLoad);
    return () => el.removeEventListener("load", onLoad);
  }, []);

  if (!dish) {
    return (
      <main className="min-h-screen bg-neutral-950 text-white flex flex-col items-center justify-center gap-4">
        <p>Dish not found.</p>
        <Link href="/" className="text-amber-400 underline">Back to menu</Link>
      </main>
    );
  }

  return (
    <main className="h-screen bg-neutral-950 text-white flex flex-col">
      <header className="flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-amber-400 hover:underline">← Back to menu</Link>
        <span className="text-xs text-neutral-500">
          {loadMs === null ? "Loading 3D model..." : `3D loaded in ${loadMs} ms`}
        </span>
      </header>

      <div className="flex-1 min-h-0">
        <ModelViewer
          ref={viewerRef}
          src={dish.model}
          alt={dish.name}
          camera-controls
          auto-rotate
          shadow-intensity="1"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      <footer className="px-6 py-6 text-center">
        <h1 className="text-3xl font-bold">{dish.name}</h1>
        <p className="text-neutral-400 mt-1">{dish.description}</p>
        <p className="text-amber-400 text-2xl font-bold mt-2">Rs. {dish.price}</p>
      </footer>
    </main>
  );
}