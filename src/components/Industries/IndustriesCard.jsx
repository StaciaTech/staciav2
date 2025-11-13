import React from "react";
import { useNavigate } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import "../../styles/Industries/IndustriesCard.css";

/**
 * Props:
 *  - industries: [{ id, title, description, imageSrc, alt, slug }]
 *  - activeIndustry: string (optional)
 */

const IndustriesRowSection = ({ industries = [], activeIndustry }) => {
  const navigate = useNavigate();

  return (
    <section className="industries-row-section">
      <div className="industries-row-inner">
        {industries.map((ind, idx) => {
          const reverse = idx % 2 === 1;
          const slug =
            ind.slug ||
            (ind.title || "")
              .toLowerCase()
              .trim()
              .replace(/\s+/g, "-");

          return (
            // <article
            //   key={ind.id || idx}
            //   className={`industry-row ${
            //     reverse ? "reverse" : ""
            //   } industry-card ${
            //     activeIndustry === ind.title ? "selected" : ""
            //   }`}
            //   aria-labelledby={`industry-${idx}-title`}
            // >

            <article
              key={ind.id || idx}
              className={`industry-row industry-card ${activeIndustry === ind.title ? "selected" : ""
                }`}
              aria-labelledby={`industry-${idx}-title`}
            >
              {/* Image Section */}
              <div className="industry-image-wrap">
                <img
                  src={ind.imageSrc}
                  alt={ind.alt || `${ind.title} illustration`}
                  className="industry-image"
                />
              </div>

              {/* Text Section */}
              <div className="industry-content">
                <h3 id={`industry-${idx}-title`} className="industry-row-title">
                  {ind.title}
                </h3>
                <p className="industry-row-desc">{ind.description}</p>

                <div className="industry-row-actions">
                  {/* <button
                    className="btn-link"
                    onClick={() =>
                      navigate(`/services/${encodeURIComponent(slug)}`)
                    }
                  >
                    Explore Services <GoArrowRight />
                  </button>

                  <button
                    className="btn-outline"
                    onClick={() =>
                      navigate(`/project/${encodeURIComponent(ind.title)}`)
                    }
                  >
                    View Projects
                  </button> */}

                  <div
                    className="know-more pointer"
                    onClick={() =>
                      navigate(
                        `/industries-covered-read_more/${encodeURIComponent(
                          slug
                        )}`
                      )
                    }
                  >
                    Read More <GoArrowRight />
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default IndustriesRowSection;
