import useSEO from '../hooks/useSEO';

/**
 * SEO component for optimizing pages
 * Uses custom useSEO hook instead of react-helmet-async for React 19 compatibility
 */
const SEO = ({ 
  title = 'Dr. Boris | Cirugía de Hernias y Tratamiento de Varices',
  description = 'Dr. Boris - Cirujano General especializado en Cirugía de Hernias y Tratamiento de Varices',
  keywords = 'cirugía de hernias, tratamiento de varices, cirujano general, Dr. Boris Mederos, Cancún, Quintana Roo',
  canonical = 'https://www.clinicahernias.com',
  ogImage = '/og-image.jpg',
  ogType = 'website',
  schema = null
}) => {
  // Use our custom SEO hook
  useSEO({
    title,
    description,
    keywords,
    canonical,
    ogTitle: title,
    ogDescription: description,
    ogImage,
    ogUrl: canonical,
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