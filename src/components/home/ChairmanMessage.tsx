import Image from "next/image";
import Html from "@/components/ui/Html";
import type { SiteOptions } from "@/lib/types";

export default function ChairmanMessage({ siteOptions }: { siteOptions: SiteOptions }) {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
      <div>
        <h2 className="font-display text-3xl font-bold leading-tight text-maroon sm:text-4xl">
          {siteOptions.chairmanTitle || "Chairman & Founder"} — {siteOptions.chairmanName}
        </h2>
        <Html html={siteOptions.chairmanBio} className="prose prose-neutral mt-4 max-w-none text-ink/80" />
        <a href="#overview" className="mt-4 inline-block text-sm font-semibold text-maroon underline underline-offset-4">
          Discover More About Zedem International →
        </a>
      </div>

      <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl bg-cream">
        {siteOptions.chairmanPhoto ? (
          <Image src={siteOptions.chairmanPhoto} alt={siteOptions.chairmanName} fill className="object-cover" />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-sm text-ink/40">Chairman photo</div>
        )}
      </div>
    </section>
  );
}
