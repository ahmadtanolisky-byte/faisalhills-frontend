import Html from "@/components/ui/Html";
import SectionHeading from "@/components/ui/SectionHeading";
import type { SiteOptions } from "@/lib/types";

export default function Overview({ siteOptions }: { siteOptions: SiteOptions }) {
  return (
    <section id="overview" className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 lg:px-8">
      <SectionHeading title={siteOptions.overviewTitle || "Faisal Hills Overview"} center />
      <Html html={siteOptions.overviewText} className="prose prose-neutral mx-auto mt-5 max-w-none text-ink/75" />
    </section>
  );
}
