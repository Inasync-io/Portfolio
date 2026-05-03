// // FormInput.jsx

// const FormInput = ({
//   label,
//   type = "text",
//   name,
//   placeholder,
//   textarea = false,
// }) => {
//   return (
//     <div className={`contact__from-div ${textarea ? "contact__form-area" : ""}`}>
//       <label htmlFor={name} className="contact__form-tag">
//         {label}
//       </label>

//       {textarea ? (
//         <textarea
//           name={name}
//           cols="30"
//           rows="10"
//           className="contact__form-input"
//           placeholder={placeholder}
//         ></textarea>
//       ) : (
//         <input
//           type={type}
//           name={name}
//           className="contact__form-input"
//           placeholder={placeholder}
//         />
//       )}
//     </div>
//   );
// };

// export default FormInput;

// FormInput.jsx

import React, { useState, useRef, useEffect } from "react"; 

const FormInput = ({
  label,
  type = "text",
  name,
  placeholder,
  textarea = false,
  tabIndex,

  // Dropdown Props
  dropdown = false,
  options = [ 'Hire You (Full-Time)', 'Freelance Project', 'UI/UX Design Work', 'Collaboration', 'Other' ],
  selectedOption,
  setSelectedOption,
}) => {
  const dropdownRef = useRef(null);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSelected = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  // Close dropdown outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`contact__from-div ${textarea ? "contact__form-area" : ""}`}
      ref={dropdownRef}
    >
      <label htmlFor={name} className="contact__form-tag">
        {label}
      </label>

      {/* Dropdown */}
      {dropdown ? (
        <>
          <div
            className="contact__dropdown-selected"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            tabIndex={tabIndex}
          >
            <span>{selectedOption || placeholder}</span>

            <i
              className={`bx bx-chevron-down contact__dropdown-icon ${
                isDropdownOpen ? "dropdown__rotate" : ""
              }`}
            ></i>
          </div>

          {isDropdownOpen && (
            <div className="contact__dropdown-menu">
              {options.map((option, index) => (
                <div
                  key={index}
                  className={`contact__dropdown-item ${
                    selectedOption === option ? "dropdown__active" : ""
                  }`}
                  onClick={() => handleSelected(option)}
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </>
      ) : textarea ? (
        // Textarea
        <textarea
          name={name}
          cols="30"
          rows="10"
          className="contact__form-input"
          placeholder={placeholder}
          tabIndex={tabIndex}
        ></textarea>
      ) : (
        // Input
        <input
          type={type}
          name={name}
          className="contact__form-input"
          placeholder={placeholder}
          tabIndex={tabIndex}
        />
      )}
    </div>
  );
};

export default FormInput;
