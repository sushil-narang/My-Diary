import CvNav from "@/components/CvNav";

export const metadata = {
  title: "Projects",
  description:
    "Applied AI projects by Sushil Narang — defect detection for Tynor, secure assessment systems for DRDO, financial analytics for Finvasia, and products in development.",
};

const DELIVERED = [
  {
    title: "AI-Powered Defect Detection and Sorting for Orthopedic Products",
    org: "Tynor",
    status: "Delivered",
    statusClass: "status-delivered",
    description:
      "For one of India’s largest orthopedic product manufacturers, developed a cutting-edge AI-based defect detection and sorting system for kneecaps. The system integrated a conveyor machine, NVIDIA Jetson Xavier, PLC, and advanced machine vision cameras. Kneecaps traveled through a camera-based aligner for orientation, followed by defect analysis in real time. The machine vision system detected intricate defects like stains, wrinkles, and logo misplacements, measuring defect dimensions and segregating kneecaps into bins based on size and quality thresholds. Leveraged SAHI-based object detection models to train AI for identifying specific defect types, with a multithreaded framework for efficient image analysis. This innovation drastically improved quality assurance, reduced manual effort, and set a benchmark in automation for orthopedic product manufacturing.",
  },
  {
    title: "Secure Airgap Wireless System for DRDO Assessment Process",
    org: "DRDO India",
    status: "Delivered",
    statusClass: "status-delivered",
    description:
      "Engineered a scalable and secure airgap-enabled wireless solution for the Defense Research and Development Organization (DRDO) RAC assessment process. Designed a tablet-based application connected to an airgap server, facilitating real-time access to candidates’ biodata and profile presentations for board members, while ensuring data security by eliminating internet connectivity. Incorporated a custom generative AI model to analyze candidate profiles, derive insights, and recommend tailored questions based on biodata and presentations — streamlining the evaluation process and enhancing transparency and accuracy for DRDO’s critical operations.",
  },
  {
    title: "Intelligent Financial Analytics and Conversational AI",
    org: "Finvasia Group of Companies",
    status: "Delivered",
    statusClass: "status-delivered",
    description:
      "Developed a robust financial analytics platform for the Finvasia Group to transform the way individuals manage their finances. The system aggregates bank account statements to deliver insights into income and expenses, empowering users with actionable intelligence. Integrated a conversational AI application that allows users to ask questions about their finances and receive instant, precise responses, plus personalized recommendations for smarter financial decisions. Designed for scalability and data security, the platform simplifies financial management while delivering an engaging, user-friendly experience.",
  },
  {
    title: "Sahirah.in",
    org: "Founder & Developer",
    status: "Live",
    statusClass: "status-live",
    description:
      "An intelligent psychometric and career guidance platform designed for school students to identify suitable academic streams and future career directions using behavioral analytics and AI-generated assessment reporting.",
  },
  {
    title: "MindGlyph",
    org: "iOS app on the App Store",
    status: "Live",
    statusClass: "status-live",
    description:
      "A mental health companion app that requires no cloud — all intelligence runs on the device — sending intelligent, private recommendations to the user.",
  },
];

const IN_PROGRESS = [
  {
    title: "Generative AI for Automated Test Evaluation",
    status: "In development",
    statusClass: "status-progress",
    description:
      "An advanced Generative AI application to revolutionize evaluation for submission-based online tests. The system interprets and grades open-ended questions with precision, mimicking human judgment. Leveraging LLMs and cutting-edge NLP techniques, it evaluates contextual accuracy, depth, and relevance of answers — enhancing scalability for high-volume assessments while maintaining grading consistency, and ensuring fairer, faster, and more accurate outcomes.",
  },
  {
    title: "Hybrid Immersive Solution for Anxiety Management",
    status: "In development",
    statusClass: "status-progress",
    description:
      "An AI-driven system to alleviate anxiety in high-pressure scenarios such as public speaking, interviews, or critical decision-making. The solution combines extended reality (XR), neurofeedback, and generative AI to create an adaptive, immersive environment where users practice coping strategies in a controlled setting — XR recreates realistic scenarios, neurofeedback monitors physiological responses for real-time adjustment, and generative AI personalizes the experience. A groundbreaking tool for anxiety management in education, professional training, and therapy.",
  },
  {
    title: "statmind.ai — AI-Powered LMS for Management Professionals",
    status: "In development",
    statusClass: "status-progress",
    description:
      "An AI-powered learning management system where management professionals can not only learn programming in Python but also practice statistical modelling in a live lab environment. It contains useful business datasets that anybody can explore, analyze live, and get insights from.",
  },
];

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <span className={`status-pill ${project.statusClass}`}>
        {project.status}
      </span>
      <h3 className="project-title">{project.title}</h3>
      {project.org ? <p className="project-org">{project.org}</p> : null}
      <p className="project-desc">{project.description}</p>
    </article>
  );
}

export default function ProjectsPage() {
  return (
    <div className="container">
      <h1 className="page-title">Projects</h1>
      <p className="page-intro">
        Applied AI systems built for industry, defense, fintech and education —
        plus a few things still on the workbench.
      </p>

      <CvNav active="/projects" />

      <h2 className="cv-subhead">Delivered &amp; live</h2>
      <div className="project-grid">
        {DELIVERED.map((project) => (
          <ProjectCard project={project} key={project.title} />
        ))}
      </div>

      <h2 className="cv-subhead">Currently under development</h2>
      <div className="project-grid">
        {IN_PROGRESS.map((project) => (
          <ProjectCard project={project} key={project.title} />
        ))}
      </div>
    </div>
  );
}
