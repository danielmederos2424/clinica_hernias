// Hernias.jsx
import HerniaSection from '../components/HerniaSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';
import '../styles/pages/inner-pages.css';

const Hernias = () => {
  return (
    <div className="inner-page hernias-page">
      <div className="page-header">
        <div className="container">
          <h1>Cirugía de Hernias</h1>
          <div className="breadcrumbs">
            <a href="/">Inicio</a> / <span>Cirugía de Hernias</span>
          </div>
        </div>
      </div>
      
      <HerniaSection isPreview={false} />
      <TestimonialsSection isPreview={true} />
      <ContactSection />
    </div>
  );
};

export default Hernias;