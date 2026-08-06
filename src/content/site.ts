/**
 * Contenido del sitio, en un solo lugar.
 *
 * Todo el texto, las citas y las fotos de la landing salen de aca. La idea es
 * poder actualizar el sitio sin tocar ningun componente.
 *
 * Los datos del hospedaje (direccion, fundacion, habitaciones, contacto) y las
 * citas son reales. Las fuentes estan indicadas en cada bloque.
 *
 * TODO(contenido): las fotos son placeholders de Unsplash y los testimonios
 * vienen de TripAdvisor, no son material propio de la familia. Reemplazar por
 * fotos y testimonios propios antes de publicar. Ver `TempContentNotice`.
 */

export type Photo = {
  src: string;
  alt: string;
};

export type Service = {
  /** Nombre del icono definido en `components/icons.tsx`. */
  icon: ServiceIconName;
  title: string;
  description: string;
};

export type ServiceIconName =
  "cama" | "desayuno" | "wifi" | "corazon" | "fuego" | "ubicacion" | "ropa" | "arbol";

export type StoryChapter = {
  eyebrow: string;
  title: string;
  body: string;
  quote?: { text: string; author: string };
  photo: Photo;
  /** Firma manuscrita al pie del capitulo. */
  signature?: string;
};

export type Activity = {
  title: string;
  description: string;
  photo: Photo;
};

export type Testimonial = {
  quote: string;
  author: string;
  from: string;
  date: string;
  source: string;
};

export const site = {
  name: "Tía Carola",
  tagline: "Hospedaje rural familiar en las Yungas jujeñas",
  location: "San Francisco, Valle Grande, Jujuy",
  address: "El Churqui s/n, San Francisco, Valle Grande, Jujuy",
  addressDetail: "Dentro del predio municipal, frente a la antena de telefonía móvil.",
  foundedYear: 1996,
  owners: "Lucy Sánchez y Freddy Vera",
  description:
    "Hospedaje familiar en San Francisco, Valle Grande, Jujuy. Atendido por Lucy y Freddy desde 1996.",
} as const;

export const nav = [
  { href: "#historia", label: "Nuestra historia" },
  { href: "#servicios", label: "Servicios" },
  { href: "#galeria", label: "Galería" },
  { href: "#que-hacer", label: "Qué hacer" },
  { href: "#ubicacion", label: "Cómo llegar" },
] as const;

export const hero = {
  eyebrow: "San Francisco, Valle Grande · Yungas jujeñas · Desde 1996",
  title: "Un hogar en medio de la selva, con el trato de siempre",
  subtitle:
    "Desde 1996, Lucy y Freddy reciben viajeros en su casa de adobe, entre la neblina y el verde profundo de las Yungas.",
  photo: {
    src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1800&auto=format&fit=crop",
    alt: "Río entre la vegetación densa de las Yungas",
  },
} satisfies { eyebrow: string; title: string; subtitle: string; photo: Photo };

export const stats = [
  { value: "1996", label: "año de fundación" },
  { value: "4", label: "habitaciones con baño privado" },
  { value: "13", label: "plazas, más espacio para carpas" },
  { value: "4.3★", label: "valoración de viajeros" },
] as const;

/**
 * Las citas de Lucy son de una nota de El Tribuno de Jujuy; la de Marcelo C.
 * es de TripAdvisor. Se transcriben textuales.
 */
