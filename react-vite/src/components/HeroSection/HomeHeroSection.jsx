import "./HomeHeroSection.css";

function HomeHeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-heading">
          Turn Your Website Into a High-Converting Lead Magnet
        </h1>
        <p className="hero-subheading">
          Are you struggling to convert visitors into clients? Let us help you
          build a professional, lead-generating website that grows your business.
        </p>
        <div className="cta-container">
          <button className="cta-button">Get Started</button>
        </div>
      </div>
      <div className="hero-image">
        {/* Optional: Add an image or illustration of your work */}
      </div>
    </section>
  );
}

export default HomeHeroSection;
