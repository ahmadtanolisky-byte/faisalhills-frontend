const REST_URL = process.env.NEXT_PUBLIC_WORDPRESS_REST_URL ?? "http://localhost/faisalhills/fhwordpress/wp-json";

export interface BookingInquiryPayload {
  name: string;
  contact: string;
  requirement?: string;
}

export async function submitBookingInquiry(payload: BookingInquiryPayload): Promise<void> {
  const res = await fetch(`${REST_URL}/fh/v1/booking-inquiries`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const body = await res.json().catch(() => null);
    throw new Error(body?.message ?? "Could not submit your inquiry. Please try again.");
  }
}
