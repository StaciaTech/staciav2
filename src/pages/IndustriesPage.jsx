import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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


const industries = [
  { id: 1, title: 'Food-Processing', icon: <MdOutlineFoodBank /> },
  { id: 2, title: 'Agriculture', icon: <GiPlantRoots /> },
  { id: 3, title: 'Energy', icon: <SlEnergy /> },
  { id: 4, title: 'Manufacturing', icon: <MdOutlinePrecisionManufacturing /> },
  { id: 5, title: 'Consumer Electronic', icon: <VscChip /> },
  { id: 6, title: 'Automotive', icon: <FaCarSide /> },
];

const departmentKeyByIndustry = {
  'Food-Processing': 'e-commerce',
  'Agriculture': 'ai-ml',
  'Energy': 'iot',
  'Manufacturing': 'web-development',
  'Consumer Electronic': 'mobile-app',
  'Automotive': 'consulting',
};

const IndustriesPage = () => {
  const navigate = useNavigate();
  const [activeIndustry, setActiveIndustry] = useState('Manufacturing');

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
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>Industries We Serve</motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            We build domain-specific solutions across key sectors, combining hardware, software, and AI to deliver measurable outcomes.
          </motion.p>
          <motion.div className="industries-pills" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            {industries.map((ind) => (
              <button
                key={ind.id}
                className={`industry-pill ${activeIndustry === ind.title ? 'active' : ''}`}
                onClick={() => setActiveIndustry(ind.title)}
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
              <p className="industry-desc">
                Tailored solutions for {ind.title} companies leveraging our multi-disciplinary expertise in product engineering, automation, and digital platforms.
              </p>
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

      {/* Horizontal roadmap per department */}
      <section className="industries-roadmap">
        <div className="industries-roadmap-inner">
          <motion.h2 className="roadmap-heading" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>How We Deliver for {activeIndustry}</motion.h2>
          <IndustryRoadmap activeIndustry={activeIndustry} />
        </div>
      </section>

      {/* Quick actions */}
      <section className="industries-actions">
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
      </section>

      {/* Stats strip */}
      <section className="industries-stats">
        <div className="industries-stats-inner">
          {[
            { k: 'Projects Delivered', v: '200+' },
            { k: 'Industries', v: '6+' },
            { k: 'Avg. CSAT', v: '4.8/5' },
            { k: 'Uptime on SLAs', v: '99.2%' }
          ].map((s, i) => (
            <motion.div key={i} className="stat-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
              <div className="stat-value">{s.v}</div>
              <div className="stat-key">{s.k}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="industries-faq">
        <div className="industries-faq-inner">
          <h2 className="faq-heading">Industries FAQs</h2>
          <FAQ />
        </div>
      </section>

      {/* CTA */}
      <div className="cta-section">
        <div className="cta-container">
          <div className="cta-content">
            <h2 className="cta-title">Have an industry challenge?</h2>
            <p className="cta-description">Let’s co-create a solution tailored to your domain.</p>
            <a href="/client-visit" className="cta-button">
              <span className="btn-icon"><FaRocket /></span>
              <span className="btn-text">Explore Our Process</span>
              <span className="btn-arrow"><GoArrowRight /></span>
            </a>
          </div>
        </div>
      </div>

      <Footer />
      <MobileFooter />
    </div>
  );
};

const stepsByIndustry = {
  Manufacturing: [
    { id: 1, title: 'Discovery & Requirement Mapping', desc: 'Understand operations, constraints, and desired outcomes.' },
    { id: 2, title: 'Concept & Feasibility', desc: 'Propose solution blueprint with technical and business feasibility.' },
    { id: 3, title: 'Prototyping', desc: 'Rapid prototyping with iterative validation and stakeholder demos.' },
    { id: 4, title: 'Engineering & Build', desc: 'Detailed engineering, integrations, and production-grade build.' },
    { id: 5, title: 'Deployment', desc: 'Rollout, operator training, and safety compliance.' },
    { id: 6, title: 'Support & Optimization', desc: 'Performance tuning and continuous improvement.' }
  ],
  'Food-Processing': [
    { id: 1, title: 'Process Study', desc: 'Analyse current systems, hygiene, throughput goals.' },
    { id: 2, title: 'Design', desc: 'Line balancing, automation concept, HACCP compliance.' },
    { id: 3, title: 'Pilot', desc: 'Build pilot, validate yields and quality.' },
    { id: 4, title: 'Scale', desc: 'Full-scale implementation with QA checkpoints.' },
    { id: 5, title: 'Handover', desc: 'SOPs, training, spares and documentation.' },
    { id: 6, title: 'Aftercare', desc: 'Uptime monitoring and warranty support.' }
  ],
  Agriculture: [
    { id: 1, title: 'Field Assessment', desc: 'Crops, soil, climate, and current practices assessment.' },
    { id: 2, title: 'Solution Mapping', desc: 'IoT/AI based advisory and mechanization opportunities.' },
    { id: 3, title: 'Pilot Plots', desc: 'Deploy pilots and measure impact.' },
    { id: 4, title: 'Deployment', desc: 'Rollout and farmer onboarding.' },
    { id: 5, title: 'Scale & Support', desc: 'Seasonal support and insights.' },
    { id: 6, title: 'Sustain', desc: 'Yield optimization and cost reduction.' }
  ],
  Energy: [
    { id: 1, title: 'Audit', desc: 'Energy audit and baseline establishment.' },
    { id: 2, title: 'Design', desc: 'Retrofit/greenfield design and controls.' },
    { id: 3, title: 'Integrations', desc: 'SCADA/EMS integrations and dashboards.' },
    { id: 4, title: 'Deployment', desc: 'Installation, commissioning and training.' },
    { id: 5, title: 'Optimization', desc: 'Peak shaving and predictive maintenance.' },
    { id: 6, title: 'Support', desc: 'SLAs and monitoring.' }
  ],
  'Consumer Electronic': [
    { id: 1, title: 'Product Definition', desc: 'User research, feature set, standards.' },
    { id: 2, title: 'Design & Firmware', desc: 'Industrial design, electronics, and firmware.' },
    { id: 3, title: 'App & Cloud', desc: 'Mobile apps and cloud connectivity.' },
    { id: 4, title: 'Compliance', desc: 'EMI/EMC, safety, and certifications.' },
    { id: 5, title: 'Manufacturing', desc: 'Tooling, DFM, supply chain.' },
    { id: 6, title: 'Launch & Support', desc: 'Go-to-market and updates.' }
  ],
  Automotive: [
    { id: 1, title: 'Requirement Capture', desc: 'Performance, safety, and compliance targets.' },
    { id: 2, title: 'Design & Simulation', desc: 'CAD/CAE and control strategies.' },
    { id: 3, title: 'Prototype', desc: 'HIL, bench tests and road validation.' },
    { id: 4, title: 'Production', desc: 'Process planning and QA.' },
    { id: 5, title: 'Homologation', desc: 'Regulatory approvals.' },
    { id: 6, title: 'Support', desc: 'Service documentation and updates.' }
  ]
};

const IndustryRoadmap = ({ activeIndustry }) => {
  const steps = stepsByIndustry[activeIndustry] || stepsByIndustry['Manufacturing'];
  return (
    <div className="industry-roadmap-scroll">
      <div className="industry-roadmap">
        {steps.map((s, idx) => (
          <motion.div
            key={s.id}
            className="industry-step"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
          >
            <div className="step-badge">{s.id}</div>
            <div className="step-body">
              <div className="step-title">{s.title}</div>
              <p className="step-desc">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
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