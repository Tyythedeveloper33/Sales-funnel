import React from 'react';
import './Testimony.css';

export default function Testimony() {
  return (
    <section id="testimonials" className="testimonial-section"> {/* Add ID here */}
      <div className="testimonial-content">
        <h1 className="quote-icon">“”</h1>
        <p className="testimonial-text" id='how-it-works'>
          "This service completely transformed our business. Our website now attracts the right clients and converts visitors into paying customers. We couldn't be happier with the results!"
        </p>
        <p className="testimonial-name" >John Doe, CEO of Company XYZ</p>
      </div>
    </section>
  );
}
