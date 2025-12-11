// import React from "react";
// import "../../styles/Home/NewsRoomHome.css";
// import image from "../../assets/home-rkvy.png";

// export default function NewsRoomHome() {
//     return (
//         <div className="newroom-home" aria-label="Funding section">
//             {/* Background SVG (inlined and used as decorative background) */}
//             <div className="bg-svg-wrap" aria-hidden="true">
//                 {/* <svg
//           id="shape1"
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 1400 582"
//           preserveAspectRatio="xMidYMid slice"
//           focusable="false"
//         >
//           <path
//             id="home-yellow"
//             d="M0 24C0 10.745 10.745 0 24 0h1156c8.28 0 15 6.716 15 15v46c0 8.284 6.72 15 15 15h175c8.28 0 15 6.716 15 15v467c0 13.255-10.75 24-24 24H200c-8.284 0-15-6.716-15-15v-53c0-8.284-6.716-15-15-15H15c-8.284 0-15-6.716-15-15V24Z"
//             fill="#31088b"
//           />
//           <path
//             id="home-yellow-after"
//             d="M0 24C0 10.745 10.745 0 24 0h1156c8.28 0 15 6.716 15 15v46c0 8.284 6.72 15 15 15h175c8.28 0 15 6.716 15 15v467c0 13.255-10.75 24-24 24H200c-8.284 0-15-6.716-15-15v-53c0-8.284-6.716-15-15-15H15c-8.284 0-15-6.716-15-15V24Z"
//             fill="#31088b"
//           />
//         </svg> */}

//                 <svg id="shape1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400 662">
//                     <path id="home-success" d="M1085 15c0-8.284-6.72-15-15-15H109c-8.284 0-15 6.716-15 15v46c0 8.284-6.716 15-15 15H15C6.716 76 0 82.716 0 91v539c0 17.673 14.327 32 32 32h294c8.284 0 15-6.716 15-15v-51c0-8.284 6.716-15 15-15h485c8.284 0 15 6.716 15 15v51c0 8.284 6.716 15 15 15h302c8.28 0 15-6.716 15-15v-46c0-8.284 6.72-15 15-15h120c8.28 0 15-6.716 15-15v-22c0-8.284 6.72-15 15-15h32c8.28 0 15-6.716 15-15V32c0-17.673-14.33-32-32-32h-18c-8.28 0-15 6.716-15 15v45c0 8.284-6.72 15-15 15h-220c-8.28 0-15-6.716-15-15V15Z" fill="#31088b" data-original="M0 32C0 14.327 14.327 0 32 0h1336c17.67 0 32 14.327 32 32v598c0 17.673-14.33 32-32 32H32c-17.673 0-32-14.327-32-32V32Z"></path>
//                     <path id="home-success-after" d="M1085 15c0-8.284-6.72-15-15-15H109c-8.284 0-15 6.716-15 15v46c0 8.284-6.716 15-15 15H15C6.716 76 0 82.716 0 91v539c0 17.673 14.327 32 32 32h294c8.284 0 15-6.716 15-15v-51c0-8.284 6.716-15 15-15h485c8.284 0 15 6.716 15 15v51c0 8.284 6.716 15 15 15h302c8.28 0 15-6.716 15-15v-46c0-8.284 6.72-15 15-15h120c8.28 0 15-6.716 15-15v-22c0-8.284 6.72-15 15-15h32c8.28 0 15-6.716 15-15V32c0-17.673-14.33-32-32-32h-18c-8.28 0-15 6.716-15 15v45c0 8.284-6.72 15-15 15h-220c-8.28 0-15-6.716-15-15V15Z" fill="#31088b"></path>
//                 </svg>
//             </div>

//             {/* Content container */}
//             <div className="content-center">

//                 <div className="funding-wrapper">
//                     <div className="funding-grid">
//                         <div className="funding-left">
//                             <div className="heading-wrap">
//                                 <h2 className="funding-heading">OneDril Wins RKVY Innovation Grant</h2>
//                             </div>

