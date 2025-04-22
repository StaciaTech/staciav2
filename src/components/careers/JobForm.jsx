import React, { useState } from "react";
import "../../styles/JobForm.css";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import UploadIcon from "../../assets/uploadIcon.svg";
import { IoIosArrowDown } from "react-icons/io";
function JobForm({ closeForm }) {
  const [store, setStore] = useState({
    firstName: "",
    lastName: "",
    phoneValue: "",
    email: "",
    jobRole: "",
    file: null,
  });
  const [dragActive, setDragActive] = useState(false);
  const [showRoles, setShowRoles] = useState(false);
  const [errors, setErrors] = useState({});
  const [formMessage, setFormMessage] = useState({ type: "", text: "" });
  const JobRoles = [
    "FrontEnd Developer",
    "Backend Developer",
    "UI/UX Design",
    "HR",
    "Brand Manager Marketing",
  ];
  const handleemailstore = (e) => {
    const { name, value } = e.target;
    setStore((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setErrors((prevErrors) => {
      const newErrors = { ...prevErrors };
      if (name === "firstName" && value.trim()) delete newErrors.firstName;
      if (name === "lastName" && value.trim()) delete newErrors.lastName;
      if (name === "email") {
        if (!value.trim()) {
          newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          newErrors.email = "Email is invalid";
        } else {
          delete newErrors.email;
        }
      }
      return newErrors;
    });
  };
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (
      selectedFile?.type === "application/pdf" &&
      selectedFile.size <= 5 * 1024 * 1024
    ) {
      setStore((prevState) => ({ ...prevState, file: selectedFile }));
      setErrors((prev) => ({ ...prev, file: "" }));
    } else {
      setErrors((prev) => ({
        ...prev,
        file: "Please upload a valid PDF (max 5MB)",
      }));
    }
  };
  const handleDrop = (event) => {
    event.preventDefault();
    setDragActive(false);
    const droppedFile = event.dataTransfer.files[0];
    if (
      droppedFile?.type === "application/pdf" &&
      droppedFile.size <= 5 * 1024 * 1024
    ) {
      setStore((prevState) => ({ ...prevState, file: droppedFile }));
      setErrors((prev) => ({ ...prev, file: "" }));
    } else {
      setErrors((prev) => ({
        ...prev,
        file: "Please upload a valid PDF (max 5MB)",
      }));
    }
  };
  const openFileInput = () => document.getElementById("resume-box").click();
  const onSubmit = async (event) => {
    event.preventDefault();
    const newErrors = {};
    if (!store.firstName.trim()) newErrors.firstName = "First name is required";
    if (!store.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!store.phoneValue) newErrors.phoneValue = "Phone number is required";
    if (!store.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(store.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!store.jobRole.trim()) newErrors.jobRole = "Please select a job role";
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setFormMessage({
        type: "error",
        text: "Please fill all required fields correctly.",
      });
      return;
    }
    const formData = new FormData(event.target);
    formData.append("access_key", "f05920d0-3b2a-427b-bd0e-de098dfadd58");
    formData.append("subject", "New Job Application via Stacia Corp Careers");
    formData.append("from_name", "Stacia Corp Website");
    try {
      setFormMessage({ type: "info", text: "Submitting your application..." });
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        setFormMessage({
          type: "success",
          text: "Form Submitted Successfully!",
        });
        event.target.reset();
        closeForm(); // Remove this if you want to keep the form open
      } else {
        setFormMessage({
          type: "error",
          text: data.message || "Something went wrong.",
        });
      }
    } catch (error) {
      setFormMessage({
        type: "error",
        text: "Network error. Please try again.",
      });
    }
  };
  return (
    <div className="job-form">
      <div className="job-form-inner">
        <div className="job-form-content-container">
          <div className="job-form-title">Job Application</div>
          <form onSubmit={onSubmit}>
            <div className="job-input-container">
              <div className="job-input-holder">
                <div>First name*</div>
                <input
                  type="text"
                  name="firstName"
                  value={store.firstName}
                  onChange={handleemailstore}
                  placeholder="Enter your first name"
                />
                {errors.firstName && (
                  <span className="error-span">{errors.firstName}</span>
                )}
              </div>
              <div className="job-input-holder">
                <div>Last name*</div>
                <input
                  type="text"
                  name="lastName"
                  value={store.lastName}
                  onChange={handleemailstore}
                  placeholder="Enter your last name"
                />
                {errors.lastName && (
                  <span className="error-span">{errors.lastName}</span>
                )}
              </div>
            </div>
            <div className="job-input-container">
              <div className="job-input-holder">
                <div>Phone*</div>
                <PhoneInput
                  placeholder="Enter phone number"
                  value={store.phoneValue}
                  name="phoneValue"
                  onChange={(value) => {
                    setStore((prev) => ({ ...prev, phoneValue: value }));
                    setErrors((prev) => {
                      const updated = { ...prev };
                      if (value) delete updated.phoneValue;
                      return updated;
                    });
                  }}
                  className="phone-input"
                  defaultCountry="IN"
                />
                {errors.phoneValue && (
                  <span className="error-span">{errors.phoneValue}</span>
                )}
              </div>
              <div className="job-input-holder">
                <div>Email*</div>
                <input
                  type="email"
                  name="email"
                  value={store.email}
                  onChange={handleemailstore}
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <span className="error-span">{errors.email}</span>
                )}
              </div>
            </div>
            <div className="job-domain">
              <div className="role-input-holder">
                <div>Select Job Role*</div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    border: "1px solid #CADBEA",
                    borderRadius: "0.5rem",
                  }}
                >
                  <input
                    type="text"
                    name="jobRole"
                    value={store.jobRole}
                    onChange={handleemailstore}
                    placeholder="Select applying role"
                    className="job-role-input"
                    style={{ border: "none" }}
                  />
                  <IoIosArrowDown onClick={() => setShowRoles(!showRoles)} />
                </div>
                {errors.jobRole && (
                  <span className="error-span">{errors.jobRole}</span>
                )}
              </div>
              {showRoles && (
                <div className="job-domain-options">
                  {JobRoles.map((role, index) => (
                    <div key={index} className="role-option">
                      <div
                        onClick={() => {
                          setStore((prevState) => ({
                            ...prevState,
                            jobRole: role,
                          }));
                          setShowRoles(false);
                          setErrors((prev) => ({ ...prev, jobRole: "" }));
                        }}
                      >
                        {role}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div>
              <div>Resume (optional)</div>
              <div
                className={`resume-container ${dragActive ? "active" : ""}`}
                onDragOver={(e) => {
                  e.preventDefault();
                  setDragActive(true);
                }}
                onDragLeave={(e) => {
                  e.preventDefault();
                  setDragActive(false);
                }}
                onDrop={handleDrop}
                onClick={openFileInput}
              >
                <div className="resume-box">
                  {store.file ? (
                    <p style={{ color: "#0047FF" }}>{store.file.name}</p>
                  ) : (
                    <>
                      <img src={UploadIcon} alt="Upload" />
                      <div>Select a file or drag and drop here</div>
                      <div style={{ padding: "0.75rem 0", color: "#0006" }}>
                        PDF format, file size not more than 5MB
                      </div>
                      <button type="button">Select file</button>
                    </>
                  )}
                </div>
              </div>
              <input
                type="file"
                accept="application/pdf"
                id="resume-box"
                onChange={handleFileChange}
                style={{ display: "none" }}
              />
              {errors.file && <span className="error-span">{errors.file}</span>}
            </div>
            {formMessage.text && (
              <div
                style={{
                  marginTop: "1rem",
                  color:
                    formMessage.type === "success"
                      ? "green"
                      : formMessage.type === "error"
                      ? "red"
                      : "#444",
                  fontWeight: "500",
                }}
              >
                {formMessage.text}
              </div>
            )}
            <div className="job-btn-container">
              <button className="job-cancel" type="button" onClick={closeForm}>
                Cancel
              </button>
              <button className="job-submit" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default JobForm;









