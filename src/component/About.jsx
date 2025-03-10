import React from "react";
import Skill from "./Skill";

const About = () => {
  return (
    <div>
      <section id="about" className="about section">
        <div className="container section-title" data-aos="fade-up">
          <h2>About</h2>
          <p>
            I am an IT professional specializing in data and technology, with an
            academic background in Information Systems and experience as an IT
            Support at PT Bank Mandiri (Persero) Tbk Area PALU. I possess
            expertise in data analysis, visualization, and machine learning,
            supported by certified training from Google Data Analytics, Data
            Academy, and Dicoding. Proficient in using Python, SQL, and ETL
            tools, I can transform data into strategic insights for
            decision-making. With experience in network maintenance, system
            administration, and technology-based project development, I am
            committed to delivering innovative solutions that enhance efficiency
            and productivity.
          </p>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4 justify-content-center">
            <div className="col-lg-3">
              <img
                src="assets/img/SNOW_20230204_004908_347.jpg"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="col-lg-8 content">
              <h2>
                Data Scientist <span style={{ fontSize: "larger" }}>|</span>{" "}
                Network Engineer
              </h2>
              <p className="fst-italic py-3" style={{ textAlign: "justify" }}>
                With a solid background in Information Systems and expertise in
                data and network management, I solve complex problems and
                optimize IT infrastructure. Skilled in data analysis, machine
                learning, and network engineering, I ensure seamless technology
                integration to achieve business goals.
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-record2-fill"></i>{" "}
                      <strong>Birthday:</strong> <span>10 Oktober 2001</span>
                    </li>
                    <li>
                      <i className="bi bi-record2-fill"></i>{" "}
                      <strong>Website:</strong> <span>www.example.com</span>
                    </li>
                    <li>
                      <i className="bi bi-record2-fill"></i>{" "}
                      <strong>Phone:</strong> <span>+62 851 7438 1051</span>
                    </li>
                    <li>
                      <i className="bi bi-record2-fill"></i>{" "}
                      <strong>City:</strong> <span>Palu, Sulawesi Tengah</span>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-record2-fill"></i>{" "}
                      <strong>Age:</strong> <span>23</span>
                    </li>
                    <li>
                      <i className="bi bi-record2-fill"></i>{" "}
                      <strong>Degree:</strong> <span>Bachelor</span>
                    </li>
                    <li>
                      <i className="bi bi-record2-fill"></i>{" "}
                      <strong>Email:</strong> <span>asrhiekap@gmail.com</span>
                    </li>
                    <li>
                      <i className="bi bi-record2-fill"></i>{" "}
                      <strong>Freelance:</strong> <span>Available</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="py-3" style={{ textAlign: "justify" }}>
                I bring a results-oriented mindset to every project, focusing on
                delivering efficient, innovative, and reliable solutions.
                Whether it’s transforming raw data into actionable insights or
                maintaining robust network systems, I aim to contribute
                significantly to the success of any organization I work with. My
                commitment to excellence and continuous improvement ensures that
                I am always prepared to tackle new challenges in the
                ever-evolving field of IT and data science.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Skill />
    </div>
  );
};

export default About;
