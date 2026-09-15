import type { Metadata } from "next";
import { getGalleryItems } from "@/lib/queries";
import SectionHeading from "@/components/ui/SectionHeading";
import PhotoGallery from "@/components/home/PhotoGallery";

export const metadata: Metadata = {
  title: "Photo Gallery | Faisal Hills Islamabad",
};

export default async function GalleryPage() {
  const items = await getGalleryItems();

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading title="On-Site Construction & Photo Gallery" center />
      <p className="mx-auto mt-4 max-w-2xl text-center text-ink/70">
        Real-time photography of Faisal Hills entrance portals, wide boulevards, Grand Jamia Mosque, and Faisal
        Jewels skyscraper construction.
      </p>
      <div className="mt-10">
        <PhotoGallery items={items} />
      </div>
    </div>
  );
}
