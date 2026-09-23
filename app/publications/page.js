import CvNav from "@/components/CvNav";

export const metadata = {
  title: "Publications",
  description:
    "Key publications by Sushil Narang — journal papers, conference work and books on AI, machine learning, cybersecurity, IoT and mental health.",
};

const PUBLICATIONS = [
  "Optimized Multilevel Ensemble Learning Model: Developed an optimized multilevel ensemble learning model for classification tasks, published in Big Data (2022).",
  "Hybrid Secure Cloud Platform Maintenance: Designed a hybrid secure cloud platform with improved attribute-based encryption strategies for cloud maintenance, published in IJIMAI (2023).",
  "Machine Learning Algorithms for COVID-19 Dataset Analysis: Estimated the performance of machine learning algorithms for analyzing COVID-19 datasets, published in Computers, Materials & Continua (2020).",
  "Assistive Navigation System for Visually Impaired: Reviewed and proposed assistive navigation systems for visually impaired and blind individuals, presented at AIMV Conference (2021).",
  "Visualization Techniques for Climate Change with AI: Explored machine learning and AI techniques for visualizing climate change impacts, published in Elsevier (2022).",
  "Machine Intelligence for Mental Health Issues: Reviewed and analyzed machine intelligence approaches for detecting mental health disorders, published in International Journal of Advanced Technology and Engineering Exploration (2021).",
  "Emerging Communication Technologies for Industry 5.0: Investigated communication technologies for industrial IoT in Industry 5.0, presented at the IC4S Conference (2022).",
  "Knowledge Discovery from Data Streams: Contributed a book chapter on knowledge discovery methods applied to massive data streams, published by IGI Global (2017).",
  "Machine Learning in Smart Agricultural Systems: Reviewed machine learning algorithms applied in smart agricultural systems using IoT-based wireless sensor networks, published in Machine Intelligence, Big Data Analytics, and IoT in Image Processing (2023).",
  "AI for Renewable Energy Systems: Co-edited a book on AI applications in renewable energy, published by Woodhead Publishing (2022).",
  "Twitter Sentiment Analysis Using Time Series Data: Implemented an enhanced support vector machine for sentiment analysis on Twitter time series data, published in Bulletin of Electrical Engineering and Informatics (2021).",
  "Deep Learning for Alzheimer’s Disease Detection: Developed deep learning models for detecting Alzheimer’s disease using wearable sensor data, presented at the PDGC Conference (2022).",
  "Mental Health Performance Assessment Using SVM: Applied support vector machine for mental health performance evaluation, presented at CONIT Conference (2023).",
  "KNN Algorithm for Mental Health Assessment: Proposed a KNN-based algorithm for mental health disorder classification, presented at Springer Conference (2023).",
  "Advances in Biofuel Production Using Microalgae: Contributed a book chapter on renewable biofuels produced from microalgae, published in Artificial Intelligence for Renewable Energy Systems (2022).",
  "Human Activity Recognition Using Wearable Sensors: Explored machine learning techniques for human activity recognition using wearable sensors, presented at the Springer Conference (2022).",
  "Handwritten Gurmukhi and Devanagari Character Recognition: Developed a convolutional neural network for handwritten character recognition, published in International Journal of Image Processing (2018).",
  "Fuzzy Logic in Image Processing: Provided a review on the applications of fuzzy logic in image processing, published as a technical report.",
  "Diagnosis of Meibomian Gland Dysfunction Using IR Images: Contributed a chapter on techniques for diagnosing Meibomian gland dysfunction using IR images, published by CRC Press (2025).",
  "Multiclass Classification for Mental Health Disorders Using XGBoost: Applied XGBoost algorithm for mental health disorder classification, published in SN Computer Science (2024).",
  "Intelligent Security Solutions for Cyber-Physical Systems: Co-edited a book on security solutions for cyber-physical systems, published by CRC Press (2024).",
  "Real-Time Concept Drift Detection in Industrial Systems: Proposed machine learning techniques for real-time concept drift detection in industrial cyber-physical systems, published by CRC Press (2024).",
  "Energy Management in IoT-Enabled Smart Grids: Reviewed energy management strategies in IoT-enabled smart grids, published in Artificial Intelligence and Society 5.0 (2024).",
  "Credit Card Transaction Streaming and Imbalanced Pattern Analysis: Conducted real-time streaming analysis of credit card transactions with computational intelligence algorithms, published in Educational Administration: Theory and Practice (2024).",
  "Securing Smart Grids Using Machine Learning: Investigated machine learning models for enhancing security in smart grids, published in Artificial Intelligence and Society 5.0 (2024).",
  "Ethical Challenges in Neurodegenerative Diseases Diagnosis: Addressed ethical considerations in diagnosing neurodegenerative diseases using machine learning, published by IGI Global (2024).",
  "Enhancing Credit Card Fraud Detection: Analyzed credit card fraud patterns with computational intelligence algorithms, presented at ICUIS Conference (2023).",
  "Data Transformation in Image Steganography for Data Security: Proposed a transformation-based encryption algorithm to secure data in image steganography, presented at Springer Conference (2023).",
  "Bidirectional Machine Translation for Punjabi-English and Hindi-English: Developed machine translation models for Punjabi-English, Punjabi-Hindi, and Hindi-English language pairs, presented at ICRIC Conference (2023).",
  "Credit Card Transaction Data Stream Review: Reviewed issues in credit card transactional data stream analysis, presented at IC4S Conference (2022).",
  "Nanomaterials for Cyber-Physical Systems: Reviewed the role of nanomaterials in enhancing cyber-physical systems, published in Manufacturing Engineering and Materials Science (2022).",
  "IoT-Enabled Smart Collars for Early Livestock Disease Detection: Developed a data-driven solution for early livestock disease detection using IoT-enabled smart collars, published by CRC Press (2024).",
  "Handwritten Character Recognition Using Neural Networks: Conducted research on feature extraction and neural network classifiers for OCR of handwritten Gurmukhi and Devanagari characters, submitted as a Ph.D. thesis to Shodhganga.",
  "Polar Harmonic Transform for Feature Extraction in Handwritten Characters: Proposed a polar harmonic transform method for feature extraction from handwritten character images, presented at FIM Conference (2012).",
  "Filtering Approach for Feature Extraction in Handwritten Character Recognition: Proposed a filtering approach for improving feature extraction in handwritten character recognition systems, published in ISES Journal (2012).",
];

export default function PublicationsPage() {
  return (
    <div className="container">
      <h1 className="page-title">Publications</h1>
      <p className="page-intro">
        A selection of published research — journal papers, conference
        contributions, and books spanning AI, machine learning, cybersecurity,
        IoT and healthcare.
      </p>

      <CvNav active="/publications" />

      <div className="post-content">
        <ul className="pub-list">
          {PUBLICATIONS.map((item) => {
            const split = item.indexOf(": ");
            const title = split === -1 ? item : item.slice(0, split);
            const body = split === -1 ? "" : item.slice(split + 2);
            return (
              <li key={title}>
                <strong>{title}.</strong> {body}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
