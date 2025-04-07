import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import HerniaSection from '../components/HerniaSection';
import VaricesSection from '../components/VaricesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';
import '../styles/components/home.css';

const Home = () => {
  return (
    <div className="home-page">
      <Hero 
        title="Dr. Boris Mederos"
        subtitle="Especialista en Cirugía de Hernias y Tratamiento de Varices"
        description="Más de 25 años de experiencia ofreciendo soluciones médicas avanzadas y atención personalizada."
        ctaText="Agendar Consulta"
        ctaLink="https://wa.me/529982943795?text=Hola%20Doctor,%20me%20gustaría%20agendar%20una%20cita."
      />
      
      <div className="specialties-preview">
        <div className="container">
          <div className="specialties-grid">
            <div className="specialty-card">
              <picture>
                <source srcSet="/images/optimized/hernia.webp" type="image/webp" />
                <source srcSet="/images/optimized/hernia.jpg" type="image/jpeg" />
                <img 
                  src="/images/optimized/hernia.jpg" 
                  alt="Cirugía de Hernias" 
                  className="specialty-image"
                  loading="eager"
                  width="300"
                  height="200"
                  decoding="async"
                />
              </picture>
              <h3>Cirugía de Hernias</h3>
              <p>Tratamiento especializado con técnicas mínimamente invasivas para reducir el tiempo de recuperación.</p>
              <Link to="/hernias" className="btn-outline">Conocer más</Link>
            </div>
            
            <div className="specialty-card">
              <picture>
                <source srcSet="/images/optimized/varices.webp" type="image/webp" />
                <source srcSet="/images/optimized/varices.jpeg" type="image/jpeg" />
                <img 
                  src="/images/optimized/varices.jpeg" 
                  alt="Tratamiento de Varices" 
                  className="specialty-image"
                  loading="eager" 
                  width="300"
                  height="200"
                  decoding="async"
                />
              </picture>
              <h3>Tratamiento de Varices</h3>
              <p>Soluciones efectivas y modernas para mejorar la circulación y eliminar las venas varicosas.</p>
              <Link to="/varices" className="btn-outline">Conocer más</Link>
            </div>
          </div>
        </div>
      </div>
      
      <AboutSection isPreview={true} />
      <ServicesSection isPreview={true} />
      <TestimonialsSection isPreview={true} />
      <ContactSection />
    </div>
  );
};

export default Home;