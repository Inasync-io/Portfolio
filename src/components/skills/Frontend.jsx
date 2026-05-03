import React from "react";

const Frontend = () => {
  return (
    <div className="content">
      <h3 className="skills__title">Frontend developer</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">HTML</h3>
              <span className="skills__level">Advanced</span>
              <div className="skills__bar">
                <span
                  className="skills__percentage"
                  style={{ "--skill-level": "90%" }}
                ></span>
              </div>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">CSS</h3>
              <span className="skills__level">Advanced</span>
              <div className="skills__bar">
                <span
                  className="skills__percentage"
                  style={{ "--skill-level": "85%" }}
                ></span>
              </div>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">JavaScript</h3>
              <span className="skills__level">Intermediate</span>
              <div className="skills__bar">
                <span
                  className="skills__percentage"
                  style={{ "--skill-level": "70%" }}
                ></span>
              </div>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">Tailwind</h3>
              <span className="skills__level">Intermediate</span>
              <div className="skills__bar">
                <span
                  className="skills__percentage"
                  style={{ "--skill-level": "60%" }}
                ></span>
              </div>  
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">Figma</h3>
              <span className="skills__level">Intermediate</span>
              <div className="skills__bar">
                <span
                  className="skills__percentage"
                  style={{ "--skill-level": "50%" }}
                ></span>
              </div>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">React</h3>
              <span className="skills__level">Intermediate</span>
              <div className="skills__bar">
                <span
                  className="skills__percentage"
                  style={{ "--skill-level": "60%" }}
                ></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
