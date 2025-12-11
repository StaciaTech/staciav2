import React from 'react';
import "../styles/PrivacyPolicy.css"
import NavBar from './NavBar';
import SideBar from './SideBar';

const RefundPolicy = () => {
    return (
        <>
            <div className="nav_style">
                <NavBar />
                <SideBar />
            </div>
            <div className="privacy-container">
                <div className="privacy-content">
                    <h1 className="privacy-title">Refund Policy</h1>

                    {/* Introduction */}
                    <section className="section">
                        <p>
                            Credits are strictly NON-REFUNDABLE under any circumstances.                        </p>
                        <p>

                            By purchasing, You waive any statutory or common-law right to refund or chargeback. Chargeback attempts = permanent ban + recovery of chargeback fee + â‚¹25,000 liquidated damages.                        </p>

                    </section>


                </div>
            </div>
        </>
    );
};

export default RefundPolicy;