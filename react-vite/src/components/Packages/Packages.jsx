import React from "react";
import { FaCheck } from "react-icons/fa";
import "./Packages.css";

function Packages() {
  return (
    <section className="packages">
    <h2 className="packages-heading">Our Packages</h2>
    <p className="packages-description">
      We offer tailored solutions to meet your needs. Whether you're looking for a strategy session, a full website, or ongoing support, we have the right package for you.
    </p>
    <div className="packages-grid">
      {/* Package 1: Starter Website Package */}
      <div className="package-card">
        <span className="package-number">Package 1</span>
        <span className="package-price">800 USD</span>
        <h3 className="package-heading">Starter Website Package</h3>
        <ul className="package-features">
          <li><FaCheck /><span className="Space">Custom website design</span></li>
          <li><FaCheck /><span className="Space">Responsive for all devices</span></li>
          <li><FaCheck /><span className="Space">SEO optimized</span></li>
          <li><FaCheck /><span className="Space">Lead capture forms included</span></li>
          <li><FaCheck /><span className="Space">Easy-to-use CMS</span></li>
        </ul>
        <button className="cta-button">Get Started</button>
        <a href="/book-call" className="book-call-link">Book a Call</a>
      </div>

      {/* Package 2: Lead Generation Website Package */}
      <div className="package-card middle-card"> {/* Added 'middle-card' class */}
        <span className="package-number">Package 2</span>
        <span className="package-price">1100 USD</span>
        <h3 className="package-heading">Lead Generation Website</h3>
        <ul className="package-features">
          <li><FaCheck /><span className="Space">Full lead generation system</span></li>
          <li><FaCheck /><span className="Space">Targeted landing pages</span></li>
          <li><FaCheck /><span className="Space">Integrated CRM system</span></li>
          <li><FaCheck /><span className="Space">Conversion rate optimization</span></li>
          <li><FaCheck /><span className="Space">Custom analytics dashboard</span></li>
        </ul>
        <button className="cta-button">Get Started</button>
        <a href="/book-call" className="book-call-link">Book a Call</a>
      </div>

      {/* Package 3: Site Maintenance & Support */}
      <div className="package-card">
        <span className="package-number">Package 3</span>
        <span className="package-price">250 USD/month</span>
        <h3 className="package-heading">Site Maintenance & Support</h3>
        <ul className="package-features">
          <li><FaCheck /><span className="Space">Ongoing website updates</span></li>
          <li><FaCheck /><span className="Space">Security monitoring</span></li>
          <li><FaCheck /><span className="Space">Performance optimizations</span></li>
          <li><FaCheck /><span className="Space">Monthly reporting</span></li>
          <li><FaCheck /><span className="Space">Priority support</span></li>
        </ul>
        <button className="cta-button">Get Started</button>
        <a href="/book-call" className="book-call-link">Book a Call</a>
      </div>
    </div>
  </section>
  );
}

export default Packages;
