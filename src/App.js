import { useEffect, React } from "react";
import "./App.css";
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

const App = () => {
  // useEffect(() => {
  //   const reveals = document.querySelectorAll(".reveal");

  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           // when visible → animate
  //           entry.target.classList.add("active");
  //         } else {
  //           // when out of view → reset
  //           entry.target.classList.remove("active");
  //         }
  //       });
  //     },
  //     {
  //       threshold: 0.2,
  //     },
  //   );

  //   reveals.forEach((el) => observer.observe(el));

  //   return () => observer.disconnect();
  // }, []);

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

export default App;
