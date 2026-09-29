"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import type { GalleryItem } from "@/lib/types";

const galleryImage = (sourceUrl: string, title: string, category: string, content: string): GalleryItem => ({
  title,
  content,
  featuredImage: { node: { sourceUrl, altText: title } },
  galleryCategories: { nodes: [{ name: category, slug: category.toLowerCase().replace(/[^a-z]+/g, "-") }] },
});

// Bundled site photos, matched to WordPress gallery items by title so every item shows the right picture.
const localPhotos: { match: RegExp; item: GalleryItem }[] = [
  { match: /gate|entrance/i, item: galleryImage("/images/gallery-main-entrance.png", "Main Gate Entrance Monument", "Entrance", "Grand entrance portal on N-5 GT Road with 24/7 guarded security checkposts.") },
  { match: /boulevard/i, item: galleryImage("/images/gallery-boulevard.png", "225-ft Main Boulevard", "Infrastructure", "Wide carpeted boulevard with underground power cabling, linking every block.") },
  { match: /mosque|masjid/i, item: galleryImage("/images/gallery-mosque.png", "Grand Jamia Mosque", "Amenities", "A 3,000-capacity landmark of Islamic architecture with marble courtyards.") },
  { match: /jewel/i, item: galleryImage("/images/flagship-faisal-jewel-1.png", "Faisal Jewel Towers", "Towers", "The iconic high-rise hotel and apartment towers in Executive Block.") },
  { match: /park|garden/i, item: galleryImage("/images/gallery-park.png", "Central Family Park", "Amenities", "Lush green park with illuminated walkways and a Margalla Hills backdrop.") },
  { match: /hills? ?walk|promenade|retail/i, item: galleryImage("/images/flagship-faisal-jewel-2.png", "Hills Walk Retail Promenade", "Towers", "European-style open-air commercial strip with cafés, banks and boutiques.") },
];

const aerialView = galleryImage(
  "/images/hero-masterplan.png",
  "Aerial View of Faisal Hills",
  "Master Plan",
  "The planned layout of Faisal Hills at dusk, with the Margalla Hills to the north."
);

const stripHtml = (html: string) =>
  html.replace(/<[^>]*>/g, " ").replace(/&#8217;/g, "’").replace(/&amp;/g, "&").replace(/\s+/g, " ").trim();

function withPhotos(items: GalleryItem[]): GalleryItem[] {
  if (!items.length) return [...localPhotos.map((p) => p.item), aerialView];

  const used = new Set<GalleryItem>();
  const merged = items
    .map((item): GalleryItem | null => {
      const local = localPhotos.find((p) => !used.has(p.item) && p.match.test(item.title))?.item;
      if (local) used.add(local);
      const featuredImage = local?.featuredImage ?? item.featuredImage;
      if (!featuredImage?.node.sourceUrl) return null;
      return {
        ...item,
        content: stripHtml(item.content || "") || local?.content || "",
        featuredImage: { node: { ...featuredImage.node, altText: item.title } },
        galleryCategories: item.galleryCategories?.nodes.length ? item.galleryCategories : local?.galleryCategories,
      };
    })
    .filter((item): item is GalleryItem => item !== null);

  // Show any bundled photos WordPress doesn't have an entry for yet, plus the aerial view.
  return [...merged, ...localPhotos.filter((p) => !used.has(p.item)).map((p) => p.item), aerialView];
}

export default function PhotoGallery({ items }: { items: GalleryItem[] }) {
  const items_ = useMemo(() => withPhotos(items), [items]);

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
      {categories.length > 2 ? (
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
      ) : null}

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item, index) => (
          <figure key={`${item.title}-${index}`} className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-navy">
            <Image
              src={item.featuredImage!.node.sourceUrl}
              alt={item.featuredImage!.node.altText || item.title}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition duration-300 group-hover:scale-105"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-4 pt-10">
              {item.galleryCategories?.nodes[0]?.name ? (
                <p className="text-xs font-semibold uppercase tracking-wide text-gold">
                  {item.galleryCategories.nodes[0].name}
                </p>
              ) : null}
              <p className="text-sm font-semibold text-white">{item.title}</p>
              {item.content ? <p className="mt-1 text-xs text-white/75">{item.content}</p> : null}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
