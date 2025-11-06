// BentoCarousel.jsx
import React, { useState, useEffect, useCallback, useRef } from "react";
import "../../styles/Services/BentoCarousel.css";
import imgslide from "../../assets/serviceDefaultImg.png";

const slideData = [
  { id: 1, title: "Slide 1: Upward Motion", pattern: 0, color: "#4f46e5", text: "This slide moves up on exit.", imageUrl: imgslide },
  { id: 2, title: "Slide 2: Downward Motion", pattern: 1, color: "#e11d48", text: "This slide moves down on exit.", imageUrl: imgslide },
  { id: 3, title: "Slide 3: Right Motion", pattern: 2, color: "#059669", text: "This slide moves right on exit.", imageUrl: imgslide },
  { id: 4, title: "Slide 4: Left Motion", pattern: 3, color: "#f59e0b", text: "This slide moves left on exit.", imageUrl: imgslide },
  { id: 5, title: "Slide 5: Repeat Up", pattern: 0, color: "#06b6d4", text: "Cycle restarts here.", imageUrl: imgslide },
  { id: 6, title: "Slide 6: Downward", pattern: 1, color: "#7c3aed", text: "More content.", imageUrl: imgslide },
  { id: 7, title: "Slide 7: Right", pattern: 2, color: "#ec4899", text: "More content.", imageUrl: "https://placehold.co/400x200/ec4899/ffffff?text=Concept" },
  { id: 8, title: "Slide 8: Left", pattern: 3, color: "#14b8a6", text: "Final concept.", imageUrl: imgslide },
];

const TRANSITION_LOCK_MS = 700;

const getTransformStyle = (index, activeIndex) => {
  if (index === activeIndex) return `translateX(0) translateY(0)`;
  const pattern = index % 4;
  const isBefore = index < activeIndex;
  // If before active, move it off-screen in the "previous" direction for pattern
  if (isBefore) {
    switch (pattern) {
      case 0: return `translateY(-100vh)`;
      case 1: return `translateY(100vh)`;
      case 2: return `translateX(100vw)`;
      case 3: return `translateX(-100vw)`;
      default: return ``;
    }
  } else {
    // if after active, move it off-screen in the "next" direction for pattern
    switch (pattern) {
      case 0: return `translateY(100vh)`;
      case 1: return `translateY(-100vh)`;
      case 2: return `translateX(-100vw)`;
      case 3: return `translateX(100vw)`;
      default: return ``;
    }
  }
};

const Slide = ({ index, data, activeIndex }) => {
  const isActive = index === activeIndex;
  const transformStyle = getTransformStyle(index, activeIndex);
  const [concept, title] = data.title.split(":");
  return (
    <div
      className="slide"
      style={{
        transform: transformStyle,
        zIndex: isActive ? 20 : 1,
      }}
      aria-hidden={!isActive}
    >
      <div className={`slide-card ${isActive ? "active" : ""}`} role="group" aria-roledescription="slide" aria-label={`${index + 1} of ${slideData.length}`}>
        <div className="card-media">
          <img
            src={data.imageUrl}
            alt={data.title}
            className="card-image"
            onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x200/333333/ffffff?text=Image+Load+Failed"; }}
          />
          <p className="concept-text">{concept?.trim()}</p>
        </div>

        <h1 className="card-title">{title?.trim()}</h1>
        <p className="card-desc">{data.text}</p>

        <div className="card-footer">
          {index + 1} / {slideData.length}
        </div>
      </div>
    </div>
  );
};

export default function BentoCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLocked, setIsLocked] = useState(false); // to prevent rapid triggers
  const [inView, setInView] = useState(false);
  const containerRef = useRef(null);
  const touchStartRef = useRef(null);

  const lastIndex = slideData.length - 1;

  const setActiveWithLock = useCallback((newIndex) => {
    setIsLocked(true);
    setActiveIndex(newIndex);
    setTimeout(() => setIsLocked(false), TRANSITION_LOCK_MS);
  }, []);

  // Intersection observer: set inView when a chunk of the carousel is visible
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // consider it "active" when at least 45% visible
          setInView(entry.intersectionRatio >= 0.45);
        });
      },
      { threshold: [0, 0.25, 0.45, 0.6, 1] }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // handle wheel: return true if handled (we should preventDefault)
  const handleScrollDelta = useCallback((deltaY) => {
    if (isLocked) return false;
    const direction = deltaY > 0 ? 1 : -1; // 1 => scroll down (next), -1 => up (prev)
    const candidate = activeIndex + direction;

    if (candidate >= 0 && candidate <= lastIndex) {
      setActiveWithLock(candidate);
      return true;
    }
    // out of carousel range -> not handled (allow page scroll)
    return false;
  }, [activeIndex, isLocked, lastIndex, setActiveWithLock]);

  // wheel listener attached to container (passive: false so we can preventDefault)
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onWheel = (e) => {
      if (!inView) return; // let page handle when not visible
      const handled = handleScrollDelta(e.deltaY);
      if (handled) {
        e.preventDefault(); // stop page scroll only if we handled slide change
      } else {
        // allow page scroll to continue to previous/next sections
      }
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [handleScrollDelta, inView]);

  // Touch support: vertical swipe
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onTouchStart = (e) => {
      touchStartRef.current = e.touches[0].clientY;
    };

    const onTouchEnd = (e) => {
      if (touchStartRef.current == null) return;
      const delta = touchStartRef.current - e.changedTouches[0].clientY;
      const abs = Math.abs(delta);
      touchStartRef.current = null;
      if (abs < 30) return;

      if (!inView) return; // let page handle when not visible
      const handled = handleScrollDelta(delta);
      if (handled) {
        // best-effort prevent default
        e.preventDefault?.();
      }
    };

    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchend", onTouchEnd, { passive: false });

    return () => {
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchend", onTouchEnd);
    };
  }, [handleScrollDelta, inView]);

  // keyboard navigation (up/down)
  useEffect(() => {
    const onKey = (e) => {
      if (!inView || isLocked) return;
      if (e.key === "ArrowDown" || e.key === "PageDown") {
        if (activeIndex < lastIndex) setActiveWithLock(activeIndex + 1);
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        if (activeIndex > 0) setActiveWithLock(activeIndex - 1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [inView, isLocked, activeIndex, lastIndex, setActiveWithLock]);

  const onDotClick = (idx) => {
    if (idx === activeIndex) return;
    setActiveWithLock(idx);
  };

  return (
    <section
      ref={containerRef}
      className="carousel-root"
      aria-roledescription="carousel"
      tabIndex={-1}
    >
      <div className="nav-dots" aria-hidden={false}>
        {slideData.map((slide, idx) => (
          <button
            key={slide.id}
            onClick={() => onDotClick(idx)}
            className={`dot ${idx === activeIndex ? "dot-active" : ""}`}
            aria-label={`Go to slide ${idx + 1}`}
          >
            <span className="dot-tooltip">{slide.title.split(":")[0]} ({idx + 1})</span>
          </button>
        ))}
      </div>

      {slideData.map((data, idx) => (
        <Slide key={data.id} index={idx} data={data} activeIndex={activeIndex} />
      ))}
    </section>
  );
}
