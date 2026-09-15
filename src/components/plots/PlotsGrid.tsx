"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { Plot } from "@/lib/types";

export default function PlotsGrid({ plots }: { plots: Plot[] }) {
  const blocks = useMemo(() => {
    const set = new Set<string>();
    plots.forEach((p) => p.plotBlocks?.nodes.forEach((b) => set.add(b.name)));
    return ["All Blocks", ...Array.from(set)];
  }, [plots]);

  const [active, setActive] = useState("All Blocks");

  const filtered =
    active === "All Blocks" ? plots : plots.filter((p) => p.plotBlocks?.nodes.some((b) => b.name === active));

  return (
    <div>
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {blocks.map((block) => (
          <button
            key={block}
            onClick={() => setActive(block)}
            className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wide transition ${
              active === block ? "bg-maroon text-white" : "bg-cream text-ink/70 hover:bg-maroon/10"
            }`}
          >
            {block}
          </button>
        ))}
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((plot) => {
          const block = plot.plotBlocks?.nodes[0]?.name;
          const type = plot.plotTypes?.nodes[0]?.name;
          return (
            <div key={plot.slug} className="rounded-xl border border-black/10 p-5 shadow-sm">
              <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wide text-ink/50">
                <span>{plot.plotNumber ? `#${plot.plotNumber}` : "Plot"}</span>
                <span className="rounded-full bg-cream px-2 py-1 text-maroon">{plot.status}</span>
              </div>
              <p className="mt-3 font-display text-xl font-bold text-navy">{plot.price}</p>
              <p className="mt-1 text-sm text-ink/70">
                {block} • {type} • {plot.facing}
              </p>
              <p className="mt-1 text-sm text-ink/70">{plot.size} Plot</p>
              <Link
                href="/contact"
                className="mt-4 block rounded-lg bg-maroon px-3 py-2 text-center text-xs font-semibold text-white transition hover:bg-maroon-dark"
              >
                Inquire / Book
              </Link>
            </div>
          );
        })}
      </div>

      {!filtered.length ? <p className="text-center text-ink/60">No plots found for this block.</p> : null}
    </div>
  );
}
