import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { IoLogoWhatsapp, IoChevronBack, IoChevronForward } from 'react-icons/io5';
import { contact, wa, testimonials } from '../content';

export const Pic = ({ name, ext = 'jpg', w, h, alt, className, eager }) => (
  <picture>
    <source srcSet={`/images/optimized/${name}.webp`} type="image/webp" />
    <img
      src={`/images/optimized/${name}.${ext}`}
      alt={alt}
      width={w}
      height={h}
      className={className}
      loading={eager ? 'eager' : 'lazy'}
      fetchPriority={eager ? 'high' : undefined}
      decoding="async"
    />
  </picture>
);

export const WaButton = ({ message, children = 'Agendar por WhatsApp', className = 'btn' }) => (
  <a href={wa(message)} className={className} target="_blank" rel="noopener noreferrer">
    <IoLogoWhatsapp aria-hidden="true" /> {children}
  </a>
);

export const More = ({ to, children }) => (
  <Link to={to} className="more">{children}<IoChevronForward aria-hidden="true" /></Link>
);

export const SectionHead = ({ eyebrow, title, lead, center }) => (
  <header className={`section-head reveal${center ? ' center' : ''}`}>
    {eyebrow && <p className="eyebrow">{eyebrow}</p>}
    <h2 className="title">{title}</h2>
    {lead && <p className="lead">{lead}</p>}
  </header>
);

export const Testimonials = ({ area }) => {
  const ref = useRef(null);
  const items = area ? testimonials.filter((t) => t.area === area) : testimonials;
  const scroll = (dir) => {
    const el = ref.current;
    el.scrollBy({ left: dir * el.firstElementChild.offsetWidth, behavior: 'smooth' });
  };

  return (
    <section className="section alt" aria-labelledby="testimonios">
      <div className="container">
        <header className="section-head row reveal">
          <h2 className="title" id="testimonios">Lo que dicen los pacientes</h2>
          <div className="scroller-nav">
            <button type="button" onClick={() => scroll(-1)} aria-label="Anterior"><IoChevronBack /></button>
            <button type="button" onClick={() => scroll(1)} aria-label="Siguiente"><IoChevronForward /></button>
          </div>
        </header>
      </div>
      <ul className="scroller" ref={ref}>
        {items.map((t) => (
          <li key={t.name} className="quote">
            <blockquote>{t.text}</blockquote>
            <p className="quote-by">{t.name} · <span>{t.area === 'hernias' ? 'Cirugía de hernia' : 'Tratamiento de varices'}</span></p>
          </li>
        ))}
      </ul>
      <div className="container">
        <p className="footnote">Opiniones tomadas de nuestra página de Facebook y de mensajes directos. Mostramos solo el nombre de pila para proteger la privacidad de los pacientes.</p>
      </div>
    </section>
  );
};

export const ContactBand = ({ message, title = 'Agenda tu consulta.' }) => (
  <section className="section" aria-labelledby="agenda">
    <div className="container contact-band">
      <div className="reveal">
        <h2 className="title" id="agenda">{title}</h2>
        <p className="lead">La forma más rápida es por WhatsApp. Te respondemos a la brevedad.</p>
        <div className="actions">
          <WaButton message={message} />
          <a href={`tel:${contact.tel}`} className="btn secondary">Llamar al {contact.phone}</a>
        </div>
      </div>
      <dl className="facts reveal">
        <div>
          <dt>Dirección</dt>
          <dd>{contact.place}<br />{contact.address.join(', ')}</dd>
          <dd><a href={contact.maps} target="_blank" rel="noopener noreferrer" className="more">Cómo llegar<IoChevronForward aria-hidden="true" /></a></dd>
        </div>
        <div>
          <dt>Horario</dt>
          {contact.hours.map(([d, h]) => <dd key={d}>{d}: {h}</dd>)}
        </div>
      </dl>
    </div>
  </section>
);
