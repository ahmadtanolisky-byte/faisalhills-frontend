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
