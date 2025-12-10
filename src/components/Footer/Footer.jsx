import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-accent"></div>

      <div className="container footer-main">
        {/* Brand Text */}
        <div className="footer-brand">
          <h3>Perfect Digital Imaging</h3>
          <p>Precision in Every Scan • Trusted Diagnostics for Every Patient</p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#technology">Technology</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <h4>Reach Us</h4>
          <p>📞 +91 98765 43210</p>
          <p>✉️ info@perfectimaging.in</p>
          <p>📍 Pune, Maharashtra, India</p>
          <div className="socials">
            <a href="#" aria-label="Facebook"><i className="ri-facebook-fill"></i></a>
            <a href="#" aria-label="Instagram"><i className="ri-instagram-fill"></i></a>
            <a href="#" aria-label="LinkedIn"><i className="ri-linkedin-fill"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Perfect Digital Imaging Centre. All rights reserved.
      </div>
    </footer>
  );
}