// import React, { useState } from "react";
// import arrow from "../assets/ContactArrow.svg";
// import expand from "../assets/Expand.png";
// import "../styles/footer.css";
// import InstaIcon from "../assets/InstaIcon.svg";
// import TwitterIcon from "../assets/TwitterIcon.svg";
// import FBICon from "../assets/FBIcon.svg";
// import LinkedIcon from "../assets/LinkedIcon.svg";
// import { useNavigate } from "react-router-dom";
// import Contact from "./Contact";

// const footerAccordion = [
//   {
//     category: "Company",
//     links: [
//       { name: "Company", path: "" },
//       { name: "Careers", path: "/career" },
//       { name: "Contact", path: "" },
//     ],
//   },
//   {
//     category: "Product",
//     links: [
//       { name: "Services", path: "/services" },
//       { name: "Products", path: "/products" },
//       { name: "Projects", path: "/project" },
//     ],
//   },
//   {
//     category: "Resources",
//     links: [
//       { name: "Community", path: "" },
//       { name: "Whats", path: "" },
//       { name: "Project", path: "/project" },
//     ],
//   },
// ];

// function FooterAccordion({ data }) {
//   const [accordion, setAccordion] = useState(0);
//   const navigate = useNavigate();
//   const [showContactForm, setShowContactForm] = useState(false);
//   const closeForm = () => {
//     setShowContactForm(false);
//   };
//   return (
//     <div className="footer-accordion">
//       <div
//         className="footer-accordion-top"
//         onClick={() => setAccordion(!accordion)}
//       >
//         <p>{data.category}</p>
//         <div>
//           <img src={expand} alt="" />
//         </div>
//       </div>
//       {accordion
//         ? data.links.map((link) => (
//           <div className="mbfooter-links">
//             <span
//               onClick={() => {
//                 if (link.path !== "") {
//                   navigate(link.path);
//                   window.scrollTo(0, 0);
//                 }
//                 if (link.name === "Contact") {
//                   setShowContactForm(true);
//                 }
//               }}
//             >
//               {link.name}
//             </span>
//           </div>
//         ))
//         : ""}
//       <div className="foo-line"></div>{" "}
//       {showContactForm && <Contact closeHandle={closeForm} />}
//     </div>
//   );
// }

// export default function MobileFooter() {
//   const [showContactForm, setShowContactForm] = useState(false);
//   const closeForm = () => {
//     setShowContactForm(false);
//   };
//   return (
//     <div className="mobile-footer">
//       <div
//         style={{
//           display: "flex",
//           gap: "10px",
//           alignItems: "center",
//           marginLeft: "20px",
//         }}
//       >
//         <img src={arrow} alt="" />
//         <div className="contact-text">Contact</div>
//       </div>
//       <div style={{ marginLeft: "20px" }}>
//         <div className="keep-text">Keep in touch</div>
//         <div
//           className="contact-us-btn"
//           onClick={() => setShowContactForm(true)}
//         >
//           Contact Us
//         </div>
//       </div>
//       <div style={{ marginLeft: "20px" }}>
//         <div className="start-conversation">Start a Conversation</div>
//       </div>
//       <div
//         style={{
//           marginLeft: "20px",
//           display: "flex",
//           flexDirection: "column",
//           gap: "20px",
//         }}
//       >
//         <div className="contact-mails">
//           <a href={`mailto:${"contactus@staciacorp.com"}`}>
//             contactus@staciacorp.com
//           </a>
//         </div>
//         <div className="contact-mails">
//           <a href={`tel:${9363034150}`}>+91-9363034150</a>
//         </div>
//       </div>
//       <div>
//         {footerAccordion.map((data, index) => (
//           <FooterAccordion key={index} data={data} />
//         ))}
//       </div>
//       <div className="socialLinks">
//         <div className="social-link">
//           <a
//             href="https://www.instagram.com/stacia_corp_?igsh=MTA5MGdnZms5ZjhwMA=="
//             target="_blank"
//             rel="noreferrer"
//           >
//             <img src={InstaIcon} alt="" />
//           </a>
//         </div>
//         <div className="social-link">
//           <a href="https://x.com/StaciaCorp" target="_blank" rel="noreferrer">
//             <img src={TwitterIcon} alt="" />
//           </a>
//         </div>
//         <div className="social-link">
//           <a
//             href="https://www.facebook.com/staciacorp/"
//             target="_blank"
//             rel="noreferrer"
//           >
//             <img src={FBICon} alt="" />
//           </a>
//         </div>
//         <div className="social-link">
//           <a
//             href="https://www.linkedin.com/company/staciacorp"
//             target="_blank"
//             rel="noreferrer"
//           >
//             <img src={LinkedIcon} alt="" />
//           </a>
//         </div>
//       </div>
//       <div
//         style={{
//           display: "flex",
//           alignItems: "center",
//           gap: "23px",
//           marginLeft: "20px",
//         }}
//       >
//         <div className="terms">Terms of service</div>
//         <div className="dot"></div>
//         <div className="terms">Privacy Policy</div>

//       </div>
//       <div
//         style={{
//           display: "flex",
//           alignItems: "center",
//           gap: "23px",
//           marginLeft: "20px",
//         }}
//       >
//         {/* <div className="dot"> */}
//         <div className="terms">Sitemap</div>
//         </div>
//       <div className="copy-rights">
//         © Copyright StaciaCorp. All Rights Reserved
//       </div>
//       {showContactForm && <Contact closeHandle={closeForm} />}
//     </div>
//   );
// }

