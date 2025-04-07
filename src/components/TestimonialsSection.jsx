import { useState, useEffect, useMemo, useRef, memo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FaQuoteLeft, FaStar, FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import '../styles/components/testimonials.css';

// Memoized components for better performance
const TestimonialCard = memo(({ testimonial }) => {
  // Renderizar estrellas según la calificación
  const renderStars = useCallback((rating) => {
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
  }, []);

  return (
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
          <picture>
            <source srcSet={testimonial.image.replace('.jpg', '.webp').replace('/images/', '/images/optimized/')} type="image/webp" />
            <source srcSet={testimonial.image.replace('/images/', '/images/optimized/')} type={testimonial.image.endsWith('.jpg') ? 'image/jpeg' : 'image/png'} />
            <img 
              src={testimonial.image.replace('/images/', '/images/optimized/')}
              alt={testimonial.name}
              loading="lazy"
              width="50"
              height="50"
              decoding="async" 
            />
          </picture>
        </div>
        <div className="author-info">
          <h4>{testimonial.name}</h4>
          <p>{testimonial.procedure}</p>
        </div>
      </div>
    </div>
  );
});

// Main component with optimizations
const TestimonialsSection = memo(({ isPreview }) => {
  // Use useMemo for testimonials array to keep reference stable
  const testimonials = useMemo(() => [
    {
      id: 1,
      name: 'Angelina',
      procedure: 'Cirugía de Hernia',
      rating: 5,
      text: 'Hola! Recién se operó mi esposo, recomiendo ampliamente al Dr Boris; excelente trabajo y su equipo muy profesional y amable. Gracias 🙏',
      image: '/images/female.jpg'
    },
    {
      id: 2,
      name: 'Shanha',
      procedure: 'Cirugía de Hernia',
      rating: 5,
      text: 'El doctor Boris es increíble! Me operó de hernia y amé el proceso y resultados. 1000x1000 recomendado.',
      image: '/images/female.jpg'
    },
    {
      id: 3,
      name: 'Ave',
      procedure: 'Cirugía de Hernia',
      rating: 5,
      text: 'Excelente servicio, muy buenos médicos y muy económico. Me operaron de hernia inguinal e hidrocele, todo bien gracias a Dios y al Doctor que me operó. Altamente recomendado.',
      image: '/images/female.jpg'
    },
    {
      id: 4,
      name: 'Johan',
      procedure: 'Cirugía de Hernia',
      rating: 5,
      text: 'Muy recomendable, la verdad. Atención, servicio y precio; me operé con ellos una umbilical y muy bien todo.',
      image: '/images/male.jpg'
    },
    {
      id: 5,
      name: 'Elena',
      procedure: 'Tratamiento de Varices',
      rating: 5,
      text: 'Recomendado ampliamente, muy excelente médico',
      image: '/images/female.jpg'
    },
    {
      id: 6,
      name: 'Manlio',
      procedure: 'Cirugía de Hernia',
      rating: 5,
      text: 'Excelente servicio, acabo de hacerme una cirugía y todo salió muy bien, muy estético y con mucha higiene. Lo recomiendo mucho.',
      image: '/images/male.jpg'
    },
    {
      id: 7,
      name: 'Jose',
      procedure: 'Cirugía de Hernia',
      rating: 5,
      text: 'Muy buen servicio, médicos buenos, y muy económicos. Me operaron y todo muy bien gracias a Dios y al cirujano que me operó. Bendiciones para todo el personal de esa clínica.',
      image: '/images/male.jpg'
    },
    {
      id: 8,
      name: 'Daniela',
      procedure: 'Cirugía de Hernia',
      rating: 5,
      text: 'Muy recomendable clínica, muy buen trato. Bendiciones para el doctor Boris que operó a mi esposo. Dios le de más salud y sabiduría para atender a más personas.',
      image: '/images/female.jpg'
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
  
  // Memoized function for determining testimonials per view
  const getTestimonialsPerView = useCallback(() => {
    if (window.innerWidth >= 992) return 2;
    return 1;
  }, []);
  
  // Optimized resize handler with useCallback
  const handleResize = useCallback(() => {
    setTestimonialsPerView(getTestimonialsPerView());
  }, [getTestimonialsPerView]);
  
  // Efecto para controlar el resize de la ventana - optimized
  useEffect(() => {
    // Establecer el valor inicial
    handleResize();
    
    // Use debounced resize handler for better performance
    let resizeTimer;
    const debouncedResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(handleResize, 100);
    };
    
    // Agregar listener para el cambio de tamaño
    window.addEventListener('resize', debouncedResize);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', debouncedResize);
      clearTimeout(resizeTimer);
    };
  }, [handleResize]); 
  
  // Optimized function to update visible testimonials with useCallback
  const updateVisibleTestimonials = useCallback(() => {
    const newVisible = [];
    for (let i = 0; i < testimonialsPerView; i++) {
      const index = (currentIndex + i) % displayedTestimonials.length;
      newVisible.push(displayedTestimonials[index]);
    }
    setVisibleTestimonials(newVisible);
  }, [currentIndex, testimonialsPerView, displayedTestimonials]);
  
  // Efecto para actualizar los testimonios visibles
  useEffect(() => {
    updateVisibleTestimonials();
  }, [updateVisibleTestimonials]); 
  
  // Optimized navigation functions with useCallback
  const nextTestimonial = useCallback(() => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    
    // Apply exit animation
    if (sliderRef.current) {
      const cards = sliderRef.current.querySelectorAll('.testimonial-card');
      cards.forEach(card => {
        card.classList.add('testimonial-slide-out');
      });
    }
    
    // Reduced timeout for better performance
    setTimeout(() => {
      setCurrentIndex((prevIndex) => 
        (prevIndex + 1) % displayedTestimonials.length);
      
      // Remove exit animation class and add entry animation after state update
      requestAnimationFrame(() => {
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
          }, 300);
        }
      });
    }, 300);
  }, [isAnimating, displayedTestimonials.length]);
  
  const prevTestimonial = useCallback(() => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    
    // Apply exit animation
    if (sliderRef.current) {
      const cards = sliderRef.current.querySelectorAll('.testimonial-card');
      cards.forEach(card => {
        card.classList.add('testimonial-slide-out');
      });
    }
    
    // Reduced timeout for better performance
    setTimeout(() => {
      setCurrentIndex((prevIndex) => 
        (prevIndex - 1 + displayedTestimonials.length) % displayedTestimonials.length);
      
      // Remove exit animation class and add entry animation after state update
      requestAnimationFrame(() => {
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
          }, 300);
        }
      });
    }, 300);
  }, [isAnimating, displayedTestimonials.length]);
  
  // Touch swipe functionality for mobile - optimized
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  
  // Required minimum distance between touch start and touch end to be detected as swipe
  const minSwipeDistance = 50;
  
  const onTouchStart = useCallback((e) => {
    setTouchEnd(null); // Reset values
    setTouchStart(e.targetTouches[0].clientX);
  }, []);
  
  const onTouchMove = useCallback((e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  }, []);
  
  const onTouchEnd = useCallback(() => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      nextTestimonial();
    } else if (isRightSwipe) {
      prevTestimonial();
    }
  }, [touchStart, touchEnd, nextTestimonial, prevTestimonial]);

  return (
    <section className={`testimonials-section ${isPreview ? 'preview' : ''}`}>
      <div className="container">
        <div className="section-title">
          <h2>Testimonios</h2>
          <p className="subtitle">Lo que nuestros pacientes dicen sobre su experiencia (No mostramos fotos ni nombre completo para conservar la privacidad de nuestros pacientes, todas las opiniones fueron extraídas de nuestra página de Facebook y mensajes recibidos de forma directa)</p>
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
              <TestimonialCard 
                key={testimonial.id} 
                testimonial={testimonial} 
              />
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
});

export default TestimonialsSection;