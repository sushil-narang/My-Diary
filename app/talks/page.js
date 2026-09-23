import CvNav from "@/components/CvNav";

export const metadata = {
  title: "Talks & workshops",
  description:
    "Panel discussions, expert sessions, conference chair roles and faculty development programmes by Sushil Narang.",
};

const TALKS = [
  "Participated in the Panel Discussion as Expert in Infosys, Chandigarh during Engineering Next 2024: Reimagining the World with AI, on October 10, 2024.",
  "Attended the Intel India Conclave on Generative AI and Industrial IoT in Bangalore on November 3rd and 4th.",
  "Participated in the Panel Discussion as Expert during SMB Tech Talks organized by Ingram Micro on The Next Wave of Digital Innovation, November 8, 2024.",
  "Participated in the Panel Discussion as Expert during SMB Tech Talks organized by Ingram Micro on the Future of Business Driven by Digital Innovation and Technological Advancements in the Age of AI, November 8, 2024.",
  "Participated as Session Chair during the International Conference on Emerging Technology and Sustainable Solutions (ICETSS 2024) for the track on Disruptive Emerging Technologies, October 9, 2024.",
  "Participated as Session Chair during the International Seminar on Quality Assurance in Higher Education (QAHE-2024), December 06–07, 2024.",
  "Participated as Session Chair for Technical Session-V at the International Conference on Recent Evolutions in Applied Sciences & Engineering (INCREASE-2024), April 20, 2024.",
  "Delivered an expert session on “Recent Advances and Future Trends in AI, Computer Vision and NLP on Explainable AI” organized by EICT, IIT Roorkee, November 11, 2023.",
  "Participated as Session Chair for a Technical Session in the International Conference on Advances in Multi-Disciplinary Sciences and Engineering Research (ICAMSER-2021), July 2–3, 2021.",
  "Attended a Faculty Development Program on “Deep Learning for Natural Language Processing” organized by Jaypee Institute of Information Technology, Noida, June 28 – July 3, 2021.",
  "Attended a Workshop for AICTE-sponsored FDP on “Recent Advances in Big Data Analytics of IoT Devices Using FOG Computing” conducted by the Dept of IT, MRCET, December 14–26, 2020.",
  "Attended a Faculty Development Program on “Introduction to Data Analytics Using R: A Hands-On Approach” organized by the Indore Institute of Management and Research, June 1–5, 2020.",
  "Organized a Faculty Development Program on “Blockchain Technologies” in collaboration with EICT, IIT Roorkee, April 2020.",
  "Organized a Faculty Development Program on “Machine Learning with Python” in collaboration with EICT, IIT Roorkee, March 2020.",
  "Attended a Seminar on Scientific Computing, System Design & Verification Using MATLAB/Simulink.",
  "Attended a Workshop on Simulation using MATLAB at MLN College, Yamunanagar.",
  "Attended a Workshop on Quality Management & Network Security conducted by TCS, Noida.",
  "Attended a Workshop on Academic Excellence in Computer Science Engineering and Information Technology organized by the Department of CSE and IT, JIIT University, Noida.",
  "Attended a Workshop on Information Security & Computer Forensics at MNNIT, Allahabad.",
  "Attended a PTU and IBM-sponsored Workshop on IBM DB2 at SASIIT, Mohali.",
];

export default function TalksPage() {
  return (
    <div className="container">
      <h1 className="page-title">Talks &amp; workshops</h1>
      <p className="page-intro">
        Panel discussions, expert sessions, conference chair roles and faculty
        development programmes — on and off campus.
      </p>

      <CvNav active="/talks" />

      <div className="post-content">
        <ul className="talk-list">
          {TALKS.map((item) => (
            <li key={item.slice(0, 50)}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
