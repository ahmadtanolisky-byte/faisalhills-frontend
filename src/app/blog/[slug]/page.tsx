import { notFound } from "next/navigation";
import Image from "next/image";
import { getPostBySlug, getPosts } from "@/lib/queries";
import Html from "@/components/ui/Html";

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <p className="text-xs font-semibold uppercase tracking-wide text-maroon">
        {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
      </p>
      <h1 className="mt-2 font-display text-3xl font-bold text-navy sm:text-4xl">{post.title}</h1>

      {post.featuredImage?.node.sourceUrl ? (
        <div className="relative mt-8 aspect-video overflow-hidden rounded-2xl">
          <Image
            src={post.featuredImage.node.sourceUrl}
            alt={post.featuredImage.node.altText || post.title}
            fill
            className="object-cover"
          />
        </div>
      ) : null}

      <Html html={post.content} className="prose prose-neutral mt-8 max-w-none" />
    </article>
  );
}
