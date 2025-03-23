import { useState, useEffect } from 'react';
import { FaQuoteLeft, FaStar, FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import '../styles/components/testimonials.css';

const TestimonialsSection = ({ isPreview }) => {
  const testimonials = [
    {
      id: 1,
      name: 'María Rodríguez',
      procedure: 'Cirugía de Hernia Inguinal',
      rating: 5,
      text: 'Mi experiencia con el Dr. fue excelente. La cirugía fue rápida y mi recuperación mucho más sencilla de lo que esperaba. Apenas tengo una pequeña cicatriz y pude volver a mis actividades normales en solo dos semanas.',
      image: '/images/placeholder-testimonial-1.jpg'
    },
    {
      id: 2,
      name: 'Carlos Mendoza',
      procedure: 'Tratamiento de Varices',
      rating: 5,
      text: 'Después de años sufriendo de dolor en las piernas y problemas estéticos por las varices, el tratamiento que recibí ha sido transformador. El Dr. fue muy claro explicando el procedimiento y los resultados han superado mis expectativas.',
      image: '/images/placeholder-testimonial-2.jpg'
    },
    {
      id: 3,
      name: 'Laura Sánchez',
      procedure: 'Cirugía de Hernia Umbilical',
      rating: 5,
      text: 'Estaba muy preocupada por la cirugía, pero el Dr. me dio mucha confianza desde la primera consulta. El procedimiento fue mínimamente invasivo y me recuperé muy rápido. Altamente recomendado.',
      image: '/images/placeholder-testimonial-3.jpg'
    },
    {
      id: 4,
      name: 'Roberto Jiménez',
      procedure: 'Escleroterapia',
      rating: 5,
      text: 'Las arañas vasculares en mis piernas me causaban mucha inseguridad. Después de tres sesiones de escleroterapia con el Dr., mis piernas lucen completamente diferentes. El procedimiento fue prácticamente indoloro.',
      image: '/images/placeholder-testimonial-4.jpg'
    }
  ];

  // Para la versión previa, mostrar solo los primeros 2 testimonios
  const displayedTestimonials = isPreview ? testimonials.slice(0, 2) : testimonials;
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleTestimonials, setVisibleTestimonials] = useState([]);
  const [testimonialsPerView, setTestimonialsPerView] = useState(2);
  
  // Determinar cuántos testimonios mostrar por pantalla según el tamaño
  const getTestimonialsPerView = () => {
    if (window.innerWidth >= 992) return 2;
    return 1;
  };
  
  // Efecto para controlar el resize de la ventana
  useEffect(() => {
    const handleResize = () => {
      setTestimonialsPerView(getTestimonialsPerView());
    };
    
    // Establecer el valor inicial
    handleResize();
    
    // Agregar listener para el cambio de tamaño
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Sin dependencias para ejecutarse solo al montar el componente
  
  // Efecto para actualizar los testimonios visibles
  useEffect(() => {
    // Función para actualizar los testimonios visibles
    const updateVisibleTestimonials = () => {
      const newVisible = [];
      for (let i = 0; i < testimonialsPerView; i++) {
        const index = (currentIndex + i) % displayedTestimonials.length;
        newVisible.push(displayedTestimonials[index]);
      }
      setVisibleTestimonials(newVisible);
    };
    
    updateVisibleTestimonials();
  }, [currentIndex, testimonialsPerView, displayedTestimonials]); // Dependencias explícitas
  
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % displayedTestimonials.length);
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex - 1 + displayedTestimonials.length) % displayedTestimonials.length);
  };
  
  // Renderizar estrellas según la calificación
  const renderStars = (rating) => {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <FaStar 
          key={i} 
          className={i < rating ? 'star-filled' : 'star-empty'} 
        />
      );
    }
    return stars;
  };

  return (
    <section className={`testimonials-section ${isPreview ? 'preview' : ''}`}>
      <div className="container">
        <div className="section-title">
          <h2>Testimonios</h2>
          <p className="subtitle">Lo que nuestros pacientes dicen sobre su experiencia</p>
        </div>

        <div className="testimonials-container">
          <button className="testimonial-nav prev" onClick={prevTestimonial} aria-label="Testimonio anterior">
            <FaArrowLeft />
          </button>
          
          <div className="testimonials-slider">
            {visibleTestimonials.map((testimonial) => (
              <div className="testimonial-card" key={testimonial.id}>
                <div className="testimonial-content">
                  <FaQuoteLeft className="quote-icon" />
                  <p className="testimonial-text">{testimonial.text}</p>
                  <div className="testimonial-rating">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
                <div className="testimonial-author">
                  <div className="author-image">
                    <img src={testimonial.image} alt={testimonial.name} />
                  </div>
                  <div className="author-info">
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.procedure}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <button className="testimonial-nav next" onClick={nextTestimonial} aria-label="Siguiente testimonio">
            <FaArrowRight />
          </button>
        </div>
        
        {isPreview && (
          <div className="view-all-container">
            <a href="/testimonials" className="btn-outline">
              Ver todos los testimonios
            </a>
          </div>
        )}
        
        {!isPreview && (
          <div className="testimonial-form-container">
            <h3>¿Has sido paciente? Comparte tu experiencia</h3>
            <p>Nos encantaría conocer tu opinión sobre tu experiencia médica. Tu testimonio puede ayudar a otros pacientes.</p>
            <a 
              href="https://wa.me/529982943795?text=Hola%20Doctor,%20me%20gustaría%20compartir%20mi%20experiencia%20como%20paciente."
              className="btn"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Compartir mi experiencia
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialsSection;