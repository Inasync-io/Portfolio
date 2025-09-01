import React, { useState } from "react";
import "./services.css";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What i offer</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">Web <br /> Development</h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(1)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div className={toggleState === 1 ? "services__model active-modal" : "services__model"}>
            <div className="services__model-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times services__model-close"></i>

              <h3 className="services__model-title">Web Development</h3>
              <p className="services__model-description">
                Service with more than 2 years of experience in building full-stack applications using the MERN stack. Delivering secure, scalable, and high-performing solutions for businesses and clients.
              </p>

              <ul className="services__model-services grid">
                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon"></i>
                  <p className="services__model-info">I build responsive and scalable web applications.</p>
                </li>

                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon"></i>
                  <p className="services__model-info">I develop RESTful APIs with secure authentication.</p>
                </li>

                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon"></i>
                  <p className="services__model-info">I integrate databases with optimized performance.</p>
                </li>

                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon"></i>
                  <p className="services__model-info">I implement role-based authentication and authorization.</p>
                </li>

                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon"></i>
                  <p className="services__model-info">I deploy applications with best practices for scalability.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">Frontend & <br /> UI Design</h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(2)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div className={toggleState === 2 ? "services__model active-modal" : "services__model"}>
            <div className="services__model-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times services__model-close"></i>

              <h3 className="services__model-title">Frontend & UI Design</h3>
              <p className="services__model-description">
                Focused on crafting clean, modern, and user-friendly interfaces that ensure smooth user experiences across devices.
              </p>

              <ul className="services__model-services grid">
                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon"></i>
                  <p className="services__model-info">I design mobile-responsive web interfaces.</p>
                </li>

                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon"></i>
                  <p className="services__model-info">I convert wireframes into interactive designs.</p>
                </li>

                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon"></i>
                  <p className="services__model-info">I optimize UI performance for speed and accessibility.</p>
                </li>

                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon"></i>
                  <p className="services__model-info">I create reusable React.js components.</p>
                </li>

                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon"></i>
                  <p className="services__model-info">I use Tailwind CSS and design tools for consistent styling.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-edit services__icon"></i>
            <h3 className="services__title">Product & <br /> Visual Design</h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(3)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div className={toggleState === 3 ? "services__model active-modal" : "services__model"}>
            <div className="services__model-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times services__model-close"></i>

              <h3 className="services__model-title">Product & Visual Designer</h3>
              <p className="services__model-description">
                Designing intuitive visuals and prototypes that enhance branding, usability, and overall product experience.
              </p>

              <ul className="services__model-services grid">
                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon"></i>
                  <p className="services__model-info">I create mockups and wireframes using Figma</p>
                </li>

                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon"></i>
                  <p className="services__model-info">I design branding assets like posters and presentations.</p>
                </li>

                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon"></i>
                  <p className="services__model-info">I build prototypes for web and mobile apps.</p>
                </li>

                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon"></i>
                  <p className="services__model-info">I ensure design consistency across platforms.</p>
                </li>

                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon"></i>
                  <p className="services__model-info">I focus on aesthetics while keeping usability in mind.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
