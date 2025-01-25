import React from 'react';
import "./ClientShowCase.css";

function ClientShowcase() {
  return (
    <section className="client-showcase">
      <div className="showcase-header">
        <h2>Client Showcase</h2>
        <p>A few examples of what we can do</p>
      </div>
      <div className="grid-container">
        <div className="grid-item grid-item-1">
          <h3>The Brief</h3>
          <p>
            When [Client Name] came to me, they were struggling with low website conversion rates.
            So, I helped them revamp their website, implementing lead-generation strategies and creating a user-friendly design.
            Now they have increased their lead conversions by 40% and their business is thriving with more client inquiries.
          </p>
        </div>
        <div className="grid-item grid-item-2">
          <h3>Client 2</h3>
          {/* Client 2 content */}
        </div>
        <div className="grid-item grid-item-3">
          <h3>Client 3</h3>
          {/* Client 3 content */}
        </div>
        <div className="grid-item grid-item-4">
          <h3>Testimonial</h3>
          <p>
            Before, I was struggling with a website that wasn’t converting visitors into clients, and it made me feel frustrated and unsure about the future of my business.
            Now, I have a website that generates consistent leads, and I feel empowered knowing my business is growing.
          </p>
        </div>
        <div className="grid-item grid-item-5">
          <h3>Client 5</h3>
          {/* Client 5 content */}
        </div>
        <div className="grid-item grid-item-6">
          <h3>Client 6</h3>
          {/* Client 6 content */}
        </div>
      </div>
    </section>
  );
}

export default ClientShowcase;
