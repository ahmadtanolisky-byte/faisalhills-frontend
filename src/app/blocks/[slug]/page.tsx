import { notFound } from "next/navigation";
import { getBlockBySlug, getBlocks } from "@/lib/queries";
import Html from "@/components/ui/Html";
import SectionHeading from "@/components/ui/SectionHeading";

export async function generateStaticParams() {
  const blocks = await getBlocks();
  return blocks.map((block) => ({ slug: block.slug }));
}

export default async function BlockPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const block = await getBlockBySlug(slug);

  if (!block) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading eyebrow={block.status} title={block.title} />
      <Html html={block.content} className="prose prose-neutral mt-6 max-w-none text-ink/75" />
      {block.link ? (
        <a
          href={block.link}
          className="mt-6 inline-block rounded-full bg-maroon px-6 py-3 text-sm font-semibold text-white transition hover:bg-maroon-dark"
        >
          Explore Sector
        </a>
      ) : null}
    </div>
  );
}
