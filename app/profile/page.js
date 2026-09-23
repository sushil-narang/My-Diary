import Link from "next/link";
import CvNav from "@/components/CvNav";

export const metadata = {
  title: "Profile",
  description:
    "Profile of Sushil Kumar Narang — Ph.D. in Computer Science, AI and digital transformation leader with 30+ years across academia, research and applied AI systems.",
};

const PROFILE = [
  "With over 30 years of extensive experience in academia and research, I have honed my ability to deliver actionable insights through AI-driven methods and advanced data analytics. My expertise encompasses developing and implementing innovative machine learning and deep learning algorithms to solve complex problems across diverse domains.",
  "Equipped with strong leadership skills, I excel in guiding multidisciplinary teams, cultivating a collaborative environment, and driving innovative solutions. My analytical mindset and problem-solving acumen enable me to address challenges effectively and deliver impactful results. I am confident in spearheading projects that combine technology, research, and strategy to achieve organizational goals.",
  "I am highly proficient in designing and delivering cutting-edge curricula, fostering student success through the adoption of modern technology and research-driven teaching methodologies. My commitment to quality assurance in education has consistently enhanced institutional reputation and academic standards.",
  "Key achievements include developing AI-powered defect detection systems, secure assessment platforms, and conversational AI tools, demonstrating my ability to lead initiatives from ideation to execution.",
];

const EXPERTISE = [
  [
    "Data Science and Machine Learning",
    "Expertise in data-driven decision-making, predictive modeling, and personalization through advanced machine learning and deep learning algorithms.",
  ],
  [
    "Artificial Intelligence Development",
    "Proficient in designing scalable AI systems using TensorFlow, Keras, and PyTorch for varied applications including computer vision, natural language processing, and predictive analytics.",
  ],
  [
    "Leadership and Strategy",
    "Proven ability to lead cross-functional teams, mentor professionals, and execute strategies that align with business objectives and innovation goals.",
  ],
  [
    "Entrepreneurship and Visionary Thinking",
    "Experienced motivational speaker and mentor for fostering entrepreneurial mindsets and implementing forward-thinking solutions.",
  ],
  [
    "Data Analytics and Visualization",
    "Skilled in extracting actionable insights from complex datasets using advanced analytics and visualization tools.",
  ],
  [
    "Technical Tools and Frameworks",
    "Proficient in Python, MATLAB, TensorFlow, and other programming environments for developing AI and data-driven solutions.",
  ],
  [
    "Project Management",
    "Expertise in planning, designing, and delivering end-to-end solutions, ensuring quality standards, and achieving project milestones.",
  ],
  [
    "Research and Innovation",
    "Extensive experience in academic and industrial research, with a focus on applying AI to solve real-world challenges and improve operational efficiencies.",
  ],
];

const QUALIFICATIONS = [
  [
    "Academic Excellence",
    'Ph.D. in Computer Science from Panjab University, Chandigarh, with research on "Feature Extraction and Neural Network Classifiers for Optical Character Recognition of Gurmukhi and Devanagari Characters" using advanced machine learning and deep learning algorithms.',
  ],
  [
    null,
    "Consultant for Finvasia Group of Companies for leveraging AI in all fintech applications.",
  ],
  [
    "Certifications",
    "Certified Deep Learning Engineer from Edureka, Certified Python Programmer from Cisco Networking Academy, Brainbench Certified C++ Developer.",
  ],
  [
    "Technical Expertise",
    "Proficient in MATLAB, Python, and Core Java, with experience in developing neural networks, image processing algorithms, and object-oriented software solutions.",
  ],
  [
    "Teaching and Mentorship",
    "Over two decades of experience in academia, designing innovative curricula, and mentoring postgraduate students in research and development projects.",
  ],
  [
    "Research Contributions",
    "Extensive portfolio of published research papers in international journals and conferences, covering topics like AI, machine learning, cybersecurity, and IoT.",
  ],
  [
    "Leadership and Collaboration",
    "Skilled in coordinating cross-functional teams, leading research initiatives, and fostering collaboration between academia and industry.",
  ],
  [
    "Project Guidance",
    "Successfully guided numerous postgraduate projects, emphasizing practical application of AI and machine learning concepts to solve real-world problems.",
  ],
  [
    "Public Speaking",
    "Active participant in entrepreneurship and motivational workshops, renowned for delivering engaging talks on AI, technology trends, and career guidance.",
  ],
];

