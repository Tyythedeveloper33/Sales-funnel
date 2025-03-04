import React from 'react';
import { FaHandshake, FaClipboardList, FaDesktop, FaRocket } from 'react-icons/fa'; // Import icons
import "./Plan.css"
import { NavLink } from 'react-router-dom';
export default function Plan() {
  return (
    <section className="plan-section">
      <div className="plan-content">
        <h1>How It Works</h1>
        <p className="summary-text">Our process is simple and designed to get you results quickly.</p>
        <div className="steps-container">
          <div className="step">
            <FaHandshake className="step-icon" />
            <h3>1. Consultation</h3>
            <p>We’ll discuss your business goals and challenges.</p>
          </div>
          <div className="step">
            <FaClipboardList className="step-icon" />
            <h3>2. Strategy Session</h3>
            <p>We’ll craft a strategy to convert visitors into clients.</p>
          </div>
          <div className="step">
            <FaDesktop className="step-icon" />
            <h3>3. Design & Build</h3>
            <p>We’ll design and build a website that supports your business growth.</p>
          </div>
          <div className="step">
            <FaRocket className="step-icon" />
            <h3>4. Launch & Support</h3>
            <p>We’ll launch your site and provide ongoing support to ensure success.</p>
          </div>
        </div>
        <div className="cta-button">
         <NavLink to="Dashboard"><button id='our-work'>Start Your Journey</button></NavLink>
        </div>
      </div>
    </section>
  );
}
