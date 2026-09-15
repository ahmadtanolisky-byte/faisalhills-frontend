import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import Html from "@/components/ui/Html";
import type { Flagship } from "@/lib/types";

export default function Flagships({ flagships }: { flagships: Flagship[] }) {
  if (!flagships.length) return null;

  return (
    <section className="bg-cream py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Faisal Hills High-Rise & Commercial Flagships" center />
        <p className="mx-auto mt-4 max-w-2xl text-center text-ink/70">
          Discover world-class architectural marvels and premium lifestyle shopping destinations developed within
          Faisal Hills.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {flagships.map((flagship) => (
            <div key={flagship.slug} className="overflow-hidden rounded-2xl bg-white shadow-sm">
              <div className="relative aspect-video bg-navy">
                {flagship.featuredImage?.node.sourceUrl ? (
                  <Image
                    src={flagship.featuredImage.node.sourceUrl}
                    alt={flagship.featuredImage.node.altText || flagship.title}
                    fill
                    className="object-cover"
                  />
                ) : null}
              </div>
              <div className="p-6">
                <p className="font-display text-xl font-bold text-navy">{flagship.title}</p>
                <Html html={flagship.content} className="prose prose-neutral mt-2 max-w-none text-sm text-ink/70" />
                <a
                  href={flagship.link || "#"}
                  className="mt-4 inline-block text-sm font-semibold text-maroon underline underline-offset-4"
                >
                  Explore {flagship.title} →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
