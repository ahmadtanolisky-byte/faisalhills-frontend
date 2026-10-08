import type { Metadata } from "next";
import { getPlots } from "@/lib/queries";
import SectionHeading from "@/components/ui/SectionHeading";
import PageHero from "@/components/ui/PageHero";
import PlotsGrid from "@/components/plots/PlotsGrid";

export const metadata: Metadata = {
  title: "Plots for Sale | Faisal Hills Islamabad",
};

export default async function PlotsPage() {
  const plots = await getPlots();

  return (
    <main className="fh-plots-page">
      <div className="fh-plots-hero">
        <PageHero
          image="/images/hero-plots.png"
          eyebrow="Verified Legal Inventory & Resale Files"
          title="Plots for Sale in Faisal Hills"
          subtitle="Explore authentic available residential & commercial plots across all sectors."
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Verified Legal Inventory & Resale Files"
          title="Plots for Sale in Faisal Hills"
          center
        />

        <p className="mx-auto mt-4 max-w-2xl text-center text-ink/70">
          Explore authentic available residential &amp; commercial plots
          across all sectors.
        </p>

        <div className="mt-10">
          <PlotsGrid plots={plots} />
        </div>
      </div>

      <style>{`
        .fh-plots-hero {
          min-height: 690px;
          height: 690px;
          overflow: hidden;
        }

        .fh-plots-hero > * {
          height: 100%;
          min-height: 690px;
        }

        @media (max-width: 560px) {
          .fh-plots-hero {
            min-height: 640px;
            height: 640px;
          }

          .fh-plots-hero > * {
            min-height: 640px;
          }
        }
      `}</style>
    </main>
  );
}