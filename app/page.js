import Link from "next/link";
import PostCard from "@/components/PostCard";
import LandingHero from "@/components/LandingHero";
import TopicMarquee from "@/components/TopicMarquee";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import { getAllPosts, getAllTags } from "@/lib/posts";

export default function HomePage() {
  const posts = getAllPosts();
  const tags = getAllTags();
  const totalMinutes = posts.reduce((sum, post) => sum + post.readingMinutes, 0);

  const marqueeItems = [
    ...tags.map((tag) => `#${tag.name}`),
    "teaching AI",
    "classroom notes",
    "lessons that worked",
    "reflections",
    "where AI is heading",
  ];

  return (
    <div className="container landing">
      <LandingHero tags={tags} />

      <TopicMarquee items={marqueeItems} />

      <section className="stats-band" aria-label="Diary statistics">
        <div className="stat">
          <span className="stat-num">
            <CountUp to={posts.length} />
          </span>
          <span className="stat-label">Entries written</span>
        </div>
        <div className="stat">
          <span className="stat-num">
            <CountUp to={tags.length} />
          </span>
          <span className="stat-label">Topics explored</span>
        </div>
        <div className="stat">
          <span className="stat-num">
            <CountUp to={totalMinutes} suffix=" min" />
          </span>
          <span className="stat-label">Of reading, give or take</span>
        </div>
      </section>

      <section id="latest" className="latest-section" aria-label="Latest posts">
        <Reveal className="section-head">
          <h2 className="section-title">Latest entries</h2>
          <Link className="section-link" href="/tags">
            Browse all topics →
          </Link>
        </Reveal>

        {posts.length === 0 ? (
          <p className="empty-state">
            No entries yet. Add a Markdown file to the <code>posts/</code>{" "}
            folder to get started.
          </p>
        ) : (
          <div className="landing-grid">
            {posts.map((post, index) => (
              <Reveal key={post.slug} delay={(index % 3) * 100}>
                <PostCard post={post} />
              </Reveal>
            ))}
          </div>
        )}
      </section>

      <section className="about-teaser">
        <Reveal className="about-teaser-art">
          <img
            src="/illustration-desk.svg"
            alt="Illustration of a desk with an open notebook, a pencil, coffee and a small plant"
            width={700}
            height={480}
            loading="lazy"
          />
        </Reveal>

        <Reveal className="about-teaser-copy" delay={140}>
          <p className="hero-eyebrow">Who&apos;s writing</p>
          <h2 className="page-title">Hi, I&apos;m Sushil — I teach AI.</h2>
          <p className="lead">
            I spend my weeks with students who are curious about artificial
            intelligence and unsure where to start. These pages are the
            notebook I keep alongside them — half lesson plan, half thinking
            out loud.
          </p>
          <Link className="button" href="/about">
            More about me
          </Link>
        </Reveal>
      </section>

      <section className="topics-block" aria-label="Browse topics">
        <Reveal className="topics-copy">
          <h2 className="section-title">Dig into a topic</h2>
          <p className="topics-note">
            Every entry is tagged. Pick a thread and start pulling.
          </p>
          <Link className="section-link" href="/tags">
            See all topics →
          </Link>
        </Reveal>

        <Reveal className="tag-row" delay={120}>
          {tags.map((tag) => (
            <Link
              key={tag.name}
              href={`/tags/${encodeURIComponent(tag.name)}`}
              className="tag"
            >
              {tag.name} <span className="tag-count">{tag.count}</span>
            </Link>
          ))}
        </Reveal>
      </section>
    </div>
  );
}
