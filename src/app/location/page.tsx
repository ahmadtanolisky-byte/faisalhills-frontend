import type { Metadata } from "next";
import { getLandmarks, getSiteOptions } from "@/lib/queries";
import LocationSection from "@/components/home/LocationSection";

export const metadata: Metadata = {
  title: "Location | Faisal Hills Islamabad",
};

export default async function LocationPage() {
  const [siteOptions, landmarks] = await Promise.all([getSiteOptions(), getLandmarks()]);

  return <LocationSection siteOptions={siteOptions} landmarks={landmarks} />;
}
