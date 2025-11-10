// BentoCarousel.jsx
import React, { useState, useEffect, useCallback, useRef } from "react";
import "../../styles/Services/BentoCarousel.css";
import imgslide from "../../assets/serviceDefaultImg.png";



// ────────────────────── SLIDE DATA ──────────────────────
const slideData = [
  { id: 1, title: 'Slide 1: Upward Motion', pattern: 0, color: '#4f46e5', text: 'This slide moves up on exit.', imageUrl: 'https://placehold.co/400x200/4f46e5/ffffff?text=Slide+1' },
  { id: 2, title: 'Slide 2: Downward Motion', pattern: 1, color: '#e11d48', text: 'This slide moves down on exit.', imageUrl: 'https://placehold.co/400x200/e11d48/ffffff?text=Slide+2' },
  { id: 3, title: 'Slide 3: Right Motion',  pattern: 2, color: '#059669', text: 'This slide moves right on exit.', imageUrl: 'https://placehold.co/400x200/059669/ffffff?text=Slide+3' },
  { id: 4, title: 'Slide 4: Left Motion',   pattern: 3, color: '#f59e0b', text: 'This slide moves left on exit.', imageUrl: 'https://placehold.co/400x200/f59e0b/ffffff?text=Slide+4' },
  { id: 5, title: 'Slide 5: Pattern Repeats', pattern: 0, color: '#06b6d4', text: 'Cycle restarts.', imageUrl: 'https://placehold.co/400x200/06b6d4/ffffff?text=Slide+5' },
  { id: 6, title: 'Slide 6: Downward Motion', pattern: 1, color: '#7c3aed', text: 'Another down motion.', imageUrl: 'https://placehold.co/400x200/7c3aed/ffffff?text=Slide+6' },
  { id: 7, title: 'Slide 7: Right Motion',  pattern: 2, color: '#ec4899', text: 'Smooth right exit.', imageUrl: 'https://placehold.co/400x200/ec4899/ffffff?text=Slide+7' },
  { id: 8, title: 'Slide 8: Left Motion',   pattern: 3, color: '#14b8a6', text: 'Final slide.', imageUrl: 'https://placehold.co/400x200/14b8a6/ffffff?text=Slide+8' },
];

/* ────────────────────── TRANSFORM ────────────────────── */
const getTransform = (i, active) => {
  if (i === active) return 'translate(0,0)';
  const p = i % 4;
  const prev = i < active;
  if (prev) {
    return p === 0 ? 'translateY(-100vh)' :
           p === 1 ? 'translateY(100vh)' :
           p === 2 ? 'translateX(100vw)' : 'translateX(-100vw)';
  } else {
    return p === 0 ? 'translateY(100vh)' :
           p === 1 ? 'translateY(-100vh)' :
           p === 2 ? 'translateX(-100vw)' : 'translateX(100vw)';
  }
};

/* ────────────────────── SLIDE COMPONENT ────────────────────── */
const Slide = ({ idx, data, active }) => {
  const isActive = idx === active;
  return (
    <div
      className="ser-car-slide"
      style={{
        transform: getTransform(idx, active),
        zIndex: isActive ? 20 : 1,
        // backgroundColor: data.color,
      }}
    >
      <div className={`ser-car-card ${isActive ? 'ser-car-active' : ''}`}>
        <img src={data.imageUrl} alt={data.title} className="ser-car-img" />
        <h1 className="ser-car-title">{data.title}</h1>
        <p className="ser-car-desc">{data.text}</p>
        <div className="ser-car-footer">{idx + 1} / {slideData.length}</div>
      </div>
    </div>
  );
};

/* ────────────────────── MAIN CAROUSEL ────────────────────── */
export default function BentoCarousel() {
  const [active, setActive] = useState(0);
  const containerRef = useRef(null);   // ← useRef – NOT a string
  const scrolling = useRef(false);
  const total = slideData.length;

  // CSS variable for total slides
  useEffect(() => {
    document.documentElement.style.setProperty('--total-slides', total);
  }, [total]);

  /* ───── WHEEL ───── */
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onWheel = (e) => {
      if (scrolling.current) return;
      e.preventDefault();

      const dir = e.deltaY > 0 ? 1 : -1;
      const next = active + dir;

      if (next >= 0 && next < total) {
        scrolling.current = true;
        setActive(next);
        setTimeout(() => (scrolling.current = false), 800);
      }
    };

    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, [active, total]);

  /* ───── TOUCH ───── */
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    let startY = 0;

    const start = (e) => { startY = e.touches[0].clientY; };
    const end = (e) => {
      if (scrolling.current) return;
      const delta = startY - e.changedTouches[0].clientY;
      if (Math.abs(delta) > 50) {
        const dir = delta > 0 ? 1 : -1;
        const next = active + dir;
        if (next >= 0 && next < total) {
          scrolling.current = true;
          setActive(next);
          setTimeout(() => (scrolling.current = false), 800);
        }
      }
    };

    el.addEventListener('touchstart', start, { passive: true });
    el.addEventListener('touchend', end, { passive: true });
    return () => {
      el.removeEventListener('touchstart', start);
      el.removeEventListener('touchend', end);
    };
  }, [active, total]);

  return (
    <section className="ser-car-section">
      {/* STICKY CAROUSEL */}
      <div ref={containerRef} className="ser-car-sticky">
        {/* DOTS */}
        <div className="ser-car-dots">
          {slideData.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`ser-car-dot ${i === active ? 'ser-car-active-dot' : ''}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* SLIDES */}
        <div className="ser-car-slides">
          {slideData.map((d, i) => (
            <div key={d.id} className="ser-car-page">
              <Slide idx={i} data={d} active={active} />
            </div>
          ))}
        </div>
      </div>

      {/* SPACER – pushes next section down */}
      <div className="ser-car-spacer" />
    </section>
  );
}