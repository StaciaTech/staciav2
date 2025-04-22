// import React, { useState } from "react";
// import "../../styles/JobForm.css";
// import "react-phone-number-input/style.css";
// import PhoneInput from "react-phone-number-input";
// import UploadIcon from "../../assets/uploadIcon.svg";
// import axios from "axios";
// import { IoIosArrowDown } from "react-icons/io";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// function JobForm({ closeForm }) {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [phoneValue, setPhoneValue] = useState("");
//   const [email, setEmail] = useState("");
//   const [jobRole, setJobRole] = useState("");
//   const [file, setFile] = useState(null);
//   // console.log(file);

//   const [dragActive, setDragActive] = useState(false);

//   // Handle file selection
//   const handleFileChange = (event) => {
//     const selectedFile = event.target.files[0];
//     if (selectedFile && selectedFile.type === "application/pdf") {
//       setFile(selectedFile);
//     } else {
//       toast.success("Please upload a PDF file.", {
//         style: {
//           backgroundColor: "red",
//           color: "white",
//           textAlign: "center",
//         },
//       });
//     }
//   };

//   // Handle drag events
//   const handleDragOver = (event) => {
//     event.preventDefault();
//     event.stopPropagation();
//     setDragActive(true);
//   };

//   const handleDragLeave = (event) => {
//     event.preventDefault();
//     event.stopPropagation();
//     setDragActive(false);
//   };

//   const handleDrop = (event) => {
//     event.preventDefault();
//     event.stopPropagation();
//     setDragActive(false);
//     const droppedFile = event.dataTransfer.files[0];
//     if (droppedFile) {
//       if (droppedFile.type === "application/pdf") {
//         if (droppedFile.size <= 5 * 1024 * 1024) {
//           // Check if file size is less than or equal to 5MB
//           setFile(droppedFile);
//         } else {
//           toast.success("File size should be 5MB", {
//             style: {
//               backgroundColor: "red",
//               color: "white",
//               textAlign: "center",
//             },
//           });
//         }
//       } else {
//         toast.success("Please upload a PDF file.", {
//           style: {
//             backgroundColor: "red",
//             color: "white",
//             textAlign: "center",
//           },
//         });
//       }
//     }
//   };

//   // Open file input when clicking "Select" button
//   const openFileInput = () => {
//     document.getElementById("resume-box").click();
//   };

//   const JobRoles = [
//     "FrontEnd Developer",
//     "Backend  Developer",
//     "UI/UX Design",
//     "HR",
//     "Brand Manager Marketing",
//   ];
//   const [showRoles, setShowRoles] = useState(false);

//   const SubmitHandle = () => {
//     if (!firstName || !lastName || !email || !file || !phoneValue || !jobRole) {
//       toast.success("Fill all fields properly", {
//         style: {
//           backgroundColor: "red",
//           color: "white",
//           textAlign: "center",
//         },
//       });
//     } else {
//       JobPostCall();
//     }
//   };

//   const apiUrl = process.env.REACT_APP_API_URL;

