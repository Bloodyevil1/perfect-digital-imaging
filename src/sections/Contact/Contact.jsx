import { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const coords = {
    talawade: { lat: 18.670047, lng: 73.786346 },
    nigdi: { lat: 18.660278, lng: 73.777583 },
    chinchwad: { lat: 18.665299, lng: 73.799119 },
  };

  const [active, setActive] = useState('talawade');
  const mapSrc = `https://maps.google.com/maps?q=${coords[active].lat},${coords[active].lng}&z=15&output=embed`;

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="contact-title">Contact Us</h2>
        <p className="contact-subtitle">
          Reach Perfect Digital Imaging Centre for appointments or questions. 
          Click a branch to view its exact location on the map.
        </p>

        <div className="contact-wrapper">
          <form
            className="contact-form"
            onSubmit={(e) => {
              e.preventDefault();
              alert('Demo only — backend integration pending.');
            }}
          >
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required />
            <textarea rows="4" placeholder="Message" required></textarea>
            <button type="submit" className="btn-submit">Send Message</button>
          </form>

          <div className="contact-map">
            <iframe
              key={mapSrc}
              title="Perfect Digital Imaging Map"
              src={mapSrc}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className="contact-locations">
          <div
            className={`location-box ${active === 'talawade' ? 'active' : ''}`}
            onClick={() => setActive('talawade')}
          >
            <h4>Talawade Branch</h4>
            <p>Talawade Rd, Triveni Nagar, Chikhali – 411062</p>
            <p>📞 +91 98765 43210</p>
          </div>

          <div
            className={`location-box ${active === 'nigdi' ? 'active' : ''}`}
            onClick={() => setActive('nigdi')}
          >
            <h4>Nigdi Branch</h4>
            <p>Sector 21, Nigdi Gaothan – 411044</p>
            <p>📞 +91 98765 43211</p>
          </div>

          <div
            className={`location-box ${active === 'chinchwad' ? 'active' : ''}`}
            onClick={() => setActive('chinchwad')}
          >
            <h4>Chinchwad Branch</h4>
            <p>Shivaji Park, Sambhajinagar – 411019</p>
            <p>📞 +91 98765 43212</p>
          </div>
        </div>
      </div>
    </section>
  );
}