export const contact = {
  phone: '+52 998 294 3795',
  tel: '+529982943795',
  email: 'borismederos@gmail.com',
  place: 'Cardiocentro Cancún',
  address: ['Av. Luna 5, Mz. 15 Lt. 1, Sm. 43', 'CP 77506, Cancún, Q. R.'],
  hours: [
    ['Lunes a viernes', '9:00 – 18:00'],
    ['Sábados', '9:00 – 13:00'],
  ],
  facebook: 'https://www.facebook.com/profile.php?id=100091780065318',
  maps: 'https://www.google.com/maps/search/?api=1&query=Cardiocentro+cancun',
  mapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.9652417975073!2d-86.84665462409865!3d21.137851382758396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4c2b63eaa0c46b%3A0xc6029a332264add8!2sCardiocentro%20cancun!5e0!3m2!1sen!2sus!4v1742755258318!5m2!1sen!2sus',
};

export const wa = (text = 'Hola Doctor, me gustaría agendar una consulta.') =>
  `https://wa.me/529982943795?text=${encodeURIComponent(text)}`;

export const promo = {
  text: '50% de descuento en cirugía de hernias sobre el precio oficial.',
  message: 'Hola Doctor, me interesa el descuento en cirugía de hernias.',
};

export const stats = [
  ['25+', 'años de experiencia en cirugía'],
  ['1–2', 'semanas para volver a tu rutina'],
  ['< 5%', 'de recurrencia con técnica de malla'],
  ['Mismo día', 'alta en muchos casos'],
];

export const steps = [
  ['Consulta', 'Revisamos tus síntomas y antecedentes, te exploro y te explico qué tienes.'],
  ['Plan', 'Te propongo un tratamiento personalizado y te explico qué esperar en cada etapa.'],
  ['Procedimiento', 'Técnicas mínimamente invasivas, casi siempre ambulatorias.'],
  ['Seguimiento', 'Te acompaño en cada revisión hasta que estés completamente recuperado.'],
];

export const otherServices = [
  ['Cirugía general', 'Vesícula biliar, apéndice, tiroides y otros procedimientos.'],
  ['Consulta y diagnóstico', 'Evaluación completa para decidir el mejor tratamiento.'],
];

export const testimonials = [
  { name: 'Angelina', area: 'hernias', text: 'Recién se operó mi esposo. Recomiendo ampliamente al Dr. Boris: excelente trabajo, y su equipo muy profesional y amable.' },
  { name: 'Shanha', area: 'hernias', text: 'El doctor Boris es increíble. Me operó de hernia y me encantaron el proceso y los resultados. 1000 × 1000 recomendado.' },
  { name: 'Ave', area: 'hernias', text: 'Excelente servicio, muy buenos médicos y muy económico. Me operaron de hernia inguinal e hidrocele y todo salió bien.' },
  { name: 'Johan', area: 'hernias', text: 'Muy recomendable: atención, servicio y precio. Me operé de una hernia umbilical y todo muy bien.' },
  { name: 'Elena', area: 'varices', text: 'Recomendado ampliamente, un médico excelente.' },
  { name: 'Manlio', area: 'hernias', text: 'Acabo de hacerme una cirugía y todo salió muy bien. Muy estético y con mucha higiene. Lo recomiendo mucho.' },
  { name: 'José', area: 'hernias', text: 'Muy buen servicio, buenos médicos y precios accesibles. Me operaron y todo salió muy bien.' },
  { name: 'Daniela', area: 'hernias', text: 'Muy buen trato. Gracias al doctor Boris, que operó a mi esposo. Que Dios le dé salud para seguir atendiendo a más personas.' },
];

