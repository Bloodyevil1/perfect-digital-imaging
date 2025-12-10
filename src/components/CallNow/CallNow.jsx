import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhoneAlt } from 'react-icons/fa';
import './CallNow.css';

export default function CallNow() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200); // show after light scroll
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          key="call-now"
          href="tel:+919876543210"
          className="call-now"
          aria-label="Call Now"
          initial={{ opacity: 0, y: 40, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.8 }}
          transition={{ duration: 0.3 }}
        >
          <FaPhoneAlt className="call-icon" />
          <span className="call-tooltip">Call Now</span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}