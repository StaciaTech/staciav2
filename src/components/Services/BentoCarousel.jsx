// // BentoCarousel.jsx
// import React, { useState, useEffect, useCallback, useRef } from "react";
// import "../../styles/Services/BentoCarousel.css";
// import imgslide from "../../assets/serviceDefaultImg.png";



// // ────────────────────── SLIDE DATA ──────────────────────
// const slideData = [
//   { id: 1, title: 'Slide 1: Upward Motion', pattern: 0, color: '#4f46e5', text: 'This slide moves up on exit.', imageUrl: 'https://placehold.co/400x200/4f46e5/ffffff?text=Slide+1' },
//   { id: 2, title: 'Slide 2: Downward Motion', pattern: 1, color: '#e11d48', text: 'This slide moves down on exit.', imageUrl: 'https://placehold.co/400x200/e11d48/ffffff?text=Slide+2' },
//   { id: 3, title: 'Slide 3: Right Motion',  pattern: 2, color: '#059669', text: 'This slide moves right on exit.', imageUrl: 'https://placehold.co/400x200/059669/ffffff?text=Slide+3' },
//   { id: 4, title: 'Slide 4: Left Motion',   pattern: 3, color: '#f59e0b', text: 'This slide moves left on exit.', imageUrl: 'https://placehold.co/400x200/f59e0b/ffffff?text=Slide+4' },
//   { id: 5, title: 'Slide 5: Pattern Repeats', pattern: 0, color: '#06b6d4', text: 'Cycle restarts.', imageUrl: 'https://placehold.co/400x200/06b6d4/ffffff?text=Slide+5' },
//   { id: 6, title: 'Slide 6: Downward Motion', pattern: 1, color: '#7c3aed', text: 'Another down motion.', imageUrl: 'https://placehold.co/400x200/7c3aed/ffffff?text=Slide+6' },
//   { id: 7, title: 'Slide 7: Right Motion',  pattern: 2, color: '#ec4899', text: 'Smooth right exit.', imageUrl: 'https://placehold.co/400x200/ec4899/ffffff?text=Slide+7' },
//   { id: 8, title: 'Slide 8: Left Motion',   pattern: 3, color: '#14b8a6', text: 'Final slide.', imageUrl: 'https://placehold.co/400x200/14b8a6/ffffff?text=Slide+8' },
// ];

// /* ────────────────────── TRANSFORM ────────────────────── */
// const getTransform = (i, active) => {
//   if (i === active) return 'translate(0,0)';
//   const p = i % 4;
//   const prev = i < active;
//   if (prev) {
//     return p === 0 ? 'translateY(-100vh)' :
//            p === 1 ? 'translateY(100vh)' :
//            p === 2 ? 'translateX(100vw)' : 'translateX(-100vw)';
//   } else {
//     return p === 0 ? 'translateY(100vh)' :
//            p === 1 ? 'translateY(-100vh)' :
//            p === 2 ? 'translateX(-100vw)' : 'translateX(100vw)';
//   }
// };

// /* ────────────────────── SLIDE COMPONENT ────────────────────── */
// const Slide = ({ idx, data, active }) => {
//   const isActive = idx === active;
//   return (
//     <div
//       className="ser-car-slide"
//       style={{
//         transform: getTransform(idx, active),
//         zIndex: isActive ? 20 : 1,
//         // backgroundColor: data.color,
//       }}
//     >
//       <div className={`ser-car-card ${isActive ? 'ser-car-active' : ''}`}>
//         <img src={data.imageUrl} alt={data.title} className="ser-car-img" />
//         <h1 className="ser-car-title">{data.title}</h1>
//         <p className="ser-car-desc">{data.text}</p>
//         <div className="ser-car-footer">{idx + 1} / {slideData.length}</div>
//       </div>
//     </div>
//   );
// };

// /* ────────────────────── MAIN CAROUSEL ────────────────────── */
// export default function BentoCarousel() {
//   const [active, setActive] = useState(0);
//   const containerRef = useRef(null);   // ← useRef – NOT a string
//   const scrolling = useRef(false);
//   const total = slideData.length;

//   // CSS variable for total slides
//   useEffect(() => {
//     document.documentElement.style.setProperty('--total-slides', total);
//   }, [total]);

//   /* ───── WHEEL ───── */
//   useEffect(() => {
//     const el = containerRef.current;
//     if (!el) return;

//     const onWheel = (e) => {
//       if (scrolling.current) return;
//       e.preventDefault();

//       const dir = e.deltaY > 0 ? 1 : -1;
//       const next = active + dir;

//       if (next >= 0 && next < total) {
//         scrolling.current = true;
//         setActive(next);
//         setTimeout(() => (scrolling.current = false), 800);
//       }
//     };

//     el.addEventListener('wheel', onWheel, { passive: false });
//     return () => el.removeEventListener('wheel', onWheel);
//   }, [active, total]);

//   /* ───── TOUCH ───── */
//   useEffect(() => {
//     const el = containerRef.current;
//     if (!el) return;
//     let startY = 0;

