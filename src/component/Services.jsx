import React from "react";

const Services = () => {
  const servicesData = [
    {
      title: "Data Analysis & Visualization",
      description:
        "Deliver comprehensive data analysis and create interactive visualizations tailored to your business needs. Transform raw data into actionable insights using tools like Python, Tableau, or Power BI to support data-driven decision-making.",
      icon: "bi bi-bar-chart-line",
      colorClass: "item-cyan",
      delay: 100,
    },
    {
      title: "Machine Learning",
      description:
        "Develop predictive models and machine learning algorithms to address specific business challenges. From data preprocessing to model deployment, ensure reliable and scalable solutions for your projects.",
      icon: "bi bi-gear-wide-connected",
      colorClass: "item-orange",
      delay: 200,
    },
    {
      title: "Network Design & Troubleshooting",
      description:
        "Design, configure, and troubleshoot wired and wireless networks, including VLAN and Cisco/MikroTik systems. Offer reliable and optimized network infrastructure solutions for businesses.",
      icon: "bi bi-wifi",
      colorClass: "item-teal",
      delay: 300,
    },
    {
        title: "IT Support & System Maintenance",
        description:
          "Provide technical support for hardware, software, and network systems. Offer system maintenance services, including troubleshooting, system updates, and documentation, ensuring optimal IT performance.",
        icon: "bi bi-easel",
        colorClass: "item-red",
        delay: 400,
      },
      {
        title: "Decision Support System Development",
        description:
          "Develop customized decision support systems (DSS) using Python Flask. Tailored solutions to facilitate decision-making, such as selecting the best options or identifying optimal locations.",
        icon: "bi bi-arrow-repeat",
        colorClass: "item-indigo",
        delay: 500,
      },
      {
        title: "Interactive Dashboard Creation",
        description:
          "Design and implement dynamic dashboards for effective data presentation and decision-making. Utilize modern tools to present complex data in a clear and user-friendly manner.",
        icon: "bi bi-terminal-dash",
        colorClass: "item-pink",
        delay: 600,
      },
  ];

  return (
    <section id="services" className="services section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Services</h2>
      </div>
      {/* End Section Title */}

      <div className="container">
        <div className="row gy-4">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={service.delay}
            >
              <div
                className={`service-item ${service.colorClass} position-relative`}
              >
                <div className="icon">
                  <svg
                    width="100"
                    height="100"
                    viewBox="0 0 600 600"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      stroke="none"
                      strokeWidth="0"
                      fill="#f5f5f5"
                      d="M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,
                      510.70327084640275,468.03025145048787C554.3714126377745,407.6079735673963,508.03601936045806,
                      328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,
                      479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083C348.86323505073057,
                      18.502131276798302,261.93793281208167,40.57373210992963,193.5410806939664,78.93577620505333
                      C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,
                      249.04625023123273C51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,
                      66.52175969318436,486.19268352777647C119.04800174914682,550.1803526380478,217.28368757567262,
                      524.383925680826,300,521.0016835830174"
                    ></path>
                  </svg>
                  <i className={service.icon}></i>
                </div>
                <a href="#" className="stretched-link">
                  <h3>{service.title}</h3>
                </a>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
