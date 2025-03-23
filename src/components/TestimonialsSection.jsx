import { useState, useEffect, useMemo, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaQuoteLeft, FaStar, FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import '../styles/components/testimonials.css';

const TestimonialsSection = ({ isPreview }) => {
  // Use useMemo for testimonials array to keep reference stable
  const testimonials = useMemo(() => [
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
  ], []);

  // Use useMemo to prevent recreation of this array on every render
  const displayedTestimonials = useMemo(() => {
    return isPreview ? testimonials.slice(0, 2) : testimonials;
  }, [isPreview, testimonials]);
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleTestimonials, setVisibleTestimonials] = useState([]);
  const [testimonialsPerView, setTestimonialsPerView] = useState(2);
  const [isAnimating, setIsAnimating] = useState(false);
  const sliderRef = useRef(null);
  
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
    if (isAnimating) return;
    
    setIsAnimating(true);
    
    // Apply exit animation
    if (sliderRef.current) {
      const cards = sliderRef.current.querySelectorAll('.testimonial-card');
      cards.forEach(card => {
        card.classList.add('testimonial-slide-out');
      });
    }
    
    // Wait for exit animation to complete
    setTimeout(() => {
      setCurrentIndex((prevIndex) => 
        (prevIndex + 1) % displayedTestimonials.length);
      
      // Remove exit animation class and add entry animation after state update
      setTimeout(() => {
        if (sliderRef.current) {
          const cards = sliderRef.current.querySelectorAll('.testimonial-card');
          cards.forEach(card => {
            card.classList.remove('testimonial-slide-out');
            card.classList.add('testimonial-slide-in');
          });
          
          // Remove entry animation class after it completes
          setTimeout(() => {
            cards.forEach(card => {
              card.classList.remove('testimonial-slide-in');
            });
            setIsAnimating(false);
          }, 500);
        }
      }, 50);
    }, 400);
  };
  
  const prevTestimonial = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    
    // Apply exit animation
    if (sliderRef.current) {
      const cards = sliderRef.current.querySelectorAll('.testimonial-card');
      cards.forEach(card => {
        card.classList.add('testimonial-slide-out');
      });
    }
    
    // Wait for exit animation to complete
    setTimeout(() => {
      setCurrentIndex((prevIndex) => 
        (prevIndex - 1 + displayedTestimonials.length) % displayedTestimonials.length);
      
      // Remove exit animation class and add entry animation after state update
      setTimeout(() => {
        if (sliderRef.current) {
          const cards = sliderRef.current.querySelectorAll('.testimonial-card');
          cards.forEach(card => {
            card.classList.remove('testimonial-slide-out');
            card.classList.add('testimonial-slide-in');
          });
          
          // Remove entry animation class after it completes
          setTimeout(() => {
            cards.forEach(card => {
              card.classList.remove('testimonial-slide-in');
            });
            setIsAnimating(false);
          }, 500);
        }
      }, 50);
    }, 400);
  };
  
  // Touch swipe functionality for mobile
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  
  // Required minimum distance between touch start and touch end to be detected as swipe
  const minSwipeDistance = 50;
  
  const onTouchStart = (e) => {
    setTouchEnd(null); // Reset values
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      nextTestimonial();
    } else if (isRightSwipe) {
      prevTestimonial();
    }
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
          <button 
            className="testimonial-nav prev" 
            onClick={prevTestimonial} 
            aria-label="Testimonio anterior"
            disabled={isAnimating}
          >
            <FaArrowLeft />
          </button>
          
          <div 
            className="testimonials-slider" 
            ref={sliderRef}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
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
          
          <button 
            className="testimonial-nav next" 
            onClick={nextTestimonial} 
            aria-label="Siguiente testimonio"
            disabled={isAnimating}
          >
            <FaArrowRight />
          </button>
        </div>
        
        {isPreview && (
          <div className="view-all-container">
            <Link to="/testimonials" className="btn-outline">
              Ver todos los testimonios
            </Link>
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