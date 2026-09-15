const ITEMS = [
  "FAISAL HILLS ISLAMABAD",
  "100% RDA APPROVED SOCIETY",
  "LUXURY LIVING AT MARGALLA FOOTHILLS",
  "225FT MAIN BOULEVARD ACCESS",
  "PREMIUM RESIDENTIAL & COMMERCIAL PLOTS",
  "A PROJECT BY ZEDEM INTERNATIONAL",
  "HIGH-ROI SECURE PROPERTY INVESTMENT",
  "IMMEDIATE POSSESSION & CONSTRUCTION READY",
];

export default function MarqueeTicker() {
  const line = ITEMS.join("  •  ") + "  •  ";

  return (
    <div className="overflow-hidden border-y border-maroon/20 bg-cream py-3">
      <div className="marquee-track flex w-max whitespace-nowrap text-sm font-semibold tracking-wide text-maroon">
        <span className="pr-4">{line}</span>
        <span className="pr-4" aria-hidden="true">
          {line}
        </span>
      </div>
    </div>
  );
}
