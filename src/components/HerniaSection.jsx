import { FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import '../styles/components/specialties.css';
import { Link } from 'react-router-dom';  

const HerniaSection = ({ isPreview }) => {
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
              <li><FaCheckCircle className="benefit-icon" aria-hidden="true" /> Hernias inguinales</li>
              <li><FaCheckCircle className="benefit-icon" aria-hidden="true" /> Hernias umbilicales</li>
              <li><FaCheckCircle className="benefit-icon" aria-hidden="true" /> Hernias incisionales</li>
              <li><FaCheckCircle className="benefit-icon" aria-hidden="true" /> Hernias epigástricas</li>
              <li><FaCheckCircle className="benefit-icon" aria-hidden="true" /> Hernias hiatales</li>
            </ul>

            {isPreview && (
              <Link to="/hernias" className="read-more-link" aria-label="Más información sobre cirugía de hernias">
                Ver todos los servicios de cirugía de hernias <FaArrowRight aria-hidden="true" />
              </Link>
            )}
          </div>

          <div className="specialty-image-container">
            <img 
              src="/images/hernias.jpg" 
              alt="Ilustración de cirugía de hernias realizada por el Dr. Boris Mederos en Cancún" 
              className="specialty-detailed-image"
              loading="lazy"
              width="500"
              height="350"
            />
            <div className="image-overlay">
              <div className="overlay-content">
                <h3>Beneficios de nuestra cirugía de hernias</h3>
                <ul aria-label="Beneficios de las técnicas quirúrgicas">
                  <li>Recuperación más rápida</li>
                  <li>Menor dolor postoperatorio</li>
                  <li>Mínimas cicatrices</li>
                  <li>Menor riesgo de recurrencia</li>
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
                <article className="option-card">
                  <h4>Diagnóstico Preciso</h4>
                  <p>Utilizamos tecnología avanzada para identificar el tipo exacto de hernia y determinar el mejor enfoque quirúrgico para cada caso.</p>
                </article>
                <article className="option-card">
                  <h4>Cirugía Laparoscópica</h4>
                  <p>Realizamos procedimientos mínimamente invasivos que permiten una recuperación más rápida y menos dolorosa.</p>
                </article>
                <article className="option-card">
                  <h4>Técnicas con Malla</h4>
                  <p>Utilizamos materiales de última generación para reforzar la zona debilitada y prevenir recurrencias.</p>
                </article>
                <article className="option-card">
                  <h4>Seguimiento Personalizado</h4>
                  <p>Acompañamos a nuestros pacientes durante todo el proceso de recuperación para garantizar resultados óptimos.</p>
                </article>
              </div>
            </div>

            <section className="faq-section">
              <h3>Preguntas Frecuentes sobre Cirugía de Hernias</h3>
              <div className="faq-list">
                <details className="faq-item">
                  <summary>
                    <h4>¿Cuánto tiempo dura la recuperación después de una cirugía de hernia?</h4>
                  </summary>
                  <p>La recuperación varía según el tipo de hernia y la técnica utilizada. En general, con cirugía laparoscópica, la mayoría de los pacientes pueden retomar sus actividades normales en 1-2 semanas.</p>
                </details>
                <details className="faq-item">
                  <summary>
                    <h4>¿La cirugía de hernia requiere hospitalización?</h4>
                  </summary>
                  <p>Muchas cirugías de hernia se realizan de forma ambulatoria, lo que significa que puede regresar a casa el mismo día. En casos más complejos, podría requerirse una estancia hospitalaria de 1-2 días.</p>
                </details>
                <details className="faq-item">
                  <summary>
                    <h4>¿Las hernias pueden volver a aparecer después de la cirugía?</h4>
                  </summary>
                  <p>Con las técnicas modernas y el uso de mallas, la tasa de recurrencia es baja (menos del 5%). El seguimiento adecuado y evitar factores de riesgo reduce aún más esta posibilidad.</p>
                </details>
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
};

export default HerniaSection;