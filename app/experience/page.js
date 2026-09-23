import CvNav from "@/components/CvNav";

export const metadata = {
  title: "Experience",
  description:
    "Professional experience of Sushil Narang — Professor at Chitkara University, with earlier academic and software engineering roles since 1995.",
};

const ROLES = [
  {
    title: "Professor",
    org: "Department of Computer Science & Engineering, Chitkara University, Punjab",
    period: "July 16, 2019 – Present",
    points: [
      "Leading cross-disciplinary research initiatives focused on AI-driven solutions for real-world challenges, fostering collaborations between academia and industry.",
      "Mentoring postgraduate and doctoral candidates, guiding them in cutting-edge research projects and publications.",
      "Spearheading the design and delivery of innovative curricula aligned with the latest advancements in AI and machine learning.",
      "Driving institutional excellence by integrating modern teaching methodologies and ensuring adherence to quality assurance frameworks.",
    ],
  },
  {
    title: "Associate Professor",
    org: "SAS Institute of Information Technology & Research, Mohali",
    period: "October 1, 2011 – July 15, 2019",
    points: [
      "Developed and implemented comprehensive academic programs, emphasizing innovative approaches in AI, ML, and data-driven technologies.",
      "Coordinated research strategies, resulting in successful delivery of high-impact projects across domains such as finance, education, and healthcare.",
      "Supervised industrial training and projects for postgraduate students, ensuring practical application of theoretical knowledge.",
      "Established connections with industry partners to facilitate guest lectures, campus placements, and industry visits.",
    ],
  },
  {
    title: "Assistant Professor",
    org: "SAS Institute of Information Technology & Research, Mohali",
    period: "September 20, 2006 – September 30, 2011",
    points: [
      "Delivered specialized courses in object-oriented analysis, relational databases, and machine learning fundamentals.",
      "Acted as a project guide, enabling students to develop and present industrial-grade AI and software solutions.",
      "Liaised with industry leaders to align academic offerings with emerging technological trends.",
    ],
  },
  {
    title: "Lecturer",
    org: "Mukand Lal National College, Yamuna Nagar",
    period: "July 2003 – August 2006",
    points: [
      "Trained students in advanced object-oriented design and software development techniques.",
      "Led the development of institutional software, including online examination systems and resume-processing tools.",
      "Presented research papers at state-level conferences, contributing to academic discourse.",
    ],
  },
  {
    title: "Lecturer",
    org: "Maharaja Agrasen College, Jagadhri",
    period: "July 2001 – July 2003",
    points: [
      "Taught data structures and microprocessor systems to undergraduate and graduate students.",
      "Implemented network infrastructure and supervised its administration for enhanced operational efficiency.",
    ],
  },
  {
    title: "Software Engineer",
    org: "Magnus IT Solutions, Lucknow",
    period: "July 1995 – August 1996",
    points: [
      "Designed and developed enterprise-grade software using tools like Rational Rose and Oracle SQL/PLSQL.",
      "Managed network administration for multi-platform environments, ensuring seamless operations and security.",
    ],
  },
];

export default function ExperiencePage() {
  return (
    <div className="container">
      <h1 className="page-title">Experience</h1>
      <p className="page-intro">
        Three decades of academic leadership and applied software work — from
        first lecture hall in 2001 to professor and research lead today.
      </p>

      <CvNav active="/experience" />

      <div className="cv-roles">
        {ROLES.map((role) => (
          <article className="cv-role" key={role.title + role.period}>
            <h2 className="cv-role-title">{role.title}</h2>
            <p className="cv-role-org">{role.org}</p>
            <p className="cv-role-period">{role.period}</p>
            <ul>
              {role.points.map((point) => (
                <li key={point.slice(0, 40)}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}
