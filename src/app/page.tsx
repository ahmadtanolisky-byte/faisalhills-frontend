import { getHomePageData } from "@/lib/queries";
import Hero from "@/components/home/Hero";
import StatsStrip from "@/components/home/StatsStrip";
import ChairmanMessage from "@/components/home/ChairmanMessage";
import MarqueeTicker from "@/components/home/MarqueeTicker";
import ZedemProjectsTicker from "@/components/home/ZedemProjectsTicker";
import Overview from "@/components/home/Overview";
import LocationSection from "@/components/home/LocationSection";
import MasterPlanMap from "@/components/home/MasterPlanMap";
import BlocksSectors from "@/components/home/BlocksSectors";
import PlotsDirectory from "@/components/home/PlotsDirectory";
import Flagships from "@/components/home/Flagships";
import PaymentPlan from "@/components/home/PaymentPlan";
import BookingSteps from "@/components/home/BookingSteps";
import InvestmentBenefits from "@/components/home/InvestmentBenefits";
import Amenities from "@/components/home/Amenities";
import Testimonials from "@/components/home/Testimonials";
import PhotoGallery from "@/components/home/PhotoGallery";
import FaisaltownStats from "@/components/home/FaisaltownStats";
import LatestArticles from "@/components/home/LatestArticles";
import FAQAccordion from "@/components/ui/FAQAccordion";
import BottomCTA from "@/components/home/BottomCTA";
import SectionHeading from "@/components/ui/SectionHeading";
import Html from "@/components/ui/Html";

export default async function HomePage() {
  const data = await getHomePageData();
  const { siteOptions } = data;

  return (
    <>
      <Hero siteOptions={siteOptions} />
      <StatsStrip stats={data.stats.nodes} />
      <ChairmanMessage siteOptions={siteOptions} />
      <MarqueeTicker />
      <ZedemProjectsTicker projects={data.zedemProjects.nodes} />
      <Overview siteOptions={siteOptions} />
      <LocationSection siteOptions={siteOptions} landmarks={data.landmarks.nodes} />
      <MasterPlanMap siteOptions={siteOptions} />
      <BlocksSectors blocks={data.blocks.nodes} />
      <PlotsDirectory plots={data.plots.nodes} />
      <Flagships flagships={data.flagships.nodes} />
      <PaymentPlan siteOptions={siteOptions} />
      <BookingSteps steps={data.bookingSteps.nodes} siteOptions={siteOptions} />
      <InvestmentBenefits benefits={data.benefits.nodes} siteOptions={siteOptions} />
      <Amenities amenities={data.amenities.nodes} siteOptions={siteOptions} />
      <Testimonials testimonials={data.testimonials.nodes} />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading title="On-Site Construction & Photo Gallery" center />
          <Html html={siteOptions.galleryIntro} className="prose prose-neutral mx-auto mt-4 max-w-none text-ink/75" />
        </div>
        <div className="mt-10">
          <PhotoGallery items={data.galleryItems.nodes} />
        </div>
      </section>

      <FaisaltownStats stats={data.faisaltownStats.nodes} />
      <LatestArticles posts={data.posts.nodes} />

      <section className="bg-cream py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="FAQ's" title="Frequently Asked Questions" center />
          <div className="mt-10">
            <FAQAccordion faqs={data.faqs.nodes} />
          </div>
        </div>
      </section>

      <BottomCTA siteOptions={siteOptions} />
    </>
  );
}
