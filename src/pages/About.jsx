// About.jsx
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import ContactSection from '../components/ContactSection';
import '../styles/pages/inner-pages.css';

const About = () => {
  return (
    <div className="inner-page about-page">
      <div className="page-header">
        <div className="container">
          <h1>Sobre Mí</h1>
          <div className="breadcrumbs">
            <a href="/">Inicio</a> / <span>Sobre Mí</span>
          </div>
        </div>
      </div>
      
      <AboutSection isPreview={false} />
      <ServicesSection isPreview={true} />
      <ContactSection />
    </div>
  );
};

export default About;