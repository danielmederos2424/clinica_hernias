import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Enhanced ScrollToTop component
 * - Scrolls the window to the top when the route changes with smooth animation
 * - Adds intersection observer to animate sections as they come into view
 */
function ScrollToTop() {
  const { pathname } = useLocation();
  const isInitialMount = useRef(true);

  // Scroll to top with smooth behavior when route changes
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }, [pathname]);

  // Add animation for sections as they come into view
  useEffect(() => {
    // Function to handle intersection observations
    const handleIntersect = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          // Once animated, no need to observe anymore
          observer.unobserve(entry.target);
        }
      });
    };

    // Create the observer
    const observer = new IntersectionObserver(handleIntersect, {
      root: null, // Use viewport as root
      threshold: 0.15, // Trigger when 15% of element is visible
      rootMargin: '0px 0px -50px 0px' // Adjust when animation starts
    });

    // Select all sections to observe
    const sections = document.querySelectorAll('section, .specialty-content, .about-content, .contact-content');
    
    // Start observing each section
    sections.forEach(section => {
      observer.observe(section);
    });

    // Cleanup function
    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, [pathname]); // Re-run when route changes

  return null; // This component doesn't render anything
}

export default ScrollToTop;