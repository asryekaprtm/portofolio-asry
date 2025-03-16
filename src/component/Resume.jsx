import React from "react";

const resumeData = {
  education: [
    {
      institution: "Tadulako University",
      duration: "2020 - 2024",
      degree: "Bachelor Degree in Information System",
      gpa: "3.72/4.00",
      achievements: [
        "1st Place in Scientific Writing Competition, IT Fest, 2022.",
        "3rd Place in IT.CUP Futsal, Informatics Engineering Student Association, 2022.",
        "Participated in Independent Student Exchange Program at UPN Veteran East Java, 2022.",
        "Participated in the Independent Study Program at Data Academy, 2023.",
        "Teaching Assistant for Algorithms and Programming, Decision Support Systems, and OOP, 2023–2024.",
        <a
          href="https://jurnal.atmaluhur.ac.id/index.php/sisfokom/article/view/2097"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary"
          key="journal-link"
        >
          Publishing a Sinta 3 Scientific Journal in Sisfokom (Information Systems and Computer Journal).
        </a>,
      ],
    },
    {
      institution: "Veteran Development University of East Java (UPN Jatim)",
      duration: "August 2022 - January 2023",
      degree: "Merdeka Domestic Student Exchange",
      certificateLink:
        "https://drive.google.com/file/d/1VMkJ_qOCAUqbNAjJNsnO92Ruolsl6vUh/view",
    },
    {
      institution: "Coursera",
      duration: "May 2024 – August 2024",
      degree: "Google Data Analytics Professional Certificate",
      achievements: [
        "Data Analytics Basics: Data Everywhere.",
        "Asking Questions to Make Data-Driven Decisions.",
        "Preparing Data for Exploration.",
        "Processing Data from Raw to Clean.",
        "Sharing Data Through Visualizations.",
        "Data Analysis with R Programming.",
        "Google Data Analytics Capstone: Complete a Case Study.",
      ],
      certificateLink:
        "https://drive.google.com/file/d/1T4Ls-3PB9ovMvvHTB4Nz6LijcuUPfumW/view?usp=sharing",
    },
    {
      institution: "Data Academy",
      duration: "August 2023 - January 2024",
      degree: "Certified Independent Study Data Science Academy",
      achievements: [
        "Data engineering concepts, data warehouses, and SQL.",
        "ETL implementation using Talend.",
        "Data analytics and visualization concepts.",
        "Introduction to Big Data and Data Science.",
        "Statistical fundamentals for Data Science and Data Structures.",
        "Python basics for Data Science (Data Processing and Exploratory Data Analytics).",
        "Machine Learning and advanced data techniques.",
        "Final project implementation.",
      ],
      certificateLink:
        "https://drive.google.com/file/d/18sEvMs_7j5dn1SrTQ6924QRpNfWKMv5u/view",
    },
    {
      institution: "Microsoft Learn",
      duration: "january 2025 - present",
      degree: "elevAIte with Dicoding Program",
      achievements: [
        "Course AI-900T00-A: Microsoft Azure AI Fundamentals - Training.",
        "Course AZ-900T00-A: Microsoft Azure Fundamentals - Training.",
        "GitHub Copilot Fundamentals Part 1 of 2.",
        "Develop solutions with Azure AI Document Intelligence.",
        "Microsoft Applied Skills: Build a natural language processing solution with Azure AI Language - Applied Skills.",
        "Microsoft Applied Skills: Build an Azure AI Vision solution - Applied Skills.",
        "Develop generative AI apps with Azure OpenAI and Semantic Kernel.",
        "Implement security through a pipeline using Azure DevOps.",
        "Deploy cloud-native apps using Azure Container Apps.",
        "Course AI-102T00-A: Designing and Implementing a Microsoft Azure AI Solution - Training.",
        "Course DP-100T01-A: Designing and implementing a data science solution on Azure - Training.",
      ],
      // certificateLink:
      //   "https://drive.google.com/file/d/18sEvMs_7j5dn1SrTQ6924QRpNfWKMv5u/view",
    },
    {
      institution: "Dicoding",
      duration: "August 2023 - December 2023",
      degree: "Fundamental Data Science Learning Program",
      achievements: [
        "The Power of Data.",
        "Data Science Fundamentals.",
        "Exploring Data Analysis.",
        "Supporting Technologies and Tools for Data Science.",
        "Machine Learning in Data Science.",
        "Identifying Opportunities.",
        "Final class exam.",
      ],
      certificateLink:
        "https://drive.google.com/file/d/1n-dqeHLnTFr6tcWXwxmQehBNOGuc5wOM/view?usp=sharing",
    },
  ],
  experience: [
    {
      company: "Bank Mandiri (Persero) Tbk, Area Palu",
      duration: "2024 - Present",
      position: "IT Support",
      responsibilities: [
        "Hardware Maintenance.",
        "Software Maintenance.",
        "LAN Network Management.",
        "Technical Support and Troubleshooting.",
        "System Administration.",
        "Documentation and Reporting.",
        "Dashboard Interactive"
      ],
    },
    {
      company: "Tadulako University ICT Center (UPT TIK)",
      duration: "August 2019 – December 2019",
      position: "Computer and Network Technician",
      certificateLink:
        "https://drive.google.com/file/d/19BdP622kFjlqEZTfObfc0Kj7xLRZOCcY/view",
      responsibilities: [
        "Troubleshooting network issues.",
        "Designing wireless network infrastructure.",
        "Configuring VLAN networks.",
      ],
    },
    {
      company: "Tadulako University",
      duration: "2023 - 2024",
      position: "Practical Assistant",
      certificateLink:
        "https://drive.google.com/file/d/1v1UZ-I5A_ZIriFfp3zQ6QsgP5vT5DZGL/view?usp=sharing",
      achievements: [
        "Algorithms and Programming.",
        "Decision Support Systems.",
        "Object Oriented Programming.",
      ],
    },
  ],
};

const Resume = () => {
  return (
    <section id="resume" className="resume section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Resume</h2>
      </div>

      <div className="container">
        <div className="row">
          {/* Education Section */}
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Education</h3>
            {resumeData.education.map((edu, index) => (
              <div className="resume-item" key={index}>
                <h4>{edu.institution}</h4>
                <h5>{edu.duration}</h5>
                {edu.degree && (
                  <p>
                    <strong><em>{edu.degree}</em></strong> {edu.gpa && <b>{edu.gpa}</b>}
                  </p>
                )}
                {edu.program && (
                  <p>
                    <em>{edu.program}</em>
                  </p>
                )}
                {edu.achievements?.length > 0 && (
                  <ul>
                    {edu.achievements.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                )}
                {edu.certificateLink && (
                  <p>
                    <a
                      href={edu.certificateLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                    >
                      View Certificate
                    </a>
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Experience Section */}
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <h3 className="resume-title">Experience</h3>
            {resumeData.experience.map((exp, index) => (
              <div className="resume-item" key={index}>
                <h4>{exp.company}</h4>
                <h5>{exp.duration}</h5>
                <p>
                  <em>{exp.position}</em>
                </p>
                {exp.responsibilities?.length > 0 && (
                  <ul>
                    {exp.responsibilities.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                )}
                {exp.achievements?.length > 0 && (
                  <ul>
                    {exp.achievements.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                )}
                {exp.certificateLink && (
                  <p>
                    <a
                      href={exp.certificateLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                    >
                      View Certificate
                    </a>
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
