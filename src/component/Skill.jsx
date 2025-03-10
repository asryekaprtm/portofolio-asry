import React, { useState } from "react";

// Data skill dengan kategori & ikon Bootstrap Icons
const skillData = [
  { name: "Microsoft Word", category: "Software", icon: "bi bi-laptop" },
  { name: "Microsoft Excel", category: "Software", icon: "bi bi-laptop" },
  { name: "Python", category: "Programming", icon: "bi bi-code-slash" },
  { name: "Tableau", category: "Data Science", icon: "bi bi-bar-chart" },
  {
    name: "Machine Learning",
    category: "Data Science",
    icon: "bi bi-bar-chart",
  },
  {
    name: "Statistics for Data Science",
    category: "Data Science",
    icon: "bi bi-bar-chart",
  },
  {
    name: "Object-Oriented Programming",
    category: "Programming",
    icon: "bi bi-code-slash",
  },
  { name: "Bootstrap", category: "Web Development", icon: "bi bi-laptop" },
  {
    name: "SQL (Structured Query Language)",
    category: "Database",
    icon: "bi bi-database",
  },
  { name: "Java", category: "Programming", icon: "bi bi-code-slash" },
  {
    name: "Computer Network (Cisco & MikroTik)",
    category: "Networking",
    icon: "bi bi-diagram-3",
  },
  {
    name: "Data Visualizations",
    category: "Data Science",
    icon: "bi bi-bar-chart",
  },
];

// Ambil kategori unik dari data
const categories = [
  "All",
  ...new Set(skillData.map((skill) => skill.category)),
];

const Skill = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter skill berdasarkan kategori yang dipilih
  const filteredSkills =
    selectedCategory === "All"
      ? skillData
      : skillData.filter((skill) => skill.category === selectedCategory);

  return (
    <section id="skills" className="skills section py-5">
      <div className="container text-center">
        <h2 className="mb-4 fw-bold" style={{ color: "#441752" }}>
          Skills
        </h2>

        {/* Tombol Filter Kategori */}
        <div className="d-flex flex-wrap justify-content-center gap-2 mb-4">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`btn fw-bold px-3 py-2 ${
                selectedCategory === category ? "text-white" : "#441752"
              }`}
              style={{
                backgroundColor:
                  selectedCategory === category ? "#441752" : "transparent",
                border: "2px solid #441752",
                color: selectedCategory === category ? "white" : "#441752",
              }}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* List Skill */}
        <div className="row justify-content-center">
          {filteredSkills.length > 0 ? (
            filteredSkills.map((skill, index) => (
              <div key={index} className="col-md-4 col-sm-6 mb-3">
                <div
                  className="p-3 shadow-sm text-center rounded"
                  style={{
                    background: "#f9f9f9",
                    borderLeft: "5px solid #441752",
                    transition: "transform 0.3s ease-in-out",
                  }}
                >
                  {/* Ikon */}
                  <div
                    className="mb-2"
                    style={{ fontSize: "24px", color: "#441752" }}
                  >
                    <i className={skill.icon}></i>
                  </div>

                  {/* Nama Skill */}
                  <h6 className="fw-bold text-dark">{skill.name}</h6>

                  {/* Badge Kategori */}
                  <span
                    className="badge"
                    style={{ backgroundColor: "#441752", color: "white" }}
                  >
                    {skill.category}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center mt-3">Skill tidak ditemukan.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Skill;
