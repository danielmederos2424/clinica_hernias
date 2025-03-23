import { Link } from 'react-router-dom';
import { FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import '../styles/components/footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <span className="logo-text">Dr. Boris Mederos</span>
              <span className="logo-subtitle">Cirujano General</span>
            </Link>
            <p className="footer-description">
              Especialista en cirugía de hernias y tratamiento de varices, 
              comprometido con brindar atención médica de calidad con un enfoque humano.
            </p>
            <div className="footer-contact">
              <a 
                href="https://wa.me/529982943795" 
                className="footer-contact-item"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="footer-icon" />
                WhatsApp
              </a>
              <a href="tel:+529982943795" className="footer-contact-item">
                <FaPhone className="footer-icon" />
                +52 998 294 3795
              </a>
            </div>
          </div>
          
          <div className="footer-links">
            <h3>Enlaces Rápidos</h3>
            <ul>
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/about">Sobre Mí</Link></li>
              <li><Link to="/hernias">Cirugía de Hernias</Link></li>
              <li><Link to="/varices">Tratamiento de Varices</Link></li>
              <li><Link to="/services">Otros Servicios</Link></li>
              <li><Link to="/testimonials">Testimonios</Link></li>
              <li><Link to="/contact">Contacto</Link></li>
            </ul>
          </div>
          
          <div className="footer-info">
            <h3>Información</h3>
            <div className="info-item">
              <FaMapMarkerAlt className="info-icon" />
              <p>Av. Luna 5, Mz. 15 Lt 1 Sm. 43<br />Cancún. México CP. 77506</p>
            </div>
            <div className="info-item">
              <FaEnvelope className="info-icon" />
              <p>borismederos@gmail.com</p>
            </div>
            <div className="appointment-hours">
              <h4>Horario de Consulta</h4>
              <p>Lunes a Viernes: 9:00 AM - 6:00 PM</p>
              <p>Sábados: 9:00 AM - 1:00 PM</p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">
            &copy; {currentYear} Dr. Boris Mederos. Todos los derechos reservados.
          </p>
          <div className="legal-links">
            <span className="spam">sitio web desarrollado por </span>
            <a href="https://www.webgraphix.online" target="_blank" rel="noopener noreferrer">WebGraphix</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;