//                             <div className="points-list">
//                                 <div className="point-row">
//                                     <div className="point-icon">
//                                         <img
//                                             src="https://cdn.prod.website-files.com/660fec29bd77a271c07eb5b6/661a2d0f7f02808e117afa71_Group%2026920.svg"
//                                             alt=""
//                                             loading="lazy"
//                                         />
//                                     </div>
//                                     <div className="point-text">Effortless onboarding by directly syncing your details</div>
//                                 </div>

//                                 <div className="point-row">
//                                     <div className="point-icon">
//                                         <img
//                                             src="https://cdn.prod.website-files.com/660fec29bd77a271c07eb5b6/661a2d0f7f02808e117afa71_Group%2026920.svg"
//                                             alt=""
//                                             loading="lazy"
//                                         />
//                                     </div>
//                                     <div className="point-text">Fully digital funding application process</div>
//                                 </div>

//                                 <div className="point-row">
//                                     <div className="point-icon">
//                                         <img
//                                             src="https://cdn.prod.website-files.com/660fec29bd77a271c07eb5b6/661a2d0f7f02808e117afa71_Group%2026920.svg"
//                                             alt=""
//                                             loading="lazy"
//                                         />
//                                     </div>
//                                     <div className="point-text">Structured funding. No hard collaterals required</div>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="funding-right">
//                             <div className="decorative-image">
//                                 <img
//                                     src={image}
//                                     // src="https://cdn.prod.website-files.com/660fec29bd77a271c07eb5b6/661a2e9e1ee7b20e015b1877_Union%20(7).svg"
//                                     alt=""
//                                     loading="lazy"
//                                 />
//                             </div>

//                             <div className="decorative-image mobile-only">
//                                 <img
//                                     src={image}
//                                     // src="https://cdn.prod.website-files.com/660fec29bd77a271c07eb5b6/665153cd5c7a7989caa331e6_Union%20(2).svg"
//                                     alt=""
//                                     loading="lazy"
//                                 />
//                             </div>

//                             <div className="points-overlay">
//                                 <div className="overlay-item">
//                                     <div className="overlay-icon">
//                                         <img
//                                             src="https://cdn.prod.website-files.com/660fec29bd77a271c07eb5b6/661cfb7e93abb38fbea311cb_Group%202%20(5).svg"
//                                             alt="Onboard"
//                                             loading="lazy"
//                                         />
//                                     </div>
//                                     <div className="overlay-text">Onboard to BetterInvest</div>
//                                 </div>

//                                 <div className="overlay-item">
//                                     <div className="overlay-icon">
//                                         <img
//                                             src="https://cdn.prod.website-files.com/660fec29bd77a271c07eb5b6/661a30c7a6383e2ef343fec0_Group%202%20(1).svg"
//                                             alt="Evaluate"
//                                             loading="lazy"
//                                         />
//                                     </div>
//                                     <div className="overlay-text">Get Evaluated</div>
//                                 </div>

//                                 <div className="overlay-item">
//                                     <div className="overlay-icon">
//                                         <img
//                                             src="https://cdn.prod.website-files.com/660fec29bd77a271c07eb5b6/661cfa94ba0636aec73a31d3_Group%202%20(2).svg"
//                                             alt="Term sheet"
//                                             loading="lazy"
//                                         />
//                                     </div>
//                                     <div className="overlay-text">Term Sheet</div>
//                                 </div>

//                                 <div className="overlay-item">
//                                     <div className="overlay-icon">
//                                         <img
//                                             src="https://cdn.prod.website-files.com/660fec29bd77a271c07eb5b6/661cfaa94f44a6eb5fc743fd_Group%202%20(3).svg"
//                                             alt="Cash"
//                                             loading="lazy"
//                                         />
//                                     </div>
//                                     <div className="overlay-text">Cash in bank within a week</div>
//                                 </div>
//                             </div>
//                         </div>
//                         {/* end funding-right */}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }



import React, { useEffect, useMemo, useRef, useState } from "react";
import "../../styles/Home/NewsRoomHome.css";
import rawData from "../../Data/Newroom.json"; // can be array or object
import defaultImage from "../../assets/home-rkvy.png";

