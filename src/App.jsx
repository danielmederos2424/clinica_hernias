import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';
import SEO from './components/SEO';
import './styles/index.css';
import './styles/mobile-enhancements.css';

// Import schema configurations
import { 
  getHomeSchema, 
  getHerniasSchema, 
  getVaricesSchema,
  getServicesSchema,
  webPageSchema,
  faqSchema
} from './utils/schema';

// Lazy load pages for code splitting and better performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Hernias = lazy(() => import('./pages/Hernias'));
const Varices = lazy(() => import('./pages/Varices'));
const Services = lazy(() => import('./pages/Services'));
const Testimonials = lazy(() => import('./pages/Testimonials'));
const Contact = lazy(() => import('./pages/Contact'));

// Loading component for suspense fallback
const PageLoader = () => (
  <div className="page-loader">
    <div className="loader-content">
      <p>Cargando...</p>
    </div>
  </div>
);

// Simple animated page wrapper
const AnimatedPage = ({ children }) => {
  useEffect(() => {
    // Add animation class when component mounts
    const page = document.querySelector('.page-wrapper');
    if (page) {
      page.classList.add('page-animation-enter');
    }
    
    // Prefetch other pages after current page loads
    const prefetchPages = () => {
      // Only prefetch pages on production
      if (import.meta.env.PROD) {
        // Start prefetching other routes after a delay
        const timer = setTimeout(() => {
          import('./pages/About');
          import('./pages/Hernias');
          import('./pages/Varices');
        }, 1000);
        
        return () => clearTimeout(timer);
      }
    };
    
    prefetchPages();
  }, []);

  return <div className="page-wrapper">{children}</div>;
};

// SEO wrapper to handle route-specific meta tags
const SEOWrapper = () => {
  const location = useLocation();
  const path = location.pathname;
  const baseUrl = 'https://clinicahernias.com'; // Removed www
  
  // Define SEO configurations for each route - memoized object
  const seoConfig = {
    '/': {
      title: 'Dr. Boris Mederos | Cirujano General en Cancún',
      description: 'Dr. Boris Mederos - Cirujano General especializado en cirugía de hernias y tratamiento de varices en Cancún, Quintana Roo. Atención médica de calidad.',
      canonical: `${baseUrl}/`,
      schema: getHomeSchema()
    },
    '/about': {
      title: 'Sobre Dr. Boris Mederos | Cirujano General en Cancún',
      description: 'Conozca al Dr. Boris Mederos, cirujano general con amplia experiencia en cirugía de hernias y tratamiento de varices en Cancún.',
      canonical: `${baseUrl}/about`,
      schema: webPageSchema
    },
    '/hernias': {
      title: 'Cirugía de Hernias en Cancún | Dr. Boris Mederos',
      description: 'Tratamiento quirúrgico especializado para hernias inguinales, umbilicales, ventrales e hiatales en Cancún. Procedimientos mínimamente invasivos.',
      canonical: `${baseUrl}/hernias`,
      schema: getHerniasSchema()
    },
    '/varices': {
      title: 'Tratamiento de Várices en Cancún | Dr. Boris Mederos',
      description: 'Tratamiento avanzado para várices y venas varicosas en Cancún. Procedimientos modernos y mínimamente invasivos para la insuficiencia venosa.',
      canonical: `${baseUrl}/varices`,
      schema: getVaricesSchema()
    },
    '/services': {
      title: 'Servicios Médicos | Dr. Boris Mederos en Cancún',
      description: 'Servicios médicos especializados en cirugía general, tratamiento de hernias y várices en Cancún. Consultas, diagnósticos y procedimientos quirúrgicos.',
      canonical: `${baseUrl}/services`,
      schema: getServicesSchema()
    },
    '/testimonials': {
      title: 'Testimonios de Pacientes | Dr. Boris Mederos en Cancún',
      description: 'Testimonios y experiencias de pacientes tratados por el Dr. Boris Mederos en cirugía de hernias y tratamiento de várices en Cancún.',
      canonical: `${baseUrl}/testimonials`,
      schema: faqSchema
    },
    '/contact': {
      title: 'Contacto | Dr. Boris Mederos en Cancún',
      description: 'Contacte al Dr. Boris Mederos para consultas, citas o información sobre tratamientos de hernias y várices en Cancún, Quintana Roo.',
      canonical: `${baseUrl}/contact`,
      schema: webPageSchema
    }
  };

  // Get the configuration for the current route, or use default
  const currentSeo = seoConfig[path] || seoConfig['/'];
  
  return <SEO {...currentSeo} />;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <SEOWrapper />
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<AnimatedPage><Home /></AnimatedPage>} />
              <Route path="/about" element={<AnimatedPage><About /></AnimatedPage>} />
              <Route path="/hernias" element={<AnimatedPage><Hernias /></AnimatedPage>} />
              <Route path="/varices" element={<AnimatedPage><Varices /></AnimatedPage>} />
              <Route path="/services" element={<AnimatedPage><Services /></AnimatedPage>} />
              <Route path="/testimonials" element={<AnimatedPage><Testimonials /></AnimatedPage>} />
              <Route path="/contact" element={<AnimatedPage><Contact /></AnimatedPage>} />
            </Routes>
          </Suspense>
        </main>
        <WhatsAppButton phoneNumber="529982943795" />
        <Footer />
      </div>
    </Router>
  );
}

export default App;