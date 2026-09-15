"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import type { GalleryItem } from "@/lib/types";

export default function PhotoGallery({ items }: { items: GalleryItem[] }) {
  const categories = useMemo(() => {
    const set = new Set<string>();
    items.forEach((item) => item.galleryCategories?.nodes.forEach((c) => set.add(c.name)));
    return ["All", ...Array.from(set)];
  }, [items]);

  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? items
      : items.filter((item) => item.galleryCategories?.nodes.some((c) => c.name === active));

  if (!items.length) return null;

  return (
    <div>
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActive(category)}
            className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wide transition ${
              active === category ? "bg-maroon text-white" : "bg-cream text-ink/70 hover:bg-maroon/10"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item) => (
          <figure key={item.title} className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-navy">
            {item.featuredImage?.node.sourceUrl ? (
              <Image
                src={item.featuredImage.node.sourceUrl}
                alt={item.featuredImage.node.altText || item.title}
                fill
                className="object-cover transition duration-300 group-hover:scale-105"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-xs text-white/30">No image</div>
            )}
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-gold">
                {item.galleryCategories?.nodes[0]?.name}
              </p>
              <p className="text-sm font-semibold text-white">{item.title}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
