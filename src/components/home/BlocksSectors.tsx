
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import type { Block } from "@/lib/types";

const blockDescriptions: Record<string, string> = {
  "executive-block":
    "The block right at the GT Road entrance, and the most settled part of Faisal Hills. Roads are complete, plots have possession, and people are already living here. Faisal Jewel and the Hills Walk commercial strip both sit inside this block.",

  "block-a":
    "Block A is located between Executive Block, Prime Block, and Block B. It is directly connected to the 225-feet-wide main boulevard. The Arch Monument, a well-known landmark of the society, is also here. Plots are available from 5 Marla to 2 Kanal.",

  "block-b":
    "The largest block by plot count. Its position closer to the Margalla range means a real number of plots here look directly at the hills. The society's sports complex and several parks are also inside this block.",

  "block-c":
    "Sits toward the M-1 Motorway side, positioned to gain once the direct motorway connection is finished. It carries the most 5 Marla plots in Faisal Hills, priced below what you'd pay closer to the entrance.",

  "block-d":
    "This block is the farthest from the GT Road gate and runs along the motorway. Because it is farther away, plot prices are currently the lowest in the society. Roads and utilities are still being developed.",

  "block-b-extension":
    "B Extension is the most eye catching residential block of Faisal Hills due to its perfect balance of modern planning, serene environment, and great prospects of investment. The block is situated next to Block B of Faisal Hills Islamabad.",
};

const blockLinks: Record<string, string> = {
  "block-a": "https://faisalhillislamabad.com.pk/block-a",
  "block-b": "https://faisalhillislamabad.com.pk/block-b",
  "block-c": "https://faisalhillislamabad.com.pk/block-c",
  "block-d": "https://faisalhillislamabad.com.pk/block-d",
  "executive-block": "https://faisalhillislamabad.com.pk/executive-block",
  "block-b-extension": "https://faisalhillislamabad.com.pk/b-extension",
};

const blockOrder = [
  "block-a",
  "block-b",
  "block-c",
  "block-d",
  "executive-block",
  "block-b-extension",
];

export default function BlocksSectors({ blocks }: { blocks: Block[] }) {
  if (!blocks.length) return null;

  return (
    <section className="bg-navy py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Explore Faisal Hills Blocks & Sectors"
          light
          center
        />

        <p className="mx-auto mt-4 max-w-2xl text-center text-white/70">
          Six blocks, six different stages of development. Tap into any of
          them to see exactly where things stand.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[...blocks]
            .sort(
              (a, b) =>
                blockOrder.indexOf(a.slug) - blockOrder.indexOf(b.slug)
            )
            .map((block) => {
              const description = blockDescriptions[block.slug];

              return (
                <Link
                  key={block.slug}
                  href={blockLinks[block.slug] ?? `/blocks/${block.slug}`}
                  className="group rounded-xl border border-white/10 bg-white/5 p-6 transition hover:border-gold hover:bg-white/10"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-display text-xl font-bold text-white">
                        {block.title}
                      </p>

                      {block.status &&
                      !/under development/i.test(block.status) ? (
                        <p className="mt-1 text-xs uppercase tracking-wide text-white/50">
                          {block.status}
                        </p>
                      ) : null}
                    </div>

                    <span className="text-gold opacity-0 transition group-hover:opacity-100">
                      →
                    </span>
                  </div>

                  {description ? (
                    <p className="mt-5 text-sm leading-6 text-white/70">
                      {description}
                    </p>
                  ) : null}
                </Link>
              );
            })}
        </div>
      </div>
    </section>
  );
}

