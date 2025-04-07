import { memo } from 'react';
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import '../styles/components/specialties.css';
import { Link } from 'react-router-dom';  

// Memoized FAQ Item component for performance
const FAQItem = memo(({ question, answer }) => (
  <details className="faq-item">
    <summary>
      <h4>{question}</h4>
    </summary>
    <p>{answer}</p>
  </details>
));

// Memoized Treatment Option Card
const OptionCard = memo(({ title, description }) => (
  <article className="option-card">
    <h4>{title}</h4>
    <p>{description}</p>
  </article>
));

// Main component with memoization for performance
const HerniaSection = memo(({ isPreview }) => {
  // Data for hernia types
  const herniaTypes = [
    { id: 'inguinal', text: 'Hernias inguinales' },
    { id: 'umbilical', text: 'Hernias umbilicales' },
    { id: 'incisional', text: 'Hernias incisionales' },
    { id: 'epigastric', text: 'Hernias epigástricas' },
    { id: 'hiatal', text: 'Hernias hiatales' }
  ];

  // Data for treatment options
  const treatmentOptions = [
    {
      id: 'diagnosis',
      title: 'Diagnóstico Preciso',
      description: 'Utilizamos tecnología avanzada para identificar el tipo exacto de hernia y determinar el mejor enfoque quirúrgico para cada caso.'
    },
    {
      id: 'laparoscopic',
      title: 'Cirugía Laparoscópica',
      description: 'Realizamos procedimientos mínimamente invasivos que permiten una recuperación más rápida y menos dolorosa.'
    },
    {
      id: 'mesh',
      title: 'Técnicas con Malla',
      description: 'Utilizamos materiales de última generación para reforzar la zona debilitada y prevenir recurrencias.'
    },
    {
      id: 'followup',
      title: 'Seguimiento Personalizado',
      description: 'Acompañamos a nuestros pacientes durante todo el proceso de recuperación para garantizar resultados óptimos.'
    }
  ];

  // Data for FAQs
  const faqs = [
    {
      id: 'recovery',
      question: '¿Cuánto tiempo dura la recuperación después de una cirugía de hernia?',
      answer: 'La recuperación varía según el tipo de hernia y la técnica utilizada. En general, con cirugía laparoscópica, la mayoría de los pacientes pueden retomar sus actividades normales en 1-2 semanas.'
    },
    {
      id: 'hospitalization',
      question: '¿La cirugía de hernia requiere hospitalización?',
      answer: 'Muchas cirugías de hernia se realizan de forma ambulatoria, lo que significa que puede regresar a casa el mismo día. En casos más complejos, podría requerirse una estancia hospitalaria de 1-2 días.'
    },
    {
      id: 'recurrence',
      question: '¿Las hernias pueden volver a aparecer después de la cirugía?',
      answer: 'Con las técnicas modernas y el uso de mallas, la tasa de recurrencia es baja (menos del 5%). El seguimiento adecuado y evitar factores de riesgo reduce aún más esta posibilidad.'
    }
  ];

  // Benefits list
  const benefits = [
    'Recuperación más rápida',
    'Menor dolor postoperatorio',
    'Mínimas cicatrices',
    'Menor riesgo de recurrencia'
  ];

  return (
    <section className={`specialty-section hernia-section ${isPreview ? 'preview' : ''}`} aria-labelledby={isPreview ? "hernia-preview-title" : "hernia-title"}>
      <div className="container">
        {isPreview ? (
          <header className="section-title">
            <h2 id="hernia-preview-title">Cirugía de Hernias</h2>
            <p className="subtitle">Soluciones efectivas con técnicas mínimamente invasivas</p>
          </header>
        ) : (
          <header className="section-title">
            <h1 id="hernia-title">Cirugía de Hernias</h1>
            <p className="subtitle">Tratamiento especializado y personalizado para todos los tipos de hernias</p>
          </header>
        )}

        <div className="specialty-content">
          <div className="specialty-text">
            <h3>¿Qué es una hernia?</h3>
            <p>Una hernia ocurre cuando un órgano o tejido graso empuja a través de un punto débil en el músculo o tejido circundante. Las hernias más comunes afectan el abdomen, pero también pueden aparecer en la parte superior del muslo, el ombligo y la ingle.</p>
            
            <h3>Tipos de hernias que tratamos:</h3>
            <ul className="benefits-list" aria-label="Tipos de hernias tratadas">
              {herniaTypes.map(type => (
                <li key={type.id}>
                  <FaCheckCircle className="benefit-icon" aria-hidden="true" /> {type.text}
                </li>
              ))}
            </ul>

            {isPreview && (
              <Link to="/hernias" className="read-more-link" aria-label="Más información sobre cirugía de hernias">
                Ver todos los servicios de cirugía de hernias <FaArrowRight aria-hidden="true" />
              </Link>
            )}
          </div>

          <div className="specialty-image-container">
            <picture>
              <source srcSet="/images/optimized/hernias.webp" type="image/webp" />
              <source srcSet="/images/optimized/hernias.jpg" type="image/jpeg" />
              <img 
                src="/images/optimized/hernias.jpg" 
                alt="Ilustración de cirugía de hernias realizada por el Dr. Boris Mederos en Cancún" 
                className="specialty-detailed-image"
                loading="lazy"
                width="500"
                height="350"
                decoding="async"
              />
            </picture>
            <div className="image-overlay">
              <div className="overlay-content">
                <h3>Beneficios de nuestra cirugía de hernias</h3>
                <ul aria-label="Beneficios de las técnicas quirúrgicas">
                  {benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {!isPreview && (
          <>
            <div className="treatment-options">
              <h3>Nuestro Enfoque de Tratamiento</h3>
              <div className="options-grid">
                {treatmentOptions.map(option => (
                  <OptionCard 
                    key={option.id}
                    title={option.title}
                    description={option.description}
                  />
                ))}
              </div>
            </div>

            <section className="faq-section">
              <h3>Preguntas Frecuentes sobre Cirugía de Hernias</h3>
              <div className="faq-list">
                {faqs.map(faq => (
                  <FAQItem 
                    key={faq.id}
                    question={faq.question}
                    answer={faq.answer}
                  />
                ))}
              </div>
            </section>
          </>
        )}

        <div className="cta-container">
          <a 
            href="https://wa.me/529982943795?text=Hola%20Doctor,%20me%20interesa%20información%20sobre%20cirugía%20de%20hernias."
            className="btn"
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Contactar al Dr. Boris por WhatsApp para información sobre cirugía de hernias"
          >
            Consulta sobre cirugía de hernias
          </a>
        </div>
      </div>
    </section>
  );
});

export default HerniaSection;