//   const JobPostCall = async () => {
//     const formData = new FormData();
//     formData.append("firstName", firstName);
//     formData.append("lastName", lastName);
//     formData.append("mobile", phoneValue);
//     formData.append("emailId", email);
//     formData.append("role", jobRole);
//     formData.append("file", file);
//     try {
//       const response = await axios.post(`${apiUrl}/career/apply-job`, formData);
//       // console.log(response);
//       if (response.data.success) {
//         setFirstName("");
//         setLastName("");
//         setPhoneValue("");
//         setEmail("");
//         setFile(null);
//         setJobRole("");
//         toast.success("🎉 Successfully Job Applied!!", {
//           style: {
//             backgroundColor: "#008e2f",
//             color: "white",
//             textAlign: "center",
//           },
//         });
//         setTimeout(() => {
//           closeForm();
//         }, 1000);
//       }      
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className="job-form">
//       <div className="job-form-inner">
//         <div className="job-form-content-container">
//           <div className="job-form-title">Job Application</div>
//           <div className="job-input-container">
//             <div className="job-input-holder">
//               <div>First name*</div>
//               <input
//                 type="text"
//                 name="firstName"
//                 value={firstName}
//                 onChange={(e) => {
//                   setFirstName(e.target.value);
//                 }}
//                 placeholder="Enter your first name"
//                 required
//               />
//             </div>
//             <div className="job-input-holder">
//               <div>Last name*</div>
//               <input
//                 type="text"
//                 name="lastName"
//                 value={lastName}
//                 onChange={(e) => {
//                   setLastName(e.target.value);
//                 }}
//                 placeholder="Enter your last name"
//                 required
//               />
//             </div>
//           </div>
//           <div className="job-input-container">
//             <div className="job-input-holder">
//               <div>Phone*</div>
//               <div className="job-input-holder-phone">
//                 <PhoneInput
//                   placeholder="Enter phone number"
//                   value={phoneValue}
//                   defaultCountry="IN"
//                   onChange={setPhoneValue}
//                   style={{ height: "100%", border: "none" }}
//                 />
//               </div>
//             </div>
//             <div className="job-input-holder">
//               <div>Email*</div>
//               <input
//                 type="email"
//                 name="email"
//                 value={email}
//                 onChange={(e) => {
//                   setEmail(e.target.value);
//                 }}
//                 placeholder="Enter your email"
//                 required
//               />
//             </div>
//           </div>
//           <div className="job-domain">
//             <div className="role-input-holder">
//               <div>Select Job Role*</div>
//               <div
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   border: "1px solid #cadbea",
//                   padding: "0rem 1rem",
//                   height: "3rem",
//                   borderRadius: "0.5rem",
//                 }}
//               >
//                 <input
//                   type="text"
//                   name="jobRole"
//                   value={jobRole}
//                   style={{ border: "none" }}
//                   onChange={(e) => setJobRole(e.target.value)}
//                   placeholder="Select applying role"
//                   required
//                   className="job-role-input"
//                 />
//                 <IoIosArrowDown onClick={() => setShowRoles(true)} />
//               </div>
//             </div>
//             {showRoles && (
//               <div className="job-domain-options">
//                 {JobRoles.map((role, index) => (
//                   <div key={index} className="role-option">
//                     <div
//                       onClick={() => {
//                         setJobRole(role);
//                         setShowRoles(false);
//                       }}
//                     >
//                       {role}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//           <div>
//             <div>Resume*</div>
//             <div
//               className={`resume-container ${dragActive ? "active" : ""}`}
//               onDragOver={handleDragOver}
//               onDragLeave={handleDragLeave}
//               onDrop={handleDrop}
//               onClick={openFileInput}
//             >
//               <div className="resume-box">
//                 {file ? (
//                   <p style={{ color: "#0047ff" }}>{file.name}</p>
//                 ) : (
//                   <>
//                     <img src={UploadIcon} alt="" />
//                     <div>Select a file or drag and drop here</div>
//                     <div style={{ padding: "0.75rem 0rem", color: "#0006" }}>
//                       PDF format, file size not more than 5MB
//                     </div>
//                     <button>Select file</button>
//                   </>
//                 )}
//               </div>
//             </div>
//             <input
//               type="file"
//               accept="application/pdf"
//               onChange={handleFileChange}
//               id="resume-box"
//               style={{ display: "none" }}
//             />
//           </div>
//         </div>
//         <div
//           style={{
//             // position: "absolute",
//             width: "100%",
//             height: "1px",
//             backgroundColor: "#0001",
//             // left: 0,
//             margin: "1rem 0rem",
//           }}
//         ></div>
//         <div className="job-btn-container">
//           <button className="job-cancel" onClick={closeForm}>
//             Cancel
//           </button>
//           <button className="job-submit" onClick={SubmitHandle}>
//             Submit
//           </button>
//         </div>
//       </div>
//       <ToastContainer
//         autoClose={1000}
//         position="top-center"
//         closeButton={false}
//         hideProgressBar={true}
//         icon={false}
//       />
//     </div>
//   );
// }

// export default JobForm;

// form validation


