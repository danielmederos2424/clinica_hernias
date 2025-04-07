import { FaCalendarCheck, FaCheck, FaPercentage } from 'react-icons/fa';
import '../styles/components/hero.css';

const Hero = ({ title, subtitle, description, ctaText, ctaLink }) => {
  return (
    <section className="hero" aria-label="Información principal">
      <div className="hero-overlay"></div>
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">{title}</h1>
          <h2 className="hero-subtitle">{subtitle}</h2>
          <p className="hero-description">{description}</p>
          <a 
            href={ctaLink} 
            className="hero-cta"
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Agendar una consulta con Dr. Boris Mederos"
          >
            <FaCalendarCheck className="cta-icon" aria-hidden="true" />
            {ctaText}
          </a>
        </div>
        <div className="hero-image-container">
          <div className="hero-image-frame">
            <img 
              src="/images/Boris.jpg" 
              alt="Dr. Boris Mederos - Cirujano General especialista en cirugía de hernias y tratamiento de varices en Cancún" 
              className="hero-image"
              loading="eager"
              width="400"
              height="500"
            />
          </div>
        </div>
      </div>
      
      <div className="hero-features">
        <div className="container">
          <h2 className="visually-hidden">Nuestros servicios destacados</h2>
          <div className="features-grid">
            <article className="feature-card discount-feature">
              <div className="feature-icon-wrapper discount-icon">
                <FaPercentage className="icon" />
              </div>
              <div className="feature-content">
                <h3>50% de Descuento</h3>
                <p>Ofrecemos 50% de descuento en cirugía de hernias sobre el precio oficial. ¡Consulta ahora!</p>
              </div>
            </article>
            
            <article className="feature-card">
              <div className="feature-icon-wrapper">
                <FaCheck className="icon" />
              </div>
              <div className="feature-content">
                <h3>Atención Personalizada</h3>
                <p>Cada paciente recibe un plan de tratamiento adaptado a sus necesidades específicas.</p>
              </div>
            </article>
            
            <article className="feature-card">
              <div className="feature-icon-wrapper">
                <FaCheck className="icon" />
              </div>
              <div className="feature-content">
                <h3>Técnicas Avanzadas</h3>
                <p>Utilizamos los métodos más modernos para garantizar resultados óptimos.</p>
              </div>
            </article>
            
            <article className="feature-card">
              <div className="feature-icon-wrapper">
                <FaCheck className="icon" />
              </div>
              <div className="feature-content">
                <h3>Recuperación Rápida</h3>
                <p>Procedimientos mínimamente invasivos que permiten una pronta reincorporación a sus actividades.</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;