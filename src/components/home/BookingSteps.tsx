import Html from "@/components/ui/Html";
import SectionHeading from "@/components/ui/SectionHeading";
import type { BookingStep, SiteOptions } from "@/lib/types";

export default function BookingSteps({
  steps,
  siteOptions,
}: {
  steps: BookingStep[];
  siteOptions: SiteOptions;
}) {
  if (!steps.length) return null;

  return (
    <section className="bg-navy py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <SectionHeading eyebrow="How to Book" title="A Simple 5-Step Booking Process" light center />
          <Html html={siteOptions.bookingIntro} className="prose prose-invert mx-auto mt-4 max-w-none text-white/70" />
        </div>

        <ol className="mt-12 grid gap-6 lg:grid-cols-5">
          {steps.map((step) => (
            <li key={step.stepNumber} className="rounded-xl border border-white/10 bg-white/5 p-6">
              <p className="font-display text-3xl font-extrabold text-gold">
                {String(step.stepNumber).padStart(2, "0")}
              </p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-white/50">{step.stepLabel}</p>
              <p className="mt-2 font-display text-lg font-bold text-white">{step.title}</p>
              <Html html={step.content} className="prose prose-invert prose-sm mt-2 max-w-none text-white/70" />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
