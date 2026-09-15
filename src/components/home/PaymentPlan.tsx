import Image from "next/image";
import Html from "@/components/ui/Html";
import SectionHeading from "@/components/ui/SectionHeading";
import type { SiteOptions } from "@/lib/types";

const HOW_IT_WORKS = [
  { title: "Booking Amount", text: "A percentage of total plot value is paid at the time of booking to secure your specific plot and block." },
  { title: "Down Payment", text: "A further tranche paid within 30–60 days of booking to confirm the allocation." },
  { title: "Easy Instalments", text: "The remaining balance is spread across quarterly or bi-annual instalments over 2–4 years." },
  { title: "No Frills", text: "All applicable fees (development charges, transfer fees) are disclosed upfront at the time of booking." },
];

export default function PaymentPlan({ siteOptions }: { siteOptions: SiteOptions }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <SectionHeading title="Flexible Payments, Transparent Pricing" center />
        <Html html={siteOptions.paymentPlanIntro} className="prose prose-neutral mx-auto mt-4 max-w-none text-ink/75" />
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {HOW_IT_WORKS.map((item) => (
          <div key={item.title} className="rounded-xl bg-cream p-6">
            <p className="font-display text-lg font-bold text-maroon">{item.title}</p>
            <p className="mt-2 text-sm text-ink/70">{item.text}</p>
          </div>
        ))}
      </div>

      {siteOptions.paymentPlanImage ? (
        <div className="relative mx-auto mt-12 aspect-video max-w-4xl overflow-hidden rounded-2xl border border-black/10">
          <Image src={siteOptions.paymentPlanImage} alt="Payment plan schedule" fill className="object-cover" />
        </div>
      ) : null}

      {siteOptions.paymentPlanPdfUrl ? (
        <div className="mt-6 text-center">
          <a
            href={siteOptions.paymentPlanPdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-maroon px-6 py-3 text-sm font-semibold text-white transition hover:bg-maroon-dark"
          >
            Download Plan
          </a>
        </div>
      ) : null}
    </section>
  );
}
