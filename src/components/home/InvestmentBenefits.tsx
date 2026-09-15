import Html from "@/components/ui/Html";
import SectionHeading from "@/components/ui/SectionHeading";
import type { Benefit, SiteOptions } from "@/lib/types";

export default function InvestmentBenefits({
  benefits,
  siteOptions,
}: {
  benefits: Benefit[];
  siteOptions: SiteOptions;
}) {
  if (!benefits.length) return null;

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <SectionHeading title="Why Faisal Hills Is One of Pakistan's Smartest Property Investments" center />
        <Html html={siteOptions.benefitsIntro} className="prose prose-neutral mx-auto mt-4 max-w-none text-ink/75" />
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {benefits.map((benefit) => (
          <div key={benefit.title} className="rounded-xl border border-black/10 p-6">
            <p className="font-display text-lg font-bold text-maroon">{benefit.title}</p>
            <Html html={benefit.content} className="prose prose-neutral prose-sm mt-2 max-w-none text-ink/70" />
          </div>
        ))}
      </div>
    </section>
  );
}
