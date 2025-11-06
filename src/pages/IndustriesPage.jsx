import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import Footer from '../components/Footer';
import MobileFooter from '../components/MobileFooter';
import { MdOutlineFoodBank } from "react-icons/md";
import { GiPlantRoots } from "react-icons/gi";
import { FaCarSide, FaRocket } from "react-icons/fa";
import { MdOutlinePrecisionManufacturing } from "react-icons/md";
import { SlEnergy } from "react-icons/sl";
import { VscChip } from "react-icons/vsc";
import { GoArrowRight } from 'react-icons/go';
import '../styles/Industries.css';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

import tech from "../assets/TEchnology.lottie";
import mech from "../assets/Engineer Gears.lottie";
import elec from "../assets/Circuit Board.lottie";

/* ---------- data / maps (unchanged) ---------- */

const industries = [
  { id: 1, title: 'Food-Processing', description: 'Stacia Corp specializes in innovative engineering solutions for the food processing industry, including custom machinery design, automation systems, and prototyping to enhance efficiency, safety, and compliance in food production and handling.', icon: <MdOutlineFoodBank />, services: ['e-commerce'], projects: ['Food-Processing'], caseStudies: ['Food-Processing'] },
  { id: 2, title: 'Agriculture', description: 'In the agriculture sector, Stacia provides advanced CAD engineering and product development services, focusing on equipment design, precision farming tools, and sustainable solutions to optimize crop yields and resource management.', icon: <GiPlantRoots />, services: ['e-commerce'], projects: ['Food-Processing'], caseStudies: ['Food-Processing'] },
  { id: 3, title: 'Energy', description: 'Stacia supports the energy industry with cutting-edge design and manufacturing services, including renewable energy components, efficient systems engineering, and prototypes for solar, wind, and other sustainable energy technologies.', icon: <SlEnergy />, services: ['e-commerce'], projects: ['Food-Processing'], caseStudies: ['Food-Processing'] },
  { id: 4, title: 'Manufacturing', description: 'For manufacturing, Stacia offers comprehensive services in product design, CAD modeling, and custom fabrication, helping companies streamline production processes, reduce costs, and bring innovative products to market faster.', icon: <MdOutlinePrecisionManufacturing />, services: ['e-commerce'], projects: ['Food-Processing'], caseStudies: ['Food-Processing'] },
  { id: 5, title: 'Consumer Electronic', description: 'Stacia excels in consumer electronics by providing electronic system design, PCB development, and integrated tech solutions, ensuring high-quality, user-friendly devices with a focus on innovation and rapid prototyping.', icon: <VscChip />, services: ['e-commerce'], projects: ['Food-Processing'], caseStudies: ['Food-Processing'] },
  { id: 6, title: 'Automotive', description: 'In the automotive industry, Stacia delivers mechanical and electronic engineering expertise for vehicle components, design optimization, and manufacturing support, contributing to safer, more efficient, and advanced automotive products.', icon: <FaCarSide />, services: ['e-commerce'], projects: ['Food-Processing'], caseStudies: ['Food-Processing'] },
];

const departmentKeyByIndustry = {
  'Food-Processing': 'e-commerce',
  'Agriculture': 'ai-ml',
  'Energy': 'iot',
  'Manufacturing': 'web-development',
  'Consumer Electronic': 'mobile-app',
  'Automotive': 'consulting',
};

const stats = [
  { k: 'Apps Created', v: '5600+' },
  { k: 'Forge CLI Downloads', v: '73,000+' },
  { k: 'Active Dev Community Members', v: '13,000+' },
];

/* ---------- helpers ---------- */

// produce URL-friendly slug from a title
const toSlug = (title = '') =>
  title.toString().trim().toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');

// find industry by slug
const findIndustryBySlug = (slug) => industries.find(ind => toSlug(ind.title) === (slug || ''));

/* ---------- component ---------- */

