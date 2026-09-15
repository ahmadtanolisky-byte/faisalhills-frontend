import Image from "next/image";
import BookingForm from "./BookingForm";
import type { SiteOptions } from "@/lib/types";

export default function Hero({ siteOptions }: { siteOptions: SiteOptions }) {
  return (
    <section className="relative flex min-h-[640px] items-end overflow-hidden bg-navy">
      {siteOptions.heroImage ? (
        <Image
          src={siteOptions.heroImage}
          alt={siteOptions.heroTitle || "Faisal Hills Islamabad"}
          fill
          priority
          className="object-cover opacity-70"
        />
      ) : (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#1a2238,_#0b1220_70%)]" />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />

      <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-4 pb-16 pt-32 sm:px-6 lg:grid-cols-[1.4fr_1fr] lg:px-8">
        <div className="self-end">
          <h1 className="font-display text-4xl font-extrabold text-white sm:text-6xl">
            {siteOptions.heroTitle || "Faisal Hills Islamabad"}
          </h1>
          {siteOptions.heroSubtitle ? (
            <p className="mt-4 max-w-xl text-lg text-white/85">{siteOptions.heroSubtitle}</p>
          ) : null}
        </div>

        <div className="self-end">
          <BookingForm />
        </div>
      </div>
    </section>
  );
}
