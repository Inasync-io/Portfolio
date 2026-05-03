import React from "react";

const WorkItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className="work__img" />
      <div className="work__data">
        <h3 className="work__title">{item.title}</h3>
        <p className="description">{item.description}</p>
        <a href={item.link} className="work__button">
          Source Code{" "}
          <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </a>
      </div>
    </div>
  );
};

export default WorkItems;
