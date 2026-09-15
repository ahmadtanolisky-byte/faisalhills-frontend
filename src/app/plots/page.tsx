import type { Metadata } from "next";
import { getPlots } from "@/lib/queries";
import SectionHeading from "@/components/ui/SectionHeading";
import PlotsGrid from "@/components/plots/PlotsGrid";

export const metadata: Metadata = {
  title: "Plots for Sale | Faisal Hills Islamabad",
};

export default async function PlotsPage() {
  const plots = await getPlots();

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="Verified Legal Inventory & Resale Files" title="Plots for Sale in Faisal Hills" center />
      <p className="mx-auto mt-4 max-w-2xl text-center text-ink/70">
        Explore authentic available residential &amp; commercial plots across all sectors.
      </p>
      <div className="mt-10">
        <PlotsGrid plots={plots} />
      </div>
    </div>
  );
}
