// Services.jsx
import ServicesSection from '../components/ServicesSection';
import HerniaSection from '../components/HerniaSection';
import VaricesSection from '../components/VaricesSection';
import ContactSection from '../components/ContactSection';
import '../styles/pages/inner-pages.css';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className="inner-page services-page">
      <div className="page-header">
        <div className="container">
          <h1>Servicios Médicos</h1>
          <div className="breadcrumbs">
            <Link to="/">Inicio</Link> / <span>Servicios</span>
          </div>
        </div>
      </div>
      
      <ServicesSection isPreview={false} />
      <div className="specialties-highlights">
        <HerniaSection isPreview={true} />
        <VaricesSection isPreview={true} />
      </div>
      <ContactSection />
    </div>
  );
};

export default Services;