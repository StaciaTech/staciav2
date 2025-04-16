// import React from "react";
// import "../styles/Contact.css";
// import StaciaContactLogo from "../assets/StaciaContactLogo.svg";
// import { useState } from "react";
// import "react-phone-number-input/style.css";
// import PhoneInput from "react-phone-number-input";
// import axios from "axios";
// import { IoIosArrowDown } from "react-icons/io";
// import { IoClose } from "react-icons/io5";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Insta from "../assets/c-inst.svg";
// import fb from "../assets/c-fb.svg";
// import twt from "../assets/c-twitter.svg";
// import lin from "../assets/c-link.svg";

// const titles = [
//   "Information Technology",
//   "AgriIndustries",
//   "Food Processing",
//   "Energy Industries",
//   "Others",
// ];
// function Contact({ closeHandle }) {
//   const [phoneValue, setPhoneValue] = useState("");
//   const [nameValue, setNameValue] = useState("");
//   const [mailValue, setMailValue] = useState("");
//   const [organization, setOrganization] = useState("");
//   const [messageValue, setMessageValue] = useState("");

//   const [showOpt, setShoeOpt] = useState(false);
//   // const

//   const SubmitHandler = () => {
//     if (
//       !nameValue ||
//       !mailValue ||
//       !phoneValue ||
//       organization === "Select Your Organization*"
//     ) {
//       // alert("Please fill all required fields!");
//       toast.success("Fill all fields", {
//         style: {
//           backgroundColor: "red",
//           color: "white",
//           textAlign: "center",
//         },
//       });
//     } else {
//       formPost();
//     }
//   };
//   const apiUrl = process.env.REACT_APP_API_URL;
//   // console.log(apiUrl);

//   const formPost = async () => {
//     const formData = new FormData();
//     formData.append("name", nameValue);
//     formData.append("mail", mailValue);
//     formData.append("phone", phoneValue);
//     formData.append("organisation", organization);
//     formData.append("tellUs", messageValue);
//     try {
//       const response = await axios.post(
//         `${apiUrl}/contact-us/contact`,
//         formData
//       );
//       console.log(response);
//       if (response.data.success) {
//         setTimeout(() => {
//           closeHandle();
//         }, 1000);
//         setNameValue("");
//         setMailValue("");
//         setPhoneValue("");
//         setMessageValue("");
//         setOrganization("Select Your Organization*");
//         toast.success("🎉 Successfully Message Sent!!", {
//           style: {
//             backgroundColor: "#008e2f",
//             color: "white",
//             textAlign: "center",
//           },
//         });
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className="contact-overlay">
//       <div className="contact-content">
//         <div className="contact-form-container">
//           <div className="contact-form-image-container">
//             <div>
//               <img src={StaciaContactLogo} alt="" />
//             </div>
//             <div className="contact-socials">
//               <div>
//                 <a
//                   href="https://www.facebook.com/staciacorp/"
//                   target="_blank"
//                   rel="noreferrer"
//                 >
//                   <img src={fb} alt="" />
//                 </a>
//               </div>

