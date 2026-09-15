import type { Metadata } from "next";
import { getBlocks, getSiteOptions } from "@/lib/queries";
import MasterPlanMap from "@/components/home/MasterPlanMap";
import BlocksSectors from "@/components/home/BlocksSectors";

export const metadata: Metadata = {
  title: "Master Plan | Faisal Hills Islamabad",
};

export default async function MasterPlanPage() {
  const [siteOptions, blocks] = await Promise.all([getSiteOptions(), getBlocks()]);

  return (
    <div>
      <MasterPlanMap siteOptions={siteOptions} />
      <BlocksSectors blocks={blocks} />
    </div>
  );
}