export const specialties = {
  hernias: {
    path: '/hernias',
    name: 'Cirugía de hernias',
    short: 'Hernias',
    tile: 'Inguinales, umbilicales, incisionales, epigástricas e hiatales. Reparación con malla y laparoscopía.',
    lead: 'Una hernia no desaparece por sí sola. La buena noticia: repararla es una cirugía frecuente, segura y muchas veces ambulatoria.',
    image: { name: 'hernias2', ext: 'jpg', w: 936, h: 652, alt: 'Ilustración de una hernia abdominal' },
    what: {
      title: '¿Qué es una hernia?',
      text: [
        'Una hernia aparece cuando un órgano o tejido graso empuja a través de un punto débil de la pared muscular.',
        'Suele notarse como un bulto en el abdomen, el ombligo o la ingle, que se hace más evidente —y a veces duele— al toser, cargar peso o hacer esfuerzo.',
      ],
      image: { name: 'hernias', ext: 'jpg', w: 700, h: 595, alt: 'Corte anatómico de una hernia: músculo, saco herniario e intestino' },
    },
    listTitle: 'Tipos de hernia que trato',
    list: [
      ['Inguinal', 'En la ingle. Es la más común, sobre todo en hombres.'],
      ['Umbilical', 'En el ombligo o alrededor de él.'],
      ['Incisional', 'Sobre la cicatriz de una cirugía anterior.'],
      ['Epigástrica', 'En la línea media, entre el ombligo y el esternón.'],
      ['Hiatal', 'Parte del estómago sube hacia el tórax a través del diafragma.'],
    ],
    approachTitle: 'Cómo la tratamos',
    approach: [
      ['Diagnóstico preciso', 'Identificamos el tipo exacto de hernia para elegir la técnica quirúrgica adecuada.'],
      ['Cirugía laparoscópica', 'Pequeñas incisiones en lugar de una abierta: menos dolor y recuperación más rápida.'],
      ['Reparación con malla', 'Una malla de última generación refuerza la zona débil y reduce el riesgo de que vuelva a salir.'],
      ['Seguimiento cercano', 'Te acompaño en cada revisión hasta que estés completamente recuperado.'],
    ],
    benefits: ['Recuperación más rápida', 'Menos dolor después de la cirugía', 'Cicatrices mínimas', 'Menor riesgo de recurrencia'],
    faq: [
      ['¿Cuánto dura la recuperación?', 'Depende del tipo de hernia y de la técnica. Con cirugía laparoscópica, la mayoría de los pacientes retoma sus actividades normales en una o dos semanas.'],
      ['¿Tengo que quedarme hospitalizado?', 'Muchas cirugías de hernia son ambulatorias: regresas a casa el mismo día. En casos más complejos puede requerirse una estancia de uno o dos días.'],
      ['¿La hernia puede volver a salir?', 'Con técnicas modernas y el uso de malla, la recurrencia es baja: menos del 5%. Un buen seguimiento y evitar factores de riesgo la reducen aún más.'],
    ],
    message: 'Hola Doctor, me interesa información sobre cirugía de hernias.',
  },
  varices: {
    path: '/varices',
    name: 'Tratamiento de varices',
    short: 'Varices',
    tile: 'Escleroterapia, láser endovenoso, radiofrecuencia y flebectomía. Procedimientos ambulatorios.',
    lead: 'Piernas más ligeras, sin dolor y con mejor aspecto. Tratamientos modernos y ambulatorios, con retorno casi inmediato a tu rutina.',
    image: { name: 'varices3', ext: 'jpg', w: 1004, h: 876, alt: 'Piernas con varices y arañas vasculares' },
    what: {
      title: '¿Qué son las varices?',
      text: [
        'Son venas dilatadas y retorcidas que aparecen cuando sus válvulas dejan de cerrar bien: la sangre se acumula en lugar de regresar al corazón.',
        'Además de visibles, pueden causar pesadez, cansancio, hinchazón o calambres en las piernas.',
      ],
      image: { name: 'varices2', ext: 'jpeg', w: 801, h: 600, alt: 'Comparación entre una vena normal y una vena varicosa' },
    },
    listTitle: 'Opciones de tratamiento',
    list: [
      ['Escleroterapia', 'Una inyección cierra las venas pequeñas y las arañas vasculares.'],
      ['Láser endovenoso', 'Sella la vena dañada desde dentro, sin cortes.'],
      ['Radiofrecuencia', 'Cierra la vena con calor controlado.'],
      ['Flebectomía ambulatoria', 'Retiro de venas varicosas a través de microincisiones.'],
      ['Arañas vasculares', 'Tratamiento de las venitas superficiales más visibles.'],
    ],
    approachTitle: 'Un abordaje completo',
    approach: [
      ['Evaluación con Doppler', 'Un ultrasonido muestra la gravedad y el tipo de varices para personalizar el tratamiento.'],
      ['Procedimientos en consulta', 'Sin hospitalización y con retorno inmediato a tus actividades cotidianas.'],
      ['Tecnología actual', 'Equipos de última generación para tratamientos eficaces y seguros.'],
      ['Prevención', 'Recomendaciones personalizadas para evitar que aparezcan nuevas varices.'],
    ],
    benefits: ['Procedimientos mínimamente invasivos', 'Resultados visibles pronto', 'Vuelves a tu rutina casi de inmediato', 'Alivio de los síntomas'],
    faq: [
      ['¿Los tratamientos duelen?', 'La mayoría causa molestias mínimas, que desaparecen rápidamente.'],
      ['¿Cuántas sesiones necesito?', 'Depende del tipo y la extensión de las varices. Las arañas vasculares suelen requerir de dos a tres sesiones; las varices más grandes, a veces un solo procedimiento.'],
      ['¿Puedo prevenir nuevas varices?', 'Hay un componente genético, pero ayuda mantener un peso saludable, hacer ejercicio, evitar estar de pie por largos periodos y usar medias de compresión cuando se indique.'],
    ],
    message: 'Hola Doctor, me interesa información sobre tratamiento de varices.',
  },
};

