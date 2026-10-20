import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import SEO from './components/SEO';
import './styles/index.css';

import {
  getHomeSchema,
  getHerniasSchema,
  getVaricesSchema,
  webPageSchema,
} from './utils/schema';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Specialty = lazy(() => import('./pages/Specialty'));
const Contact = lazy(() => import('./pages/Contact'));

const baseUrl = 'https://clinicahernias.com';

const seoConfig = {
  '/': {
    title: 'Dr. Boris Mederos | Cirujano General en Cancún',
    description: 'Cirugía de hernias y tratamiento de varices en Cancún con el Dr. Boris Mederos, cirujano general con más de 25 años de experiencia.',
    schema: getHomeSchema(),
  },
  '/about': {
    title: 'Dr. Boris Mederos | Formación y trayectoria',
    description: 'Formación, certificaciones y trayectoria del Dr. Boris Mederos, cirujano general y cardiovascular en Cardiocentro Cancún.',
    schema: webPageSchema,
  },
  '/hernias': {
    title: 'Cirugía de Hernias en Cancún | Dr. Boris Mederos',
    description: 'Reparación de hernias inguinales, umbilicales, incisionales, epigástricas e hiatales en Cancún. Cirugía laparoscópica y con malla, muchas veces ambulatoria.',
    schema: getHerniasSchema(),
  },
  '/varices': {
    title: 'Tratamiento de Varices en Cancún | Dr. Boris Mederos',
    description: 'Escleroterapia, láser endovenoso, radiofrecuencia y flebectomía en Cancún. Tratamientos ambulatorios para varices y arañas vasculares.',
    schema: getVaricesSchema(),
  },
  '/contact': {
    title: 'Contacto | Dr. Boris Mederos en Cancún',
    description: 'Agenda tu consulta con el Dr. Boris Mederos por WhatsApp o teléfono. Cardiocentro Cancún, Av. Luna 5, Sm. 43, Cancún, Q. R.',
    schema: webPageSchema,
  },
};

const SEOWrapper = () => {
  const { pathname } = useLocation();
  const seo = seoConfig[pathname] || seoConfig['/'];
  return <SEO {...seo} canonical={`${baseUrl}${seoConfig[pathname] ? pathname : '/'}`} />;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <SEOWrapper />
      <Navbar />
      <main>
        <Suspense fallback={<div className="page-loading" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/hernias" element={<Specialty id="hernias" key="hernias" />} />
            <Route path="/varices" element={<Specialty id="varices" key="varices" />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Navigate to="/" replace />} />
            <Route path="/testimonials" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
