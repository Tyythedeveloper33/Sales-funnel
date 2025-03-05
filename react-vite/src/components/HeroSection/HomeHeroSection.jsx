import { useState, useEffect, useRef } from "react";
import "./HomeHeroSection.css";

function HomeHeroSection() {
  const [showBooking, setShowBooking] = useState(false);

  // Reference to the booking container to check clicks outside
  const bookingContainerRef = useRef(null);

  // Close the booking container when clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // If the click is outside the booking container, close it
      if (bookingContainerRef.current && !bookingContainerRef.current.contains(event.target)) {
        setShowBooking(false);
      }
    };

    // Add event listener on mount
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <section className="hero">
      {/* Background Video */}
      <video autoPlay loop muted playsInline className="hero-video">
        <source src="/herovid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay for Readability */}
      <div className={`overlay ${showBooking ? "active" : ""}`}></div>

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
          <button className="cta-button" onClick={() => setShowBooking(true)}>
            Get Started
          </button>
        </div>
      </div>

      {/* Booking Container */}
      {showBooking && (
        <div className="booking-container" ref={bookingContainerRef}>
          

          {/* Go High Level Calendar Embed */}
          <iframe
            src="https://api.leadconnectorhq.com/widget/booking/jcILtSg9gF3jD9wnKohK"
            style={{ width: "100%", border: "none", overflow: "hidden" }}
            scrolling="no"
            id="jcILtSg9gF3jD9wnKohK_1741203941889"
            title="Booking Calendar"
          ></iframe>

          {/* Script for the embed functionality */}
          <script
            src="https://link.msgsndr.com/js/form_embed.js"
            type="text/javascript"
          ></script>

          <button
            className="close-booking"
            onClick={() => setShowBooking(false)}
          >
            Close
          </button>
        </div>
      )}
    </section>
  );
}

export default HomeHeroSection;
