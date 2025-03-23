import { FaWhatsapp } from 'react-icons/fa';
import '../styles/components/whatsapp-button.css';

const WhatsAppButton = ({ phoneNumber }) => {
  const whatsappURL = `https://wa.me/${phoneNumber}?text=Hola%20Doctor,%20me%20gustaría%20agendar%20una%20cita.`;

  return (
    <a 
      href={whatsappURL} 
      className="whatsapp-button"
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
    >
      <FaWhatsapp className="whatsapp-icon" />
      <span className="whatsapp-tooltip">¡Agenda tu cita ahora!</span>
    </a>
  );
};

export default WhatsAppButton;