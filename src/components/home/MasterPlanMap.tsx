import Image from "next/image";
import Link from "next/link";
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
        <SectionHeading title="Faisal Hills Master Plan" center />

        <p className="mt-4 text-ink/70">
          Spread over roughly 11,823.5 kanals between the M-1 Motorway and GT
          Road,  <a href="https://faisalhillislamabad.com.pk/master-plan">Faisal Hills is planned around a 225-ft main boulevard,</a> wide
          sector roads, parks, mosques and dedicated commercial zones.
        </p>

        <p className="mt-5 text-ink/70">
          The community is divided into Executive Block, Blocks A, B, B
          Extension, C and D. Before choosing a plot, ask our sales office for
          the latest approved layout of the block you are interested in.
        </p>
      </div>

      <div className="relative mx-auto mt-10 aspect-[1585/640] max-w-5xl overflow-hidden rounded-2xl border border-black/10 bg-navy">
        <Image
          src={siteOptions.masterPlanImage || "/images/hero-masterplan.png"}
          alt="Aerial view of the Faisal Hills Islamabad master plan"
          fill
          sizes="(min-width: 1024px) 64rem, 100vw"
          className="object-cover"
        />
      </div>

      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <Link
          href="/master-plan"
          className="inline-block rounded-full bg-maroon px-6 py-3 text-sm font-semibold text-white transition hover:bg-maroon-dark"
        >
          Explore the Master Plan
        </Link>
        {siteOptions.masterPlanPdfUrl ? (
          <a
            href={siteOptions.masterPlanPdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full border border-maroon px-6 py-3 text-sm font-semibold text-maroon transition hover:bg-maroon hover:text-white"
          >
            Download Master Plan (PDF)
          </a>
        ) : null}
      </div>
    </section>
  );
}
