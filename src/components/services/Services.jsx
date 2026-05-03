import React, { useState } from "react";
import "./services.css";

const servicesData = [
  {
    id: 1,
    icon: "uil-web-grid",
    title: "Web Development",
    description:
      "Building scalable and responsive applications using the MERN stack, with secure APIs and optimized backend architecture.",
    points: [
      "Responsive and scalable applications",
      "REST APIs with authentication",
      "Database optimization",
      "Role-based auth",
      "Production deployment",
    ],
  },
  {
    id: 2,
    icon: "uil-arrow",
    title: "Frontend & UI Design",
    description:
      "Modern UI with React and Tailwind, ensuring accessibility and performance.",
    points: [
      "Responsive design",
      "Wireframe to UI",
      "Performance optimization",
      "Reusable components",
      "Clean styling",
    ],
  },
  {
    id: 3,
    icon: "uil-edit",
    title: "Product & Visual Design",
    description:
      "Designing visuals and prototypes to improve product experience.",
    points: [
      "Wireframes & mockups",
      "Branding assets",
      "Prototypes",
      "Design consistency",
      "User-focused design",
    ],
  },
];

const Services = () => {
  const [activeService, setActiveService] = useState(null);

  return (
    <section className="services section" id="services">
      <h2 className="section__title reveal">Services</h2>
      <span className="section__subtitle reveal">What i offer</span>

      <div className="services__container container grid">
        {servicesData.map((service) => (
          <div key={service.id} className="services__content reveal">
            <div>
              <i className={`uil ${service.icon} services__icon`}></i>
              <h3 className="services__title">
                {service.title.split(" & ").map((t, i) => (
                  <span key={i}>
                    {t} <br />
                  </span>
                ))}
              </h3>
            </div>

            <span
              className="services__button"
              onClick={() => setActiveService(service)}
            >
              View More
              <i className="uil uil-arrow-right services__button-icon"></i>
            </span>
          </div>
        ))}
      </div>

      {/* ✅ SINGLE MODAL */}
      <div
        className={
          activeService
            ? "services__model active-modal"
            : "services__model"
        }
      >
        {activeService && (
          <div className="services__model-content">
            <i
              onClick={() => setActiveService(null)}
              className="uil uil-times services__model-close"
            ></i>

            <h3 className="services__model-title">
              {activeService.title}
            </h3>

            <p className="services__model-description">
              {activeService.description}
            </p>

            <ul className="services__model-services grid">
              {activeService.points.map((point, index) => (
                <li key={index} className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon"></i>
                  <p className="services__model-info">{point}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;