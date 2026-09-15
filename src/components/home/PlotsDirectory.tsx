import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import type { Plot } from "@/lib/types";

export default function PlotsDirectory({ plots }: { plots: Plot[] }) {
  if (!plots.length) return null;

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="Verified Legal Inventory & Resale Files" title="Plots for Sale in Faisal Hills" center />
      <p className="mx-auto mt-4 max-w-2xl text-center text-ink/70">
        Explore authentic available residential &amp; commercial plots across all sectors — real-time market
        valuations, dimensions, facing views, and direct sales desk contact.
      </p>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {plots.map((plot) => {
          const block = plot.plotBlocks?.nodes[0]?.name;
          return (
            <div key={plot.slug} className="rounded-xl border border-black/10 p-5 shadow-sm">
              <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wide text-ink/50">
                <span>{plot.plotNumber ? `#${plot.plotNumber}` : "Plot"}</span>
                <span className="rounded-full bg-cream px-2 py-1 text-maroon">{plot.status}</span>
              </div>
              <p className="mt-3 font-display text-xl font-bold text-navy">{plot.price}</p>
              <p className="mt-1 text-sm text-ink/70">
                {block} • {plot.facing}
              </p>
              <p className="mt-1 text-sm text-ink/70">{plot.size} Plot</p>
              <div className="mt-4 flex gap-2">
                <Link
                  href="/plots"
                  className="flex-1 rounded-lg border border-maroon px-3 py-2 text-center text-xs font-semibold text-maroon transition hover:bg-maroon hover:text-white"
                >
                  View Details
                </Link>
                <Link
                  href="/contact"
                  className="flex-1 rounded-lg bg-maroon px-3 py-2 text-center text-xs font-semibold text-white transition hover:bg-maroon-dark"
                >
                  Inquire / Book
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/plots"
          className="inline-block rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-navy-light"
        >
          View Complete Plot Directory
        </Link>
      </div>
    </section>
  );
}
