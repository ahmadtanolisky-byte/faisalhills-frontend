"use client";

import { useState, type FormEvent } from "react";
import { submitBookingInquiry } from "@/lib/booking";

type Status = "idle" | "submitting" | "success" | "error";

export default function BookingForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    setStatus("submitting");
    setError(null);

    try {
      await submitBookingInquiry({
        name: String(data.get("name") ?? ""),
        contact: String(data.get("contact") ?? ""),
        requirement: String(data.get("requirement") ?? ""),
      });
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl bg-white/95 p-6 text-center shadow-xl">
        <p className="font-display text-lg font-bold text-navy">Thank you!</p>
        <p className="mt-1 text-sm text-ink/70">
          Your booking inquiry has been received. Our sales desk will contact you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3 rounded-2xl bg-white/95 p-6 shadow-xl">
      <p className="font-display text-lg font-bold text-navy">Book Your Plot / Flat</p>
      <p className="text-sm text-ink/70">Get official pricing, payment plan &amp; plot selection guide.</p>
      <input
        name="name"
        required
        placeholder="Full Name"
        className="w-full rounded-lg border border-black/10 px-4 py-2.5 text-sm outline-none focus:border-maroon"
      />
      <input
        name="contact"
        required
        placeholder="Email / WhatsApp"
        className="w-full rounded-lg border border-black/10 px-4 py-2.5 text-sm outline-none focus:border-maroon"
      />
      <textarea
        name="requirement"
        placeholder="Any Specific Requirement"
        rows={3}
        className="w-full rounded-lg border border-black/10 px-4 py-2.5 text-sm outline-none focus:border-maroon"
      />
      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-lg bg-maroon py-3 text-sm font-semibold text-white transition hover:bg-maroon-dark disabled:opacity-60"
      >
        {status === "submitting" ? "Submitting..." : "Submit Booking Inquiry"}
      </button>
      {error ? <p className="text-xs text-red-600">{error}</p> : null}
      <p className="text-center text-xs text-ink/50">Your information is 100% secure</p>
    </form>
  );
}
