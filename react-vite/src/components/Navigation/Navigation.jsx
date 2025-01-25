import { NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="brand">SiteMagnet</span>
      </div>
      <div className="navbar-center">
        <ul>
          <li><NavLink to="/how">How It Works</NavLink></li>
          <li><NavLink to="/work">Our Work</NavLink></li>
          <li><NavLink to="/price">Pricing</NavLink></li>
          <li><NavLink to="/faqs">FAQs</NavLink></li>
        </ul>
      </div>
      <div className="navbar-right">
        <button className="get-started-btn">Get Started</button>
      </div>
    </nav>
  );
}

export default Navigation;
