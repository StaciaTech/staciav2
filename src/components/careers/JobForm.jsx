import React, { useState } from "react";
import "../../styles/JobForm.css";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import UploadIcon from "../../assets/uploadIcon.svg";
import axios from "axios";
import { IoIosArrowDown } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function JobForm({ closeForm }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [email, setEmail] = useState("");
  const [jobRole, setJobRole] = useState("");
  const [file, setFile] = useState(null);
  // console.log(file);

  const [dragActive, setDragActive] = useState(false);

  // Handle file selection
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile(selectedFile);
    } else {
      toast.success("Please upload a PDF file.", {
        style: {
          backgroundColor: "red",
          color: "white",
          textAlign: "center",
        },
      });
    }
  };

  // Handle drag events
  const handleDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setDragActive(true);
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setDragActive(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setDragActive(false);
    const droppedFile = event.dataTransfer.files[0];
    if (droppedFile) {
      if (droppedFile.type === "application/pdf") {
        if (droppedFile.size <= 5 * 1024 * 1024) {
          // Check if file size is less than or equal to 5MB
          setFile(droppedFile);
        } else {
          toast.success("File size should be 5MB", {
            style: {
              backgroundColor: "red",
              color: "white",
              textAlign: "center",
            },
          });
        }
      } else {
        toast.success("Please upload a PDF file.", {
          style: {
            backgroundColor: "red",
            color: "white",
            textAlign: "center",
          },
        });
      }
    }
  };

  // Open file input when clicking "Select" button
  const openFileInput = () => {
    document.getElementById("resume-box").click();
  };

  const JobRoles = [
    "FrontEnd Developer",
    "Backend  Developer",
    "UI/UX Design",
    "HR",
    "Brand Manager Marketing",
  ];
  const [showRoles, setShowRoles] = useState(false);

  const SubmitHandle = () => {
    if (!firstName || !lastName || !email || !file || !phoneValue || !jobRole) {
      toast.success("Fill all fields properly", {
        style: {
          backgroundColor: "red",
          color: "white",
          textAlign: "center",
        },
      });
    } else {
      JobPostCall();
    }
  };

  const apiUrl = process.env.REACT_APP_API_URL;

  const JobPostCall = async () => {
    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("mobile", phoneValue);
    formData.append("emailId", email);
    formData.append("role", jobRole);
    formData.append("file", file);
    try {
      const response = await axios.post(`${apiUrl}/career/apply-job`, formData);
      // console.log(response);
      if (response.data.success) {
        setFirstName("");
        setLastName("");
        setPhoneValue("");
        setEmail("");
        setFile(null);
        setJobRole("");
        toast.success("🎉 Successfully Job Applied!!", {
          style: {
            backgroundColor: "#008e2f",
            color: "white",
            textAlign: "center",
          },
        });
        setTimeout(() => {
          closeForm();
        }, 1000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="job-form">
      <div className="job-form-inner">
        <div className="job-form-content-container">
          <div className="job-form-title">Job Application</div>
          <div className="job-input-container">
            <div className="job-input-holder">
              <div>First name*</div>
              <input
                type="text"
                name="firstName"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                placeholder="Enter your first name"
                required
              />
            </div>
            <div className="job-input-holder">
              <div>Last name*</div>
              <input
                type="text"
                name="lastName"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                placeholder="Enter your last name"
                required
              />
            </div>
          </div>
          <div className="job-input-container">
            <div className="job-input-holder">
              <div>Phone*</div>
              <div className="job-input-holder-phone">
                <PhoneInput
                  placeholder="Enter phone number"
                  value={phoneValue}
                  defaultCountry="IN"
                  onChange={setPhoneValue}
                  style={{ height: "100%", border: "none" }}
                />
              </div>
            </div>
            <div className="job-input-holder">
              <div>Email*</div>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="Enter your email"
                required
              />
            </div>
          </div>
          <div className="job-domain">
            <div className="role-input-holder">
              <div>Select Job Role*</div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  border: "1px solid #cadbea",
                  padding: "0rem 1rem",
                  height: "3rem",
                  borderRadius: "0.5rem",
                }}
              >
                <input
                  type="text"
                  name="jobRole"
                  value={jobRole}
                  style={{ border: "none" }}
                  onChange={(e) => setJobRole(e.target.value)}
                  placeholder="Select applying role"
                  required
                  className="job-role-input"
                />
                <IoIosArrowDown onClick={() => setShowRoles(true)} />
              </div>
            </div>
            {showRoles && (
              <div className="job-domain-options">
                {JobRoles.map((role, index) => (
                  <div key={index} className="role-option">
                    <div
                      onClick={() => {
                        setJobRole(role);
                        setShowRoles(false);
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
            <div>Resume*</div>
            <div
              className={`resume-container ${dragActive ? "active" : ""}`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={openFileInput}
            >
              <div className="resume-box">
                {file ? (
                  <p style={{ color: "#0047ff" }}>{file.name}</p>
                ) : (
                  <>
                    <img src={UploadIcon} alt="" />
                    <div>Select a file or drag and drop here</div>
                    <div style={{ padding: "0.75rem 0rem", color: "#0006" }}>
                      PDF format, file size not more than 5MB
                    </div>
                    <button>Select file</button>
                  </>
                )}
              </div>
            </div>
            <input
              type="file"
              accept="application/pdf"
              onChange={handleFileChange}
              id="resume-box"
              style={{ display: "none" }}
            />
          </div>
        </div>
        <div
          style={{
            // position: "absolute",
            width: "100%",
            height: "1px",
            backgroundColor: "#0001",
            // left: 0,
            margin: "1rem 0rem",
          }}
        ></div>
        <div className="job-btn-container">
          <button className="job-cancel" onClick={closeForm}>
            Cancel
          </button>
          <button className="job-submit" onClick={SubmitHandle}>
            Submit
          </button>
        </div>
      </div>
      <ToastContainer
        autoClose={1000}
        position="top-center"
        closeButton={false}
        hideProgressBar={true}
        icon={false}
      />
    </div>
  );
}

export default JobForm;
