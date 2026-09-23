import Link from "next/link";

export const metadata = {
  title: "About",
  description:
    "About Sushil Narang — educator teaching Artificial Intelligence courses at Chitkara University.",
};

export default function AboutPage() {
  return (
    <div className="container narrow">
      <elevenlabs-convai agent-id="agent_3601m34ez0y7e0b8bmy5kgm77dce"></elevenlabs-convai><script src="https://unpkg.com/@elevenlabs/convai-widget-embed" async type="text/javascript"></script>
      <section className="about">
        <div className="about-avatar" aria-hidden="true">
          SN
        </div>

        <h1 className="page-title">About me</h1>

        <div className="post-content">
          <p className="lead">
            I&apos;m <strong>Sushil Narang</strong>, an educator at{" "}
            <strong>Chitkara University</strong>, where I teach courses on
            Artificial Intelligence.
          </p>

          <p>
            My days are spent moving between lecture halls and labs — from the
            foundations of machine learning to large language models and
            generative AI. I care less about slides full of equations and more
            about the moment a student finally sees <em>why</em> a model
            behaves the way it does.
          </p>

          <h2>What I teach</h2>
          <ul>
            <li>Foundations of Artificial Intelligence &amp; Machine Learning</li>
            <li>Deep Learning and Neural Networks</li>
            <li>Natural Language Processing</li>
            <li>Generative AI, LLMs and prompt engineering</li>
            <li>Applied AI projects and capstones</li>
          </ul>

          <h2>Why I write</h2>
          <p>
            <em>My Diary</em> started as a personal habit — after every
            semester I&apos;d write down what worked, what confused students,
            and what I&apos;d change. I decided to keep those notes public.
            If you&apos;re a fellow educator, a student, or simply curious
            about AI, I hope something here is useful to you.
          </p>

          <h2>Say hello</h2>
          <p>
            Questions, ideas, or a story from your own classroom? Feel free to
            reach out — I read every message.
          </p>

          <p>
            <Link href="/" className="button">
              Read the latest entries →
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
