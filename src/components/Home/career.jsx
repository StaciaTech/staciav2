import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/Home/Career.css";

const CareersSection = () => {
    const navigate = useNavigate();
    return (
        <section className="careers-section">
            <div className="careers-content">
                <div className="careers-text">
                    <h1 className="careers-title">Careers</h1>
                    <p className="careers-desc">
                        At Stacia Corp we are solving the most important problems with the
                        most talented individuals who share our passion to change the world.
                        Our culture is lean, energetic, and fast-paced. We work to build an
                        inclusive environment in which everyone, regardless of gender, race,
                        religion, age, or background, can do their best work.
                    </p>
                </div>

                <div className="careers-button-container">
                    <button className="careers-button" onClick={() => {
                        navigate("/career");
                        window.scrollTo(0, 0);
                    }
                    }>JOIN US</button>
                </div>
            </div>

            {/* <div className="diamond" aria-hidden="true"></div> */}
        </section >
    );
};

export default CareersSection;
