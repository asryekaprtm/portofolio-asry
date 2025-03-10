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
        "Teaching Assistant for courses: Algorithms and Programming, Decision Support Systems, and Object-Oriented Programming (OOP), 2023–2024.",
      ],
      journal: {
        title:
          "Publishing a Sinta 3 Scientific Journal in Sisfokom (Information Systems and Computer Journal).",
        link: "https://jurnal.atmaluhur.ac.id/index.php/sisfokom/article/view/2097",
      },
    },
    {
      institution: "Veteran Development University of East Java (UPN Jatim)",
      duration: "August 2022 - January 2023",
      program: "Merdeka Domestic Student Exchange",
      certificateLink:
        "https://drive.google.com/file/d/1VMkJ_qOCAUqbNAjJNsnO92Ruolsl6vUh/view",
    },
    {
      institution: "Coursera",
      duration: "May 2024 – August 2024",
      certification: "Google Data Analytics Professional Certificate",
      certificateLink:
        "https://drive.google.com/file/d/1T4Ls-3PB9ovMvvHTB4Nz6LijcuUPfumW/view?usp=sharing",
      courses: [
        "Data Analytics Basics: Data Everywhere.",
        "Asking Questions to Make Data-Driven Decisions.",
        "Preparing Data for Exploration.",
        "Processing Data from Raw to Clean.",
        "Sharing Data Through Visualizations.",
        "Data Analysis with R Programming.",
        "Google Data Analytics Capstone: Complete a Case Study.",
      ],
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
      courses: [
        "Algorithms and Programming.",
        "Decision Support Systems.",
        "Object Oriented Programming.",
      ],
    },
    {
      company:
        "Student Executive Board, Faculty of Engineering, Tadulako University (BEM FT-UNTAD)",
      duration: "2022 - 2023",
      position: "Staff of Advocacy and Community Welfare Department",
      responsibilities: [
        "Conducted research on student-related issues inside and outside the campus.",
        "Planned responses to student aspirations at the Faculty of Engineering.",
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
                    <em>
                      {edu.degree} <b>{edu.gpa}</b>
                    </em>
                  </p>
                )}
                {edu.achievements && (
                  <ul>
                    {edu.achievements.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                )}
                {edu.journal && (
                  <p>
                    <a
                      href={edu.journal.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "underline", color: "#344CB7" }}
                    >
                      {edu.journal.title}
                    </a>
                  </p>
                )}
                {edu.program && (
                  <p>
                    <a
                      href={edu.certificateLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "underline", color: "#344CB7" }}
                    >
                      <b>{edu.program}</b>
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
                {exp.responsibilities && (
                  <ul>
                    {exp.responsibilities.map((item, idx) => (
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
                      style={{ textDecoration: "underline", color: "#344CB7" }}
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
