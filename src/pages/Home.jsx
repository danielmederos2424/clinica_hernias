import { Link } from 'react-router-dom';
import { IoChevronForward } from 'react-icons/io5';
import { Pic, WaButton, More, SectionHead, Testimonials, ContactBand } from '../components/ui';
import { promo, stats, steps, otherServices, specialties, doctor, wa } from '../content';

const Home = () => (
  <>
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <a href={wa(promo.message)} className="promo" target="_blank" rel="noopener noreferrer">
            {promo.text} <span>Preguntar<IoChevronForward aria-hidden="true" /></span>
          </a>
          <h1 className="display">Cirugía de hernias y tratamiento de varices en Cancún.</h1>
          <p className="lead">
            Soy el Dr. Boris Mederos, cirujano general con más de 25 años de experiencia.
            Opero con técnicas mínimamente invasivas para que vuelvas pronto a tu vida.
          </p>
          <div className="actions">
            <WaButton />
            <More to="/about">Conoce al doctor</More>
          </div>
        </div>
        <div className="hero-media">
          <Pic name="Boris" w={959} h={1280} alt="Dr. Boris Mederos en su consultorio" eager />
        </div>
      </div>
    </section>

    <section className="section tight" aria-label="En cifras">
      <div className="container">
        <ul className="stats">
          {stats.map(([n, label]) => (
            <li key={label} className="reveal"><strong>{n}</strong><span>{label}</span></li>
          ))}
        </ul>
      </div>
    </section>

    <section className="section" aria-labelledby="especialidades">
      <div className="container">
        <header className="section-head reveal">
          <h2 className="title" id="especialidades">Especialidades</h2>
        </header>
        <div className="tiles">
          {Object.values(specialties).map((s) => (
            <Link key={s.path} to={s.path} className="tile reveal">
              <div className="tile-media"><Pic {...s.image} /></div>
              <div className="tile-body">
                <h3>{s.name}</h3>
                <p>{s.tile}</p>
                <span className="more">Más información<IoChevronForward aria-hidden="true" /></span>
              </div>
            </Link>
          ))}
        </div>
        <ul className="also reveal">
          {otherServices.map(([t, d]) => (
            <li key={t}><strong>{t}.</strong> {d}</li>
          ))}
        </ul>
      </div>
    </section>

    <section className="section alt" aria-labelledby="proceso">
      <div className="container">
        <SectionHead title="Así es la atención." lead="Sin sorpresas: sabes qué tienes, cuáles son tus opciones y qué esperar de la recuperación." />
        <ol className="steps">
          {steps.map(([t, d], i) => (
            <li key={t} className="reveal">
              <span className="step-n">{String(i + 1).padStart(2, '0')}</span>
              <h3>{t}</h3>
              <p>{d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>

    <section className="section" aria-labelledby="doctor">
      <div className="container split">
        <div className="split-media reveal">
          <Pic name="Boris2" w={542} h={539} alt="El Dr. Mederos durante una cirugía" />
        </div>
        <div className="split-copy reveal">
          <p className="eyebrow">{doctor.role}</p>
          <h2 className="title" id="doctor">{doctor.name}</h2>
          <p className="lead">{doctor.bio[0]}</p>
          <ul className="checks">
            <li>Universidad de Ciencias Médicas de La Habana</li>
            <li>Especialista en Cirugía General y Cardiovascular</li>
            <li>Cardiocentro Cancún y Clínica AMECAE</li>
          </ul>
          <More to="/about">Trayectoria completa</More>
        </div>
      </div>
    </section>

    <Testimonials />
    <ContactBand />
  </>
);

export default Home;