const IndustriesPage = () => {
  // read slug param first (avoid TDZ)
  const { formattedTitle: slug } = useParams(); // URL param name ":formattedTitle"
  const navigate = useNavigate();

  // app state
  const [activeIndustry, setActiveIndustry] = useState('Manufacturing');

  // sync activeIndustry with URL slug when component mounts or slug changes
  useEffect(() => {
    if (!slug) return; // no param — keep default
    const matched = findIndustryBySlug(slug);
    if (matched) {
      setActiveIndustry(matched.title);
    } else {
      // optional fallback: keep default or redirect to default slug
      // navigate('/industries-covered/manufacturing', { replace: true });
    }
  }, [slug, navigate]);

  // optional: when activeIndustry changes (via UI), update the URL
  const setIndustryAndPush = (title) => {
    setActiveIndustry(title);
    const newSlug = toSlug(title);
    navigate(`/industries-covered/${newSlug}`);
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <div className="nav_style">
        <NavBar />
        <SideBar />
      </div>
      <div className="service-hero-container">
        <div className="service-title">
          <span style={{ userSelect: "none" }}>Industries</span>
        </div>
      </div>

      {/* Hero */}
      <section className="industries-hero">
        <div className="industries-hero-inner">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className='clt-title-section'>Industries We Serve</motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            We build domain-specific solutions across key sectors, combining hardware, software, and AI to deliver measurable outcomes.
          </motion.p>
          <motion.div className="industries-pills" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            {industries.map((ind) => (
              <button
                key={ind.id}
                className={`industry-pill ${activeIndustry === ind.title ? 'active' : ''}`}
                onClick={() => setIndustryAndPush(ind.title)} // sets state and navigates
              >
                <span className="pill-icon">{ind.icon}</span>
                <span className="pill-text">{ind.title}</span>
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Industry cards */}
      <section className="industries-grid-section">
        <div className="industries-grid">
          {industries.map((ind, idx) => (
            <motion.div
              key={ind.id}
              className={`industry-card ${activeIndustry === ind.title ? 'selected' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
            >
              <div className="industry-card-header">
                <div className="industry-icon">{ind.icon}</div>
                <div className="industry-title">{ind.title}</div>
              </div>
              <p className="industry-desc">{ind.description}</p>
              <div className="industry-actions">
                <button className="btn-link" onClick={() => navigate(`/services/${departmentKeyByIndustry[ind.title] || 'web-development'}`)}>
                  Explore Services <GoArrowRight />
                </button>
                <button className="btn-link" onClick={() => navigate(`/project/${ind.title}`)}>
                  View Projects <GoArrowRight />
                </button>
                <button className="btn-link" onClick={() => navigate(`/case-study/${ind.title}`)}>
                  Case Studies <GoArrowRight />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Department Information */}
      <div className="indus-bld-container">
        <div className="indus-bld-header">
          <h2>Stacia helps you focus more on innovation and less on infrastructure.</h2>
        </div>

        <div className="indus-bld-section">
          <div className="indus-bld-text">
            <h3>Mechanical Department</h3>
            <p>Stacia's Mechanical Department specializes in CAD engineering and product design. We handle the intricate details of mechanical components, allowing you to concentrate on your core ideas.</p>
            <p>Our team uses advanced tools to create precise models and prototypes, ensuring efficiency, security, and cost savings in your projects.</p>
          </div>
          <div className="indus-bld-image">
            <DotLottieReact src={mech} style={{ width: '100%', height: '100%' }} loop autoplay />
          </div>
        </div>

        <div className="indus-bld-section ">
          <div className="indus-bld-image">
            <DotLottieReact src={elec} style={{ width: '100%', height: '100%' }} loop autoplay />
          </div>
          <div className="indus-bld-text">
            <h3>Electronic Department</h3>
            <p>In the Electronic Department, we focus on designing and developing electronic systems and components. You're in control of your innovations while we manage the technical complexities.</p>
            <p>Our approach ensures isolation of processes and restriction of unnecessary integrations, adhering to a shared responsibility model for optimal results.</p>
          </div>
        </div>

        <div className="indus-bld-section">
          <div className="indus-bld-text">
            <h3>Tech Department</h3>
            <p>The Tech Department at Stacia provides cutting-edge software and technology solutions using pre-built frameworks and components for quick development.</p>
            <p>For advanced needs, we offer custom tech integrations using various programming languages and tools to suit your specific requirements.</p>
          </div>
          <div className="indus-bld-image">
            <DotLottieReact src={tech} style={{ width: '100%', height: '100%' }} loop autoplay />
          </div>
        </div>

        <div className="indus-bld-quote">
          <blockquote>
            With Stacia's integrated departments, we can develop products with minimal infrastructure concerns
            <br />
            making operations efficient , cost-effective , and secure.
          </blockquote>
          <p>- <b> Stacia Corp </b></p>
        </div>

        <div className="indus-bld-examples">
          <h2>See what’s possible</h2>
          <h3>Example Projects</h3>
          <p>Dive into our portfolio. Get inspired by our open-source examples and real-world applications developed by Stacia.</p>

          <div className="indus-bld-section">
            <div className="indus-bld-text">
              <h3>Product Design Project for Manufacturing</h3>
              <p>Collaborate across departments to design and manufacture innovative products. This project integrates mechanical, electronic, and tech elements to create a comprehensive solution.</p>
            </div>

            <div className="indus-bld-image">
              <img src={""} alt="Jira example" />
            </div>
          </div>

          <div className="industries-actions-inner">
            <button className="action-btn" onClick={() => navigate('/services')}>
              <span className="action-title">Explore Services</span>
              <GoArrowRight />
            </button>
            <button className="action-btn" onClick={() => navigate('/project')}>
              <span className="action-title">Browse Projects</span>
              <GoArrowRight />
            </button>
            <button className="action-btn" onClick={() => navigate('/case-study')}>
              <span className="action-title">See Case Studies</span>
              <GoArrowRight />
            </button>
            <button className="action-btn primary" onClick={() => navigate('/client-visit')}>
              <span className="action-title">Start Your Project</span>
              <GoArrowRight />
            </button>
          </div>
        </div>
      </div>

      <section className="industries-stats">
        <div className="industries-stats-inner">
          {stats.map((s, i) => (
            <motion.div key={i} className="stat-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
              <div className="stat-value">{s.v}</div>
              <div className="stat-key">{s.k}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="industries-faq">
        <div className="industries-faq-inner">
          <h2 className="faq-heading">Industries FAQs</h2>
          <FAQ />
        </div>
      </section>

      <div className="cta-section">
        <div className="cta-container">
          <div className="cta-content">
            <h2 className="cta-title">Have an industry challenge?</h2>
            <p className="cta-description">Let’s co-create a solution tailored to your domain.</p>
            <a href="/client-visit" className="cta-button">
              <span className="btn-icon"><FaRocket /></span>
              <span className="btn-text">Explore Our Process</span>
              <span className="btn-arrow-idt"><GoArrowRight /></span>
            </a>
          </div>
        </div>
      </div>

      <Footer />
      <MobileFooter />
    </div>
  );
};



const faqData = [
  { q: 'Which industries do you specialize in?', a: 'Manufacturing, Food-Processing, Agriculture, Energy, Consumer Electronics, and Automotive. We tailor solutions for each domain.' },
  { q: 'How do we start an engagement?', a: 'Begin with a discovery call → requirements mapping → proposal → pilot or direct implementation depending on project scope.' },
  { q: 'Do you provide post-deployment support?', a: 'Yes. We provide SLAs, preventive maintenance, performance monitoring, and continuous optimization.' },
  { q: 'Can you integrate with our existing systems?', a: 'Absolutely. We handle legacy systems, PLC/SCADA, ERPs, and cloud platforms with secure API-based integrations.' }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <div className="faq-list">
      {faqData.map((f, i) => (
        <div key={i} className={`faq-item ${openIndex === i ? 'open' : ''}`} onClick={() => setOpenIndex(openIndex === i ? -1 : i)}>
          <div className="faq-q">
            <span>{f.q}</span>
            <GoArrowRight className={`faq-arrow ${openIndex === i ? 'rot' : ''}`} />
          </div>
          <motion.div
            className="faq-a"
            initial={false}
            animate={{ height: openIndex === i ? 'auto' : 0, opacity: openIndex === i ? 1 : 0 }}
            transition={{ duration: 0.25 }}
          >
            <p>{f.a}</p>
          </motion.div>
        </div>
      ))}
    </div>
  );
};
export default IndustriesPage;
