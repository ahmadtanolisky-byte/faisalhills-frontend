import Html from "@/components/ui/Html";
import SectionHeading from "@/components/ui/SectionHeading";
import type { Amenity, SiteOptions } from "@/lib/types";

export default function Amenities({
  amenities,
  siteOptions,
}: {
  amenities: Amenity[];
  siteOptions: SiteOptions;
}) {
  if (!amenities.length) return null;

  const grouped = new Map<string, Amenity[]>();
  for (const amenity of amenities) {
    const category = amenity.amenityCategories?.nodes[0]?.name ?? "Other";
    grouped.set(category, [...(grouped.get(category) ?? []), amenity]);
  }

  return (
    <section className="bg-cream py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading title="Amenities Designed for Modern Living" center />
          <Html html={siteOptions.amenitiesIntro} className="prose prose-neutral mx-auto mt-4 max-w-none text-ink/75" />
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[...grouped.entries()].map(([category, items]) => (
            <div key={category} className="rounded-xl bg-white p-6 shadow-sm">
              <p className="font-display text-lg font-bold text-navy">{category}</p>
              <ul className="mt-3 space-y-2 text-sm text-ink/70">
                {items.map((item) => (
                  <li key={item.title} className="flex gap-2">
                    <span className="text-gold">✓</span>
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
