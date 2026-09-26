import Html from "@/components/ui/Html";
import SectionHeading from "@/components/ui/SectionHeading";
import type { SiteOptions } from "@/lib/types";

export default function Overview({ siteOptions }: { siteOptions: SiteOptions }) {
  return (
    <section className="overview-section px-6 py-20 md:px-10 lg:px-20 lg:py-28">
  <div className="mx-auto max-w-6xl">
    <div className="max-w-4xl">
      <span className="mb-4 block text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
        About Faisal Hills
      </span>

      <h2 className="mb-8 text-4xl font-semibold tracking-tight text-neutral-900 md:text-5xl lg:text-6xl">
        Overview
      </h2>

      <div className="space-y-6 text-base leading-8 text-neutral-600 md:text-lg">
        <p>
          Faisal Hills is a housing project on GT Road near Taxila, under
          Faisal Town Group. The land covers about 11,823 Kanal at the foot of
          the Margalla Hills, and the Rawalpindi Development Authority has
          approved the whole layout.
        </p>

        <p>
          Instead of sectors, the society is divided into six blocks: Executive
          Block, Block A, Block B, Block B Extension, Block C, and Block D.
          Each one is at a different point in construction. Executive Block and
          Block A are already lived in, roads done, houses built, people
          settled. Blocks C and D are behind it, still being developed, which
          is exactly why they&apos;re priced lower today.
        </p>

        <p>
          Before booking anywhere in Faisal Hills, decide on the block first.
          That single choice affects the price, the plot sizes on offer, and
          how long you&apos;ll wait before you can start building.
        </p>
      </div>
    </div>
  </div>
</section>
  );
}
