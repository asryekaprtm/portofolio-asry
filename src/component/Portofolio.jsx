import React, { useState } from "react";

const Portofolio = () => {
  const [activeFilter, setActiveFilter] = useState("*");

  // Mendapatkan daftar filter unik dari data
  const filters = ["*"];
  portfolioItems.forEach((item) => {
    if (!filters.includes(item.filter)) {
      filters.push(item.filter);
    }
  });

  // Fungsi untuk mengubah filter aktif
  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  // Filter data berdasarkan filter yang dipilih
  const filteredPortfolio =
    activeFilter === "*"
      ? portfolioItems
      : portfolioItems.filter((item) => item.filter === activeFilter);

  return (
    <div>
      <section id="portfolio" className="portfolio section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Portfolio</h2>
        </div>

        <div className="container">
          <div data-aos="fade-up" data-aos-delay="100">
            <ul className="portfolio-filters">
              {filters.map((filter, index) => (
                <li
                  key={index}
                  className={activeFilter === filter ? "filter-active" : ""}
                  onClick={() => handleFilterClick(filter)}
                >
                  {filter === "*"
                    ? "All"
                    : filter.replace("filter-", "").replace(/-/g, " ")}
                </li>
              ))}
            </ul>

            <div className="row gy-4">
              {filteredPortfolio.map((item, index) => (
                <div key={index} className="col-lg-4 col-md-6 portfolio-item">
                  <img
                    src={item.image}
                    className="img-fluid d-block mx-auto"
                    style={{ height: "250px", objectFit: "cover" }}
                    alt={item.title}
                  />
                  <div className="portfolio-info">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                    <a href={item.image} className="glightbox preview-link">
                      <i className="bi bi-zoom-in"></i>
                    </a>
                    <a
                      href={item.link}
                      title="More Details"
                      className="details-link"
                    >
                      <i className="bi bi-link-45deg"></i>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const portfolioItems = [
    {
        title: "Prediction of Stunting Prevalence in Indonesia 2023",
        description:
          "Comparison of Machine Learning Algorithms for Predicting Stunting Prevalence in Indonesia",
        image: "assets/img/masonry-portfolio/ML 2.png",
        link: "https://github.com/asryekaprtm/Prediksi-Stunting-di-Indonesia",
        filter: "Machine Learning",
      },
    
  {
      title: "Stunting Prediction Dashboard",
      description: "Stunting Prevalence Prediction Dashboard in Indonesia 2023",
      image: "assets/img/masonry-portfolio/stunting prediction.png",
      link: "https://bit.ly/Dashboard-Prediksi-Stunting-in-Indonesia",
      filter: "Dashboard",
    },
    {
        title: "Livable Kasawan in Palu City",
        description:
        "Decision Support System for Livable Areas in Palu City Using the WASPAS Method",
        image: "assets/img/masonry-portfolio/Kasawan Layak huni 1.png",
        link: "https://github.com/asryekaprtm/SPK-Kawasan-Layak-Huni-di-Kota-Palu.io",
        filter: "Website",
    },
    {
        title: "Cluster analysis of population density in Palu City",
        description:
          "Cluster analysis of population density in the city of Palu using the k-means algorithm",
        image: "assets/img/masonry-portfolio/ml 1.png",
        link: "https://github.com/asryekaprtm/Cluster-kepadatan-penduduk-di-kota-Palu",
        filter: "Machine Learning",
      },
    {
        title: "Clustering Analysis Dashboard",
        description: "Dashboard for Population Density Clustering Analysis in Palu City",
        image: "assets/img/masonry-portfolio/Dashboard Clusters 1.png",
        link: "https://bit.ly/DashboardAnalisisClusterKepadatanPendudukDikotaPALU",
        filter: "Dashboard",
      },
      {
        title: "Best laptop selection",
        description:
        "The Best Laptop Decision Support System Using the TOPSIS Method",
        image: "assets/img/masonry-portfolio/SPK Pemilihan Leptop.png",
        link: "portfolio-details.html",
        filter: "Website",
    },
    {
        title: "Prediction of Outpatient Visits in 2024 at Kaleke Community Health Center",
        description:
          "Prediction of Outpatient Visits at Kaleke Community Health Center in 2024 Chen's Fuzzy Time Series method",
        image: "assets/img/masonry-portfolio/ML 3.png",
        link: "https://github.com/asryekaprtm/Prediksi-Kunjugan-Pasien-Di-tahun-2024-metode-Fuzzy-Time-Series-Chen",
        filter: "Machine Learning",
      },
];

export default Portofolio;
