import { NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <NavLink to="/"><span className="brand">SiteMagnet</span></NavLink>
      </div>
      <div className="navbar-center">
        <ul>
          <li><a href="#how-it-works">How It Works</a></li>
          <li><a href="#our-work">Our Work</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#faqs">FAQs</a></li>
        </ul>
      </div>
      <div className="navbar-right">
        <NavLink to="Dashboard"><button className="get-started-btn">Get Started</button></NavLink>
      </div>
    </nav>
  );
}

export default Navigation;

