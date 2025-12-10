import { motion } from 'framer-motion';
import heroBg from '../../assets/hero-bg.png';
import './Hero.css';

export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, duration: 0.4 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <motion.section
      id="hero"
      className="hero"
      style={{ backgroundImage: `url(${heroBg})` }}
      initial="hidden"
      animate="visible"
      variants={container}
    >
      <div className="overlay"></div>

      <div className="container hero-content">
        <motion.h1 variants={item}>Precision in Every Scan</motion.h1>

        <motion.p variants={item}>
          Trusted X‑Ray Experts in Pune offering 40 + specialized imaging services with advanced digital radiography.
        </motion.p>

        <motion.div variants={item} className="hero-buttons">
          <a href="#services" className="btn btn-know-more">
            Know More
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}