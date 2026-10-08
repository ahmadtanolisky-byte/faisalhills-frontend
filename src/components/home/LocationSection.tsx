import Html from "@/components/ui/Html";
import SectionHeading from "@/components/ui/SectionHeading";
import type { Landmark, SiteOptions } from "@/lib/types";

export default function LocationSection({
  siteOptions,
  landmarks,
}: {
  siteOptions: SiteOptions;
  landmarks: Landmark[];
}) {
  return (
    <section className="bg-cream py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading title={siteOptions.locationTitle || "A Location That Sets It Apart"} center />
          <Html html={siteOptions.locationText} className="prose prose-neutral mx-auto mt-5 max-w-none text-ink/75" />
          <p className="mt-4 text-base leading-7 text-ink/80">
 <a href="https://en.wikipedia.org/wiki/Grand_Trunk_Road">Faisal Hills is on GT Road</a>  (N-5) near Taxila, in Zone 2 of <a href="https://en.wikipedia.org/wiki/Islamabad">Islamabad</a>. It is close to the M-1 Motorway, so Islamabad and <a href="https://rda.gop.pk">Rawalpindi</a> are easy to reach. The Margalla Hills are behind the society, and some plots in Block B have a clear hill view. Faisal Hills is also close to B-17, Taxila, and HITEC University.
</p>
        </div>

        {landmarks.length ? (
          <div className="mt-12">
            <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.2em] text-maroon">
              Strategic Connectivity — Nearby Landmarks
            </p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {landmarks.map((landmark) => (
                <div key={landmark.title} className="rounded-xl bg-white p-6 text-center shadow-sm">
                  <p className="font-display text-lg font-bold text-maroon">{landmark.driveTime}</p>
                  <p className="mt-2 font-semibold text-navy">{landmark.title}</p>
                  <p className="mt-1 text-sm text-ink/60">{landmark.category}</p>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
