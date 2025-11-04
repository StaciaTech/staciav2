// VerticalTriggerCarousel.jsx
import React, { useEffect, useRef, useState } from "react";
import SlideCard from "./BentoSlideCard";
import "../../styles/Services/BentoCarosel.css";
import BentoSlideCard from "./BentoSlideCard";

/**
 * props:
 *  - items: array of data for slides (could be strings or objects)
 *  - renderSlide: optional function(item, index) => ReactNode to render slide content
 *  - perSlideDuration: seconds multiplier to calculate cycle duration (default 2)
 */
export default function BentoCarosel({
  items = [],
  renderSlide,
  perSlideDuration = 2,
}) {
  const containerRef = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const count = Math.max(1, items.length);
    const maxPercent = (count - 1) * 100; // e.g. 3 slides => 200%
    const durationSeconds = Math.max(1, count * perSlideDuration); // total cycle

    el.style.setProperty("--slide-count", String(count));
    el.style.setProperty("--max-percent", `${maxPercent}%`);
    el.style.setProperty("--cycle-duration", `${durationSeconds}s`);

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started) {
            setStarted(true);
            // wait for vertical animation (0.6s in CSS) then start horizontal loop
            setTimeout(() => el.classList.add("carousel-play"), 650);
          }
        });
      },
      { threshold: 0.25 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [items.length, perSlideDuration, started]);

  return (
    <div className="vtc-wrapper">
      <div
        ref={containerRef}
        className={`vtc-container ${started ? "started" : ""}`}
        aria-roledescription="carousel"
      >
        <div className="vtc-track">
          {items.map((item, i) => (
            <div
              key={i}
              className={`vtc-slide ${i === 0 ? "vtc-first-slide" : ""}`}
              role="group"
              aria-label={`Slide ${i + 1} of ${items.length}`}
            >
              {renderSlide ? renderSlide(item, i) : <BentoSlideCard content={item} />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
