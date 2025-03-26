import { useEffect } from 'react';

/**
 * Custom hook to update metadata for SEO
 * This is a lightweight alternative to react-helmet-async for React 19
 */
const useSEO = ({
  title,
  description,
  keywords,
  canonical,
  ogTitle,
  ogDescription,
  ogImage,
  ogUrl,
  ogType = 'website',
  twitterCard = 'summary_large_image',
  twitterTitle,
  twitterDescription,
  twitterImage,
  schema = null
}) => {
  useEffect(() => {
    // Update document title
    if (title) {
      document.title = title;
    }
    
    // Update meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    
    // Update Open Graph tags
    updateMetaTag('og:title', ogTitle || title);
    updateMetaTag('og:description', ogDescription || description);
    updateMetaTag('og:image', ogImage);
    updateMetaTag('og:url', ogUrl || canonical);
    updateMetaTag('og:type', ogType);
    
    // Update Twitter Card tags
    updateMetaTag('twitter:card', twitterCard);
    updateMetaTag('twitter:title', twitterTitle || ogTitle || title);
    updateMetaTag('twitter:description', twitterDescription || ogDescription || description);
    updateMetaTag('twitter:image', twitterImage || ogImage);
    
    // Update canonical link
    updateCanonicalLink(canonical);
    
    // Add schema.org JSON-LD
    updateSchema(schema);
    
    // Cleanup function to restore defaults when component unmounts
    return () => {
      // Optional: restore default values when component unmounts
    };
  }, [
    title, 
    description, 
    keywords, 
    canonical, 
    ogTitle, 
    ogDescription, 
    ogImage, 
    ogUrl, 
    ogType,
    twitterCard,
    twitterTitle,
    twitterDescription,
    twitterImage,
    schema
  ]);
};

// Helper function to update meta tags
const updateMetaTag = (name, content) => {
  if (!content) return;
  
  // Try to find existing tag
  let metaTag = findMetaTag(name);
  
  if (metaTag) {
    // Update existing tag
    metaTag.setAttribute('content', content);
  } else {
    // Create new tag
    metaTag = document.createElement('meta');
    if (name.startsWith('og:')) {
      metaTag.setAttribute('property', name);
    } else {
      metaTag.setAttribute('name', name);
    }
    metaTag.setAttribute('content', content);
    document.head.appendChild(metaTag);
  }
};

// Helper function to find meta tags
const findMetaTag = (name) => {
  if (name.startsWith('og:')) {
    return document.querySelector(`meta[property="${name}"]`);
  }
  return document.querySelector(`meta[name="${name}"]`);
};

// Helper function to update canonical link
const updateCanonicalLink = (href) => {
  if (!href) return;
  
  let link = document.querySelector('link[rel="canonical"]');
  
  if (link) {
    link.setAttribute('href', href);
  } else {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    link.setAttribute('href', href);
    document.head.appendChild(link);
  }
};

// Helper function to update schema.org JSON-LD
const updateSchema = (schema) => {
  if (!schema) return;
  
  // Remove any existing schema
  const existingSchema = document.querySelector('script[type="application/ld+json"]');
  if (existingSchema) {
    existingSchema.remove();
  }
  
  // Add new schema
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
};

export default useSEO;