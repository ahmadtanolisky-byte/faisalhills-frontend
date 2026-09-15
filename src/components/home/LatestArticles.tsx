import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import type { BlogPost } from "@/lib/types";

export default function LatestArticles({ posts }: { posts: BlogPost[] }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <SectionHeading title="Our Latest Articles and News for You" />
        <Link href="/blog" className="text-sm font-semibold text-maroon underline underline-offset-4">
          View Blogs →
        </Link>
      </div>

      {posts.length ? (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="overflow-hidden rounded-xl border border-black/10 transition hover:shadow-md"
            >
              <div className="relative aspect-video bg-cream">
                {post.featuredImage?.node.sourceUrl ? (
                  <Image
                    src={post.featuredImage.node.sourceUrl}
                    alt={post.featuredImage.node.altText || post.title}
                    fill
                    className="object-cover"
                  />
                ) : null}
              </div>
              <div className="p-5">
                <p className="font-display text-lg font-bold text-navy">{post.title}</p>
                <div
                  className="prose prose-sm mt-2 line-clamp-2 max-w-none text-ink/60"
                  dangerouslySetInnerHTML={{ __html: post.excerpt }}
                />
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p className="mt-8 text-ink/60">Articles and market guides will be published soon.</p>
      )}
    </section>
  );
}