//               <div>
//                 <a
//                   href="https://www.linkedin.com/company/staciacorp"
//                   target="_blank"
//                   rel="noreferrer"
//                 >
//                   <img src={lin} alt="" />
//                 </a>
//               </div>
//               <div>
//                 <a
//                   href="https://x.com/StaciaCorp"
//                   target="_blank"
//                   rel="noreferrer"
//                 >
//                   <img src={twt} alt="" />
//                 </a>
//               </div>
//               <div>
//                 <a
//                   href="https://www.instagram.com/stacia_corp_?igsh=MTA5MGdnZms5ZjhwMA=="
//                   target="_blank"
//                   rel="noreferrer"
//                 >
//                   <img src={Insta} alt="" />
//                 </a>
//               </div>
//             </div>
//           </div>
//           <div className="contact-form-content-container">
//             <div>
//               <div
//                 style={{
//                   display: "flex",
//                   justifyContent: "space-between",
//                   // alignItems: "center",
//                 }}
//               >
//                 <div className="contact-main-title">
//                   Love to hear from you 💙
//                 </div>
//                 <IoClose
//                   onClick={closeHandle}
//                   className="pointer"
//                   color="#000"
//                   fontSize={32}
//                 />
//               </div>
//               <div className="contact-second-title">Keep in Touch!</div>
//             </div>
//             <div className="input-container">
//               <div>
//                 <input
//                   type="text"
//                   name=""
//                   id=""
//                   placeholder="Name*"
//                   className="input-field"
//                   onChange={(e) => setNameValue(e.target.value)}
//                 />
//               </div>
//               <div>
//                 <input
//                   type="text"
//                   name=""
//                   id=""
//                   placeholder="Enter Your Mail*"
//                   className="input-field"
//                   onChange={(e) => setMailValue(e.target.value)}
//                 />
//               </div>
//             </div>

//             <div className="input-container">
//               <div
//                 className={"organization-container"}
//                 onClick={() => setShoeOpt(!showOpt)}
//               >
//                 {/* <input
//                   type="text"
//                   name=""
//                   id=""
//                   placeholder="Select Organization*"
//                   className="input-field"
//                 /> */}
//                 <div
//                   className={
//                     organization === "Select Your Organization*"
//                       ? "org-text"
//                       : "org-text-selected"
//                   }
//                 >
//                   <input
//                     type="text"
//                     placeholder="Select Your Organization*"
//                     value={organization}
//                     className="contact-org-inp"
//                     style={{ border: "none" }}
//                   />
//                 </div>
//                 <IoIosArrowDown color="#c8c8c9" />
//                 {showOpt && (
//                   <div className="org-options">
//                     {titles.map((eachTitle, i) => (
//                       <p
//                         key={i}
//                         onClick={() => {
//                           setOrganization(eachTitle);
//                           setShoeOpt(false);
//                         }}
//                         className="pointer"
//                         style={{
//                           color: "#000000",
//                         }}
//                       >
//                         {eachTitle}
//                       </p>
//                     ))}
//                   </div>
//                 )}
//               </div>
//               <div className="mobile-container">
//                 <PhoneInput
//                   placeholder="Enter phone number*"
//                   value={phoneValue}
//                   defaultCountry="IN"
//                   onChange={setPhoneValue}
//                   className="PhoneInput"
//                   // style={{ height: "100%", border: "none" }}
//                 />
//               </div>
//             </div>
//             <div>
//               <textarea
//                 className="message-area"
//                 onChange={(e) => setMessageValue(e.target.value)}
//                 name=""
//                 id=""
//                 placeholder="Anything else you would like to tell us?"
//               ></textarea>
//             </div>
//             <div>
//               <button onClick={SubmitHandler} className="submit-style">
//                 Keep in Touch
//               </button>
//             </div>
//           </div>
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

// export default Contact;


//other input


