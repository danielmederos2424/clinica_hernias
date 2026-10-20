import { IoLogoWhatsapp, IoCallOutline, IoMailOutline, IoLocationOutline, IoTimeOutline } from 'react-icons/io5';
import { contact, wa } from '../content';

const Contact = () => (
  <>
    <section className="page-hero">
      <div className="container">
        <h1 className="display">Contacto.</h1>
        <p className="lead">Escríbenos por WhatsApp para agendar o resolver dudas. Te respondemos a la brevedad.</p>
      </div>
    </section>

    <section className="section tight-top">
      <div className="container contact-grid">
        <ul className="contact-list">
          <li>
            <IoLogoWhatsapp aria-hidden="true" />
            <div><h2>WhatsApp</h2><a href={wa()} target="_blank" rel="noopener noreferrer">Enviar mensaje</a></div>
          </li>
          <li>
            <IoCallOutline aria-hidden="true" />
            <div><h2>Teléfono</h2><a href={`tel:${contact.tel}`}>{contact.phone}</a></div>
          </li>
          <li>
            <IoMailOutline aria-hidden="true" />
            <div><h2>Correo</h2><a href={`mailto:${contact.email}`}>{contact.email}</a></div>
          </li>
          <li>
            <IoLocationOutline aria-hidden="true" />
            <div>
              <h2>Dirección</h2>
              <p>{contact.place}<br />{contact.address.join(', ')}</p>
              <a href={contact.maps} target="_blank" rel="noopener noreferrer">Cómo llegar</a>
            </div>
          </li>
          <li>
            <IoTimeOutline aria-hidden="true" />
            <div>
              <h2>Horario</h2>
              {contact.hours.map(([d, h]) => <p key={d}>{d}: {h}</p>)}
            </div>
          </li>
        </ul>
        <div className="map">
          <iframe
            src={contact.mapsEmbed}
            title={`Mapa: ${contact.place}`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  </>
);

export default Contact;
