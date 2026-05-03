import React from "react";
import "./skills.css";
import Frontend from "./Frontend";
import Backend from "./Backend";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title reveal">Skills</h2>
      <span className="section__subtitle reveal">My technical level</span>

      <div className="skills__container container grid">
        {/* <Frontend />
        <Backend /> */}
        <div className="skills__content reveal reveal-left">
          <Frontend />
        </div>

        <div className="skills__content reveal reveal-right">
          <Backend />
        </div>
      </div>
    </section>
  );
};

export default Skills;
