import React, { useState, useEffect, useCallback } from 'react';
import '../../styles/Home/WelcomeModel.css'; // External CSS with wel-m- prefix

// --- SLIDES DATA ---
const SLIDES = [
  {
    id: 1,
    layoutType: 'dark_complex',
    contentBlocks: [
      { id: 1, type: 'image_link', title: 'Projects', description: 'Advanced Conveyor System for Audi Group Assembly Line Automation', imageUrl: 'https://placehold.co/150x80/3A3A3A/ffffff?text=PROJECT', linkText: 'Explore Case Study' },
      { id: 2, type: 'image_link', title: 'Services', description: 'Precision Laser Tracking and Industrial Machine Calibration Services', imageUrl: 'https://placehold.co/150x80/3A3A3A/ffffff?text=SERVICE', linkText: 'View Service List' },
      { id: 3, type: 'product_center', title: 'Products', description: 'Introducing the Next-Gen Precision Sliding Machine V.2 with AI integration', imageUrl: 'https://placehold.co/350x400/3A3A3A/ffffff?text=PRODUCT+RENDER', linkText: 'Product Details' },
      { id: 4, type: 'achievement_banner', title: 'Industry Awards', description: 'Proud Winners of the Young Minds Innovation Award 2024 (EPRC)', imageUrl: 'https://placehold.co/400x150/555555/ffffff?text=AWARD+IMAGE', linkText: 'Read Press Release' },
      { id: 5, type: 'news_dark', title: 'Careers & News', items: ["Join the Stacia Innovator Challenge Q4", "MERN Stack Developer Openings - Apply Now!"], category: 'Updates', linkText: 'View All →' },
    ],
  },
  // {
  //   id: 2,
  //   layoutType: 'banner',
  //   imageUrl: "https://placehold.co/800x400/40C1A7/1E4B5E?text=New+Feature+Showcase",
  //   title: "Enhanced Performance",
  //   description: "Experience blazing-fast loading speeds and a smoother user interface across all devices.",
  //   buttonText: "See Details"
  // },
  // {
  //   id: 3,
  //   layoutType: 'banner',
  //   imageUrl: "https://placehold.co/800x400/FFD966/996600?text=Mobile+Optimized",
  //   title: "Fully Responsive Design",
  //   description: "Whether on desktop or mobile, your view is perfectly optimized for clarity and usability.",
  //   buttonText: "Try Mobile View"
  // },
  // {
  //   id: 4,
  //   layoutType: 'banner',
  //   imageUrl: "https://placehold.co/800x400/E87E8E/701C27?text=Special+Offer+Alert",
  //   title: "Limited Time Offer!",
  //   description: "Don't miss our exclusive early-access discount. Grab it before it's gone!",
  //   buttonText: "Claim Discount"
  // },
  
  {
    id: 2,
    title: "Visit our technology partner StaciaTech",
    description: "Explore cutting-edge software solutions and digital innovations from our trusted partner StaciaTech.",
    imageUrl: "/assets/slides/staciatech.jpg",
    layoutType: "banner",
    buttonText: "Visit StaciaTech",
    link: "https://staciatech.com"
  },
  {
    id: 3,
    title: "Traditional Food in Your Hand!",
    description: "Experience authentic traditional South Indian snacks and foods from Sharadha Stores.",
    imageUrl: "/assets/slides/sharadha-stores.jpg",
    layoutType: "dark",
    buttonText: "Open in Play Store",
    link: "https://play.google.com/store/apps/details?id=com.saradhastores"
  },
  {
    id: 4,
    title: "Farmers & Food Businesses – One App for Everything!",
    description: "TNAPEx helps farmers and food-based businesses with easy trading, pricing, and marketplace features.",
    imageUrl: "/assets/slides/tnapex.jpg",
    layoutType: "light",
    buttonText: "View App",
    link: "https://play.google.com/store/apps/details?id=com.vikram1201.TNAPEx"
  },
  {
    id: 5,
    title: "Visit Vencorp Website",
    description: "Discover Vencorp – the next level of business innovation, automation, and digital solutions.",
    imageUrl: "/assets/slides/vencorp.jpg",
    layoutType: "banner",
    buttonText: "Go to Website",
    link: "https://thevencorp.com/"
  }



  
];

// --- ICONS ---
const ChevronLeft = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6"></polyline>
  </svg>
);

const ChevronRight = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

const XIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

// --- CARD COMPONENTS ---
const HorizontalSplitCard = ({ data }) => (
  <div className="wel-m-horizontal-card">
    <div className="wel-m-horizontal-card-content">
      <div>
        <h4 className="wel-m-horizontal-card-title">{data.title}</h4>
        <p className="wel-m-horizontal-card-desc">{data.description}</p>
      </div>
      <a href="#" className="wel-m-horizontal-card-link">{data.linkText}</a>
    </div>
    <div className="wel-m-horizontal-card-image">
      <img
        src={data.imageUrl}
        alt={data.title}
        onError={(e) => { e.target.src = "https://placehold.co/100x100/18181B/94A3B8?text=IMG"; }}
      />
    </div>
  </div>
);

const VerticalStackCard = ({ data }) => (
  <div className="wel-m-vertical-card">
    <div className="wel-m-vertical-card-image">
      <img
        src={data.imageUrl}
        alt={data.title}
        onError={(e) => { e.target.src = "https://placehold.co/350x400/18181B/94A3B8?text=NO+IMAGE"; }}
      />
    </div>
    <div className="wel-m-vertical-card-content">
      <h4 className="wel-m-vertical-card-title">{data.title}</h4>
      <p className="wel-m-vertical-card-desc">{data.description}</p>
      <a href="#" className="wel-m-vertical-card-link">{data.linkText} →</a>
    </div>
  </div>
);

