import Link from "next/link";
import { getAllTags } from "@/lib/posts";

export const metadata = {
  title: "Topics",
  description: "Browse My Diary entries by topic — AI, machine learning, teaching and more.",
};

export default function TagsPage() {
  const tags = getAllTags();

  return (
    <div className="container narrow">
      <h1 className="page-title">Topics</h1>
      <p className="page-intro">
        Every entry in My Diary, grouped by what it&apos;s about.
      </p>

      {tags.length === 0 ? (
        <p className="empty-state">No topics yet.</p>
      ) : (
        <div className="tag-directory">
          {tags.map((tag) => (
            <Link
              key={tag.name}
              href={`/tags/${encodeURIComponent(tag.name)}`}
              className="tag-directory-item"
            >
              <span>{tag.name}</span>
              <span className="tag-count">
                {tag.count} {tag.count === 1 ? "entry" : "entries"}
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
