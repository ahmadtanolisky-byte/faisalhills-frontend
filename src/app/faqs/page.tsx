import type { Metadata } from "next";
import { getFaqs } from "@/lib/queries";
import SectionHeading from "@/components/ui/SectionHeading";
import PageHero from "@/components/ui/PageHero";
import FAQAccordion from "@/components/ui/FAQAccordion";

export const metadata: Metadata = {
  title: "FAQs | Faisal Hills Islamabad",
};

export default async function FaqsPage() {
  const faqs = await getFaqs();

  return (
    <main className="fh-faqs-page">
      <div className="fh-faqs-hero">
        <PageHero
          image="/images/hero-faqs.png"
          eyebrow="FAQ's"
          title="Frequently Asked Questions"
          subtitle="Answers to common questions about plots, payments and booking at Faisal Hills."
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ's"
          title="Frequently Asked Questions"
          center
        />

        <div className="mt-10">
          <FAQAccordion faqs={faqs} />
        </div>
      </div>

      <style>{`
        .fh-faqs-hero {
          min-height: 690px;
          height: 690px;
          overflow: hidden;
        }

        .fh-faqs-hero > * {
          height: 100%;
          min-height: 690px;
        }

        @media (max-width: 560px) {
          .fh-faqs-hero {
            min-height: 640px;
            height: 640px;
          }

          .fh-faqs-hero > * {
            min-height: 640px;
          }
        }
      `}</style>
    </main>
  );
}