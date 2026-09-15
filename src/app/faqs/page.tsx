import type { Metadata } from "next";
import { getFaqs } from "@/lib/queries";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQAccordion from "@/components/ui/FAQAccordion";

export const metadata: Metadata = {
  title: "FAQs | Faisal Hills Islamabad",
};

export default async function FaqsPage() {
  const faqs = await getFaqs();

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="FAQ's" title="Frequently Asked Questions" center />
      <div className="mt-10">
        <FAQAccordion faqs={faqs} />
      </div>
    </div>
  );
}
