import useSEO from '../hooks/useSEO';

/**
 * SEO component for optimizing pages
 * Uses custom useSEO hook instead of react-helmet-async for React 19 compatibility
 */
const SEO = ({ 
  title = 'Dr. Boris Mederos | Cirugía de Hernias en Cancún',
  description = 'Dr. Boris Mederos - Cirujano General especializado en Cirugía de Hernias y Tratamiento de Varices en Cancún',
  keywords = 'cirugía de hernias, tratamiento de varices, cirujano general, Dr. Boris Mederos, Cancún, Quintana Roo',
  canonical = null, // This will be handled dynamically if not provided
  ogImage = '/og-image.jpg',
  ogType = 'website',
  schema = null
}) => {
  // Get the current path from window.location
  const path = typeof window !== 'undefined' ? window.location.pathname : '';
  
  // Determine the canonical URL
  // If canonical is explicitly passed, use it; otherwise, construct it from the current path
  const canonicalUrl = canonical || `https://clinicahernias.com${path}`;
  
  // Use our custom SEO hook
  useSEO({
    title,
    description,
    keywords,
    canonical: canonicalUrl,
    ogTitle: title,
    ogDescription: description,
    ogImage,
    ogUrl: canonicalUrl,
    ogType,
    twitterCard: 'summary_large_image',
    twitterTitle: title,
    twitterDescription: description,
    twitterImage: ogImage,
    schema
  });
  
  // This component doesn't render anything visible
  return null;
};

export default SEO;