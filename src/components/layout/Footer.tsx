import Link from "next/link";
import { NAV_LINKS } from "@/lib/nav";
import type { SiteOptions } from "@/lib/types";

export default function Footer({ siteOptions }: { siteOptions: SiteOptions | null }) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <h3 className="font-display text-xl font-bold text-white">
            Faisal Hills <span className="text-gold">Islamabad</span>
          </h3>
          <p className="mt-3 max-w-xs text-sm leading-relaxed">
            A thoughtfully planned gated community by Zedem International, located in Taxila along the historic GT
            Road, at the foothills of the Margalla Hills.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-gold">Quick Links</h4>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-gold">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-gold">Contact</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {siteOptions?.address ? <li>{siteOptions.address}</li> : null}
            {siteOptions?.phoneNumber ? (
              <li>
                <a href={`tel:${siteOptions.phoneNumber}`} className="hover:text-gold">
                  {siteOptions.phoneNumber}
                </a>
              </li>
            ) : null}
            {siteOptions?.email ? (
              <li>
                <a href={`mailto:${siteOptions.email}`} className="hover:text-gold">
                  {siteOptions.email}
                </a>
              </li>
            ) : null}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-xs text-white/50">
        © {year} Faisal Hills Islamabad — Zedem International. All rights reserved.
      </div>
    </footer>
  );
}
