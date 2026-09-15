import type { Metadata } from "next";
import { getSiteOptions } from "@/lib/queries";
import ChairmanMessage from "@/components/home/ChairmanMessage";
import Overview from "@/components/home/Overview";

export const metadata: Metadata = {
  title: "About Faisal Hills Islamabad",
};

export default async function AboutPage() {
  const siteOptions = await getSiteOptions();

  return (
    <div>
      <ChairmanMessage siteOptions={siteOptions} />
      <Overview siteOptions={siteOptions} />
    </div>
  );
}
