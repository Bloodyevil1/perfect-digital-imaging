import aboutImg from '../../assets/about-img.png';
import './About.css';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container about-wrapper">
        <div className="about-image">
          <img src={aboutImg} alt="Perfect Digital Imaging team" />
        </div>

        <div className="about-content">
          <h2>About Perfect Digital Imaging</h2>
          <p>
            Perfect Digital Imaging Centre is one of Pune’s most trusted
            radiology & imaging hubs. With over 10 years of experience and
            40 + specialized digital X‑Ray services, we deliver clarity and
            accuracy that doctors trust and patients appreciate.
          </p>

          <div className="about-stats">
            <div className="stat-box">
              <h3>10 +</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat-box">
              <h3>40 +</h3>
              <p>X‑Ray Services</p>
            </div>
            <div className="stat-box">
              <h3>3</h3>
              <p>Centres Across Pune</p>
            </div>
            <div className="stat-box">
              <h3>5000 +</h3>
              <p>Patients Diagnosed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}