export const doctor = {
  name: 'Dr. Boris Mederos',
  role: 'Cirujano general',
  licenses: 'Cédula profesional 10132762 · Cédula de especialidad 14420078',
  bio: [
    'Soy cirujano general con más de 25 años de experiencia, dedicado sobre todo a la cirugía de hernias y al tratamiento de varices.',
    'Trabajo con técnicas modernas y mínimamente invasivas, y con una idea sencilla: que cada paciente entienda lo que tiene, sepa qué esperar y se recupere lo antes posible.',
  ],
  credentials: [
    ['1994', 'Médico general', 'Universidad de Ciencias Médicas de La Habana'],
    ['2000', 'Especialista en Cirugía General', ''],
    ['2007', 'Máster en Urgencias Médicas', ''],
    ['2010', 'Especialista en Cirugía Cardiovascular', ''],
  ],
  career: [
    ['2016 – hoy', 'Cirujano general y cardiovascular', 'Cardiocentro Cancún y Clínica AMECAE · Cancún, México'],
    ['2015 – 2016', 'Cirujano general y cardiovascular', 'Fundación Hernández Zurita · Veracruz, México'],
    ['2014 – 2015', 'Cirugía torácica y cardiovascular', 'Yemen International Hospital · Yemen'],
    ['2006 – 2013', 'Cirujano general y cardiovascular', 'Instituto de Cardiología y Cirugía Cardiovascular · La Habana'],
    ['2001 – 2006', 'Especialista en cirugía', 'Hospital «Dr. Luis Díaz Soto» · La Habana'],
  ],
  values: [
    ['Atención personalizada', 'Cada paciente es distinto y recibe un plan adaptado a su caso.'],
    ['Actualización constante', 'Me mantengo al día con los avances para ofrecer las mejores opciones.'],
    ['Transparencia', 'Información clara sobre el diagnóstico, las opciones y la recuperación.'],
    ['Acompañamiento', 'Desde la primera consulta hasta el alta definitiva.'],
  ],
};
