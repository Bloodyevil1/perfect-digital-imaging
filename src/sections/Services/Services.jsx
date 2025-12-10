import { motion } from 'framer-motion';
import './Services.css';

export default function Services() {
  const services = [
    { name: 'X‑Ray Ankle Joint', price: '₹350' },
    { name: 'X‑Ray Arm', price: '₹250' },
    { name: 'X‑Ray Cervical Spine', price: '₹320' },
    { name: 'Chest X‑Ray', price: '₹350' },
    { name: 'X‑Ray Knee', price: '₹500' },
    { name: 'X‑Ray Shoulder', price: '₹400' },
  ];

  return (
    <motion.section
      id="services"
      className="services-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="container">
        <h2 className="services-title">X‑Ray & Imaging Services</h2>
        <p className="services-subtitle">
          We provide more than 40 specialized digital X‑Ray services using
          the latest imaging technologies.
        </p>

        <div className="services-grid">
          {services.map((item, i) => (
            <motion.div
              className="service-card"
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="service-icon">🩻</div>
              <h3>{item.name}</h3>
              <p className="price">
                Starting from <span>{item.price}</span>
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}