const TECHNICAL = [
  [
    "Programming Languages",
    "Proficient in Python, MATLAB, C, C++, and Java, with extensive experience in developing sophisticated AI applications and software solutions.",
  ],
  [
    "AI and Machine Learning Frameworks",
    "Expertise in TensorFlow, Keras, PyTorch, and Scikit-learn for creating and deploying machine learning and deep learning models.",
  ],
  [
    "Data Analytics and Visualization",
    "Skilled in data mining, predictive modeling, and visualization tools to derive actionable insights from complex datasets.",
  ],
  [
    "Database Management",
    "Experienced in designing and managing relational databases using Oracle, MySQL, and object-relational database systems.",
  ],
  [
    "Web and Mobile Development",
    "Competent in developing web applications using JSP/Servlets and mobile apps with Android.",
  ],
  [
    "Cloud and Big Data Platforms",
    "Familiar with Microsoft Azure services and tools for implementing data science and machine learning solutions using large-scale datasets.",
  ],
  [
    "Microsoft Applied Skills",
    "Earned the Microsoft Applied Skills credentials for Build an Azure AI Vision solution, Create an intelligent document processing solution with Azure AI Document Intelligence, and Build a natural language processing solution with Azure AI Language.",
  ],
  [
    "Embedded Systems Development",
    "Proficient in assembly language and C for developing applications in embedded systems.",
  ],
  [
    "Statistical Analysis",
    "Experienced in using Python for statistical modeling and data analysis.",
  ],
  [
    "Object-Oriented Design",
    "Expertise in teaching and implementing object-oriented analysis and design using UML tools like Rational Rose.",
  ],
];

const EDUCATION = [
  ["Matriculation (1986)", "Secured 71.3%."],
  [
    "10+2 (1988)",
    "Secured 70% with honors in Mathematics and English.",
  ],
  [
    "Graduation (1991)",
    "Completed from Meerut University, securing 65% marks.",
  ],
  [
    "Master of Computer Applications (MCA, 1995)",
    "Secured 73% from Kamla Nehru Institute of Technology (KNIT), Sultanpur, affiliated with Dr. Ram Manohar Lohia University, Faizabad, Uttar Pradesh.",
  ],
  ["Ph.D. (2019)", "Panjab University, Chandigarh."],
];

function DetailList({ items }) {
  return (
    <ul>
      {items.map(([label, text], index) => (
        <li key={label ?? text.slice(0, 40) + index}>
          {label ? <strong>{label}:</strong> : null} {text}
        </li>
      ))}
    </ul>
  );
}

export default function ProfilePage() {
  return (
    <div className="container">
      <header className="profile-head">
        <img
          className="profile-photo"
          src="/sushil-narang.jpg"
          alt="Portrait of Sushil Narang"
          width={600}
          height={600}
        />
        <div>
          <h1 className="page-title">Sushil Kumar Narang</h1>
          <p className="credential-line">
            Ph.D. (Computer Science) · NVIDIA Certified Associate — AI
            Infrastructure &amp; Operations · AI &amp; Digital Transformation
            Leader
          </p>
          <p className="cv-contact">
            <a href="mailto:sushil.narang@outlook.com">
              sushil.narang@outlook.com
            </a>
            <span aria-hidden="true">·</span>
            <a href="mailto:sushilnarang08@gmail.com">
              sushilnarang08@gmail.com
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
        </div>
      </header>

      <div className="post-content">
        <p className="lead">
          AI researcher, academic leader, and applied AI systems architect with
          30+ years of experience spanning artificial intelligence, machine
          learning, digital transformation, academic leadership, and
          large-scale applied research. Extensive expertise in designing and
          deploying AI-driven solutions across healthcare, manufacturing,
          fintech, education, and public-impact domains.
        </p>
      </div>

      <CvNav active="/profile" />

      <div className="post-content">
        <h2>Profile</h2>
        <ul>
          {PROFILE.map((item) => (
            <li key={item.slice(0, 40)}>{item}</li>
          ))}
        </ul>

        <h2>Expertise &amp; skills</h2>
        <DetailList items={EXPERTISE} />

        <h2>Summary of qualifications</h2>
        <DetailList items={QUALIFICATIONS} />

        <h2>Technical expertise</h2>
        <DetailList items={TECHNICAL} />

        <h2>Education</h2>
        <DetailList items={EDUCATION} />

        <p>
          <Link className="button" href="/experience">
            See my experience →
          </Link>
        </p>
      </div>
    </div>
  );
}
