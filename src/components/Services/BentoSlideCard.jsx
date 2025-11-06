// // SlideCard.jsx
// import React from "react";

// /**
//  * Very small presentational slide component.
//  * - content can be string, JSX, or an object you handle here.
//  */
// export default function BentoSlideCard({ content }) {
//   // simple handling: if object with title/desc, render nicely, else render content directly
//   if (content && typeof content === "object" && !React.isValidElement(content)) {
//     const { title, description, footer } = content;
//     return (
//       <div className="slide-card">
//         {title && <h3 className="slide-title">{title}</h3>}
//         {description && <p className="slide-desc">{description}</p>}
//         {footer && <div className="slide-footer">{footer}</div>}
//       </div>
//     );
//   }

//   return <div className="slide-card">{content}</div>;
// }
// File: src/App.jsx
// File: src/components/Services/BentoCarosel.jsx
import React, { useRef, useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import "../../styles/Services/BentoCarosel.css";

/**
 * Props:
 *  - items: [{ title, description }]
 *  - perSlideDuration: number (seconds) - optional, for autoplay
 */
export default function BentoCarosel({ items = [], perSlideDuration = 0 }) {
  const [active, setActive] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const rootRef = useRef(null);
  const wheelAccum = useRef(0);
  const touchStartY = useRef(null);
  const WHEEL_THRESHOLD = 80; // tweak if needed

  const moveTo = useCallback((idx) => {
    if (isAnimating) return;
    if (idx < 0) idx = 0;
    if (idx >= items.length) idx = items.length - 1;
    if (idx === active) return;
    setIsAnimating(true);
    setActive(idx);
    // unlock after slightly more than CSS transition (700ms)
    window.setTimeout(() => setIsAnimating(false), 820);
  }, [active, isAnimating, items.length]);

  // Wheel handler on window (non-passive) to prevent body scroll while interacting
  const handleWheel = useCallback((e) => {
    // Only handle vertical movement
    if (!rootRef.current) return;
    // If pointer is outside root element, ignore (so page scroll still works)
    const rect = rootRef.current.getBoundingClientRect();
    const inViewport =
      e.clientX >= rect.left && e.clientX <= rect.right &&
      e.clientY >= rect.top && e.clientY <= rect.bottom;

    if (!inViewport) return;

    // prevent page scroll while within the carousel
    e.preventDefault();
    wheelAccum.current += e.deltaY;

    if (Math.abs(wheelAccum.current) >= WHEEL_THRESHOLD) {
      const dir = wheelAccum.current > 0 ? 1 : -1;
      moveTo(active + dir);
      wheelAccum.current = 0;
    }
  }, [active, moveTo]);

  // Touch handlers
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const onTouchStart = (ev) => {
      if (!ev.touches || !ev.touches[0]) return;
      touchStartY.current = ev.touches[0].clientY;
    };

    const onTouchEnd = (ev) => {
      if (touchStartY.current == null) return;
      const touchEndY = ev.changedTouches[0].clientY;
      const dy = touchStartY.current - touchEndY;
      if (Math.abs(dy) > 40) {
        const dir = dy > 0 ? 1 : -1;
        moveTo(active + dir);
      }
      touchStartY.current = null;
    };

    root.addEventListener("touchstart", onTouchStart, { passive: true });
    root.addEventListener("touchend", onTouchEnd, { passive: true });

    return () => {
      root.removeEventListener("touchstart", onTouchStart);
      root.removeEventListener("touchend", onTouchEnd);
    };
  }, [active, moveTo]);

  // Keyboard navigation (when focused)
  const onKeyDown = useCallback((e) => {
    if (["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) return;
    if (isAnimating) return;
    if (e.key === "ArrowDown" || e.key === "PageDown") {
      e.preventDefault();
      moveTo(active + 1);
    } else if (e.key === "ArrowUp" || e.key === "PageUp") {
      e.preventDefault();
      moveTo(active - 1);
    } else if (e.key === "Home") {
      e.preventDefault();
      moveTo(0);
    } else if (e.key === "End") {
      e.preventDefault();
      moveTo(items.length - 1);
    }
  }, [active, isAnimating, items.length, moveTo]);

  // Attach wheel and keydown listeners
  useEffect(() => {
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("wheel", handleWheel, { passive: false });
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [handleWheel, onKeyDown]);

  // Reset wheel accumulator whenever active changes
  useEffect(() => {
    wheelAccum.current = 0;
  }, [active]);

  // Optional autoplay
  useEffect(() => {
    if (!perSlideDuration || perSlideDuration <= 0 || items.length <= 1) return;
    const interval = setInterval(() => {
      setActive(prev => {
        const next = prev + 1 >= items.length ? 0 : prev + 1;
        setIsAnimating(true);
        window.setTimeout(() => setIsAnimating(false), 820);
        return next;
      });
    }, perSlideDuration * 1000);
    return () => clearInterval(interval);
  }, [perSlideDuration, items.length]);

  // compute progress (0-1)
  const progress = items.length > 1 ? (active / (items.length - 1)) : 0;

  return (
    <section
      ref={rootRef}
      className="ser-bento-root"
      tabIndex={0}
      aria-roledescription="carousel"
      aria-label="Bento carousel"
    >
      <div className="ser-bento-slides">
        {items.map((it, idx) => {
          // vertical stacking: each slide is translated by (idx - active) * 100vh
          const offset = (idx - active) * 100;
          const style = {
            transform: `translateY(${offset}vh)`,
            zIndex: idx === active ? 20 : 1,
          };
          return (
            <article
              key={idx}
              className={`ser-bento-slide ${idx === active ? "ser-active" : ""}`}
              style={style}
              aria-hidden={idx === active ? "false" : "true"}
            >
              <div className="ser-bento-card">
                <h2 className="ser-bento-title">{it.title}</h2>
                <p className="ser-bento-desc">{it.description}</p>
                <div className="ser-bento-footer">
                  <button
                    className="ser-bento-btn"
                    onClick={() => moveTo(idx === items.length - 1 ? 0 : idx + 1)}
                    aria-label={idx === items.length - 1 ? "Go to first slide" : "Go to next slide"}
                  >
                    Next
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* progress bar */}
      <div className="ser-bento-progress-wrap" aria-hidden="true">
        <div className="ser-bento-progress" style={{ transform: `scaleX(${progress})` }} />
      </div>

      {/* nav dots */}
      <div className="ser-bento-dots" role="tablist" aria-orientation="vertical">
        {items.map((_, i) => (
          <button
            key={i}
            className={`ser-bento-dot ${i === active ? "ser-dot-active" : ""}`}
            onClick={() => moveTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-pressed={i === active}
          />
        ))}
      </div>
    </section>
  );
}

BentoCarosel.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string
  })),
  perSlideDuration: PropTypes.number
};

