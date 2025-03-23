import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../styles/components/navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <span className="logo-text">Dr. Boris Mederos</span>
          <span className="logo-subtitle">Cirujano General</span>
        </Link>

        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={closeMenu}>
              Inicio
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link" onClick={closeMenu}>
              Sobre Mí
            </Link>
          </li>
          <li className="nav-item dropdown">
            <span className="nav-link dropdown-toggle">
              Especialidades
            </span>
            <ul className="dropdown-menu">
              <li>
                <Link to="/hernias" className="dropdown-link" onClick={closeMenu}>
                  Cirugía de Hernias
                </Link>
              </li>
              <li>
                <Link to="/varices" className="dropdown-link" onClick={closeMenu}>
                  Tratamiento de Varices
                </Link>
              </li>
              <li>
                <Link to="/services" className="dropdown-link" onClick={closeMenu}>
                  Otros Servicios
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <Link to="/testimonials" className="nav-link" onClick={closeMenu}>
              Testimonios
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link" onClick={closeMenu}>
              Contacto
            </Link>
          </li>
          <li className="nav-item">
            <a 
              href="https://wa.me/529982943795" 
              className="nav-link cta-button"
              target="_blank" 
              rel="noopener noreferrer"
              onClick={closeMenu}
            >
              Agendar Cita
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;