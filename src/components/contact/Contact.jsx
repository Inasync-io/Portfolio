import React, { useRef } from "react";
// import emailjs from "@emailjs/browser";
import "./contact.css";
import FormInput from "./FormInput";
import { ax_contactForm } from "../../api/contactForm";
import { toast } from "react-hot-toast";

const Contact = () => {
  const initialFormData = {
    name: "",
    email: "",
    inquiryType: "",
    requirementDetails: "",
  };
  const form = useRef();

  const [formData, setFormData] = React.useState(initialFormData);
  const [apiErr, setApiErr] = React.useState(null);
  const [errors, setErrors] = React.useState({});
  // const [selectedOption, setSelectedOption] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm(
  //     "service_noz68tb",
  //     "template_nqzwmck",
  //     form.current,
  //     "dkO7JSbdfHOTTwHbJ",
  //   );
  //   e.target.reset();
  // };

  const validateField = (name, value) => {
    const validators = {
      name: (value) => {
        if (!value.trim()) return "Name is required";
        if (value.trim().length < 3) return "must be at least 3 characters";
        if (value.trim().length > 50) return "must be less than 50 characters";
        return null;
      },

      email: (value) => {
        if (!value.trim()) return "Email is required";
        if (!/^[\w.-]+@[\w-]+\.[\w-]{2,4}$/.test(value.trim())) {
          return "Invalid email format";
        }
        return null;
      },

      inquiryType: (value) => {
        if (!value.trim()) return "Inquiry type is required";
        return null;
      },

      requirementDetails: (value) => {
        if (!value.trim()) return "Requirement details are required";
        if (value.trim().length < 10) return "must be at least 10 characters";
        if (value.trim().length > 1000)
          return "must be less than 1000 characters";
        return null;
      },
    };

    return validators[name] ? validators[name](value) : null;
  };

  const validateForm = () => {
    const newErrors = Object.keys(formData).reduce((acc, field) => {
      const error = validateField(field, formData[field]);
      if (error) {
        acc[field] = error;
      }
      return acc;
    }, {});
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // live validation (optional but recommended)
    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, value),
    }));
  };

  const handleSubmit = async (e) => {
    console.log('hit submit');
    
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsLoading(true);

    try {
      const res = await ax_contactForm(formData);
      if (res.success) {
        toast.success("Message sent successfully!");

        setFormData(initialFormData);
        // setSelectedOption("");
        setApiErr(null);
      } else {
        toast.error(res.message || "Failed to send message.");
        setApiErr(res.message);
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      toast.error("An error occurred while submitting the form.");
      setApiErr("An error occurred while submitting the form.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title reveal">Get in touch</h2>
      <span className="section__subtitle reveal">Contact Me</span>

      <div className="contact__container container grid">
        <div className="contact__contact">
          <h3 className="contact__title reveal">Talk to me</h3>

          <div className="contact__info reveal reveal-left">
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"></i>

              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">nrogith@yahoo.com</span>

              <a href="mailto:nrogith@yahoo.com" className="contact__button">
                Write me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bxl-whatsapp contact__card-icon"></i>

              <h3 className="contact__card-title">Whatsapp</h3>
              <span className="contact__card-data">9025154014</span>

              <a
                href="https://api.whatsapp.com/send?phone=62214408789&text=Hello, more information!"
                className="contact__button"
              >
                Write me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bxl-messenger contact__card-icon"></i>

              <h3 className="contact__card-title">Messenger</h3>
              <span className="contact__card-data">https://m.me/irohitna</span>

              <a href="https://m.me/crypticalcoder" className="contact__button">
                Write me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title reveal">Hire me</h3>

          <form
            ref={form}
            onSubmit={handleSubmit}
            className="contact__form reveal reveal-right"
          >
            <FormInput
              label="Name"
              name="name"
              placeholder="Enter your name"
              tabIndex={1}
              error={errors.name}
              value={formData.name}
              onChange={handleChange}
            />

            <FormInput
              label="Email"
              type="email"
              name="email"
              placeholder="Enter your email"
              tabIndex={2}
              error={errors.email}
              value={formData.email}
              onChange={handleChange}
            />

            <FormInput
              label="Inquiry Type"
              name="inquiryType"
              dropdown={true}
              placeholder="Select Inquiry Type"
              value={formData.inquiryType}
              onChange={handleChange}
              // selectedOption={selectedOption}
              // setSelectedOption={setSelectedOption}
              tabIndex={3}
              error={errors.inquiryType}
            />

            <FormInput
              label="Requirement Details"
              name="requirementDetails"
              placeholder="Describe your project, goals, or role you're hiring for..."
              textarea
              tabIndex={4}
              error={errors.requirementDetails}
              value={formData.requirementDetails}
              onChange={handleChange}
            />

            {apiErr && <p className="api-error">{apiErr}</p>}
            <button
              className="button button--flex"
              disabled={isLoading}
              type="submit"
            >
              {/* Send Message */}
              {isLoading ? "Sending..." : "Send Message"}
              <svg
                class="button__icon"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z"
                  fill="var(--container-color)"
                ></path>
                <path
                  d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
                  fill="var(--container-color)"
                ></path>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
