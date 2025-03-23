import { FaArrowRight } from 'react-icons/fa';
import '../styles/components/services.css';
import { Link } from 'react-router-dom';

const ServicesSection = ({ isPreview }) => {
  const services = [
    {
      id: 1,
      title: 'Cirugía de Hernias',
      description: 'Tratamiento quirúrgico de hernias inguinales, umbilicales, incisionales y más, utilizando técnicas mínimamente invasivas para una recuperación más rápida.',
      image: '/images/hernias2.jpg',
      link: '/hernias'
    },
    {
      id: 2,
      title: 'Tratamiento de Varices',
      description: 'Soluciones efectivas para venas varicosas y arañas vasculares mediante diferentes técnicas como escleroterapia, láser y radiofrecuencia.',
      image: '/images/varices3.jpg',
      link: '/varices'
    },
    {
      id: 3,
      title: 'Cirugía General',
      description: 'Procedimientos quirúrgicos para diversas condiciones como vesícula biliar, apéndice, tiroides y más.',
      image: '/images/cirugia.jpg',
      link: '/services'
    },
    {
      id: 4,
      title: 'Consulta y Diagnóstico',
      description: 'Evaluación médica completa para determinar la mejor opción de tratamiento para su condición.',
      image: '/images/consulta.jpg',
      link: '/services'
    }
  ];

  // Si es una vista previa, solo mostrar 3 servicios
  const displayedServices = isPreview ? services.slice(0, 3) : services;

  return (
    <section className={`services-section ${isPreview ? 'preview' : ''}`}>
      <div className="container">
        <div className="section-title">
          <h2>Servicios Médicos</h2>
          <p className="subtitle">Soluciones médicas avanzadas con un enfoque centrado en el paciente</p>
        </div>

        <div className="services-grid">
          {displayedServices.map(service => (
            <div className="service-card" key={service.id}>
              <div className="service-image-container">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="service-image"
                />
              </div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href={service.link} className="service-link">
                  Ver más <FaArrowRight className="link-icon" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {isPreview && (
          <div className="view-all-container">
            <Link to="/services" className="btn-outline">
              Ver todos los servicios
            </Link>
          </div>
        )}

        {!isPreview && (
          <div className="service-process">
            <h3>Nuestro Proceso de Atención</h3>
            <div className="process-steps">
              <div className="process-step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4>Consulta Inicial</h4>
                  <p>Evaluación detallada de su condición médica y antecedentes para establecer un diagnóstico preciso.</p>
                </div>
              </div>
              
              <div className="process-step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4>Diagnóstico y Plan</h4>
                  <p>Desarrollo de un plan de tratamiento personalizado basado en sus necesidades específicas.</p>
                </div>
              </div>
              
              <div className="process-step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h4>Tratamiento</h4>
                  <p>Implementación del tratamiento utilizando técnicas modernas y mínimamente invasivas.</p>
                </div>
              </div>
              
              <div className="process-step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h4>Seguimiento</h4>
                  <p>Acompañamiento durante todo el proceso de recuperación para garantizar resultados óptimos.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="cta-container">
          <a 
            href="https://wa.me/529982943795?text=Hola%20Doctor,%20me%20gustaría%20conocer%20más%20sobre%20sus%20servicios."
            className="btn"
            target="_blank" 
            rel="noopener noreferrer"
          >
            Consultar sobre servicios
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;