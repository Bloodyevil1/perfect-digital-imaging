import techImg from '../../assets/technology-img.png';
import './Technology.css';

export default function Technology() {
  return (
    <section id="technology" className="technology-section">
      <div className="container technology-wrapper">
        <div className="technology-content">
          <h2>Advanced Imaging Technology</h2>
          <p className="tech-intro">
            Our centers are equipped with state‑of‑the‑art digital radiography
            systems designed for unmatched accuracy and patient comfort.
            From high‑resolution detectors to low‑radiation exposure machines,
            every scan we deliver upholds the industry’s highest standards.
          </p>

          <ul className="tech-list">
            <li>✅ High‑resolution digital X‑ray machines</li>
            <li>✅ Low‑radiation exposure for safety</li>
            <li>✅ Automated image processing for faster reports</li>
            <li>✅ Cloud‑ready digital storage and sharing</li>
          </ul>
        </div>

        <div className="technology-image">
          <img src={techImg} alt="Advanced X‑ray equipment" />
        </div>
      </div>
    </section>
  );
}