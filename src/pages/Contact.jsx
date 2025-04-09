// Contact.jsx
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaCalendarAlt, FaWhatsapp } from 'react-icons/fa';
import ContactSection from '../components/ContactSection';
import SEO from '../components/SEO';
import '../styles/pages/inner-pages.css';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className="inner-page contact-page">
      <SEO 
        title="Contacto | Dr. Boris Mederos en Cancún"
        description="Contacte al Dr. Boris Mederos para consultas, citas o información sobre tratamientos de hernias y várices en Cancún, Quintana Roo."
        canonical="https://clinicahernias.com/contact"
      />
      
      <div className="page-header">
        <div className="container">
          <h1>Contacto</h1>
          <div className="breadcrumbs">
            <Link to="/">Inicio</Link> / <span>Contacto</span>
          </div>
        </div>
      </div>
      
      <ContactSection />
      
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>¿Necesitas una consulta?</h2>
            <p>No dudes en contactarme para agendar una cita o resolver cualquier duda sobre tus síntomas o tratamientos.</p>
            <div className="cta-buttons">
              <a 
                href="https://wa.me/529982943795?text=Hola%20Doctor,%20me%20gustaría%20agendar%20una%20cita." 
                className="btn"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="btn-icon" /> Agendar por WhatsApp
              </a>
              <a href="tel:+5512345678" className="btn-outline">
                <FaPhone className="btn-icon" /> Llamar ahora
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;