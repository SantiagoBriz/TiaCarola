/**
 * Contenido del sitio, en un solo lugar.
 *
 * Todo el texto y las imagenes de la landing salen de aca. La idea es que se
 * pueda actualizar el sitio sin tocar ningun componente.
 *
 * TODO(contenido): las fotos son placeholders de Unsplash. Cuando esten las
 * reales, ponerlas en `public/fotos/` y cambiar las rutas por `/fotos/...`.
 * Ahi tambien se puede sacar `remotePatterns` de `next.config.ts`.
 */

export type Photo = {
  src: string;
  alt: string;
};

export type Service = {
  /** Nombre del icono definido en `components/ServiceIcon.tsx`. */
  icon: ServiceIconName;
  title: string;
  description: string;
};

export type ServiceIconName =
  "cama" | "desayuno" | "wifi" | "corazon" | "ubicacion" | "casa" | "ropa" | "estrella";

export type StoryChapter = {
  eyebrow: string;
  title: string;
  body: string;
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
  rating: number;
};

export const site = {
  name: "Tía Carola",
  tagline: "Hospedaje rural familiar en las Yungas jujeñas",
  location: "San Francisco, Valle Grande, Jujuy",
  description:
    "Hospedaje familiar en San Francisco, Valle Grande, Jujuy. Atendido por Lucy y Fredy.",
} as const;

export const nav = [
  { href: "#historia", label: "Nuestra historia" },
  { href: "#servicios", label: "Servicios" },
  { href: "#galeria", label: "Galería" },
  { href: "#que-hacer", label: "Qué hacer" },
  { href: "#ubicacion", label: "Cómo llegar" },
] as const;

export const hero = {
  eyebrow: "San Francisco, Valle Grande · Yungas jujeñas",
  title: "Un hogar en medio de la selva, con el trato de siempre",
  subtitle:
    "Hace más de diez años que Tía Carola recibe viajeros en su casa, entre la neblina y el verde profundo de las Yungas.",
  photo: {
    src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1800&auto=format&fit=crop",
    alt: "Río entre la vegetación densa de las Yungas",
  },
} satisfies { eyebrow: string; title: string; subtitle: string; photo: Photo };

export const stats = [
  { value: "+10", label: "años recibiendo viajeros" },
  { value: "100%", label: "atención familiar" },
  { value: "5★", label: "valoración de huéspedes" },
  { value: "4", label: "generaciones en esta casa" },
] as const;

