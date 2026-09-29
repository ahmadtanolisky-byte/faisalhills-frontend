import Image from "next/image";
import clsx from "clsx";

export default function PageHero({
  image,
  eyebrow,
  title,
  subtitle,
  className,
}: {
  image: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <section className={clsx("relative flex min-h-[360px] items-end overflow-hidden bg-navy", className)}>
      <Image src={image} alt={title} fill priority className="object-cover opacity-70" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent" />

      <div className="relative mx-auto w-full max-w-7xl px-4 pb-14 pt-32 sm:px-6 lg:px-8">
        {eyebrow ? (
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold">{eyebrow}</p>
        ) : null}
        <h1 className="font-display text-3xl font-extrabold text-white sm:text-5xl">{title}</h1>
        {subtitle ? <p className="mt-4 max-w-2xl text-base text-white/85">{subtitle}</p> : null}
      </div>
    </section>
  );
}
