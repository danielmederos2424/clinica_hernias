import { FaCalendarCheck, FaCheck } from 'react-icons/fa';
import '../styles/components/hero.css';

const Hero = ({ title, subtitle, description, ctaText, ctaLink }) => {
  return (
    <section className="hero">
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
          >
            <FaCalendarCheck className="cta-icon" />
            {ctaText}
          </a>
        </div>
        <div className="hero-image-container">
          <div className="hero-image-frame">
            <img 
              src="/images/Boris.jpg" 
              alt="Dr. Boris Mederos - Cirujano General" 
              className="hero-image"
            />
          </div>
        </div>
      </div>
      
      <div className="hero-features">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <FaCheck />
              </div>
              <div className="feature-content">
                <h3>Atención Personalizada</h3>
                <p>Cada paciente recibe un plan de tratamiento adaptado a sus necesidades específicas.</p>
              </div>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <FaCheck />
              </div>
              <div className="feature-content">
                <h3>Técnicas Avanzadas</h3>
                <p>Utilizamos los métodos más modernos para garantizar resultados óptimos.</p>
              </div>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <FaCheck />
              </div>
              <div className="feature-content">
                <h3>Recuperación Rápida</h3>
                <p>Procedimientos mínimamente invasivos que permiten una pronta reincorporación a sus actividades.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;