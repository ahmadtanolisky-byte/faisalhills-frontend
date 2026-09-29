import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import type { Flagship } from "@/lib/types";

const fallbackFlagships = [
  {
    match: /jewel/i,
    title: "Faisal Jewel",
    image: "/images/flagship-faisal-jewel-1.png",
    text: "A 26-storey twin-tower project inside Executive Block. One tower runs as a hotel, the other holds 1, 2 and 3 bedroom apartments alongside commercial shops — the tallest structure in the society by a clear margin.",
    link: "",
  },
  {
    match: /hills? ?walk/i,
    title: "Hills Walk",
    image: "/images/flagship-faisal-jewel-2.png",
    text: "An open-air commercial street built along the lines of Istanbul's Istiklal Street — cafés, banks and boutiques lined along a pedestrian boulevard near the main entrance.",
    link: "",
  },
];

const stripHtml = (html: string) =>
  html.replace(/<[^>]*>/g, " ").replace(/&#8217;/g, "’").replace(/&amp;/g, "&").replace(/\s+/g, " ").trim();

export default function Flagships({ flagships }: { flagships: Flagship[] }) {
  const cards = flagships.length
    ? flagships.map((flagship, index) => {
        const fallback =
          fallbackFlagships.find((f) => f.match.test(flagship.title)) ??
          fallbackFlagships[index % fallbackFlagships.length];
        return {
          title: flagship.title,
          image: flagship.featuredImage?.node.sourceUrl || fallback.image,
          alt: flagship.featuredImage?.node.altText || flagship.title,
          text: stripHtml(flagship.content || "") || fallback.text,
          link: flagship.link,
        };
      })
    : fallbackFlagships.map(({ title, image, text, link }) => ({ title, image, text, link, alt: title }));

  return (
    <section className="bg-cream py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Faisal Hills High-Rise & Commercial Flagships" center />
        <p className="mx-auto mt-4 max-w-2xl text-center text-ink/70">
          Landmark vertical and commercial projects that give Faisal Hills its skyline and its busiest streets.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {cards.map((card) => (
            <div key={card.title} className="overflow-hidden rounded-2xl bg-white shadow-sm">
              <div className="relative aspect-video bg-navy">
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-maroon">{card.title}</h3>
                <p className="mt-2 text-sm text-ink/70">{card.text}</p>
                {card.link ? (
                  <a
                    href={card.link}
                    className="mt-4 inline-block text-sm font-semibold text-maroon underline underline-offset-4"
                  >
                    Explore {card.title} →
                  </a>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
