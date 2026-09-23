import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container narrow">
      <div className="not-found">
        <p className="hero-eyebrow">404</p>
        <h1 className="page-title">This page isn&apos;t in the diary</h1>
        <p className="page-intro">
          The entry you&apos;re looking for may have been moved or renamed.
        </p>
        <Link href="/" className="button">
          Back to My Diary
        </Link>
      </div>
    </div>
  );
}
