import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { FiMenu, FiX } from 'react-icons/fi';
import logo1 from '../../assets/logo2.png';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container nav-content">
        {/* brand */}
        <Link
          to="hero"
          smooth
          offset={-90}
          duration={600}
          className="nav-left brand-link"
          onClick={closeMenu}
        >
          <img src={logo1} alt="Perfect Digital Imaging" className="logo" />
          <span className="brand-name">Perfect Digital Imaging</span>
        </Link>

        {/* hamburger icon */}
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle Menu">
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* nav links */}
        <nav className={`nav-right ${menuOpen ? 'open' : ''}`}>
          {['hero', 'services', 'about', 'technology', 'contact'].map((id) => (
            <Link
              key={id}
              to={id}
              smooth
              offset={-90}
              duration={600}
              className="nav-item"
              onClick={closeMenu}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}