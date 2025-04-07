// Schema.org structured data configurations

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["MedicalBusiness", "MedicalClinic"],
  "name": "Dr. Boris Mederos - Cirujano General",
  "url": "https://clinicahernias.com",
  "logo": "https://clinicahernias.com/og-image.jpg",
  "description": "Especialista en cirugía de hernias y tratamiento de varices en Cancún, Quintana Roo.",
  "telephone": "+529982943795",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Cardiocentro Cancún, Av. Luna 5, Mz. 15 Lt 1 Sm. 43",
    "addressLocality": "Cancún",
    "addressRegion": "Quintana Roo",
    "postalCode": "77506",
    "addressCountry": "MX"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "21.137851",
    "longitude": "-86.846654"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Saturday"],
      "opens": "09:00",
      "closes": "13:00"
    }
  ],
  "priceRange": "$$",
  "medicalSpecialty": ["Cirugía General", "Cirugía de Hernias", "Flebología"],
  "availableService": [
    {
      "@type": "MedicalProcedure",
      "name": "Cirugía de Hernias",
      "procedureType": "http://schema.org/SurgicalProcedure"
    },
    {
      "@type": "MedicalTherapy",
      "name": "Tratamiento de Varices",
      "procedureType": "http://schema.org/TherapeuticProcedure"
    }
  ],
  // Added social media profiles
  "sameAs": [
    "https://www.facebook.com/profile.php?id=100091780065318"
  ],
  // Added offer catalog for services
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Servicios Médicos",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "MedicalProcedure",
          "name": "Cirugía de Hernia Inguinal",
          "description": "Procedimiento quirúrgico para tratar hernias inguinales con técnicas mínimamente invasivas."
        },
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "50% de descuento sobre precio oficial",
          "priceCurrency": "MXN"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "MedicalProcedure",
          "name": "Tratamiento de Varices",
          "description": "Procedimientos para tratar venas varicosas y mejorar la circulación."
        }
      }
    ]
  },
  // Added action for appointment booking
  "potentialAction": {
    "@type": "ReserveAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://wa.me/529982943795",
      "inLanguage": "es-MX",
      "actionPlatform": [
        "http://schema.org/MobileWebPlatform"
      ]
    },
    "result": {
      "@type": "Reservation",
      "name": "Agendar Cita Médica"
    }
  }
};

export const doctorSchema = {
  "@context": "https://schema.org",
  "@type": "Physician",
  "name": "Dr. Boris Mederos",
  "jobTitle": "Cirujano General",
  "worksFor": {
    "@type": "MedicalClinic",
    "name": "Dr. Boris Mederos - Cirujano General",
    "url": "https://clinicahernias.com"
  },
  "image": "https://clinicahernias.com/images/optimized/Boris.jpg",
  "description": "Cirujano General especializado en Cirugía de Hernias y Tratamiento de Varices",
  "medicalSpecialty": ["Cirugía General", "Cirugía de Hernias", "Flebología"],
  "knowsLanguage": ["es", "en"],
  // Added credentials and affiliations
  "hasCredential": [
    {
      "@type": "Credential",
      "name": "Médico general (1994)",
      "recognizedBy": {
        "@type": "Organization",
        "name": "Universidad de Ciencias Médicas de La Habana"
      }
    },
    {
      "@type": "Credential",
      "name": "Especialista en Cirugía General (2000)"
    },
    {
      "@type": "Credential",
      "name": "Máster en Urgencias Médicas (2007)"
    },
    {
      "@type": "Credential",
      "name": "Especialista en Cirugía Cardiovascular (2010)"
    }
  ],
  "memberOf": [
    {
      "@type": "Organization",
      "name": "Clínica AMECAE"
    },
    {
      "@type": "Organization",
      "name": "Cardiocentro Cancún"
    }
  ]
};

