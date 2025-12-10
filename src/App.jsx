import { useState, useEffect } from 'react';
import Loader from './components/Loader/Loader';
import Navbar from './components/Navbar/Navbar';
import Hero from './sections/Hero/Hero';
import Services from './sections/Services/Services';
import About from './sections/About/About';
import Technology from './sections/Technology/Technology';
import Contact from './sections/Contact/Contact';
import Footer from './components/Footer/Footer';
import CallNow from './components/CallNow/CallNow';
import ScrollTop from './components/ScrollTop/ScrollTop';
import './index.css';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Matches your loader’s 1‑second single sweep + tiny buffer
    const timer = setTimeout(() => setLoading(false), 1400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <Hero />
          <Services />
          <About />
          <Technology />
          <Contact />
          <Footer />
          <CallNow />
          <ScrollTop />
        </>
      )}
    </>
  );
}