export const story = {
  eyebrow: "Nuestra historia",
  title: "La casa que mi abuela convirtió en refugio",
  subtitle: "Tres momentos que explican por qué venir a Tía Carola se siente distinto.",
  chapters: [
    {
      eyebrow: "Los comienzos",
      title: "Una casa de familia, abierta de a poco",
      body: "La casa donde hoy funciona Tía Carola fue construida por mis bisabuelos hace más de setenta años, con madera y piedra del monte. Con el tiempo, mi abuela empezó a recibir a los primeros viajeros que se perdían buscando las cascadas de la zona y terminaban golpeando su puerta pidiendo un lugar donde dormir.",
      photo: {
        src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=900&auto=format&fit=crop",
        alt: "Casa familiar rodeada de vegetación",
      },
    },
    {
      eyebrow: "La cocina de Carola",
      title: "El desayuno que todos recuerdan",
      body: "Cada mañana empieza igual: pan casero recién horneado, dulces hechos en la casa y el mate cebado por mi abuela mientras cuenta alguna historia del pueblo. No hay dos desayunos iguales, porque todo depende de lo que haya en la huerta ese día.",
      photo: {
        src: "https://images.unsplash.com/photo-1505692794403-34d4982f88aa?q=80&w=900&auto=format&fit=crop",
        alt: "Mesa servida con desayuno casero",
      },
    },
    {
      eyebrow: "Hoy",
      title: "Cuatro generaciones, la misma calidez",
      body: "Hoy seguimos recibiendo viajeros como si fueran de la familia. No hay recepción ni check-in automático, hay charla, mate y un cuarto preparado con cariño. Eso es lo que mi abuela siempre quiso que sintiera cada persona que se queda en esta casa.",
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
      title: "Habitaciones con baño privado",
      description: "Cómodas, cálidas y pensadas para descansar.",
    },
    {
      icon: "desayuno",
      title: "Desayuno incluido",
      description: "Casero, con productos de la huerta y la zona.",
    },
    {
      icon: "wifi",
      title: "Wi-Fi en toda la casa",
      description: "Conexión disponible para quien la necesite.",
    },
    {
      icon: "corazon",
      title: "Atención personalizada",
      description: "Te recibimos como en casa, desde el primer mensaje.",
    },
    {
      icon: "ubicacion",
      title: "Información turística",
      description: "Te ayudamos a planear cada paseo por la zona.",
    },
    {
      icon: "casa",
      title: "Ambiente familiar",
      description: "Tranquilidad, trato cercano y mucha historia.",
    },
    {
      icon: "ropa",
      title: "Ropa blanca",
      description: "Sábanas y toallas siempre impecables.",
    },
    {
      icon: "estrella",
      title: "Espacios para descansar",
      description: "Galerías, patios y rincones con vista a la selva.",
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
      alt: "Desayuno casero servido en la mesa",
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
      alt: "Terraza con vista a la selva",
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
      title: "Senderismo en las Yungas",
      description: "Caminatas guiadas y paisajes increíbles.",
      photo: {
        src: "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=800&auto=format&fit=crop",
        alt: "Sendero de montaña entre la vegetación",
      },
    },
    {
      title: "Observación de aves",
      description: "Gran diversidad de especies autóctonas.",
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
 * TODO(comentarios): estos testimonios son de ejemplo y estan hardcodeados.
 * Cuando este Supabase, la seccion pasa a leer de la tabla `comments`
 * filtrando por `status = 'approved'`.
 */
export const testimonials = {
  eyebrow: "Testimonios",
  title: "Lo que dicen quienes ya vinieron",
  items: [
    {
      quote:
        "Nos sentimos en casa desde el primer minuto. La comida y la calidez de Carola no se olvidan.",
      author: "María José",
      from: "Buenos Aires",
      rating: 5,
    },
    {
      quote:
        "El lugar perfecto para desconectar. Senderos increíbles y la mejor base para visitar las Termas del Jordán.",
      author: "Lucas y Sofía",
      from: "Córdoba",
      rating: 5,
    },
    {
      quote:
        "Nunca había visto una selva así en Jujuy. Un descubrimiento total, y el trato familiar lo hizo inolvidable.",
      author: "Pedro",
      from: "Salta",
      rating: 5,
    },
  ],
} satisfies { eyebrow: string; title: string; items: Testimonial[] };

export const location = {
  eyebrow: "Cómo llegar",
  title: "San Francisco, Valle Grande",
  cardTitle: "A pocos minutos de la selva y las cascadas",
  body: "Estamos en San Francisco, Valle Grande, dentro de las Yungas jujeñas. A poca distancia de senderos, cascadas y del Parque Nacional Calilegua, en un entorno húmedo y verde muy distinto a la Quebrada seca que ya conocés de Jujuy.",
  tags: ["Senderismo", "Cascadas cercanas", "Calilegua", "Avistaje de aves"],
  address: "San Francisco, Valle Grande, Jujuy",
  note: "Te enviamos la ubicación exacta por WhatsApp",
  /** TODO(contenido): reemplazar por las coordenadas reales del hospedaje. */
  coordinates: { lat: -23.6207, lng: -64.9515 },
} as const;

export const contact = {
  eyebrow: "Contacto directo",
  title: "¿Vamos coordinando tu estadía?",
  body: "Escribinos por WhatsApp y te contamos disponibilidad, precios y todo lo que necesites saber. Respondemos todos los días.",
  ctaLabel: "Escribir a Tía Carola por WhatsApp",
  ctaHint: "Respuesta rápida, sin formularios",
} as const;

/** TODO(contenido): completar cuando existan las cuentas. */
export const social = {
  instagram: null as string | null,
  facebook: null as string | null,
} as const;

export const footer = {
  about:
    "Hospedaje rural familiar en las Yungas jujeñas. Naturaleza, descanso e historia real en San Francisco, Valle Grande.",
} as const;
