import Link from "next/link";

export const metadata = {
  title: "About",
  description:
    "About Sushil Narang — Ph.D., Professor at Chitkara University teaching Artificial Intelligence, AI researcher and applied AI systems architect with 30+ years of experience.",
};

const TEACHES = [
  "Foundations of Artificial Intelligence & Machine Learning",
  "Deep Learning and Neural Networks",
  "Natural Language Processing",
  "Generative AI, LLMs and prompt engineering",
  "Applied AI projects and capstones",
];

const BUILDS = [
  [
    "AI defect detection for industry",
    "A machine-vision system for Tynor, one of India's largest orthopedic product manufacturers — cameras, an NVIDIA Jetson and object-detection models sorting kneecaps by quality and size in real time.",
  ],
  [
    "Secure AI for DRDO",
    "An airgap wireless assessment platform for DRDO's recruitment process, with a generative AI model that reads candidate profiles and suggests tailored interview questions — with no internet connectivity anywhere in the loop.",
  ],
  [
    "Conversational finance AI",
    "A financial analytics and conversational AI platform for the Finvasia Group, turning bank statements into insights people can actually act on.",
  ],
  [
    "sahirah.in",
    "My own psychometric and career-guidance platform, helping school students pick the right stream and career path through behavioural analytics and AI-generated reports.",
  ],
  [
    "MindGlyph",
    "An iOS mental-health companion that lives entirely on your device — no cloud, all intelligence on-device.",
  ],
];

export default function AboutPage() {
  return (
    <div className="container narrow">
      <elevenlabs-convai agent-id="agent_3601m34ez0y7e0b8bmy5kgm77dce"></elevenlabs-convai><script src="https://unpkg.com/@elevenlabs/convai-widget-embed" async type="text/javascript"></script>
      <section className="about">
        <div className="about-avatar">
          <img
            src="/sushil-narang.jpg"
            alt="Portrait of Sushil Narang"
            width={216}
            height={216}
          />
        </div>

        <h1 className="page-title">About me</h1>

        <div className="post-content">
          <p className="lead">
            I&apos;m <strong>Dr. Sushil Narang</strong> — an AI researcher,
            educator and applied AI systems architect. I&apos;m a{" "}
            <strong>Professor at Chitkara University</strong>, where I teach
            courses on Artificial Intelligence, and I hold a{" "}
            <strong>Ph.D. in Computer Science</strong> from Panjab University,
            Chandigarh.
          </p>

          <p>
            I&apos;ve been in tech for over 30 years — I started out writing
            enterprise software in the mid-nineties, spent two decades in
            academia, and now I work where research, teaching and industry meet.
            These days that means moving between lecture halls and labs — from
            the foundations of machine learning to large language models and
            generative AI — while building AI systems for real organisations. I
            care less about slides full of equations and more about the moment a
            student finally sees <em>why</em> a model behaves the way it does.
          </p>

          <p>
            Outside the classroom I&apos;m an NVIDIA Certified Associate in AI
            Infrastructure &amp; Operations, I consult for companies putting AI
            to work in fintech and manufacturing, and you&apos;ll often find me
            on a panel or keynote somewhere — from Infosys and Intel to expert
            sessions at IIT Roorkee — talking about where AI, computer vision
            and NLP are heading.
          </p>

          <h2>What I teach</h2>
          <ul>
            {TEACHES.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h2>What I build</h2>
          <ul>
            {BUILDS.map(([title, text]) => (
              <li key={title}>
                <strong>{title}:</strong> {text}
              </li>
            ))}
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

          <p className="cv-contact">
            <a href="mailto:sushil.narang@outlook.com">
              sushil.narang@outlook.com
            </a>
            <span aria-hidden="true">·</span>
            <a
              href="https://www.linkedin.com/in/sushil-narang/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/sushil-narang
            </a>
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
