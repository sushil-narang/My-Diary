import Link from "next/link";
import { notFound } from "next/navigation";
import PostCard from "@/components/PostCard";
import { getAllTags, getPostsByTag } from "@/lib/posts";

export function generateStaticParams() {
  return getAllTags().map((tag) => ({ tag: encodeURIComponent(tag.name) }));
}

export async function generateMetadata({ params }) {
  const { tag } = await params;
  return { title: `Topic: ${decodeURIComponent(tag)}` };
}

export default async function TagPage({ params }) {
  const { tag } = await params;
  const tagName = decodeURIComponent(tag);
  const posts = getPostsByTag(tagName);

  if (posts.length === 0) notFound();

  return (
    <div className="container">
      <div className="container narrow" style={{ padding: 0 }}>
        <h1 className="page-title">Topic: {tagName}</h1>
        <p className="page-intro">
          {posts.length} {posts.length === 1 ? "entry" : "entries"} filed under
          this topic.{" "}
          <Link href="/tags" className="inline-link">
            All topics →
          </Link>
        </p>
      </div>

      <section className="post-list" aria-label={`Entries tagged ${tagName}`}>
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </section>
    </div>
  );
}
