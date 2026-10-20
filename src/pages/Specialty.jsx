import { IoAdd } from 'react-icons/io5';
import { Pic, WaButton, SectionHead, Testimonials, ContactBand } from '../components/ui';
import { specialties, promo } from '../content';

const Specialty = ({ id }) => {
  const s = specialties[id];

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">{s.short}</p>
          <h1 className="display">{s.name}.</h1>
          <p className="lead">{s.lead}</p>
          <div className="actions center">
            <WaButton message={s.message} />
          </div>
          {id === 'hernias' && <p className="promo-note">{promo.text}</p>}
        </div>
      </section>

      <section className="section" aria-labelledby="que-es">
        <div className="container split">
          <div className="split-copy reveal">
            <h2 className="title" id="que-es">{s.what.title}</h2>
            {s.what.text.map((p) => <p key={p} className="lead">{p}</p>)}
          </div>
          <div className="split-media figure reveal">
            <Pic {...s.what.image} />
          </div>
        </div>
      </section>

      <section className="section alt" aria-labelledby="lista">
        <div className="container">
          <header className="section-head reveal"><h2 className="title" id="lista">{s.listTitle}</h2></header>
          <dl className="defs">
            {s.list.map(([t, d]) => (
              <div key={t} className="reveal"><dt>{t}</dt><dd>{d}</dd></div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section" aria-labelledby="enfoque">
        <div className="container">
          <SectionHead title={s.approachTitle} />
          <div className="cards">
            {s.approach.map(([t, d]) => (
              <article key={t} className="card reveal"><h3>{t}</h3><p>{d}</p></article>
            ))}
          </div>
          <ul className="checks inline reveal" aria-label="Beneficios">
            {s.benefits.map((b) => <li key={b}>{b}</li>)}
          </ul>
        </div>
      </section>

      <section className="section alt" aria-labelledby="faq">
        <div className="container narrow">
          <header className="section-head reveal"><h2 className="title" id="faq">Preguntas frecuentes</h2></header>
          <div className="faq">
            {s.faq.map(([q, a]) => (
              <details key={q}>
                <summary>{q}<IoAdd aria-hidden="true" /></summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {id === 'hernias' && <Testimonials area="hernias" />}
      <ContactBand message={s.message} />
    </>
  );
};

export default Specialty;
