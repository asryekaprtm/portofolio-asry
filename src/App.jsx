import React, { useState, useEffect } from "react";
import Navbar from "./component/Navbar";
import Header from "./component/Header";
import About from "./component/About";
import Resume from "./component/Resume";
import Portofolio from "./component/Portofolio";
import Services from "./component/Services";
import Contact from "./component/Contact";
import Footer from "./component/Footer";

function App() {
  console.log("App dirender");
  const [loading, setLoading] = useState(true);
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    console.log("useEffect dijalankan");
    console.log("Loading dimulai...");

    const timer = setTimeout(() => {
      console.log("Loading selesai.");
      setLoading(false);
    }, 2000);

    // Event listener untuk scroll button
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {loading ? (
        <div id="preloader" className="preloader-container">
          <div className="spinner"></div>
        </div>
      ) : (
        <>
          <Navbar />
          <main className="main">
            <Header />
            <About />
            <Resume />
            <Portofolio />
            <Services />
            <Contact />
          </main>
          <Footer />
          <a
            href="#"
            id="scroll-top"
            className={`scroll-top d-flex align-items-center justify-content-center ${
              showScroll ? "active" : ""
            }`}
          >
            <i className="bi bi-arrow-up-short"></i>
          </a>
        </>
      )}
    </div>
  );
}

export default App;
