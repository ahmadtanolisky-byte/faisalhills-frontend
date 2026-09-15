import type { Stat } from "@/lib/types";

export default function StatsStrip({ stats }: { stats: Stat[] }) {
  if (!stats.length) return null;

  return (
    <section className="bg-navy py-8">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 text-center sm:px-6 md:grid-cols-5 lg:px-8">
        {stats.map((stat) => (
          <div key={stat.title}>
            <p className="font-display text-3xl font-extrabold text-white sm:text-4xl">{stat.value}</p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-white/60">{stat.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
