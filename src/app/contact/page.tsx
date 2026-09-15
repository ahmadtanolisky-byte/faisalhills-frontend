import type { Metadata } from "next";
import { getSiteOptions } from "@/lib/queries";
import SectionHeading from "@/components/ui/SectionHeading";
import BookingForm from "@/components/home/BookingForm";

export const metadata: Metadata = {
  title: "Contact Us | Faisal Hills Islamabad",
};

export default async function ContactPage() {
  const siteOptions = await getSiteOptions();

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="Get In Touch" title="Ready to Secure Your Plot in Faisal Hills?" center />
      <p className="mx-auto mt-4 max-w-2xl text-center text-ink/70">
        Connect directly with our authorized sales desk to choose your desired sector, inspect plot availability, or
        schedule a physical on-site visit.
      </p>

      <div className="mt-12 grid gap-10 lg:grid-cols-2">
        <div className="space-y-4">
          {siteOptions.address ? (
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-maroon">Address</p>
              <p className="mt-1 text-ink/80">{siteOptions.address}</p>
            </div>
          ) : null}
          {siteOptions.phoneNumber ? (
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-maroon">Phone</p>
              <a href={`tel:${siteOptions.phoneNumber}`} className="mt-1 block text-ink/80 hover:text-maroon">
                {siteOptions.phoneNumber}
              </a>
            </div>
          ) : null}
          {siteOptions.whatsappNumber ? (
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-maroon">WhatsApp</p>
              <a
                href={`https://wa.me/${siteOptions.whatsappNumber.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 block text-ink/80 hover:text-maroon"
              >
                {siteOptions.whatsappNumber}
              </a>
            </div>
          ) : null}
          {siteOptions.email ? (
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-maroon">Email</p>
              <a href={`mailto:${siteOptions.email}`} className="mt-1 block text-ink/80 hover:text-maroon">
                {siteOptions.email}
              </a>
            </div>
          ) : null}
        </div>

        <BookingForm />
      </div>
    </div>
  );
}
