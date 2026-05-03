import React from 'react'

const Backend = () => {
  return (
    <div className='content'>
      <h3 className="skills__title">Backend Developer & Tools</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">Node Js</h3>
              <span className="skills__level">Basic</span>
              <div className="skills__bar">
                <span
                  className="skills__percentage"
                  style={{ "--skill-level": "40%" }}
                ></span>
              </div>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">Express Js</h3>
              <span className="skills__level">Basic</span>
              <div className="skills__bar">
                <span
                  className="skills__percentage"
                  style={{ "--skill-level": "40%" }}
                ></span>
              </div>  
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">MongoDB</h3>
              <span className="skills__level">Basic</span>
              <div className="skills__bar">
                <span
                  className="skills__percentage"
                  style={{ "--skill-level": "40%" }}
                ></span>
              </div>      
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">Git</h3>
              <span className="skills__level">Basic</span>
              <div className="skills__bar">
                <span
                  className="skills__percentage"
                  style={{ "--skill-level": "40%" }}
                ></span>
              </div>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">VS Code</h3>
              <span className="skills__level">Advanced</span>
              <div className="skills__bar">
                <span
                  className="skills__percentage"
                  style={{ "--skill-level": "40%" }}
                ></span>
              </div>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">Vercel</h3>
              <span className="skills__level">Basic</span>
              <div className="skills__bar">
                <span
                  className="skills__percentage"
                  style={{ "--skill-level": "40%" }}
                ></span>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default Backend