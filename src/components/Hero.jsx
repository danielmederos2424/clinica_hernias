import { memo } from 'react';
import { FaCalendarCheck, FaCheck, FaPercentage } from 'react-icons/fa';
import '../styles/components/hero.css';

// Memoized Feature Card Component to prevent unnecessary re-renders
const FeatureCard = memo(({ icon, title, description, isDiscount = false }) => {
  const IconComponent = icon;
  return (
  <article className={`feature-card ${isDiscount ? 'discount-feature' : ''}`}>
    <div className={`feature-icon-wrapper ${isDiscount ? 'discount-icon' : ''}`}>
      <IconComponent className="icon" />
    </div>
    <div className="feature-content">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </article>
  );
});

// Memoized Hero component for better performance
const Hero = memo(({ title, subtitle, description, ctaText, ctaLink }) => {
  // Features data to optimize rendering
  const features = [
    {
      id: 'discount',
      icon: FaPercentage,
      title: '50% de Descuento',
      description: 'Ofrecemos 50% de descuento en cirugía de hernias sobre el precio oficial. ¡Consulta ahora!',
      isDiscount: true
    },
    {
      id: 'personalized',
      icon: FaCheck,
      title: 'Atención Personalizada',
      description: 'Cada paciente recibe un plan de tratamiento adaptado a sus necesidades específicas.'
    },
    {
      id: 'advanced',
      icon: FaCheck,
      title: 'Técnicas Avanzadas',
      description: 'Utilizamos los métodos más modernos para garantizar resultados óptimos.'
    },
    {
      id: 'recovery',
      icon: FaCheck,
      title: 'Recuperación Rápida',
      description: 'Procedimientos mínimamente invasivos que permiten una pronta reincorporación a sus actividades.'
    }
  ];

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
            <picture>
              <source srcSet="/images/optimized/Boris.webp" type="image/webp" />
              <source srcSet="/images/optimized/Boris.jpg" type="image/jpeg" />
              <img 
                src="/images/optimized/Boris.jpg" 
                alt="Dr. Boris Mederos - Cirujano General especialista en cirugía de hernias y tratamiento de varices en Cancún" 
                className="hero-image"
                fetchpriority="high"
                loading="eager"
                width="400"
                height="500"
                decoding="async"
              />
            </picture>
          </div>
        </div>
      </div>
      
      <div className="hero-features">
        <div className="container">
          <h2 className="visually-hidden">Nuestros servicios destacados</h2>
          <div className="features-grid">
            {features.map(feature => (
              <FeatureCard 
                key={feature.id}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                isDiscount={feature.isDiscount}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

export default Hero;