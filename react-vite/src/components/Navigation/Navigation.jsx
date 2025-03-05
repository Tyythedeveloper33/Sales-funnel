import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <NavLink to="/"><span className="brand">SiteMagnet</span></NavLink>
      </div>

      {/* Center Menu with a conditional class when the menu is open */}
      <div className={`navbar-center ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li><a href="#how-it-works">How It Works</a></li>
          <li><a href="#our-work">Our Work</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#faqs">FAQs</a></li>

          {/* Add Get Started as the last menu item */}
          <li>
            <NavLink to="Dashboard">
              <button className="get-started-btn">Get Started</button>
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={handleMenuToggle}>
        <div className={`line ${isMenuOpen ? "open" : ""}`}></div>
        <div className={`line ${isMenuOpen ? "open" : ""}`}></div>
        <div className={`line ${isMenuOpen ? "open" : ""}`}></div>
      </div>
    </nav>
  );
}

export default Navigation;
