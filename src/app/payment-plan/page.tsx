import type { Metadata } from "next";
import { getBookingSteps, getSiteOptions } from "@/lib/queries";
import PaymentPlan from "@/components/home/PaymentPlan";
import BookingSteps from "@/components/home/BookingSteps";

export const metadata: Metadata = {
  title: "Payment Plan | Faisal Hills Islamabad",
};

export default async function PaymentPlanPage() {
  const [siteOptions, steps] = await Promise.all([getSiteOptions(), getBookingSteps()]);

  return (
    <div>
      <PaymentPlan siteOptions={siteOptions} />
      <BookingSteps steps={steps} siteOptions={siteOptions} />
    </div>
  );
}
