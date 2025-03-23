import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaWhatsapp, FaCalendarAlt } from 'react-icons/fa';
import '../styles/components/contact.css';

const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="container">
        <div className="section-title">
          <h2>Contacto</h2>
          <p className="subtitle">Estamos aquí para responder a todas tus dudas</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Información de Contacto</h3>
            <p>No dudes en ponerte en contacto para agendar una cita o resolver cualquier duda sobre nuestros servicios.</p>
            
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="contact-text">
                  <h4>Dirección</h4>
                  <p>Av. Luna 5, Mz. 15 Lt 1 Sm. 43<br />Cancún. México CP. 77506</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <FaPhone />
                </div>
                <div className="contact-text">
                  <h4>Teléfono</h4>
                  <p>+52 998 294 3795</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <FaEnvelope />
                </div>
                <div className="contact-text">
                  <h4>Email</h4>
                  <p>borismederos@gmail.com</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <FaCalendarAlt />
                </div>
                <div className="contact-text">
                  <h4>Horario de Atención</h4>
                  <p>Lunes a Viernes: 9:00 AM - 6:00 PM<br />Sábados: 9:00 AM - 1:00 PM</p>
                </div>
              </div>
            </div>
            
            <div className="appointment-cta">
              <h3>¿Necesitas una cita?</h3>
              <p>La forma más rápida de agendar es por WhatsApp. Te responderemos a la brevedad.</p>
              <a 
                href="https://wa.me/529982943795?text=Hola%20Doctor,%20me%20gustaría%20agendar%20una%20cita."
                className="btn whatsapp-btn"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="btn-icon" />
                Agendar por WhatsApp
              </a>
            </div>
          </div>
          
          <div className="contact-map">
            <h3>Ubicación</h3>
            <div className="map-container">
              {/* Aquí irá el mapa de Google Maps cuando tengas la API */}
              <div className="map-placeholder">
                <p>Mapa de ubicación</p>
                <small>Se integrará con Google Maps</small>
              </div>
              
              <div className="location-info">
                <h4>Cómo llegar</h4>
                <p>Ubicados en una zona céntrica y accesible. Estacionamiento disponible.</p>
                <p>Cercano a estaciones de transporte público y principales vías de la ciudad.</p>
                <a 
                  href="https://maps.google.com" 
                  className="directions-link"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Obtener indicaciones
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;