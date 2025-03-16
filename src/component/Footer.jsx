import React from "react";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="footer position-relative light-background text-center py-4"
    >
      <div className="container">
        <h3 className="fw-bold text-uppercase mb-3">
          Moh. Asry Eka Pratama
        </h3>

        <div className="social-links d-flex justify-content-center gap-4 border-bottom pb-3">
          {[
            {
              href: "mailto:asrhiekap@gmail.com",
              label: "Email",
              icon: "bi bi-envelope",
            },
            {
              href: "https://www.facebook.com/AsryEkaPratama?mibextid=ZbWKwL",
              label: "Facebook",
              icon: "bi bi-facebook",
            },
            {
              href: "https://www.instagram.com/asry.ekaprtm?igsh=dXRiNWo1Y3M1bmFj",
              label: "Instagram",
              icon: "bi bi-instagram",
            },
            {
              href: "https://wa.me/6285174381051",
              label: "WhatsApp",
              icon: "bi bi-whatsapp",
              newTab: true,
            },
            {
              href: "https://www.linkedin.com/in/moh-asry-eka-pratama-870205264",
              label: "LinkedIn",
              icon: "bi bi-linkedin",
              newTab: true,
            },
          ].map(({ href, label, icon, newTab }) => (
            <a
              key={label}
              href={href}
              target={newTab ? "_blank" : "_self"}
              rel={newTab ? "noopener noreferrer" : ""}
              aria-label={label}
              className="social-icon"
            >
              <i className={icon}></i>
            </a>
          ))}
        </div>

        <div className="copyright mt-3 text-muted">
          <span>&copy; {new Date().getFullYear()} </span>
          <strong className="px-1">Moh. Asry Eka Pratama</strong>
          <span> | All Rights Reserved</span>
        </div>
      </div>

      <style jsx>{`
        .social-icon {
          font-size: 1.5rem;
          color: #333;
          transition: color 0.3s ease-in-out, transform 0.2s;
        }
        .social-icon:hover {
          color: #424c57;
          transform: scale(1.1);
        }
        .sitename {
          color: #424c57;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
