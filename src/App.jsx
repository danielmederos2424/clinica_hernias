import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Hernias from './pages/Hernias';
import Varices from './pages/Varices';
import Services from './pages/Services';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import './styles/index.css';
import './styles/mobile-enhancements.css'; // Import our new mobile enhancements

// Simple animated page wrapper
const AnimatedPage = ({ children }) => {
  useEffect(() => {
    // Add animation class when component mounts
    const page = document.querySelector('.page-wrapper');
    if (page) {
      page.classList.add('page-animation-enter');
    }
  }, []);

  return <div className="page-wrapper">{children}</div>;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<AnimatedPage><Home /></AnimatedPage>} />
            <Route path="/about" element={<AnimatedPage><About /></AnimatedPage>} />
            <Route path="/hernias" element={<AnimatedPage><Hernias /></AnimatedPage>} />
            <Route path="/varices" element={<AnimatedPage><Varices /></AnimatedPage>} />
            <Route path="/services" element={<AnimatedPage><Services /></AnimatedPage>} />
            <Route path="/testimonials" element={<AnimatedPage><Testimonials /></AnimatedPage>} />
            <Route path="/contact" element={<AnimatedPage><Contact /></AnimatedPage>} />
          </Routes>
        </main>
        <WhatsAppButton phoneNumber="529982943795" />
        <Footer />
      </div>
    </Router>
  );
}

export default App;