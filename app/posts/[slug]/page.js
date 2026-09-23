import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPost, renderMarkdown, formatDate } from "@/lib/posts";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Entry not found" };
  return {
    title: post.title,
    description: post.excerpt || `An entry by Sushil Narang on My Diary.`,
  };
}

export default async function PostPage({ params }) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) notFound();

  const html = renderMarkdown(post.content);
  const allPosts = getAllPosts();
  const index = allPosts.findIndex((p) => p.slug === post.slug);
  const newer = index > 0 ? allPosts[index - 1] : null;
  const older = index < allPosts.length - 1 ? allPosts[index + 1] : null;

  return (
    <div className="container narrow">
      <article className="post">
        <header className="post-header">
          <div className="post-card-meta">
            <time dateTime={post.date ?? undefined}>{formatDate(post.date)}</time>
            <span aria-hidden="true">·</span>
            <span>{post.readingMinutes} min read</span>
          </div>
          <h1 className="post-title">{post.title}</h1>
          <p className="post-byline">Written by Sushil Narang</p>
          {post.tags.length > 0 && (
            <div className="tag-row">
              {post.tags.map((tag) => (
                <Link key={tag} href={`/tags/${encodeURIComponent(tag)}`} className="tag">
                  {tag}
                </Link>
              ))}
            </div>
          )}
        </header>

        <div className="post-content" dangerouslySetInnerHTML={{ __html: html }} />
      </article>

      <nav className="post-pager" aria-label="More entries">
        {older ? (
          <Link href={`/posts/${older.slug}`} className="pager-link">
            <span className="pager-label">← Previous entry</span>
            <span className="pager-title">{older.title}</span>
          </Link>
        ) : (
          <span />
        )}
        {newer ? (
          <Link href={`/posts/${newer.slug}`} className="pager-link right">
            <span className="pager-label">Next entry →</span>
            <span className="pager-title">{newer.title}</span>
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </div>
  );
}