//     const start = (e) => { startY = e.touches[0].clientY; };
//     const end = (e) => {
//       if (scrolling.current) return;
//       const delta = startY - e.changedTouches[0].clientY;
//       if (Math.abs(delta) > 50) {
//         const dir = delta > 0 ? 1 : -1;
//         const next = active + dir;
//         if (next >= 0 && next < total) {
//           scrolling.current = true;
//           setActive(next);
//           setTimeout(() => (scrolling.current = false), 800);
//         }
//       }
//     };

//     el.addEventListener('touchstart', start, { passive: true });
//     el.addEventListener('touchend', end, { passive: true });
//     return () => {
//       el.removeEventListener('touchstart', start);
//       el.removeEventListener('touchend', end);
//     };
//   }, [active, total]);

//   return (
//     <section className="ser-car-section">
//       {/* STICKY CAROUSEL */}
//       <div ref={containerRef} className="ser-car-sticky">
//         {/* DOTS */}
//         <div className="ser-car-dots">
//           {slideData.map((_, i) => (
//             <button
//               key={i}
//               onClick={() => setActive(i)}
//               className={`ser-car-dot ${i === active ? 'ser-car-active-dot' : ''}`}
//               aria-label={`Go to slide ${i + 1}`}
//             />
//           ))}
//         </div>

//         {/* SLIDES */}
//         <div className="ser-car-slides">
//           {slideData.map((d, i) => (
//             <div key={d.id} className="ser-car-page">
//               <Slide idx={i} data={d} active={active} />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* SPACER – pushes next section down */}
//       <div className="ser-car-spacer" />
//     </section>
//   );
// }
// BentoCarousel.jsx
// Drop-in replacement. Requires BentoCarousel.css alongside.

import React, { useState, useEffect, useRef, useCallback } from "react";
import "../../styles/Services/BentoCarousel.css";

const slideData = [
  { id: 1, title: "Slide 1: Upward Motion", pattern: 0, text: "This slide moves up on exit.", imageUrl: "https://placehold.co/400x200/4f46e5/ffffff?text=Slide+1" },
  { id: 2, title: "Slide 2: Downward Motion", pattern: 1, text: "This slide moves down on exit.", imageUrl: "https://placehold.co/400x200/e11d48/ffffff?text=Slide+2" },
  { id: 3, title: "Slide 3: Right Motion", pattern: 2, text: "This slide moves right on exit.", imageUrl: "https://placehold.co/400x200/059669/ffffff?text=Slide+3" },
  { id: 4, title: "Slide 4: Left Motion", pattern: 3, text: "This slide moves left on exit.", imageUrl: "https://placehold.co/400x200/f59e0b/ffffff?text=Slide+4" },
  { id: 5, title: "Slide 5: Pattern Repeats", pattern: 0, text: "Cycle restarts.", imageUrl: "https://placehold.co/400x200/06b6d4/ffffff?text=Slide+5" },
  { id: 6, title: "Slide 6: Downward Motion", pattern: 1, text: "Another down motion.", imageUrl: "https://placehold.co/400x200/7c3aed/ffffff?text=Slide+6" },
  { id: 7, title: "Slide 7: Right Motion", pattern: 2, text: "Smooth right exit.", imageUrl: "https://placehold.co/400x200/ec4899/ffffff?text=Slide+7" },
  { id: 8, title: "Slide 8: Left Motion", pattern: 3, text: "Final slide.", imageUrl: "https://placehold.co/400x200/14b8a6/ffffff?text=Slide+8" },
];

const getTransform = (i, active) => {
  if (i === active) return "translate(0,0)";
  const p = i % 4;
  const prev = i < active;
  if (prev) {
    return p === 0 ? "translateY(-100vh)" :
           p === 1 ? "translateY(100vh)" :
           p === 2 ? "translateX(100vw)" : "translateX(-100vw)";
  } else {
    return p === 0 ? "translateY(100vh)" :
           p === 1 ? "translateY(-100vh)" :
           p === 2 ? "translateX(-100vw)" : "translateX(100vw)";
  }
};

const Slide = ({ idx, data, active }) => {
  const isActive = idx === active;
  return (
    <div
      className="ser-car-slide"
      style={{
        transform: getTransform(idx, active),
        zIndex: isActive ? 20 : 1,
      }}
      aria-hidden={!isActive}
    >
      <div className={`ser-car-card ${isActive ? "ser-car-active" : ""}`}>
        <img src={data.imageUrl} alt={data.title} className="ser-car-img" />
        <h1 className="ser-car-title">{data.title}</h1>
        <p className="ser-car-desc">{data.text}</p>
        <div className="ser-car-footer">{idx + 1} / {slideData.length}</div>
      </div>
    </div>
  );
};

