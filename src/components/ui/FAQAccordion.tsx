"use client";

import { useState } from "react";
import type { Faq } from "@/lib/types";

export default function FAQAccordion({ faqs }: { faqs: Faq[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!faqs.length) return null;

  return (
    <div className="mx-auto max-w-3xl divide-y divide-black/10 rounded-2xl border border-black/10">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={faq.title}>
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span className="text-sm font-semibold text-navy">
                {index + 1}. {faq.title}
              </span>
              <span className={`text-maroon transition ${isOpen ? "rotate-45" : ""}`}>+</span>
            </button>
            {isOpen ? (
              <div
                className="prose prose-sm max-w-none px-5 pb-5 text-ink/70"
                dangerouslySetInnerHTML={{ __html: faq.content }}
              />
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