/**
 * Helper: normalize the imported JSON into an array of slide objects.
 * Tries:
 *  - If data is an array -> use it
 *  - If data has common keys (items, slides, news, default) that are arrays -> use that
 *  - If data is object of objects -> extract values that look like slides (have date/title)
 *  - Otherwise -> return empty array
 */
function getSlidesFromData(data) {
  if (!data) return [];

  // If it's already an array
  if (Array.isArray(data)) {
    return data;
  }

  // Common container keys
  const keysToTry = ["items", "slides", "news", "data", "default"];
  for (const k of keysToTry) {
    if (data[k] && Array.isArray(data[k])) {
      return data[k];
    }
  }

  // If it's an object whose values are slide-like objects, flatten them
  if (typeof data === "object") {
    const values = Object.values(data);
    // If values contains arrays (e.g. each key -> array), flatten them
    const arrays = values.filter(Array.isArray);
    if (arrays.length) {
      return arrays.flat();
    }

    // Else, values may be slide objects (id keyed). Filter those with "date" or "title"
    const maybeSlides = values.filter(
      (v) => v && (v.date || v.title || v.content || v.excerpt)
    );
    if (maybeSlides.length) {
      return maybeSlides;
    }
  }

  // nothing worked -> empty
  return [];
}

export default function NewsRoomHome({ autoplay = true, autoplayDelay = 5000 }) {
  // defensive normalization
  const slidesRaw = useMemo(() => getSlidesFromData(rawData), [rawData]);

  // Sort by date if present (most recent first). If date missing, keep original order.
  const slides = useMemo(() => {
    const copy = Array.isArray(slidesRaw) ? [...slidesRaw] : [];
    copy.sort((a, b) => {
      const da = a?.date ? new Date(a.date) : null;
      const db = b?.date ? new Date(b.date) : null;
      if (da && db) return db - da;
      if (da && !db) return -1;
      if (!da && db) return 1;
      return 0;
    });
    return copy;
  }, [slidesRaw]);

  // debug: remove in production
  useEffect(() => {
    // console.info helps confirm what we imported
    // eslint-disable-next-line no-console
    console.info("NewsRoomHome slides length:", slides.length, "shape:", rawData);
  }, [slides, rawData]);

  const slideCount = slides.length;
  const [index, setIndex] = useState(0);
  const [expanded, setExpanded] = useState({});
  const timerRef = useRef(null);
  const isHoveredRef = useRef(false);

  // autoplay handling
  useEffect(() => {
    if (!autoplay || slideCount <= 1) return undefined;
    startAutoplay();
    return stopAutoplay;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, autoplay, slideCount, autoplayDelay]);

  function startAutoplay() {
    stopAutoplay();
    timerRef.current = setInterval(() => {
      if (!isHoveredRef.current) {
        setIndex((prev) => (slideCount ? (prev + 1) % slideCount : 0));
      }
    }, autoplayDelay);
  }
  function stopAutoplay() {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }

  function goPrev() {
    stopAutoplay();
    setIndex((prev) => (slideCount ? (prev - 1 + slideCount) % slideCount : 0));
  }
  function goNext() {
    stopAutoplay();
    setIndex((prev) => (slideCount ? (prev + 1) % slideCount : 0));
  }
  function goTo(i) {
    stopAutoplay();
    setIndex(i);
  }

  function handleMouseEnter() {
    isHoveredRef.current = true;
  }
  function handleMouseLeave() {
    isHoveredRef.current = false;
  }

  function toggleExpand(id) {
    setExpanded((s) => ({ ...s, [id]: !s[id] }));
  }

  // If no slides, render a small placeholder (avoid crash)
  if (!slideCount) {
    return (
      <section className="newroom-home" aria-label="Funding section (empty)">
        <div className="bg-svg-wrap" aria-hidden="true">
          {/* keep your svg if needed */}
        </div>
        <div className="content-center">
          <div className="funding-wrapper">
            <div style={{ color: "var(--muted-white)" }}>
              No newsroom items available. Please check `src/Data/newsroom.json`.
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className="newroom-home"
      aria-label="Funding section"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="bg-svg-wrap" aria-hidden="true">
        <svg id="shape1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400 662">
          <path
            id="home-success"
            d="M1085 15c0-8.284-6.72-15-15-15H109c-8.284 0-15 6.716-15 15v46c0 8.284-6.716 15-15 15H15C6.716 76 0 82.716 0 91v539c0 17.673 14.327 32 32 32h294c8.284 0 15-6.716 15-15v-51c0-8.284 6.716-15 15-15h485c8.284 0 15 6.716 15 15v51c0 8.284 6.716 15 15 15h302c8.28 0 15-6.716 15-15v-46c0-8.284 6.72-15 15-15h120c8.28 0 15-6.716 15-15v-22c0-8.284 6.72-15 15-15h32c8.28 0 15-6.716 15-15V32c0-17.673-14.33-32-32-32h-18c-8.28 0-15 6.716-15 15v45c0 8.284-6.72 15-15 15h-220c-8.28 0-15-6.716-15-15V15Z"
            fill="#31088b"
          ></path>
        </svg>
      </div>

      <div className="content-center">
        <div className="funding-wrapper">
          <div className="carousel-shell">
            <div className="carousel-viewport" aria-live="polite">
              <div
                className="carousel-track"
                style={{
                  width: `${slideCount * 100}%`,
                  transform: `translateX(-${(index * 100) / slideCount}%)`
                }}
              >
                {slides.map((slide, i) => {
                  const id = slide.id ?? i;
                  const imageSrc = slide.image || slide.img || defaultImage;
                  const excerpt = slide.excerpt ?? slide.summary ?? "";
                  return (
                    <article
                      className="carousel-slide"
                      key={id}
                      aria-hidden={i !== index}
                      tabIndex={i === index ? 0 : -1}
                    >
                      <div className="slide-left">
                        <div className="heading-wrap">
                          <h2 className="funding-heading">{slide.title || "Untitled"}</h2>
                          <div className="slide-meta">
                            {slide.date ? (
                              <time dateTime={slide.date}>
                                {new Date(slide.date).toLocaleDateString()}
                              </time>
                            ) : null}
                            {slide.badge && <span className="badge">{slide.badge}</span>}
                          </div>
                        </div>

                        <div className="points-list">
                          <div className="point-text">{excerpt}</div>

                          <div className="more-block">
                            {expanded[id] ? (
                              <>
                                <p className="full-content">{slide.content || ""}</p>
                                <button
                                  className="link-btn"
                                  onClick={() => toggleExpand(id)}
                                  aria-expanded="true"
                                >
                                  Show less
                                </button>
                              </>
                            ) : (
                              <button
                                className="link-btn"
                                onClick={() => toggleExpand(id)}
                                aria-expanded="false"
                              >
                                Read more
                              </button>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="slide-right">
                        <div className="decorative-image">
                          <img src={imageSrc} alt={slide.title ?? ""} loading="lazy" />
                        </div>

                        <div className="points-overlay">
                          <div className="overlay-item">
                            <div className="overlay-icon">
                              <img
                                src="https://cdn.prod.website-files.com/660fec29bd77a271c07eb5b6/661cfb7e93abb38fbea311cb_Group%202%20(5).svg"
                                alt="Onboard"
                                loading="lazy"
                              />
                            </div>
                            <div className="overlay-text">Onboard to BetterInvest</div>
                          </div>

                          <div className="overlay-item">
                            <div className="overlay-icon">
                              <img
                                src="https://cdn.prod.website-files.com/660fec29bd77a271c07eb5b6/661a30c7a6383e2ef343fec0_Group%202%20(1).svg"
                                alt="Evaluate"
                                loading="lazy"
                              />
                            </div>
                            <div className="overlay-text">Get Evaluated</div>
                          </div>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>

            <div className="carousel-controls">
              <button
                className="control prev"
                onClick={goPrev}
                aria-label="Previous slide"
                type="button"
              >
                ‹
              </button>

              <div className="dots" role="tablist" aria-label="Slide pagination">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className={`dot ${i === index ? "active" : ""}`}
                    aria-label={`Go to slide ${i + 1}`}
                    aria-selected={i === index}
                    role="tab"
                  />
                ))}
              </div>

              <button
                className="control next"
                onClick={goNext}
                aria-label="Next slide"
                type="button"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
