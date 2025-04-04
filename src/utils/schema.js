// Schema.org structured data configurations

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["MedicalBusiness", "MedicalClinic"],
  "name": "Dr. Boris Mederos - Cirujano General",
  "url": "https://www.clinicahernias.com",
  "logo": "https://www.clinicahernias.com/og-image.jpg",
  "description": "Clínica especializada en cirugía de hernias y tratamiento de varices en Cancún, Quintana Roo.",
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
  ]
};

export const doctorSchema = {
  "@context": "https://schema.org",
  "@type": "Physician",
  "name": "Dr. Boris Mederos",
  "jobTitle": "Cirujano General",
  "worksFor": {
    "@type": "MedicalClinic",
    "name": "Cardiocentro Cancún"
  },
  "image": "https://www.clinicahernias.com/images/Boris.jpg",
  "description": "Cirujano General especializado en Cirugía de Hernias y Tratamiento de Varices",
  "medicalSpecialty": ["Cirugía General", "Cirugía de Hernias", "Flebología"],
  "knowsLanguage": ["es"],
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "degree",
      "name": "Médico Cirujano",
      "recognizedBy": {
        "@type": "Organization",
        "name": "Universidad de Ciencias Médicas de La Habana"
      }
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "certification",
      "name": "Especialista en Cirugía General",
      "recognizedBy": {
        "@type": "Organization",
        "name": "Universidad de Ciencias Médicas de La Habana"
      }
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "certification",
      "name": "Especialista en Cirugía Cardiovascular",
      "recognizedBy": {
        "@type": "Organization",
        "name": "Universidad de Ciencias Médicas de La Habana"
      }
    }
  ]
};

export const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "url": "https://www.clinicahernias.com",
  "name": "Dr. Boris Mederos | Cirujano General en Cancún",
  "description": "Especialista en cirugía de hernias y tratamiento de varices en Cancún, Quintana Roo."
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
      "procedureType": "http://schema.org/SurgicalProcedure"
    }
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
      "procedureType": "http://schema.org/TherapeuticProcedure"
    }
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
          "description": "Tratamiento quirúrgico de hernias inguinales, umbilicales, ventrales e hiatales."
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "Service",
          "name": "Tratamiento de Várices",
          "description": "Tratamiento mínimamente invasivo de venas varicosas e insuficiencia venosa."
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "Service",
          "name": "Consulta Médica Especializada",
          "description": "Diagnóstico, evaluación y seguimiento personalizado."
        }
      }
    ]
  };
};