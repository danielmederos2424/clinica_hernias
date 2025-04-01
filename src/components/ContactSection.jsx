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
                  <p>Cardiocentro Cancún<br />Av. Luna 5, Mz. 15 Lt 1 Sm. 43, CP. 77506<br />Cancún, Q.R., México</p>
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
              {/* Google Maps Embed for Cardiocentro Cancun */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.9652417975073!2d-86.84665462409865!3d21.137851382758396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4c2b63eaa0c46b%3A0xc6029a332264add8!2sCardiocentro%20cancun!5e0!3m2!1sen!2sus!4v1742755258318!5m2!1sen!2sus" 
                width="100%" 
                height="350" 
                style={{ border: 0, borderRadius: 'var(--border-radius-md)' }} 
                allowFullScreen="" 
                loading="lazy"
                title="Ubicación del consultorio - Cardiocentro Cancún"
              ></iframe>
              
              <div className="location-info">
                <h4>Cómo llegar</h4>
                <p>Ubicados en una zona céntrica y accesible. Estacionamiento disponible.</p>
                <p>Cercano a estaciones de transporte público y principales vías de la ciudad.</p>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Cardiocentro+cancun" 
                  className="directions-link"
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Obtener indicaciones para llegar a Cardiocentro Cancún"
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