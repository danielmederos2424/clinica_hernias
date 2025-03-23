// Testimonials.jsx
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';
import '../styles/pages/inner-pages.css';

const Testimonials = () => {
  return (
    <div className="inner-page testimonials-page">
      <div className="page-header">
        <div className="container">
          <h1>Testimonios</h1>
          <div className="breadcrumbs">
            <a href="/">Inicio</a> / <span>Testimonios</span>
          </div>
        </div>
      </div>
      
      <TestimonialsSection isPreview={false} />
      <ContactSection />
    </div>
  );
};

export default Testimonials;