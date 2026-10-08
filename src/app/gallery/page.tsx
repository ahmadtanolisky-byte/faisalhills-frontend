import type { Metadata } from "next";
import { getGalleryItems } from "@/lib/queries";
import SectionHeading from "@/components/ui/SectionHeading";
import PageHero from "@/components/ui/PageHero";
import PhotoGallery from "@/components/home/PhotoGallery";

export const metadata: Metadata = {
  title: "Photo Gallery | Faisal Hills Islamabad",
  description:
    "Photos of Faisal Hills Islamabad: main entrance, boulevard, Grand Jamia Mosque, parks, Hill Walk, aerial master plan and Faisal Jewel.",
};

export default async function GalleryPage() {
  const items = await getGalleryItems().catch(() => []);

  return (
    <main className="fh-gallery-page">
      <div className="fh-gallery-hero">
        <PageHero
          image="/images/hero-gallery.png"
          eyebrow="Photo Gallery"
          title="On-Site Construction & Photo Gallery"
          subtitle="Photos and renders of the Faisal Hills entrance, boulevards, mosque, parks and flagship projects."
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading title="On-Site Construction & Photo Gallery" center />

        <p className="mx-auto mt-4 max-w-2xl text-center text-ink/70">
          See Faisal Hills on the ground and from above: the main entrance,
          the 225-ft boulevard, the Grand Jamia Mosque, parks and the Hill
          Walk, alongside the aerial master plan and renders of the Faisal
          Jewel towers.
        </p>

        <div className="mt-10">
          <PhotoGallery items={items} />
        </div>
      </div>

      <style>{`
        .fh-gallery-hero {
          min-height: 690px;
          height: 690px;
          overflow: hidden;
        }

        .fh-gallery-hero > * {
          height: 100%;
          min-height: 690px;
        }

        @media (max-width: 560px) {
          .fh-gallery-hero {
            min-height: 640px;
            height: 640px;
          }

          .fh-gallery-hero > * {
            min-height: 640px;
          }
        }
      `}</style>
    </main>
  );
}