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
  title: "Faisal Hills Islamabad | Official Master Plan, Plots & Prices",
  description:
    "Faisal Hills Islamabad by Zedem International — official pricing, payment plan, master plan and plot booking guide.",
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
