import { FaMedal, FaHospital, FaUserMd, FaArrowRight } from 'react-icons/fa';
import '../styles/components/about.css';
import { Link } from 'react-router-dom';

const AboutSection = ({ isPreview }) => {
  return (
    <section className={`about-section ${isPreview ? 'preview' : ''}`}>
      <div className="container">
        <div className="section-title">
          <h2>Sobre Mí</h2>
          <p className="subtitle">Dedicado a brindar la mejor atención médica con un enfoque humano</p>
        </div>

        <div className="about-content">
          <div className="about-image-container">
            <img 
              src="/images/Boris2.jpg" 
              alt="Dr. Boris Mederos - Cirujano General" 
              className="about-image"
            />
            <div className="about-image-badge">
              <span>+25</span>
              <small>Años de Experiencia</small>
            </div>
          </div>

          <div className="about-text">
            <h3>Dr. Boris Mederos</h3>
            <h4>Cirujano General Especialista en Hernias y Varices</h4>

            <p>CP: 10132762 - CE: 14420078</p>

            <p>Soy un cirujano general con más de 25 años de experiencia, especializado en el tratamiento de hernias y varices. Mi compromiso es ofrecer soluciones médicas avanzadas con un enfoque centrado en el paciente, garantizando resultados óptimos y una recuperación rápida.</p>
            
            {!isPreview && (
              <p>Me dedico a brindar atención médica personalizada, utilizando las técnicas más modernas y mínimamente invasivas para asegurar el bienestar de mis pacientes. Mi filosofía de trabajo se basa en la empatía, la transparencia y la excelencia médica.</p>
            )}
            
            <div className="credentials">
              <div className="credential">
                <FaUserMd className="credential-icon" />
                <div>
                  <h5>Formación</h5>
                  <p>Universidad de Ciencias Médicas de La Habana, promoción del año 1994 </p>
                </div>
              </div>
              
              <div className="credential">
                <FaMedal className="credential-icon" />
                <div>
                  <h5>Certificaciones</h5>
                  <p>Médico general (1994)</p>
                  <p>Especialista en Cirugía General (2000) </p>
                  <p>Máster en Urgencias Médicas (2007) </p>
                  <p>Especialista en Cirugía Cardiovascular (2010) </p>
                </div>
              </div>
              
              <div className="credential">
                <FaHospital className="credential-icon" />
                <div>
                  <h5>Hospitales</h5>
                  <p>Clínica AMECAE</p>
                  <p>Cardiocentro Cancún</p>
                </div>
              </div>
            </div>
            
            {isPreview && (
              <Link to="/about" className="read-more-link">
                Conocer más sobre mi trayectoria <FaArrowRight />
              </Link>
            )}
          </div>
        </div>
        
        {!isPreview && (
          <>
            <div className="education-timeline">
              <h3>Trayectoria Profesional</h3>
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h4>2001 - 2006</h4>
                    <h5>Especialista Cirugía</h5>
                    <p>Hospital "Dr. Luis Diaz Soto" - La Habana, Cuba</p>
                  </div>
                </div>
                
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h4>2006 - 2013</h4>
                    <h5>Cirujano General y Cardiovascular</h5>
                    <p>Instituto de Cardiología y Cirugía Cardiovascular - La Habana, Cuba</p>
                  </div>
                </div>
                
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h4>2014 - 2015</h4>
                    <h5>Especialista en Cirugía Torácica y Cardiovascular</h5>
                    <p>Yemen International Hospital - Yemen</p>
                  </div>
                </div>
                
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h4>2015 - 2016</h4>
                    <h5>Cirujano General y Cardiovascular</h5>
                    <p>Fundación Hernández Zurita - Veracruz, México</p>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h4>2016 - Actualidad</h4>
                    <h5>Cirujano General y Cardiovascular</h5>
                    <p>Cardiocentro Cancún y Clínica AMECAE - Cancún, México</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="values-section">
              <h3>Mi Filosofía de Trabajo</h3>
              <div className="values-grid">
                <div className="value-card">
                  <h4>Atención Personalizada</h4>
                  <p>Cada paciente es único y recibe un tratamiento adaptado a sus necesidades específicas.</p>
                </div>
                
                <div className="value-card">
                  <h4>Actualización Constante</h4>
                  <p>Me mantengo al día con los últimos avances médicos para ofrecer las mejores opciones de tratamiento.</p>
                </div>
                
                <div className="value-card">
                  <h4>Transparencia</h4>
                  <p>Información clara y honesta sobre diagnósticos, opciones de tratamiento y expectativas de recuperación.</p>
                </div>
                
                <div className="value-card">
                  <h4>Acompañamiento</h4>
                  <p>Seguimiento cercano durante todo el proceso, desde la consulta inicial hasta la recuperación completa.</p>
                </div>
              </div>
            </div>
          </>
        )}
        
        <div className="cta-container">
          <a 
            href="https://wa.me/529982943795?text=Hola%20Doctor,%20me%20gustaría%20agendar%20una%20cita."
            className="btn"
            target="_blank" 
            rel="noopener noreferrer"
          >
            Agendar una consulta
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;