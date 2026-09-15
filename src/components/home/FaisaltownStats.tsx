import type { Stat } from "@/lib/types";

export default function FaisaltownStats({ stats }: { stats: Stat[] }) {
  if (!stats.length) return null;

  return (
    <section className="bg-maroon py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
          Discover Faisaltown Group
        </p>
        <div className="grid grid-cols-2 gap-6 text-center text-white sm:grid-cols-5">
          {stats.map((stat) => (
            <div key={stat.title}>
              <p className="font-display text-3xl font-extrabold">{stat.value}</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-white/70">{stat.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
