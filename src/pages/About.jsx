import { Pic, SectionHead, ContactBand } from '../components/ui';
import { doctor } from '../content';

const About = () => (
  <>
    <section className="section">
      <div className="container split">
        <div className="split-copy">
          <p className="eyebrow">{doctor.role}</p>
          <h1 className="display">{doctor.name}</h1>
          {doctor.bio.map((p) => <p key={p} className="lead">{p}</p>)}
          <p className="fine">{doctor.licenses}</p>
        </div>
        <div className="split-media portrait">
          <Pic name="Boris" w={959} h={1280} alt="Retrato del Dr. Boris Mederos" eager />
        </div>
      </div>
    </section>

    <section className="section alt" aria-labelledby="formacion">
      <div className="container">
        <header className="section-head reveal"><h2 className="title" id="formacion">Formación</h2></header>
        <ol className="timeline">
          {doctor.credentials.map(([y, t, p]) => (
            <li key={t} className="reveal"><span>{y}</span><h3>{t}</h3>{p && <p>{p}</p>}</li>
          ))}
        </ol>
      </div>
    </section>

    <section className="section" aria-labelledby="trayectoria">
      <div className="container">
        <header className="section-head reveal"><h2 className="title" id="trayectoria">Trayectoria</h2></header>
        <ol className="timeline">
          {doctor.career.map(([y, t, p]) => (
            <li key={y} className="reveal"><span>{y}</span><h3>{t}</h3><p>{p}</p></li>
          ))}
        </ol>
      </div>
    </section>

    <section className="section alt" aria-labelledby="filosofia">
      <div className="container">
        <SectionHead title="Cómo trabajo." />
        <div className="cards">
          {doctor.values.map(([t, d]) => (
            <article key={t} className="card reveal"><h3>{t}</h3><p>{d}</p></article>
          ))}
        </div>
      </div>
    </section>

    <ContactBand />
  </>
);

export default About;