export const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "url": "https://clinicahernias.com",
  "name": "Dr. Boris Mederos | Cirugía de Hernias y Tratamiento de Varices",
  "description": "Especialista en cirugía de hernias y tratamiento de varices en Cancún, Quintana Roo.",
  "publisher": {
    "@type": "Organization",
    "name": "Dr. Boris Mederos - Cirujano General"
  },
  "inLanguage": "es-MX"
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Qué es una hernia?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Una hernia es una protrusión o salida de un órgano o tejido a través de una abertura o debilidad en la pared muscular o tejido que normalmente lo contiene."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuáles son las causas de las várices?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Las várices son causadas principalmente por defectos en las válvulas venosas, factores hereditarios, estar de pie por períodos prolongados, obesidad, embarazo y envejecimiento."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto tiempo se requiere de recuperación tras una cirugía de hernia?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El tiempo de recuperación varía según el tipo de hernia y la técnica quirúrgica empleada. Generalmente, los pacientes pueden retomar actividades ligeras en 1-2 semanas y actividades normales en 4-6 semanas."
      }
    },
    {
      "@type": "Question",
      "name": "¿Los tratamientos para varices son dolorosos?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La mayoría de nuestros procedimientos causan mínimas molestias y se realizan sin necesidad anestesia local. Los pacientes pueden experimentar ligeras incomodidades que desaparecen rápidamente."
      }
    },
    {
      "@type": "Question",
      "name": "¿Ofrecen descuentos en sus procedimientos?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, actualmente ofrecemos un 50% de descuento en cirugía de hernias sobre el precio oficial. Contacte con nosotros para obtener más información."
      }
    }
  ]
};

// Export specific schemas for each page
export const getHomeSchema = () => {
  return [localBusinessSchema, doctorSchema, webPageSchema];
};

export const getHerniasSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "about": {
      "@type": "MedicalCondition",
      "name": "Hernias",
      "alternateName": ["Hernia Inguinal", "Hernia Umbilical", "Hernia Hiatal"],
      "description": "Información sobre diagnóstico y tratamiento de hernias por el Dr. Boris Mederos."
    },
    "specialty": {
      "@type": "MedicalSpecialty",
      "name": "Cirugía General"
    },
    "mainEntity": {
      "@type": "MedicalProcedure",
      "name": "Cirugía de Hernias",
      "procedureType": "http://schema.org/SurgicalProcedure",
      "howPerformed": "La cirugía de hernias se realiza mediante técnicas mínimamente invasivas, con un enfoque laparoscópico o abierto dependiendo del tipo y tamaño de la hernia.",
      "preparation": "Se requiere evaluación previa, análisis de laboratorio y seguir indicaciones de ayuno antes del procedimiento.",
      "followup": "Seguimiento postoperatorio para garantizar correcta cicatrización y prevenir complicaciones."
    },
    "url": "https://clinicahernias.com/hernias",
    "inLanguage": "es-MX"
  };
};

export const getVaricesSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "about": {
      "@type": "MedicalCondition",
      "name": "Várices",
      "alternateName": ["Venas varicosas", "Insuficiencia venosa"],
      "description": "Información sobre diagnóstico y tratamiento de várices por el Dr. Boris Mederos."
    },
    "specialty": {
      "@type": "MedicalSpecialty",
      "name": "Flebología"
    },
    "mainEntity": {
      "@type": "MedicalTherapy",
      "name": "Tratamiento de Várices",
      "procedureType": "http://schema.org/TherapeuticProcedure",
      "indication": {
        "@type": "MedicalIndication",
        "name": "Insuficiencia venosa, dolor en piernas, inflamación, problemas estéticos"
      },
      "adverseOutcome": {
        "@type": "MedicalEntity",
        "name": "Mínimas molestias que desaparecen rápidamente"
      }
    },
    "url": "https://clinicahernias.com/varices",
    "inLanguage": "es-MX"
  };
};

export const getServicesSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Service",
          "name": "Cirugía de Hernias",
          "description": "Tratamiento quirúrgico de hernias inguinales, umbilicales, ventrales e hiatales.",
          "url": "https://clinicahernias.com/hernias"
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "Service",
          "name": "Tratamiento de Várices",
          "description": "Tratamiento mínimamente invasivo de venas varicosas e insuficiencia venosa.",
          "url": "https://clinicahernias.com/varices"
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "Service",
          "name": "Consulta Médica Especializada",
          "description": "Diagnóstico, evaluación y seguimiento personalizado.",
          "url": "https://clinicahernias.com/contact"
        }
      },
      {
        "@type": "ListItem",
        "position": 4,
        "item": {
          "@type": "Service",
          "name": "Cirugía General",
          "description": "Procedimientos quirúrgicos para diversas condiciones como vesícula biliar, apéndice y más.",
          "url": "https://clinicahernias.com/services"
        }
      }
    ],
    "url": "https://clinicahernias.com/services",
    "inLanguage": "es-MX"
  };
};