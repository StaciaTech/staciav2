import React from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { FaEnvelope, FaLinkedinIn } from "react-icons/fa";

export default function FourCard({ data, path }) {
  const navigate = useNavigate();

  return (
    <div className="four-card">
      <div className="four-pos test-seclection-blue">{data.pos}</div>

      <div className="four-img">
        <img
          src={data.img}
          alt=""
          onClick={() => {
            navigate(`${path}/${data.name.split(" ").join("-")}`);
            window.scrollTo(0, 0);
          }}
        />
        <div className="founder-content">
          {/* LinkedIn Icon */}
          <div>
            <a href={data.proId} target="_blank" rel="noopener noreferrer">
              <div className="leader-icon-container">
                <FaLinkedinIn className="footer-linkedin-icon" />
              </div>
            </a>
          </div>

          {/* Email Icon */}
          <div>
<<<<<<< HEAD
           <a href={`mailto:${data.email}`}  rel="noopener noreferrer">
=======
            <a href={`mailto:${data.email}`} target="/blank" >
>>>>>>> 5e577a0311accccab01fb465c91b2b2f0c9eaf5e
              <div className="leader-icon-container">
                <FaEnvelope className="footer-facebook-icon" />
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="four-para">
        <div className="four-name test-seclection-blue">{data.name}</div>
        <p className="test-seclection-blue">{data.about}</p>
      </div>
    </div>
  );
}
