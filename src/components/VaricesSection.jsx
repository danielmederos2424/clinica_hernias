import { FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import '../styles/components/specialties.css';
import { Link } from 'react-router-dom';

const VaricesSection = ({ isPreview }) => {
  return (
    <section className={`specialty-section varices-section ${isPreview ? 'preview' : ''}`}>
      <div className="container">
        {isPreview ? (
          <div className="section-title">
            <h2>Tratamiento de Varices</h2>
            <p className="subtitle">Soluciones modernas y efectivas para la salud vascular</p>
          </div>
        ) : (
          <div className="section-title">
            <h1>Tratamiento de Varices</h1>
            <p className="subtitle">Recupere la salud y estética de sus piernas con tratamientos avanzados</p>
          </div>
        )}

        <div className="specialty-content reverse">
          <div className="specialty-image-container">
            <img 
              src="/images/varices2.jpeg" 
              alt="Tratamiento de Varices" 
              className="specialty-detailed-image"
            />
            <div className="image-overlay">
              <div className="overlay-content">
                <h3>Beneficios de nuestros tratamientos</h3>
                <ul>
                  <li>Procedimientos mínimamente invasivos</li>
                  <li>Resultados visibles rápidamente</li>
                  <li>Sin tiempo de inactividad</li>
                  <li>Alivio de síntomas inmediato</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="specialty-text">
            <h3>¿Qué son las varices?</h3>
            <p>Las venas varicosas son venas dilatadas, retorcidas y alargadas que pueden causar molestias y problemas estéticos. Ocurren cuando las válvulas de las venas no funcionan correctamente, permitiendo que la sangre se acumule en lugar de fluir hacia el corazón.</p>
            
            <h3>Nuestras opciones de tratamiento:</h3>
            <ul className="benefits-list">
              <li><FaCheckCircle className="benefit-icon" /> Escleroterapia</li>
              <li><FaCheckCircle className="benefit-icon" /> Tratamiento con láser endovenoso</li>
              <li><FaCheckCircle className="benefit-icon" /> Flebectomía ambulatoria</li>
              <li><FaCheckCircle className="benefit-icon" /> Radiofrecuencia</li>
              <li><FaCheckCircle className="benefit-icon" /> Tratamientos para arañas vasculares</li>
            </ul>

            {isPreview && (
              <Link to="/varices" className="read-more-link">
                Ver todos los tratamientos para varices <FaArrowRight />
              </Link>
            )}
          </div>
        </div>

        {!isPreview && (
          <>
            <div className="treatment-options">
              <h3>Abordaje Integral para las Varices</h3>
              <div className="options-grid">
                <div className="option-card">
                  <h4>Evaluación Vascular Completa</h4>
                  <p>Realizamos un diagnóstico preciso utilizando ultrasonido Doppler para personalizar el tratamiento según la gravedad y tipo de varices.</p>
                </div>
                <div className="option-card">
                  <h4>Procedimientos Ambulatorios</h4>
                  <p>Nuestros tratamientos se realizan en consulta, sin necesidad de hospitalización y con retorno inmediato a las actividades cotidianas.</p>
                </div>
                <div className="option-card">
                  <h4>Tecnología de Vanguardia</h4>
                  <p>Utilizamos equipos de última generación para garantizar la efectividad y seguridad de todos nuestros procedimientos.</p>
                </div>
                <div className="option-card">
                  <h4>Enfoque Preventivo</h4>
                  <p>Además del tratamiento, ofrecemos recomendaciones personalizadas para prevenir la reaparición de varices.</p>
                </div>
              </div>
            </div>

            <div className="faq-section">
              <h3>Preguntas Frecuentes sobre Tratamiento de Varices</h3>
              <div className="faq-list">
                <div className="faq-item">
                  <h4>¿Los tratamientos para varices son dolorosos?</h4>
                  <p>La mayoría de nuestros procedimientos causan mínimas molestias y se realizan con anestesia local. Los pacientes pueden experimentar ligeras incomodidades que desaparecen rápidamente.</p>
                </div>
                <div className="faq-item">
                  <h4>¿Cuántas sesiones se necesitan para eliminar las varices?</h4>
                  <p>El número de sesiones varía según el tipo y extensión de las varices. Para arañas vasculares generalmente se necesitan 2-3 sesiones, mientras que para varices más grandes podría requerirse un único procedimiento.</p>
                </div>
                <div className="faq-item">
                  <h4>¿Puedo prevenir la aparición de nuevas varices?</h4>
                  <p>Si bien hay factores genéticos que predisponen a las varices, existen medidas que ayudan a prevenirlas como mantener un peso saludable, hacer ejercicio regularmente, evitar estar de pie por largos períodos y usar medias de compresión cuando sea necesario.</p>
                </div>
              </div>
            </div>
          </>
        )}

        <div className="cta-container">
          <a 
            href="https://wa.me/529982943795?text=Hola%20Doctor,%20me%20interesa%20información%20sobre%20tratamiento%20de%20varices."
            className="btn"
            target="_blank" 
            rel="noopener noreferrer"
          >
            Consulta sobre tratamiento de varices
          </a>
        </div>
      </div>
    </section>
  );
};

export default VaricesSection;