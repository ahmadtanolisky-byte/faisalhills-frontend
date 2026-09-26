import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import type { SiteOptions } from "@/lib/types";

export default function MasterPlanMap({
  siteOptions,
}: {
  siteOptions: SiteOptions;
}) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <SectionHeading title="Faisal Hills Master Plan Map" center />

        <p className="mt-4 text-ink/70">
          Explore the officially approved layout of Faisal Hills. Inspect plot
          dimensions, road networks, sector avenues, and central commercial
          boulevards.
        </p>

        <p className="mt-5 text-ink/70">
          This is the approved map of the society. It shows all the blocks,
          main road, other roads, parks, mosques, and commercial areas. Check
          the map before choosing a plot, and always confirm that you have the
          latest version from our sales office.
        </p>
      </div>

      <div className="relative mx-auto mt-10 aspect-video max-w-4xl overflow-hidden rounded-2xl border border-black/10 bg-cream">
        {siteOptions.masterPlanImage ? (
          <Image
            src={siteOptions.masterPlanImage}
            alt="Faisal Hills Master Plan"
            fill
            className="object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-sm text-ink/40">
            Master plan map — upload in wp-admin Site Options
          </div>
        )}
      </div>

      {siteOptions.masterPlanPdfUrl ? (
        <div className="mt-6 text-center">
          <a
            href={siteOptions.masterPlanPdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-maroon px-6 py-3 text-sm font-semibold text-white transition hover:bg-maroon-dark"
          >
            Download Master Plan (PDF)
          </a>
        </div>
      ) : null}
    </section>
  );
}