import React, { useEffect } from "react";
import "./scrollup.css";

const Scrollup = () => {
  // window.addEventListener("scroll", function () {
  //   const scrollup = document.querySelector(".scrollup");
  //   // when the scroll is higher than 560 viewport height,
  //   // add the show-scroll class to a tag width the scroll-top class
  //   if (this.scrollY >= 560) scrollup.classList.add("show-scroll");
  //   else scrollup.classList.remove("show-scroll");
  // });

  useEffect(() => {
    const scrollUp = () => {
      const scrollup = document.querySelector(".scrollup");
      if (!scrollup) return; // ✅ null guard

      if (window.scrollY >= 560) scrollup.classList.add("show-scroll");
      else scrollup.classList.remove("show-scroll");
    };

    window.addEventListener("scroll", scrollUp);
    return () => window.removeEventListener("scroll", scrollUp);
  }, []);

  return (
    <a href="#about" className="scrollup">
      <i className="uil uil-arrow-up scrollup__icon"></i>
    </a>
  );
};

export default Scrollup;
