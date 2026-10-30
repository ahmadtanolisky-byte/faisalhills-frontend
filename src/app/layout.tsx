import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import { getSiteOptions } from "@/lib/queries";

// Self-hosted (not next/font/google) so builds don't depend on fetching from Google Fonts.
const bodyFont = localFont({
  src: "./fonts/inter-latin-wght-normal.woff2",
  variable: "--font-body",
  weight: "100 900",
  display: "swap",
});

const displayFont = localFont({
  src: "./fonts/playfair-display-latin-wght-normal.woff2",
  variable: "--font-display",
  weight: "400 900",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Faisal Hills Islamabad | Plots, Prices, NOC & Location Guide",
  description:
    "Faisal Hills Islamabad – RDA-approved housing society. Explore plot sizes, prices, payment plan, NOC & location map. ",
     keywords: [
    "faisal hills islamabad",
    
  ],
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const siteOptions = await getSiteOptions().catch(() => null);

  return (
    <html lang="en" className={`${bodyFont.variable} ${displayFont.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Header siteOptions={siteOptions} />
        <main className="flex-1">{children}</main>
        <Footer siteOptions={siteOptions} />
        <WhatsAppButton whatsappNumber={siteOptions?.whatsappNumber} />
      </body>
    </html>
  );
}
