import { Link } from 'react-router-dom';
import { contact, wa } from '../content';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <p className="footer-note">
        La información de este sitio es orientativa y no sustituye una consulta médica.
        Cada diagnóstico y tratamiento se define de forma individual.
      </p>
      <div className="footer-cols">
        <div>
          <h2>Especialidades</h2>
          <ul>
            <li><Link to="/hernias">Cirugía de hernias</Link></li>
            <li><Link to="/varices">Tratamiento de varices</Link></li>
          </ul>
        </div>
        <div>
          <h2>Consultorio</h2>
          <ul>
            <li><Link to="/about">El doctor</Link></li>
            <li><Link to="/contact">Contacto y ubicación</Link></li>
          </ul>
        </div>
        <div>
          <h2>Contacto</h2>
          <ul>
            <li><a href={wa()} target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
            <li><a href={`tel:${contact.tel}`}>{contact.phone}</a></li>
            <li><a href={`mailto:${contact.email}`}>{contact.email}</a></li>
            <li><a href={contact.facebook} target="_blank" rel="noopener noreferrer">Facebook</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Dr. Boris Mederos · {contact.place}, {contact.address[1]}</p>
        <p>Sitio por <a href="https://www.webgraphix.online" target="_blank" rel="noopener noreferrer">WebGraphix</a></p>
      </div>
    </div>
  </footer>
);

export default Footer;
