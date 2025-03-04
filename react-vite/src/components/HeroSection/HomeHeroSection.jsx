import "./HomeHeroSection.css";
import { NavLink } from "react-router-dom";

function HomeHeroSection() {
  return (
    <section className="hero">
      {/* Background Video */}
      <video autoPlay loop muted playsInline className="hero-video">
        <source src="/herovid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay for Readability */}
      <div className="overlay"></div>

      {/* Hero Content */}
      <div className="hero-content">
        <h1 className="hero-heading">
          Turn Your Website Into a High-Converting Lead Magnet
        </h1>
        <p className="hero-subheading">
          Are you struggling to convert visitors into clients? Let us help you
          build a professional, lead-generating website that grows your business.
        </p>
        <div className="cta-container">
          <NavLink to="DashBoard">
            <button className="cta-button">Get Started</button>
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export default HomeHeroSection;
