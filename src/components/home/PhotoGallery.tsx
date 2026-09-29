"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import type { GalleryItem } from "@/lib/types";

const fallbackGalleryItems: GalleryItem[] = [
  { title: "Main Entrance", content: "", featuredImage: { node: { sourceUrl: "/images/gallery-main-entrance.png", altText: "Main Entrance" } } },
  { title: "Grand Jamia Mosque", content: "", featuredImage: { node: { sourceUrl: "/images/gallery-mosque.png", altText: "Grand Jamia Mosque" } } },
  { title: "Park", content: "", featuredImage: { node: { sourceUrl: "/images/gallery-park.png", altText: "Park" } } },
  { title: "Boulevard", content: "", featuredImage: { node: { sourceUrl: "/images/gallery-boulevard.png", altText: "Boulevard" } } },
  { title: "Faisal Jewel", content: "", featuredImage: { node: { sourceUrl: "/images/gallery-faisal-jewel.png", altText: "Faisal Jewel" } } },
  { title: "Hill Walk", content: "", featuredImage: { node: { sourceUrl: "/images/gallery-hillwalk.png", altText: "Hill Walk" } } },
];

export default function PhotoGallery({ items }: { items: GalleryItem[] }) {
  const items_ = items.length ? items : fallbackGalleryItems;
  const categories = useMemo(() => {
    const set = new Set<string>();
    items_.forEach((item) => item.galleryCategories?.nodes.forEach((c) => set.add(c.name)));
    return ["All", ...Array.from(set)];
  }, [items_]);

  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? items_
      : items_.filter((item) => item.galleryCategories?.nodes.some((c) => c.name === active));

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
