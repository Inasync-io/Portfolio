import { useEffect, React } from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Toaster } from "react-hot-toast";

import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Services from "./components/services/Services";
import Qualification from "./components/qualification/Qualification";
import Work from "./components/work/Work";
// import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Scrollup from "./components/scrollup/Scrollup";

import CaseStudy from "./components/work/pages/CaseStudy";

const MainHome = () => {
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const isOnce = entry.target.classList.contains("once");

          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          } else {
            // ❗ only remove if NOT "once"
            if (!isOnce) {
              entry.target.classList.remove("active");
            }
          }
        });
      },
      { threshold: 0.3 },
    );

    reveals.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Toaster />
      <Header />

      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Work />
        {/* <Testimonials /> */}
        <Contact />
        <Footer />
        <Scrollup />
      </main>
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainHome />} />

        <Route path="case-study" element={<CaseStudy />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
