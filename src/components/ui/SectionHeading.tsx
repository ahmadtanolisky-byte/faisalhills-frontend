import clsx from "clsx";

export default function SectionHeading({
  eyebrow,
  title,
  center = false,
  light = false,
  className,
}: {
  eyebrow?: string;
  title: string;
  center?: boolean;
  light?: boolean;
  className?: string;
}) {
  return (
    <div className={clsx(center && "text-center", className)}>
      {eyebrow ? (
        <p className={clsx("mb-2 text-xs font-semibold tracking-[0.2em] uppercase", light ? "text-gold" : "text-maroon")}>
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={clsx(
          "font-display text-3xl font-bold sm:text-4xl",
          light ? "text-white" : "text-navy"
        )}
      >
        {title}
      </h2>
    </div>
  );
}
