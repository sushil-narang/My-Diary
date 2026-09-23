import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>
          © {new Date().getFullYear()} Sushil Narang · Educator, Artificial
          Intelligence · Chitkara University
        </p>
        <p className="footer-links">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/profile">Profile</Link>
          <Link href="/experience">Experience</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/publications">Publications</Link>
          <Link href="/talks">Talks</Link>
          <Link href="/tags">Topics</Link>
        </p>
      </div>
    </footer>
  );
}
