// Varices.jsx
import VaricesSection from '../components/VaricesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';
import '../styles/pages/inner-pages.css';

const Varices = () => {
  return (
    <div className="inner-page varices-page">
      <div className="page-header">
        <div className="container">
          <h1>Tratamiento de Varices</h1>
          <div className="breadcrumbs">
            <a href="/">Inicio</a> / <span>Tratamiento de Varices</span>
          </div>
        </div>
      </div>
      
      <VaricesSection isPreview={false} />
      <TestimonialsSection isPreview={true} />
      <ContactSection />
    </div>
  );
};

export default Varices;