export default function BentoCarousel() {
  const [active, setActive] = useState(0);
  const containerRef = useRef(null);
  const lockRef = useRef(false);     // prevents double navigation during transition
  const deltaAcc = useRef(0);       // accumulate wheel deltas for trackpads
  const touchStartY = useRef(0);
  const total = slideData.length;

  // visible state controlled by IntersectionObserver
  const [isVisible, setIsVisible] = useState(false);

  // convert CSS --transition to ms to sync JS lock
  const getTransitionMs = useCallback(() => {
    try {
      const rootStyle = getComputedStyle(document.documentElement);
      const t = rootStyle.getPropertyValue("--transition").trim() || "700ms";
      if (t.endsWith("ms")) return parseFloat(t);
      if (t.endsWith("s")) return parseFloat(t) * 1000;
    } catch (e) {}
    return 700;
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty("--total-slides", total);
  }, [total]);

  const navigateTo = (next) => {
    if (next < 0 || next >= total) return;
    if (lockRef.current) return;
    lockRef.current = true;
    setActive(next);
    setTimeout(() => {
      lockRef.current = false;
      deltaAcc.current = 0;
    }, getTransitionMs() + 80);
  };

  // IntersectionObserver to toggle dot visibility and to know if carousel is mostly visible
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    let mounted = true;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!mounted) return;
          // visible when at least ~85% of carousel is in viewport
          setIsVisible(entry.intersectionRatio >= 0.85);
        });
      },
      { threshold: [0, 0.25, 0.5, 0.75, 0.85, 1] }
    );
    obs.observe(el);
    return () => {
      mounted = false;
      obs.disconnect();
    };
  }, []);

  // Wheel handler (accumulate deltas for trackpads). Only intercept when visible & next exists.
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const threshold = 80;

    const onWheel = (e) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return; // ignore horizontal-dominant gestures

      if (!isVisible) {
        deltaAcc.current = 0;
        return; // allow page scroll
      }

      // virtualNext tells if we'd move out-of-bounds
      const virtualNext = e.deltaY > 0 ? active + 1 : active - 1;
      const outOfBounds = virtualNext < 0 || virtualNext >= total;

      if (outOfBounds) {
        deltaAcc.current = 0;
        return; // let page scroll to next/prev section
      }

      // carousel will handle -> prevent page scroll
      e.preventDefault();

      if (lockRef.current) return;

      deltaAcc.current += e.deltaY;

      if (Math.abs(deltaAcc.current) >= threshold) {
        const dir = deltaAcc.current > 0 ? 1 : -1;
        const next = active + dir;
        if (next >= 0 && next < total) {
          navigateTo(next);
        } else {
          deltaAcc.current = 0;
        }
      }

      clearTimeout(onWheel._timer);
      onWheel._timer = setTimeout(() => (deltaAcc.current = 0), 150);
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      el.removeEventListener("wheel", onWheel);
      clearTimeout(onWheel._timer);
    };
  }, [active, total, isVisible, getTransitionMs]);

  // Touch handlers: only intercept swipes when visible and valid next exists
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const minSwipe = 36;

    const start = (e) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const end = (e) => {
      if (lockRef.current) return;
      if (!isVisible) return;
      const endY = e.changedTouches[0].clientY;
      const delta = touchStartY.current - endY;
      if (Math.abs(delta) < minSwipe) return;
      const dir = delta > 0 ? 1 : -1;
      const next = active + dir;
      if (next < 0 || next >= total) return; // allow page scroll if out-of-bounds
      navigateTo(next);
    };

    el.addEventListener("touchstart", start, { passive: true });
    el.addEventListener("touchend", end, { passive: true });
    return () => {
      el.removeEventListener("touchstart", start);
      el.removeEventListener("touchend", end);
    };
  }, [active, total, isVisible, getTransitionMs]);

  // Keyboard support (only when visible)
  useEffect(() => {
    const onKey = (e) => {
      if (lockRef.current) return;
      if (!isVisible) return;
      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        navigateTo(Math.min(total - 1, active + 1));
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        navigateTo(Math.max(0, active - 1));
      } else if (e.key === "Home") {
        navigateTo(0);
      } else if (e.key === "End") {
        navigateTo(total - 1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, total, isVisible, getTransitionMs]);

  return (
    <section className="ser-car-section" aria-roledescription="carousel">
      <div
        ref={containerRef}
        className="ser-car-sticky"
        role="region"
        aria-label="Feature carousel. Use wheel, touch, arrows or dots to navigate."
        tabIndex={0}
      >
        {/* only show dots when carousel is mostly visible */}
        <div className={`ser-car-dots ${isVisible ? "visible" : "hidden"}`} role="tablist" aria-orientation="vertical">
          {slideData.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                if (!isVisible) {
                  // bring carousel into view first, then navigate
                  containerRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
                  setTimeout(() => navigateTo(i), 420);
                } else {
                  navigateTo(i);
                }
              }}
              className={`ser-car-dot ${i === active ? "ser-car-active-dot" : ""}`}
              aria-label={`Go to slide ${i + 1}`}
              aria-pressed={i === active}
              role="tab"
            />
          ))}
        </div>

        <div className="ser-car-slides" aria-live="polite">
          {slideData.map((d, i) => (
            <div key={d.id} className="ser-car-page" aria-hidden={i !== active}>
              <Slide idx={i} data={d} active={active} />
            </div>
          ))}
        </div>
      </div>

      {/* spacer keeps normal page flow after sticky container */}
      <div className="ser-car-spacer" />
    </section>
  );
}
