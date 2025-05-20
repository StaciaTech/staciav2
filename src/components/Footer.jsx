import React, { useState } from "react";
import "../styles/footer.css";
import { useNavigate } from "react-router-dom";
import Contact from "./Contact";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
// import { Fa```jsx
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Modal from "react-modal";

function Footer() {
  const navigate = useNavigate();
  const [showContactForm, setShowContactForm] = useState(false);
  const closeForm = () => {
    setShowContactForm(false);
  };
  const ModelStyles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgb(13, 2, 37,0.6)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 9999,
    },
    content: {
      width: "90%",
      minHeight: "90%",
      inset: 0,
      margin: "auto",
      position: "relative",
      borderRadius: "1rem",
      padding: "3rem 5rem",
      boxSizing: "border-box",
      
    },
  };

  const HandleClick = () => {
    navigate("/Privacy-Policy");
  };

  return (
    <div className="footer-contaier">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: "100px",
        }}
      >
        <div
          style={{
            fontSize: "100px",
            fontWeight: 800,
            color: "#0D0225",
            userSelect: "none",
          }}
        >
          Keep in touch
        </div>
        <button
          style={{
            height: "40px",
            width: "178px",
            backgroundColor: "#0047FF",
            color: "white",
            fontSize: "18px",
            border: "none",
            borderRadius: "10px",
            fontFamily: "Euclid",
            cursor: "pointer",
            userSelect: "none",
          }}
          onClick={() => setShowContactForm(true)}
        >
          Contact Us
        </button>
      </div>
      <div className="footer-tabs">
        <div>
          <div style={{ color: "#6B6084", userSelect: "none" }}>
            Start a Conversation
          </div>
          <div
            className="footer-gradient-text pointer"
            style={{ marginTop: "44px", userSelect: "none" }}
          >
            <a href={`mailto:${"contactus@staciacorp.com"}`}>
              contactus@staciacorp.com
            </a>
          </div>
          <div
            className="footer-gradient-text pointer"
            style={{ marginTop: "30px", userSelect: "none" }}
          >
            +91-9363034150
          </div>
        </div>
        <div>
          <div>Company</div>
          <div
            className="footer-grey-tabs"
            onClick={() => {
              navigate("/about");
              window.scrollTo(0, 0);
            }}
          >
            About
          </div>
          <div
            className="footer-grey-tabs"
            onClick={() => {
              navigate("/career");
              window.scrollTo(0, 0);
            }}
          >
            Careers
          </div>
          <div
            className="footer-grey-tabs"
            onClick={() => setShowContactForm(true)}
          >
            Contact
          </div>
        </div>
        <div>
          <div>Product</div>
          <div
            className="footer-grey-tabs"
            onClick={() => {
              navigate("/products");
              window.scrollTo(0, 0);
            }}
          >
            Products
          </div>
          <div
            className="footer-grey-tabs"
            onClick={() => {
              navigate("/services");
              window.scrollTo(0, 0);
            }}
          >
            Services
          </div>
          <div
            className="footer-grey-tabs"
            onClick={() => {
              navigate("/project");
              window.scrollTo(0, 0);
            }}
          >
            Projects
          </div>
        </div>
        <div>
          <div>Resources</div>
          <div
            className="footer-grey-tabs"
            onClick={() => {
              navigate("/case-study");
              window.scrollTo(0, 0);
            }}
          >
            Case Studies
          </div>
          <div
            className="footer-grey-tabs"
            onClick={() => {
              navigate("/article");
              window.scrollTo(0, 0);
            }}
          >
            Articles
          </div>
          <div
            className="footer-grey-tabs"
            onClick={() => {
              navigate("/whatsnew");
              window.scrollTo(0, 0);
            }}
          >
            What's New
          </div>
        </div>
        <div>
          <div>Reach Us</div>
          <div className="footer-grey-tabs pointer">
            <a
              href="https://maps.app.goo.gl/subrLwPjRTJdTcRZ8"
              target="_blank"
              rel="noreferrer"
            >
              <div className="footer-grey-tabs pointer test-seclection-blue">
                Ground Floor, C-53, Guindy Industrial Estate,
                <br />
                Guindy, Chennai - 32, Tamil Nadu
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-others">
        <div>
          ©Copyright Stacia<span style={{ color: "#0047FF" }}>Corp</span>. All
          Rights Reserved
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            opacity: "0.6",
            width: "40%",
            textDecoration: "none",
          }}
        >
          <div
            className="sitemap"
            onClick={() => {
              navigate("/sitemap");
              window.scrollTo(0, 0);
            }}
            style={{
              color: "black",
              cursor: "pointer",
              padding: "0rem 1.2rem",
            }}
          >
            Sitemap
          </div>

          <div
            style={{
              cursor: "pointer",
              color: "black",
              padding:"0rem 1.2rem"
              
            }}
          >
            Terms of Service
          </div>

          <div
            onClick={() => navigate("/Privacy-Policy")}
            style={{ cursor: "pointer", color: "black",padding:"0rem 1rem" }}
          >
            Privacy policy
          </div>
        </div>
        <div className="footer-icons">
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
          <div style={{ marginLeft: "20px", marginRight: "20px" }}>
            <a
              href="https://x.com/StaciaCorp"
              target="_blank"
              rel="noreferrer"
              className="footer-icon-container"
            >
              <BsTwitterX className="footer-twitter-icon" />
            </a>
          </div>
          <div style={{ marginRight: "20px" }}>
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
        </div>
      </div>
      <Modal
        style={ModelStyles}
        isOpen={showContactForm}
        onRequestClose={closeForm}
      >
        <Contact closeHandle={closeForm} />
      </Modal>
    </div>
  );
}
export default Footer;