import React, { useState } from "react";
import arrow from "../assets/ContactArrow.svg";
import expand from "../assets/Expand.png";
import "../styles/footer.css";
import InstaIcon from "../assets/InstaIcon.svg";
import TwitterIcon from "../assets/TwitterIcon.svg";
import FBICon from "../assets/FBIcon.svg";
import LinkedIcon from "../assets/LinkedIcon.svg";
import { useNavigate } from "react-router-dom";
import Contact from "./Contact";



const footerAccordion = [
  {
    category: "Company",
    links: [
      { name: "About", path: "/about" },
      { name: "Careers", path: "/career" },
      { name: "Contact", path: "" },
    ],
  },
  {
    category: "Product",
    links: [
      { name: "Services", path: "/services" },
      { name: "Products", path: "/products" },
      { name: "Projects", path: "/project" },
    ],
  },
  {
    category: "Resources",
    links: [
      { name: "Case Study", path: "/case-study" },
      { name: "Articles", path: "/article" },
      // { name: "Whatsnew", path: "" },
    ],
  },
{
  category: "Reach Us",
  links: [
    {
      name: "Ground Floor, C-53, Guindy Industrial Estate, Guindy, Chennai - 32, Tamil Nadu",
      path: "",
      url: "https://maps.app.goo.gl/subrLwPjRTJdTcRZ8"
    },
  ],
}
];

function FooterAccordion({ data }) {
  const [accordion, setAccordion] = useState(0);
  const navigate = useNavigate();
  const [showContactForm, setShowContactForm] = useState(false);
 
  const closeForm = () => {
    setShowContactForm(false);
  };
  return (
    <div className="footer-accordion">
      <div
        className="footer-accordion-top"
        onClick={() => setAccordion(!accordion)}
      >
        <p>{data.category}</p>
        <div>
          <img src={expand} alt="" />
        </div>
      </div>
      {accordion
        ? data.links.map((link) => (
          <div className="mbfooter-links">
            {link.name.includes("Guindy Industrial Estate") ? (
  <a className="location"
    href="https://maps.app.goo.gl/subrLwPjRTJdTcRZ8"
    target="_blank"
    rel="noopener noreferrer"
  >
    {link.name}
  </a>
) : (
  <span
    onClick={() => {
      if (link.path !== "") {
        navigate(link.path);
        window.scrollTo(0, 0);
      }
      if (link.name === "Contact") {
        setShowContactForm(true);
      }
    }}
  >
    {link.name}
  </span>
)}

          </div>
        ))
        : ""}
      <div className="foo-line"></div>{" "}
      {showContactForm && <Contact closeHandle={closeForm} />}
    </div>
  );
}

export default function MobileFooter() {
  const [showContactForm, setShowContactForm] = useState(false);
  const navigate = useNavigate();
  const closeForm = () => {
    setShowContactForm(false);
  };
  return (
    <div className="mobile-footer">
      <div
        style={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
          marginLeft: "20px",
        }}
      >
        <img src={arrow} alt="" />
        <div className="contact-text">Contact</div>
      </div>
      <div style={{ marginLeft: "20px" }}>
        <div className="keep-text">Keep in touch</div>
        <div
          className="contact-us-btn"
          onClick={() => setShowContactForm(true)}
        >
          Contact Us
        </div>
      </div>
      <div style={{ marginLeft: "20px" }}>
        <div className="start-conversation">Start a Conversation</div>
      </div>
      <div
        style={{
          marginLeft: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <div className="contact-mails">
          <a href={`mailto:${"contactus@staciacorp.com"}`}>
            contactus@staciacorp.com
          </a>
        </div>
        <div className="contact-mails">
          <a href={`tel:${9363034150}`}>+91-9363034150</a>
        </div>
      </div>
      <div>
        {footerAccordion.map((data, index) => (
          <FooterAccordion key={index} data={data} />
        ))}
      </div>
      <div className="socialLinks">
        <div className="social-link">
          <a
            href="https://www.instagram.com/stacia_corp_?igsh=MTA5MGdnZms5ZjhwMA=="
            target="_blank"
            rel="noreferrer"
          >
            <img src={InstaIcon} alt="" />
          </a>
        </div>
        <div className="social-link">
          <a href="https://x.com/StaciaCorp" target="_blank" rel="noreferrer">
            <img src={TwitterIcon} alt="" />
          </a>
        </div>
        <div className="social-link">
          <a
            href="https://www.facebook.com/staciacorp/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={FBICon} alt="" />
          </a>
        </div>
        <div className="social-link">
          <a
            href="https://www.linkedin.com/company/staciacorp"
            target="_blank"
            rel="noreferrer"
          >
            <img src={LinkedIcon} alt="" />
          </a>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "23px",
          marginLeft: "20px",
        }}
      >
        <div className="terms">Terms of service</div>
        <div className="dot"></div>
        <div className="terms">Privacy Policy</div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "23px",
          marginLeft: "20px",
        }}
      >
        {/* <div className="dot"> */}
        <div
          className="terms"
          onClick={() => {
            navigate("/sitemap");
            window.scrollTo(0, 0);
          }}
        >
          Sitemap
        </div>
      </div>
      <div className="copy-rights">
        © Copyright StaciaCorp. All Rights Reserved
      </div>
      {showContactForm && <Contact closeHandle={closeForm} />}
    </div>
  );
}