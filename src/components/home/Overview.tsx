
import Image from "next/image";
import type { SiteOptions } from "@/lib/types";

export default function Overview({
  siteOptions,
}: {
  siteOptions: SiteOptions;
}) {
  return (
    <section className="overview-section px-6 py-20 md:px-10 lg:px-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">

        {/* Left - Content */}
        <div>
          <span className="mb-4 block text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
            About Faisal Hills
          </span>

          <h2 className="mb-8 text-4xl font-semibold tracking-tight text-neutral-900 md:text-5xl lg:text-6xl">
            Overview
          </h2>

          <div className="space-y-6 text-base leading-8 text-neutral-600 md:text-lg">

            <p>
              
             Faisal Hills is a <a href="https://faisalhillislamabad.com.pk/location">housing project on GT Road near Taxila</a>, under Faisal Town Group. The land covers about
              11,823 Kanal at the foot of the Margalla Hills, and the 
             <a href="https://rda.gop.pk/">Rawalpindi Development Authority</a>  has approved the whole layout.
            </p>

            <p>
              Instead of sectors, the society is divided into six blocks:
              Executive Block, Block A, Block B, Block B Extension, Block C,
              and Block D. Each one is at a different point in construction.
              Executive Block and Block A are already lived in, roads done,
              houses built, people settled. Blocks C and D are behind it,
              still being developed, which is exactly why they&apos;re priced
              lower today.
            </p>

            <p>
              <a href="https://faisalhillislamabad.com.pk/contact">Before booking anywhere in Faisal Hills,</a> decide on the block
              first. That single choice affects the price, the plot sizes on
              offer, and how long you&apos;ll wait before you can start
              building.
            </p>

          </div>
        </div>

        {/* Right - Image */}
        <div className="relative overflow-hidden rounded-2xl">
          <div className="relative aspect-[4/5] w-full">
            <Image
              src="/images/hero-masterplan.png"
              alt="Faisal Hills Islamabad"
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

