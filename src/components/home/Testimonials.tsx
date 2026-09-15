import SectionHeading from "@/components/ui/SectionHeading";
import type { Testimonial } from "@/lib/types";

export default function Testimonials({ testimonials }: { testimonials: Testimonial[] }) {
  if (!testimonials.length) return null;

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="Client Feedback" title="Testimonials" center />
      <p className="mx-auto mt-4 max-w-2xl text-center text-ink/70">
        Hear directly from overseas investors, genuine homebuyers, and commercial stakeholders about their real
        experience with Faisal Hills Islamabad.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <figure key={testimonial.title} className="rounded-xl border border-black/10 p-6">
            <div className="mb-3 text-gold" aria-hidden="true">
              {"★".repeat(testimonial.rating || 5)}
            </div>
            <blockquote className="text-sm italic text-ink/75">&ldquo;{testimonial.content.replace(/<[^>]+>/g, "")}&rdquo;</blockquote>
            <figcaption className="mt-4">
              <p className="font-semibold text-navy">{testimonial.title}</p>
              <p className="text-xs uppercase tracking-wide text-ink/50">{testimonial.role}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