// import React, { useState } from "react";
// import "../../styles/JobForm.css";
// import "react-phone-number-input/style.css";
// import PhoneInput from "react-phone-number-input";
// import UploadIcon from "../../assets/uploadIcon.svg";
// import axios from "axios";
// import { IoIosArrowDown } from "react-icons/io";
// function JobForm({ closeForm }) {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [phoneValue, setPhoneValue] = useState("");
//   const [email, setEmail] = useState("");
//   const [jobRole, setJobRole] = useState("");
//   const [file, setFile] = useState(null);
//   const [dragActive, setDragActive] = useState(false);
//   const [showRoles, setShowRoles] = useState(false);
//   const [errors, setErrors] = useState({});
//   const JobRoles = [
//     "FrontEnd Developer",
//     "Backend  Developer",
//     "UI/UX Design",
//     "HR",
//     "Brand Manager Marketing",
//   ];
//   const handleFileChange = (event) => {
//     const selectedFile = event.target.files[0];
//     if (
//       selectedFile?.type === "application/pdf" &&
//       selectedFile.size <= 5 * 1024 * 1024
//     ) {
//       setFile(selectedFile);
//       setErrors((prev) => ({ ...prev, file: "" }));
//     } else {
//       setErrors((prev) => ({
//         ...prev,
//         file: "Please upload a valid PDF (max 5MB)",
//       }));
//     }
//   };
//   const handleDrop = (event) => {
//     event.preventDefault();
//     setDragActive(false);
//     const droppedFile = event.dataTransfer.files[0];
//     if (
//       droppedFile?.type === "application/pdf" &&
//       droppedFile.size <= 5 * 1024 * 1024
//     ) {
//       setFile(droppedFile);
//       setErrors((prev) => ({ ...prev, file: "" }));
//     } else {
//       setErrors((prev) => ({
//         ...prev,
//         file: "Please upload a valid PDF (max 5MB)",
//       }));
//     }
//   };
//   const openFileInput = () => document.getElementById("resume-box").click();
//   const SubmitHandle = () => {
//     const newErrors = {};
//     const nameRegex = /^[A-Za-z\s]+$/;
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     const phoneRegex = /^\+?[1-9]\d{7,14}$/;
//     if (!firstName.trim()) {
//       newErrors.firstName = "First name is required";
//     } else if (!nameRegex.test(firstName.trim())) {
//       newErrors.firstName = "First name must contain only letters";
//     }
//     if (!lastName.trim()) {
//       newErrors.lastName = "Last name is required";
//     } else if (!nameRegex.test(lastName.trim())) {
//       newErrors.lastName = "Last name must contain only letters";
//     }
//     if (!phoneValue) {
//       newErrors.phoneValue = "Phone number is required";
//     } else if (!phoneRegex.test(phoneValue)) {
//       newErrors.phoneValue = "Enter a valid phone number";
//     }
//     if (!email.trim()) {
//       newErrors.email = "Email is required";
//     } else if (!emailRegex.test(email.trim())) {
//       newErrors.email = "Enter a valid email address";
//     }
//     if (!jobRole.trim()) {
//       newErrors.jobRole = "Job role is required";
//     }
//     if (!file) {
//       newErrors.file = "Resume (PDF) is required";
//     }
//     setErrors(newErrors);
//     if (Object.keys(newErrors).length === 0) {
//       JobPostCall(); // only if no validation errors
//     }
//   };
//   const JobPostCall = async () => {
//     const formData = new FormData();
//     formData.append("firstName", firstName);
//     formData.append("lastName", lastName);
//     formData.append("mobile", phoneValue);
//     formData.append("emailId", email);
//     formData.append("role", jobRole);
//     formData.append("file", file);
//     try {
//       const apiUrl = process.env.REACT_APP_API_URL;
//       const response = await axios.post(`${apiUrl}/career/apply-job`, formData);
//       if (response.data.success) {
//         setFirstName("");
//         setLastName("");
//         setPhoneValue("");
//         setEmail("");
//         setJobRole("");
//         setFile(null);
//         closeForm(); // Close form after success
//       }
//     } catch (error) {
//       console.log("Submission failed:", error);
//     }
//   };
//   return (
//     <div className="job-form">
//       <div className="job-form-inner">
//         <div className="job-form-content-container">
//           <div className="job-form-title">Job Application</div>
//           <div className="job-input-container">
//             <div className="job-input-holder">
//               <div>First name*</div>
//               <input
//                 type="text"
//                 value={firstName}
//                 onChange={(e) => {
//                   setFirstName(e.target.value);
//                   setErrors((prev) => ({ ...prev, firstName: "" }));
//                 }}
//                 placeholder="Enter your first name"
//               />
//               {errors.firstName && (
//                 <span className="error-span">{errors.firstName}</span>
//               )}
//             </div>
//             <div className="job-input-holder">
//               <div>Last name*</div>
//               <input
//                 type="text"
//                 value={lastName}
//                 onChange={(e) => {
//                   setLastName(e.target.value);
//                   setErrors((prev) => ({ ...prev, lastName: "" }));
//                 }}
//                 placeholder="Enter your last name"
//               />
//               {errors.lastName && (
//                 <span className="error-span">{errors.lastName}</span>
//               )}
//             </div>
//           </div>
//           <div className="job-input-container">
//             <div className="job-input-holder">
//               <div>Phone*</div>
//               <PhoneInput
//                 placeholder="Enter phone number"
//                 value={phoneValue}
//                 defaultCountry="IN"
//                 onChange={(value) => {
//                   setPhoneValue(value);
//                   setErrors((prev) => ({ ...prev, phoneValue: "" }));
//                 }}
//                 className="phone-input"
//               />
//               {errors.phoneValue && (
//                 <span className="error-span">{errors.phoneValue}</span>
//               )}
//             </div>
//             <div className="job-input-holder">
//               <div>Email*</div>
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => {
//                   setEmail(e.target.value);
//                   setErrors((prev) => ({ ...prev, email: "" }));
//                 }}
//                 placeholder="Enter your email"
//               />
//               {errors.email && (
//                 <span className="error-span">{errors.email}</span>
//               )}
//             </div>
//           </div>
//          <div className="job-domain">
//              <div className="role-input-holder">
//                <div>Select Job Role*</div>
//                <div
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "space-between",
//                 }}
//               >
//                 <input
//                   type="text"
//                   name="jobRole"
//                   value={jobRole}
//                   onChange={(e) => {
//                     setJobRole(e.target.value);
//                     setErrors((prev) => ({ ...prev, jobRole: "" }));
//                   }}
//                   placeholder="Select applying role"
//                   className="job-role-input"
//                 />
//                 <IoIosArrowDown onClick={() => setShowRoles(!showRoles)} />
//               </div>
//               {errors.jobRole && (
//                 <span className="error-span">{errors.jobRole}</span>
//               )}
//             </div>
//             {showRoles && (
//               <div className="job-domain-options">
//                 {JobRoles.map((role, index) => (
//                   <div key={index} className="role-option">
//                     <div
//                       onClick={() => {
//                         setJobRole(role);
//                         setShowRoles(false);
//                         setErrors((prev) => ({ ...prev, jobRole: "" }));
//                       }}
//                     >
//                       {role}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//           <div>
//             <div>Resume*</div>
//             <div
//               className={`resume-container ${dragActive ? "active" : ""}`}
//               onDragOver={(e) => {
//                 e.preventDefault();
//                 setDragActive(true);
//               }}
//               onDragLeave={(e) => {
//                 e.preventDefault();
//                 setDragActive(false);
//               }}
//               onDrop={handleDrop}
//               onClick={openFileInput}
//             >
//               <div className="resume-box">
//                 {file ? (
//                   <p style={{ color: "#0047FF" }}>{file.name}</p>
//                 ) : (
//                   <>
//                     <img src={UploadIcon} alt="Upload" />
//                     <div>Select a file or drag and drop here</div>
//                     <div style={{ padding: "0.75rem 0", color: "#0006" }}>
//                       PDF format, file size not more than 5MB
//                     </div>
//                     <button>Select file</button>
//                   </>
//                 )}
//               </div>
//             </div>
//             <input
//               type="file"
//               accept="application/pdf"
//               id="resume-box"
//               onChange={handleFileChange}
//               style={{ display: "none" }}
//             />
//             {errors.file && <span className="error-span">{errors.file}</span>}
//           </div>
//         </div>
//         <div className="divider" />
//         <div className="job-btn-container">
//           <button className="job-cancel" onClick={closeForm}>
//             Cancel
//           </button>
//           <button className="job-submit" onClick={SubmitHandle}>
//             Submit
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default JobForm;

// email

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

  const pk = (e) => {
    const { name, value } = e.target;
    setStore((prevState) => ({
      ...prevState,
      [name]: value,
    }));
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
        closeForm(); // Optional: remove if you want the form to stay open
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
                  onChange={pk}
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
                  onChange={pk}
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
                  onChange={(value) =>
                    setStore((prev) => ({ ...prev, phoneValue: value }))
                  }
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
                  onChange={pk}
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
                    onChange={pk}
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

            {/* Inline success or error message */}
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