export const story = {
  eyebrow: "Nuestra historia",
  title: "La casa que Lucy y Freddy abrieron al camino",
  subtitle: "Tres momentos que explican por qué venir a Tía Carola se siente distinto.",
  chapters: [
    {
      eyebrow: "Los comienzos",
      title: "Vinieron a pasear y se quedaron para siempre",
      body: "En 1996, Lucy Sánchez —docente jubilada— y Freddy Vera —ex mecánico dental— llegaron de paseo a San Francisco. En un mes ya eran dueños del terreno donde hoy está la casa.",
      quote: {
        text: "Nosotros vinimos a pasear y conocer cuando me jubilé, en el año 96. Llegamos y a los 15 días volvimos, y a los 30 días éramos propietarios de este terreno porque el dueño quiso venderlo por un gasto que tenía que cubrir en ese momento.",
        author: "Lucy Sánchez",
      },
      photo: {
        src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=900&auto=format&fit=crop",
        alt: "Casa familiar rodeada de vegetación",
      },
    },
    {
      eyebrow: "La cocina de la casa",
      title: "Comida casera en medio de la selva",
      body: "La casa de adobe original conserva el horno de barro, y de esa cocina salen los platos que los viajeros recuerdan años después.",
      quote: {
        text: "En un punto elevado y bello del lugar está la hostería y restaurante Tía Carola, de Lucy y Freddy, encantadores anfitriones que nos obsequiaron con unos sorrentinos gourmet que bien podrían figurar en el menú de un restaurant de alto nivel.",
        author: "Marcelo C., Buenos Aires",
      },
      photo: {
        src: "https://images.unsplash.com/photo-1505692794403-34d4982f88aa?q=80&w=900&auto=format&fit=crop",
        alt: "Mesa servida con comida casera",
      },
    },
    {
      eyebrow: "Hoy",
      title: "Nuestra casa, compartida con la gente",
      body: "Casi treinta años después, la idea sigue siendo la misma: acá no hay recepción ni check-in automático, hay una casa de familia que se abre.",
      quote: {
        text: "El objetivo de Tía Carola es ese, nunca ha sido un emprendimiento donde haya una diferencia entre la persona que viene a hospedarse y nosotros. La idea es nuestra casa compartida con la gente.",
        author: "Lucy Sánchez",
      },
      photo: {
        src: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=900&auto=format&fit=crop",
        alt: "Habitación cálida con detalles de madera",
      },
      signature: "Con cariño, Tía Carola",
    },
  ],
} satisfies {
  eyebrow: string;
  title: string;
  subtitle: string;
  chapters: StoryChapter[];
};

export const services = {
  eyebrow: "Servicios",
  title: "Todo lo que necesitás para una estadía perfecta",
  items: [
    {
      icon: "cama",
      title: "4 habitaciones con baño privado",
      description: "13 plazas en total, más espacio para carpas.",
    },
    {
      icon: "desayuno",
      title: "Desayuno incluido",
      description: "Casero, para arrancar el día antes de salir a caminar.",
    },
    {
      icon: "wifi",
      title: "Wi-Fi y calefacción",
      description: "Conexión y abrigo, que en las Yungas se agradecen.",
    },
    {
      icon: "corazon",
      title: "Atención de Lucy y Freddy",
      description: "Los dueños te reciben en persona, como en casa.",
    },
    {
      icon: "fuego",
      title: "Fogón y quincho",
      description: "Espacios para compartir después de la caminata.",
    },
    {
      icon: "ubicacion",
      title: "Información turística",
      description: "Te ayudamos a planear cada paseo por la zona.",
    },
    {
      icon: "ropa",
      title: "Ropa blanca",
      description: "Sábanas y toallas siempre impecables.",
    },
    {
      icon: "arbol",
      title: "Parral y horno de barro",
      description: "En la casa de adobe original, todavía en uso.",
    },
  ],
} satisfies { eyebrow: string; title: string; items: Service[] };

export const gallery = {
  eyebrow: "Galería",
  title: "Momentos para inspirarte",
  photos: [
    {
      src: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=900&auto=format&fit=crop",
      alt: "Habitación con luz natural",
    },
    {
      src: "https://images.unsplash.com/photo-1505692794403-34d4982f88aa?q=80&w=700&auto=format&fit=crop",
      alt: "Comida casera servida en la mesa",
    },
    {
      src: "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=700&auto=format&fit=crop",
      alt: "Selva de montaña al amanecer",
    },
    {
      src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=700&auto=format&fit=crop",
      alt: "Río entre la vegetación",
    },
    {
      src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=900&auto=format&fit=crop",
      alt: "Galería con vista a la selva",
    },
    {
      src: "https://images.unsplash.com/photo-1533587851505-d119e13fa0d7?q=80&w=700&auto=format&fit=crop",
      alt: "Niebla entre los árboles",
    },
    {
      src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=900&auto=format&fit=crop",
      alt: "Casa entre la vegetación",
    },
  ],
} satisfies { eyebrow: string; title: string; photos: Photo[] };

