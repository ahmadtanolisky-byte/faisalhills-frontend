import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getPosts } from "@/lib/queries";
import SectionHeading from "@/components/ui/SectionHeading";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Blog | Faisal Hills Islamabad",
};

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <main className="fh-blog-page">
      <div className="fh-blog-hero">
        <PageHero
          image="/images/hero-blog.png"
          eyebrow="Blog"
          title="Articles and News for You"
          subtitle="Insights, updates and developments related to Faisal Hills Islamabad."
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading title="Articles and News for You" center />

        <p className="mx-auto mt-4 max-w-2xl text-center text-ink/70">
          Stay updated with our latest articles and news covering insights,
          updates, and developments related to Faisal Hills.
        </p>

        {posts.length ? (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
                  <p className="font-display text-lg font-bold text-navy">
                    {post.title}
                  </p>

                  <div
                    className="prose prose-sm mt-2 line-clamp-2 max-w-none text-ink/60"
                    dangerouslySetInnerHTML={{ __html: post.excerpt }}
                  />
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="mt-10 text-center text-ink/60">
            Articles and market guides will be published soon.
          </p>
        )}
      </div>

      <style>{`
        .fh-blog-hero {
          min-height: 690px;
          height: 690px;
          overflow: hidden;
        }

        .fh-blog-hero > * {
          height: 100%;
          min-height: 690px;
        }

        @media (max-width: 560px) {
          .fh-blog-hero {
            min-height: 640px;
            height: 640px;
          }

          .fh-blog-hero > * {
            min-height: 640px;
          }
        }
      `}</style>
    </main>
  );
}