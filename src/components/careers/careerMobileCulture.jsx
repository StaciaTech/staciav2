import { React, useState, useEffect } from "react";
import "../../styles/career.css";
import arrow from "../../assets/arrowDown.svg";

function CareerMobileCulture() {
  const [office, setOffice] = useState(false);
  const [work, setWork] = useState(false);
  const [coWorker, setCoWorker] = useState(false);
  const [yearly, setYearly] = useState(false);

  useEffect(() => {
    setOffice(false);
    setWork(false);
    setCoWorker(false);
    setYearly(false);
  }, []);

  const officeShowHandler = () => {
    setOffice(!office);
    setWork(false);
    setCoWorker(false);
    setYearly(false);
  };
  const workHandler = () => {
    setOffice(false);
    setWork(!work);
    setCoWorker(false);
    setYearly(false);
  };
  const coWorkerHandler = () => {
    setOffice(false);
    setWork(false);
    setCoWorker(!coWorker);
    setYearly(false);
  };
  const yearlyHandler = () => {
    setOffice(false);
    setWork(false);
    setCoWorker(false);
    setYearly(!yearly);
  };

  return (
    <div style={{ width: "100%" }}>
      <div className="our-cultures-mobile">
        <div
          className="career-headings"
          //   style={{ textAlign: "center", width: "100%", fontSize: "24px" }}
        >
          Our Culture
        </div>

        <div>
          <div className="mobile-culture-titles" onClick={officeShowHandler}>
            <div>Office Environment</div>
            <div>
              <img src={arrow} alt="" />
            </div>
          </div>
          <p
            className="mobile-culture-contents"
            style={office ? { display: "block" } : { display: "none" }}
          >
            At Stacia Corp, our office environment is designed to inspire
            innovation, creativity, foster collaboration, and support
            productivity. We believe that where you work is just as important as
            how you work, which is why we’ve created a dynamic and welcoming
            space that reflects our commitment to innovation and teamwork. Open,
            Collaborative Spaces.
          </p>
        </div>
        <hr />
        <div>
          <div className="mobile-culture-titles" onClick={workHandler}>
            <div>Working Model</div>
            <div>
              <img src={arrow} alt="" />
            </div>
          </div>
          <p
            className="mobile-culture-contents"
            style={work ? { display: "block" } : { display: "none" }}
          >
            At Stacia Corp, we believe that flexibility and collaboration are
            key to driving innovation and productivity. Our working model is
            built around agile principles. Teams are empowered to move quickly,
            adapt to changing needs, and continuously improve processes. With
            regular check-ins, feedback loops, and sprint planning, we ensure
            that we remain responsive to both internal and client needs.
          </p>
        </div>
        <hr />
        <div onClick={coWorkerHandler}>
          <div className="mobile-culture-titles">
            <div>Co-workers Environment</div>
            <div>
              <img src={arrow} alt="" />
            </div>
          </div>
          <p
            className="mobile-culture-contents"
            style={coWorker ? { display: "block" } : { display: "none" }}
          >
            At Stacia Corp, we pride ourselves on fostering a positive,
            inclusive, and supportive co-worker environment where everyone feels
            valued and empowered to succeed. Our team is more than just
            colleagues—we are a community of talented individuals working
            together to achieve great things.
          </p>
        </div>
        <hr />
        <div>
          <div className="mobile-culture-titles" onClick={yearlyHandler}>
            <div>Open Communication</div>
            <div>
              <img src={arrow} alt="" />
            </div>
          </div>
          <p
            className="mobile-culture-contents"
            style={yearly ? { display: "block" } : { display: "none" }}
          >
            Transparent communication is key to our success. We maintain an
            open-door policy that encourages feedback, discussion, and the
            sharing of ideas. This approach ensures that every voice is heard
            and valued, creating a more cohesive team. Our diverse workforce
            brings a wealth of perspectives and experiences, enriching our
            collaborative efforts. We embrace this diversity, recognizing that
            it leads to more creative problem-solving and innovative solutions
          </p>
        </div>
      </div>
    </div>
  );
}

export default CareerMobileCulture;
