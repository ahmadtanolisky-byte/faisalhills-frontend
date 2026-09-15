import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import type { Block } from "@/lib/types";

export default function BlocksSectors({ blocks }: { blocks: Block[] }) {
  if (!blocks.length) return null;

  return (
    <section className="bg-navy py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Explore Faisal Hills Blocks & Sectors" light center />
        <p className="mx-auto mt-4 max-w-2xl text-center text-white/70">
          Click a sector to view each block&apos;s location advantages, development progress, and direct links.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {blocks.map((block) => (
            <Link
              key={block.slug}
              href={`/blocks/${block.slug}`}
              className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-6 py-5 transition hover:border-gold hover:bg-white/10"
            >
              <div>
                <p className="font-display text-lg font-bold text-white">{block.title}</p>
                <p className="mt-1 text-xs uppercase tracking-wide text-white/50">{block.status}</p>
              </div>
              <span className="text-gold opacity-0 transition group-hover:opacity-100">→</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
