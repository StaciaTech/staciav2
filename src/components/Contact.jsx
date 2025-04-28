

import React, { useEffect, useState } from "react";
import "../styles/Contact.css";
import StaciaContactLogo from "../assets/StaciaContactLogo.svg";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import axios from "axios";
import { IoIosArrowDown } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const titles = [
  "Information Technology",
  "AgriIndustries",
  "Food Processing",
  "Energy Industries",
  "Others",
];

function Contact({ closeHandle }) {
  const [form, setForm] = useState({
    name: "",
    mail: "",
    phone: "",
    organization: "",
    customOrg: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [showOpt, setShowOpt] = useState(false);
  const [submitted, setSubmitted] = useState(false); // Track if form was submitted

  useEffect(() => {
    document.body.classList.add("no-scroll");
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateField = (name, value) => {
    switch (name) {
      case "name":
        return value.trim() ? "" : "Name is required";
      case "mail":
        return !value.trim()
          ? "Email is required"
          : !emailRegex.test(value)
          ? "Invalid email format"
          : "";
      case "phone":
        return value && value.length > 5 ? "" : "Phone number is required";
      case "organization":
        return value ? "" : "Organization is required";
      case "customOrg":
        return form.organization === "Others" && !value.trim()
          ? "Custom organization name is required"
          : "";
      default:
        return "";
    }
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(form).forEach((key) => {
      const error = validateField(key, form[key]);
      if (error) newErrors[key] = error;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (name, value) => {
    setForm((prev) => ({ ...prev, [name]: value }));
    if (submitted) { // Only validate and clear errors after submission
      const error = validateField(name, value);
      setErrors((prev) => ({
        ...prev,
        [name]: error,
      }));
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true); // Mark as submitted
    if (!validateForm()) {
      toast.error("Please fill all required fields correctly", {
        style: {
          backgroundColor: "red",
          color: "white",
          textAlign: "center",
        },
      });
      return;
    }

    const formData = new FormData();
    formData.append("access_key", "e94ad995-f110-472a-81f9-66ff8ca65e98");
    formData.append("name", form.name);
    formData.append("email", form.mail);
    formData.append("phone", form.phone);
    formData.append(
      "organization",
      form.organization === "Others" ? form.customOrg : form.organization
    );
    formData.append("message", form.message);
    formData.append("subject", "New Inquiry via Contact Form – Stacia Corp");
    formData.append("from_name", "Stacia Corp Website");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        toast.success(":tada: Message Sent Successfully!", {
          style: {
            backgroundColor: "#008E2F",
            color: "white",
            textAlign: "center",
          },
        });
        setForm({
          name: "",
          mail: "",
          phone: "",
          organization: "",
          customOrg: "",
          message: "",
        });
        setErrors({});
        setSubmitted(false); // Reset submission state
        setTimeout(() => {
          closeHandle();
        }, 1500);
      } else {
        toast.error("Failed to send. Please try again.", {
          style: {
            backgroundColor: "red",
            color: "white",
          },
        });
      }
    } catch (err) {
      toast.error("An error occurred. Please try again later.", {
        style: {
          backgroundColor: "red",
          color: "white",
        },
      });
    }
  };

  return (
    <div className="contact-overlay">
      <div className="contact-content">
        <div className="contact-form-container">
          <div className="contact-form-image-container">
            <div>
              <img src={StaciaContactLogo} alt="Stacia Logo" />
            </div>
            <div className="contact-socials">
              <div>
                <a
                  href="https://www.facebook.com/staciacorp/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="footer-icon-container">
                    <FaFacebookF className="footer-facebook-icon" />
                  </div>
                </a>
              </div>
              <div>
                <a
                  href="https://www.linkedin.com/company/staciacorp"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="footer-icon-container">
                    <FaLinkedinIn className="footer-linkedin-icon" />
                  </div>
                </a>
              </div>
              <div>
                <a
                  href="https://x.com/StaciaCorp"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="footer-icon-container">
                    <BsTwitterX className="footer-twitter-icon" />
                  </div>
                </a>
              </div>
              <div>
                <a
                  href="https://www.instagram.com/stacia_corp_?igsh=MTA5MGdnZms5ZjhwMA=="
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="footer-icon-container">
                    <FaInstagram className="footer-insta-icon" />
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form-content-container">
            <div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div className="contact-main-title">
                  Love to hear from you 💙
                </div>
                <IoClose
                  onClick={closeHandle}
                  className="pointer"
                  color="#000"
                  fontSize={32}
                />
              </div>
              <div className="contact-second-title">Keep in Touch!</div>
            </div>

            <form onSubmit={onSubmit}>
              <div className="input-container">
                <div className="input-wrapper">
                  <input
                    type="text"
                    placeholder="Name*"
                    value={form.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    className={`input-field ${errors.name ? "invalid" : ""}`}
                  />
                  {errors.name && (
                    <span className="error-message">{errors.name}</span>
                  )}
                </div>
                <div className="input-wrapper">
                  <input
                    type="email"
                    placeholder="Enter Your Mail*"
                    value={form.mail}
                    onChange={(e) => handleChange("mail", e.target.value)}
                    className={`input-field ${errors.mail ? "invalid" : ""}`}
                  />
                  {errors.mail && (
                    <span className="error-message">{errors.mail}</span>
                  )}
                </div>
              </div>
              <div className="input-container">
                <div className="input-wrapper">
                  <div
                    className={`organization-container ${
                      errors.organization ? "invalid" : ""
                    }`}
                    onClick={() => setShowOpt(!showOpt)}
                  >
                    <input
                      type="text"
                      placeholder="Select Your Organization*"
                      value={form.organization}
                      readOnly
                      className="contact-org-inp"
                      style={{ border: "none" }}
                    />
                    <IoIosArrowDown />
                    {showOpt && (
                      <div className="org-options">
                        {titles.map((title, idx) => (
                          <p
                            key={idx}
                            onClick={() => {
                              handleChange("organization", title);
                              setShowOpt(false);
                            }}
                          >
                            {title}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                  {errors.organization && (
                    <span className="error-message">{errors.organization}</span>
                  )}
                </div>
                <div className="input-wrapper">
                  <div
                    className={`mobile-container ${errors.phone ? "invalid" : ""}`}
                  >
                    <PhoneInput
                      placeholder="Enter phone number*"
                      value={form.phone}
                      defaultCountry="IN"
                      onChange={(value) => handleChange("phone", value || "")}
                      className={`PhoneInput ${errors.phone ? "invalid" : ""}`}
                    />
                  </div>
                  {errors.phone && (
                    <span className="error-message">{errors.phone}</span>
                  )}
                </div>
              </div>
              {form.organization === "Others" && (
                <div className="input-container">
                  <div className="input-wrapper">
                    <input
                      type="text"
                      placeholder="Enter your organization name*"
                      value={form.customOrg}
                      onChange={(e) => handleChange("customOrg", e.target.value)}
                      className={`input-field ${errors.customOrg ? "invalid" : ""}`}
                    />
                    {errors.customOrg && (
                      <span className="error-message">{errors.customOrg}</span>
                    )}
                  </div>
                </div>
              )}
              <div className="input-wrapper">
                <textarea
                  placeholder="Anything else you would like to tell us?"
                  value={form.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  className="message-area"
                ></textarea>
              </div>
              <div>
                <button type="submit" className="submit-style">
                  Keep in Touch
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer
        autoClose={1500}
        position="top-center"
        closeButton={false}
        hideProgressBar={true}
        icon={false}
      />
    </div>
  );
}

export default Contact;