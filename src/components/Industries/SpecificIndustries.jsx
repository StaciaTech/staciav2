import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import data from "../../Data/Industries.json";
import "../../styles/Industries/SpecificIndustries.css";
import NavBar from "../NavBar";
import Footer from "../Footer";

import { MdOutlineFoodBank, MdOutlinePrecisionManufacturing } from "react-icons/md";
import { GiPlantRoots } from "react-icons/gi";
import { SlEnergy } from "react-icons/sl";
import { VscChip } from "react-icons/vsc";
import { FaCarSide } from "react-icons/fa";

const iconMap = {
    "Food-Processing": <MdOutlineFoodBank />,
    Agriculture: <GiPlantRoots />,
    Energy: <SlEnergy />,
    Manufacturing: <MdOutlinePrecisionManufacturing />,
    "Consumer Electronic": <VscChip />,
    Automotive: <FaCarSide />,
};

const SpecificIndustries = () => {
    const { industryName } = useParams();
    const navigate = useNavigate();
    const [industry, setIndustry] = useState(null);
    const [related, setRelated] = useState([]);

    useEffect(() => {
        if (!data?.industries) return;
        const lower = (industryName || "").toLowerCase();
        const match =
            data.industries.find((it) => it.slug === industryName) ||
            data.industries.find((it) => it.title.toLowerCase() === lower);
        setIndustry(match || null);
        setRelated(
            data.industries.filter((it) => (match ? it.slug !== match.slug : true)).slice(0, 3)
        );
    }, [industryName]);

    if (!industry) {
        return (
            <div className="spec-ind-page">
                <NavBar />
                <main className="spec-ind-container spec-ind-center">
                    <div className="spec-ind-not-found">
                        <h2>Industry not found</h2>
                        <p>We couldn't find that industry. Please check the industries list.</p>
                        <button className="spec-ind-btn spec-ind-btn-primary" onClick={() => navigate("/industries-covered")}>
                            Back to Industries
                        </button>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="spec-ind-page">
            <NavBar />

            <main className="spec-ind-container">
                {/* HERO SECTION */}
                <section className="spec-ind-hero">
                    <div className="spec-ind-hero-left">
                        <div className="spec-ind-hero-header">
                            <div className="spec-ind-hero-icon">
                                {iconMap[industry.title] || <MdOutlinePrecisionManufacturing />}
                            </div>
                            <h1 className="spec-ind-hero-title">{industry.title}</h1>
                        </div>
                        <p className="spec-ind-hero-desc">{industry.overview}</p>

                        <div className="spec-ind-cta-row">
                            <button
                                className="spec-ind-btn spec-ind-btn-primary"
                                onClick={() => navigate("/contact")}
                            >
                                Request Assessment
                            </button>
                            <button
                                className="spec-ind-btn spec-ind-btn-ghost"
                                onClick={() => {
                                    const el = document.querySelector(".spec-ind-sections");
                                    if (el) el.scrollIntoView({ behavior: "smooth" });
                                }}
                            >
                                See Services
                            </button>
                        </div>
                    </div>

                    <div className="spec-ind-hero-right">
                        <img
                            src={industry.heroImage || "/images/placeholder-hero.jpg"}
                            alt={industry.title}
                            className="spec-ind-hero-img"
                        />
                    </div>
                </section>

                {/* STATS */}
                <section className="spec-ind-stats">
                    <div className="spec-ind-stat-card">
                        <div className="spec-ind-stat-title">Avg Project Size</div>
                        <div className="spec-ind-stat-value">
                            {industry.stats?.avgProjectSize || "—"}
                        </div>
                    </div>
                    <div className="spec-ind-stat-card">
                        <div className="spec-ind-stat-title">Typical Lead Time</div>
                        <div className="spec-ind-stat-value">
                            {industry.stats?.typicalLeadTime || "—"}
                        </div>
                    </div>
                </section>

                {/* MAIN CONTENT */}
                <section className="spec-ind-sections">
                    <div className="spec-ind-left">
                        <h2 className="spec-ind-heading">Market Trends</h2>
                        <p className="spec-ind-muted">{industry.marketTrends}</p>

                        <div className="spec-ind-two-col">
                            <div>
                                <h3>Opportunities</h3>
                                <ul className="spec-ind-bullets">
                                    {industry.opportunities?.map((o, i) => (
                                        <li key={i}>{o}</li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h3>Challenges</h3>
                                <ul className="spec-ind-bullets">
                                    {industry.challenges?.map((c, i) => (
                                        <li key={i}>{c}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <h3>Typical Projects</h3>
                        <div className="spec-ind-projects">
                            {industry.typicalProjects?.map((p, i) => (
                                <div key={i} className="spec-ind-project-card">
                                    <div className="spec-ind-project-thumb" />
                                    <div className="spec-ind-project-name">{p}</div>
                                </div>
                            ))}
                        </div>

                        <h3>Case Studies</h3>
                        <div className="spec-ind-cases">
                            {industry.caseStudies?.map((cs) => (
                                <article key={cs.slug} className="spec-ind-case-card">
                                    <div className="spec-ind-case-main">
                                        <h4>{cs.title}</h4>
                                        <p className="spec-ind-muted">{cs.summary}</p>
                                    </div>
                                    <div className="spec-ind-case-meta">
                                        {cs.impact &&
                                            Object.keys(cs.impact).map((k) => (
                                                <span key={k} className="spec-ind-pill">
                                                    {k.replace(/([A-Z])/g, " $1")}: <strong>{cs.impact[k]}</strong>
                                                </span>
                                            ))}
                                        <button
                                            className="spec-ind-btn spec-ind-btn-small spec-ind-btn-primary"
                                            onClick={() => navigate(`/case-studies/${cs.slug}`)}
                                        >
                                            Read Full Case
                                        </button>
                                    </div>
                                </article>
                            ))}
                        </div>

                        <h3>FAQs</h3>
                        <div className="spec-ind-faqs">
                            {industry.faqs?.map((f, i) => (
                                <details key={i} className="spec-ind-faq-item">
                                    <summary>{f.q}</summary>
                                    <p className="spec-ind-muted">{f.a}</p>
                                </details>
                            ))}
                        </div>
                    </div>

                    <aside className="spec-ind-right">
                        <div className="spec-ind-panel">
                            <h4>Key Services</h4>
                            <div className="spec-ind-services">
                                {industry.keyServices?.map((s, i) => (
                                    <div key={i} className="spec-ind-service-pill">
                                        {s}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="spec-ind-panel">
                            <h4>Related Industries</h4>
                            <div className="spec-ind-related">
                                {related.map((r) => (
                                    <div
                                        key={r.slug}
                                        className="spec-ind-related-row"
                                        onClick={() =>
                                            navigate(`/industries-covered-read_more/${r.slug}`)
                                        }
                                    >
                                        <img src={r.heroImage || "/images/placeholder-thumb.jpg"} alt={r.title} />
                                        <div>
                                            <div className="spec-ind-related-title">{r.title}</div>
                                            <div className="spec-ind-muted">
                                                {(r.overview || "").slice(0, 60)}...
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </aside>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default SpecificIndustries;
