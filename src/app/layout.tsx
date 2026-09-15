import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import { getSiteOptions } from "@/lib/queries";

const bodyFont = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const displayFont = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
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