export const activities = {
  eyebrow: "Qué hacer",
  title: "Experiencias cerca de San Francisco",
  subtitle: "Aventura, naturaleza y cultura a pocos minutos del hospedaje.",
  items: [
    {
      title: "Termas del Río Jordán",
      description: "Piscinas naturales de aguas turquesas.",
      photo: {
        src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=800&auto=format&fit=crop",
        alt: "Piscinas naturales de aguas turquesas",
      },
    },
    {
      title: "Parque Nacional Calilegua",
      description: "Selva de montaña y biodiversidad única.",
      photo: {
        src: "https://images.unsplash.com/photo-1533587851505-d119e13fa0d7?q=80&w=800&auto=format&fit=crop",
        alt: "Selva de montaña cubierta de niebla",
      },
    },
    {
      title: "Cascada La Toma",
      description: "Una caminata corta hasta el salto de agua.",
      photo: {
        src: "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=800&auto=format&fit=crop",
        alt: "Sendero de montaña entre la vegetación",
      },
    },
    {
      title: "Pueblo de San Francisco",
      description: "La vida cotidiana de un pueblo de las Yungas.",
      photo: {
        src: "https://images.unsplash.com/photo-1444464666168-49d633b86797?q=80&w=800&auto=format&fit=crop",
        alt: "Ave posada en una rama",
      },
    },
  ],
} satisfies {
  eyebrow: string;
  title: string;
  subtitle: string;
  items: Activity[];
};

/**
 * Resenas publicas de TripAdvisor, transcriptas textuales.
 *
 * TODO(comentarios): cuando este Supabase, esta seccion pasa a leer de la
 * tabla `comments` filtrando por `status = 'approved'`, y estas resenas se
 * reemplazan por testimonios propios.
 */
export const testimonials = {
  eyebrow: "Testimonios",
  title: "Lo que dicen quienes ya vinieron",
  items: [
    {
      quote:
        "En un punto elevado y bello del lugar está la hostería y restaurante Tía Carola, de Lucy y Freddy, encantadores anfitriones que nos obsequiaron con unos sorrentinos gourmet que bien podrían figurar en el menú de un restaurant de alto nivel.",
      author: "Marcelo C.",
      from: "Buenos Aires",
      date: "mayo de 2019",
      source: "TripAdvisor",
    },
    {
      quote:
        "Tres días y dos noches soñadas. Excelentes hospedajes, exquisita comida en Tía Carola. Maravillosos paisajes, clima ideal para descansar.",
      author: "Stella Maris A.",
      from: "",
      date: "marzo de 2019",
      source: "TripAdvisor",
    },
    {
      quote:
        "Nos alojamos en San Francisco para poder recorrerlo. El lugar es privilegiado, muy tranquilo. Estuvimos en un lugar llamado Tía Carola, que fue excelente.",
      author: "Florencia B.",
      from: "Provincia de Buenos Aires",
      date: "junio de 2016",
      source: "TripAdvisor",
    },
  ],
} satisfies { eyebrow: string; title: string; items: Testimonial[] };

export const location = {
  eyebrow: "Cómo llegar",
  title: "San Francisco, Valle Grande",
  cardTitle: "Dos horas de ruta 83, atravesando la selva",
  body: "Se llega por la ruta 83, atravesando el Parque Nacional Calilegua: unas dos horas desde la ruta principal. El camino de montaña es parte del viaje — conviene hacerlo de día y con tiempo.",
  tags: ["Ruta 83", "Parque Nacional Calilegua", "Termas del Río Jordán", "Cascada La Toma"],
  note: "Escribinos por WhatsApp y te pasamos la ubicación exacta y el estado del camino",
} as const;

export const contact = {
  eyebrow: "Contacto directo",
  title: "¿Vamos coordinando tu estadía?",
  body: "No tomamos reservas online: escribinos por WhatsApp y te contamos disponibilidad, precios y todo lo que necesites saber.",
  ctaLabel: "Escribir a Tía Carola por WhatsApp",
  ctaHint: "Respuesta directa de Lucy y Freddy",
} as const;

export const social = {
  instagram: "https://instagram.com/tia.carola",
  instagramHandle: "@tia.carola",
  facebook: "https://facebook.com/tiacarolajujuy",
  facebookHandle: "Tía Carola",
} as const;

export const footer = {
  about:
    "Hospedaje rural familiar en las Yungas jujeñas. Naturaleza, descanso e historia real en San Francisco, Valle Grande, desde 1996.",
} as const;
