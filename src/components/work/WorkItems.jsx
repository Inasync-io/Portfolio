import React from "react";
import { Link } from "react-router-dom";

const WorkItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className="work__img" />
      <div className="work__data">
        <h3 className="work__title">{item.title}</h3>
        <p className="description">{item.description}</p>
        <Link
          to={item.link}
          className="work__button"
        >
          {item.caseStudy ? "Case Study" : "Source Code"}
          <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </Link>
      </div>
    </div>
  );
};

export default WorkItems;