import React, { useState } from "react";
import "../styles/Contact.css";
import StaciaContactLogo from "../assets/StaciaContactLogo.svg";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import axios from "axios";
import { IoIosArrowDown } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Insta from "../assets/c-inst.svg";
import fb from "../assets/c-fb.svg";
import twt from "../assets/c-twitter.svg";
import lin from "../assets/c-link.svg";
const titles = [
  "Information Technology",
  "AgriIndustries",
  "Food Processing",
  "Energy Industries",
  "Others",
];
function Contact({ closeHandle }) {
  const [phoneValue, setPhoneValue] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [mailValue, setMailValue] = useState("");
  const [organization, setOrganization] = useState("");
  const [customOrg, setCustomOrg] = useState("");
  const [messageValue, setMessageValue] = useState("");
  const [showOpt, setShoeOpt] = useState(false);
  const SubmitHandler = () => {
    if (
      !nameValue ||
      !mailValue ||
      !phoneValue ||
      !organization ||
      (organization === "Others" && !customOrg)
    ) {
      toast.error("Fill all fields", {
        style: {
          backgroundColor: "red",
          color: "white",
          textAlign: "center",
        },
      });
    } else {
      formPost();
    }
  };
  const apiUrl = process.env.REACT_APP_API_URL;
  const formPost = async () => {
    const formData = new FormData();
    formData.append("name", nameValue);
    formData.append("mail", mailValue);
    formData.append("phone", phoneValue);
    formData.append(
      "organisation",
      organization === "Others" ? customOrg : organization
    );
    formData.append("tellUs", messageValue);
    try {
      const response = await axios.post(
        `${apiUrl}/contact-us/contact`,
        formData
      );
      if (response.data.success) {
        setTimeout(() => {
          closeHandle();
        }, 1000);
        setNameValue("");
        setMailValue("");
        setPhoneValue("");
        setMessageValue("");
        setOrganization("");
        setCustomOrg("");
        toast.success(":tada: Successfully Message Sent!!", {
          style: {
            backgroundColor: "#008E2F",
            color: "white",
            textAlign: "center",
          },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="contact-overlay">
      <div className="contact-content">
        <div className="contact-form-container">
          <div className="contact-form-image-container">
            <div>
              <img src={StaciaContactLogo} alt="" />
            </div>
            <div className="contact-socials">
              <div>
                <a
                  href="https://www.facebook.com/staciacorp/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={fb} alt="" />
                </a>
              </div>
              <div>
                <a
                  href="https://www.linkedin.com/company/staciacorp"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={lin} alt="" />
                </a>
              </div>
              <div>
                <a
                  href="https://x.com/StaciaCorp"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={twt} alt="" />
                </a>
              </div>
              <div>
                <a
                  href="https://www.instagram.com/stacia_corp_?igsh=MTA5MGdnZms5ZjhwMA=="
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={Insta} alt="" />
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
            <div className="input-container">
              <div>
                <input
                  type="text"
                  placeholder="Name*"
                  className="input-field"
                  onChange={(e) => setNameValue(e.target.value)}
                  value={nameValue}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Enter Your Mail*"
                  className="input-field"
                  onChange={(e) => setMailValue(e.target.value)}
                  value={mailValue}
                />
              </div>
            </div>
            <div className="input-container">
              <div
                className="organization-container"
                onClick={() => setShoeOpt(!showOpt)}
              >
                <input
                  type="text"
                  placeholder="Select Your Organization*"
                  value={organization}
                  className="contact-org-inp"
                  style={{ border: "none" }}
                  readOnly
                />
                <IoIosArrowDown color="#C8C8C9" />
                {showOpt && (
                  <div className="org-options">
                    {titles.map((eachTitle, i) => (
                      <p
                        key={i}
                        onClick={() => {
                          setOrganization(eachTitle);
                          setShoeOpt(false);
                          if (eachTitle !== "Others") setCustomOrg("");
                        }}
                        className="pointer"
                        style={{ color: "#000000" }}
                      >
                        {eachTitle}
                      </p>
                    ))}
                  </div>
                )}
              </div>
              {organization === "Others" && (
                <input
                  type="text"
                  placeholder="Enter your organization name"
                  className="input-field"
                  value={customOrg}
                  onChange={(e) => setCustomOrg(e.target.value)}
                />
              )}
              <div className="mobile-container">
                <PhoneInput
                  placeholder="Enter phone number*"
                  value={phoneValue}
                  defaultCountry="IN"
                  onChange={setPhoneValue}
                  className="PhoneInput"
                />
              </div>
            </div>
            <div>
              <textarea
                className="message-area"
                onChange={(e) => setMessageValue(e.target.value)}
                value={messageValue}
                placeholder="Anything else you would like to tell us?"
              ></textarea>
            </div>
            <div>
              <button onClick={SubmitHandler} className="submit-style">
                Keep in Touch
              </button>
            </div>
          </div>
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
export default Contact;