const NewsGradientBlock = ({ data }) => (
  <div className="wel-m-news-block">
    <div className="wel-m-news-header">
      <h3 className="wel-m-news-title">{data.title}</h3>
      <a href="#" className="wel-m-news-link">{data.linkText}</a>
    </div>
    <div className="wel-m-news-items">
      {data.items.map((item, index) => (
        <p key={index} className="wel-m-news-item">{item}</p>
      ))}
    </div>
  </div>
);

// --- SLIDE LAYOUTS ---
const ComplexLayoutSlide = ({ slide, onFinalSlideAction }) => {
  const [project, service, product, achievement, news] = slide.contentBlocks;

  return (
    <div className="wel-m-complex-slide">
      <h2 className="wel-m-featured-title">Featured</h2>
      <div className="wel-m-complex-grid">
        <div className="wel-m-col-left">
          <div className="wel-m-stack-item"><HorizontalSplitCard data={project} /></div>
          <div className="wel-m-stack-item"><HorizontalSplitCard data={service} /></div>
        </div>
        <div className="wel-m-col-center">
          <VerticalStackCard data={product} />
        </div>
        <div className="wel-m-col-right">
          <div className="wel-m-achievement-banner">
            <img
              src={achievement.imageUrl}
              alt={achievement.title}
              onError={(e) => { e.target.src = "https://placehold.co/400x150/555555/ffffff?text=AWARD+IMAGE"; }}
            />
            <div className="wel-m-achievement-overlay">
              <p className="wel-m-achievement-title">{achievement.title}</p>
              <p className="wel-m-achievement-desc">{achievement.description}</p>
            </div>
          </div>
          <div className="wel-m-news-wrapper">
            <NewsGradientBlock data={news} />
          </div>
        </div>
      </div>
      <div className="wel-m-action-buttons">
        <button onClick={onFinalSlideAction} className="wel-m-btn-stay">Stay in Stacia Corp</button>
        <button onClick={onFinalSlideAction} className="wel-m-btn-switch">Switch to Stacia Tech</button>
      </div>
    </div>
  );
};

const BannerSlide = ({ slide, onFinalSlideAction }) => (
  <div className="wel-m-banner-slide">
    <div className="wel-m-banner-image-wrapper">
      <img
        src={slide.imageUrl}
        alt={slide.title}
        onError={(e) => { e.target.src = "https://placehold.co/800x400/CCCCCC/333333?text=Image+Failed+to+Load"; }}
      />
    </div>
    <div className="wel-m-banner-content">
      <h2 className="wel-m-banner-title">{slide.title}</h2>
      <p className="wel-m-banner-desc">{slide.description}</p>
    </div>
    <div className="wel-m-banner-action">
      <button onClick={onFinalSlideAction} className="wel-m-btn-banner">
        {slide.buttonText || "Continue"}
      </button>
    </div>
  </div>
);

// --- MAIN MODAL COMPONENT ---
const WelcomeModal = ({ slides = SLIDES, onClose }) => {
  const totalSlides = slides.length;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isInteracting, setIsInteracting] = useState(false);
  const AUTOPLAY_DURATION = 5000;

  const resetAutoPlay = useCallback(() => {
    setIsInteracting(true);
    const timer = setTimeout(() => setIsInteracting(false), 15000);
    return () => clearTimeout(timer);
  }, []);

  const nextSlide = useCallback(() => {
    resetAutoPlay();
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides, resetAutoPlay]);

  const prevSlide = useCallback(() => {
    resetAutoPlay();
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides, resetAutoPlay]);

  // Auto-play
  useEffect(() => {
    if (totalSlides <= 1 || isInteracting) return;
    const interval = setInterval(nextSlide, AUTOPLAY_DURATION);
    return () => clearInterval(interval);
  }, [totalSlides, isInteracting, nextSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [nextSlide, prevSlide, onClose]);

  const handleAction = () => {
    onClose();
    console.log("Modal action completed.");
  };

  const CurrentSlideComponent = slides[currentSlide].layoutType === 'dark_complex' ? ComplexLayoutSlide : BannerSlide;
  const isDark = slides[currentSlide].layoutType === 'dark_complex';

  return (
    <div className="wel-m-modal-overlay" onClick={onClose}>
      <div className={`wel-m-modal-container ${isDark ? 'wel-m-dark' : 'wel-m-light'}`} onClick={e => e.stopPropagation()}>
        <button className="wel-m-close-btn" onClick={onClose} aria-label="Close">
          <XIcon />
        </button>

        <div className="wel-m-carousel-wrapper">
          <CurrentSlideComponent slide={slides[currentSlide]} onFinalSlideAction={handleAction} />

          {/* Navigation */}
          <button
            className="wel-m-nav-btn wel-m-prev-btn"
            onClick={prevSlide}
            disabled={currentSlide === 0}
            aria-label="Previous"
          >
            <ChevronLeft />
          </button>
          <button
            className="wel-m-nav-btn wel-m-next-btn"
            onClick={nextSlide}
            disabled={currentSlide === totalSlides - 1}
            aria-label="Next"
          >
            <ChevronRight />
          </button>

          {/* Indicators */}
          <div className="wel-m-indicators">
            {slides.map((_, i) => (
              <button
                key={i}
                className={`wel-m-indicator ${i === currentSlide ? 'wel-m-active' : ''}`}
                onClick={() => { resetAutoPlay(); setCurrentSlide(i); }}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeModal;