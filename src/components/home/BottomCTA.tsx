import type { SiteOptions } from "@/lib/types";

export default function BottomCTA({ siteOptions }: { siteOptions: SiteOptions }) {
  return (
    <section className="bg-navy py-16 text-center text-white">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl font-bold sm:text-4xl">
          {siteOptions.ctaTitle || "Ready to Secure Your Plot in Faisal Hills?"}
        </h2>
        <p className="mt-4 text-white/70">{siteOptions.ctaText}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {siteOptions.phoneNumber ? (
            <a
              href={`tel:${siteOptions.phoneNumber}`}
              className="rounded-full bg-maroon px-6 py-3 text-sm font-semibold transition hover:bg-maroon-dark"
            >
              Call Now
            </a>
          ) : null}
          {siteOptions.whatsappNumber ? (
            <a
              href={`https://wa.me/${siteOptions.whatsappNumber.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold transition hover:opacity-90"
            >
              WhatsApp
            </a>
          ) : null}
          <a
            href="/contact"
            className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold transition hover:bg-white/10"
          >
            Book a Site Visit
          </a>
        </div>
      </div>
    </section>
  );
}
