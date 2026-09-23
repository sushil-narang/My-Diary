import Link from "next/link";
import { formatDate } from "@/lib/posts";

export default function PostCard({ post }) {
  return (
    <article className="post-card">
      <div className="post-card-meta">
        <time dateTime={post.date ?? undefined}>{formatDate(post.date)}</time>
        <span aria-hidden="true">·</span>
        <span>{post.readingMinutes} min read</span>
      </div>

      <h2 className="post-card-title">
        <Link href={`/posts/${post.slug}`}>{post.title}</Link>
      </h2>

      {post.excerpt ? <p className="post-card-excerpt">{post.excerpt}</p> : null}

      {post.tags.length > 0 && (
        <div className="tag-row">
          {post.tags.map((tag) => (
            <Link key={tag} href={`/tags/${encodeURIComponent(tag)}`} className="tag">
              {tag}
            </Link>
          ))}
        </div>
      )}
    </article>
  );
}
