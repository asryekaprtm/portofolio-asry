import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const Header = () => {
  const typedRef = useRef(null);
  const typedInstance = useRef(null);

  useEffect(() => {
    if (typedInstance.current) {
      typedInstance.current.destroy(); // Hapus instance sebelumnya
    }

    typedInstance.current = new Typed(typedRef.current, {
      strings: [
        "Data Scientist Enthusiast",
        "Data Analyst",
        "Network Engineer",
      ],
      typeSpeed: 80, // Lebih smooth
      backSpeed: 40, // Hapus teks lebih halus
      backDelay: 1000, // Waktu jeda sebelum mulai menghapus
      startDelay: 500, // Jeda sebelum mulai mengetik pertama kali
      smartBackspace: true, // Tidak menghapus karakter yang sama
      loop: true,
      showCursor: true, // Kursor berkedip
      cursorChar: "|", // Karakter kursor
    });

    return () => {
      if (typedInstance.current) {
        typedInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div>
      <section id="hero" className="hero section light-background">
        <img src="assets/img/SNOW_20250121_063321_985.jpg" alt="Hero" />

        <div className="container" data-aos="zoom-out">
          <div
            className="row justify-content-start"
            style={{ marginTop: "10rem" }}
          >
            <div className="col-lg-9">
              <h2>Moh. Asry Eka Pratama</h2>
              <p>
                I'm <span ref={typedRef} style={{ fontWeight: "bold" }}></span>
              </p>
              <div className="social-links">
                <a href="https://www.facebook.com/AsryEkaPratama">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="https://www.instagram.com/asry.ekaprtm">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/in/moh-asry-eka-pratama">
                  <i className="bi bi-linkedin"></i>
                </a>
                <a
                  href="assets/CV ATS Asry Inggris.pdf"
                  download="CV_Moh_Asry_Eka_Pratama"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <b className="bi bi-file-earmark-text"> CV</b>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
