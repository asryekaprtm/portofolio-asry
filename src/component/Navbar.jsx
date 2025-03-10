import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#hero");

  // Fungsi Toggle Navbar
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  // Fungsi untuk mengubah link aktif saat diklik
  const handleSetActive = (link) => {
    setActiveLink(link);
    setIsOpen(false); // Tutup navbar setelah klik (untuk mobile)
  };

  // Efek untuk mendeteksi scroll dan mengatur active class
  useEffect(() => {
    const sections = document.querySelectorAll("section"); // Ambil semua elemen section
    const options = { root: null, rootMargin: "0px", threshold: 0.6 };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink(`#${entry.target.id}`);
        }
      });
    }, options);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <header
      id="header"
      className="header d-flex flex-column justify-content-center"
    >
      {/* Tombol Toggle (Hanya Muncul di Mobile) */}
      <button
        className="header-toggle d-xl-none bi bi-list"
        onClick={toggleNavbar}
      ></button>

      {/* Navbar Menu */}
      <nav id="navmenu" className={`navmenu ${isOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a
              href="#hero"
              className={activeLink === "#hero" ? "active" : ""}
              onClick={() => handleSetActive("#hero")}
            >
              <i className="bi bi-house navicon"></i>
              <span>Home</span>
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={activeLink === "#about" ? "active" : ""}
              onClick={() => handleSetActive("#about")}
            >
              <i className="bi bi-person navicon"></i>
              <span>About</span>
            </a>
          </li>
          <li>
            <a
              href="#resume"
              className={activeLink === "#resume" ? "active" : ""}
              onClick={() => handleSetActive("#resume")}
            >
              <i className="bi bi-file-earmark-text navicon"></i>
              <span>Resume</span>
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              className={activeLink === "#portfolio" ? "active" : ""}
              onClick={() => handleSetActive("#portfolio")}
            >
              <i className="bi bi-images navicon"></i>
              <span>Portfolio</span>
            </a>
          </li>
          <li>
            <a
              href="#services"
              className={activeLink === "#services" ? "active" : ""}
              onClick={() => handleSetActive("#services")}
            >
              <i className="bi bi-hdd-stack navicon"></i>
              <span>Services</span>
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={activeLink === "#contact" ? "active" : ""}
              onClick={() => handleSetActive("#contact")}
            >
              <i className="bi bi-envelope navicon"></i>
              <span>Contact</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
