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
  /**
   * Opcional a proposito: de las Termas del Rio Jordan y la Cascada La Toma
   * no hay fotos propias ni con licencia libre. Sin foto, la tarjeta se
   * dibuja como bloque de texto en vez de mostrar una imagen de otro lugar.
   */
  photo?: Photo;
  /**
   * Credito de la foto. Obligatorio cuando la imagen no es propia: las
   * licencias Creative Commons exigen nombrar al autor y la licencia.
   */
  credit?: {
    author: string;
    license: string;
    licenseUrl: string;
    sourceUrl: string;
  };
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
  owners: "Lucy Sánchez y Fredy Vera",
  description:
    "Hospedaje familiar en San Francisco, Valle Grande, Jujuy. Atendido por Lucy y Fredy desde 1996.",
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
  title: "Una experiencia única en las Yungas jujeñas",
  subtitle:
    "Con más de 30 años de experiencia, Lucy y Fredy reciben turistas de todo el mundo en su pintoresco alojamiento.",
  photo: {
    src: "/fotos/galeria-atardecer.jpg",
    alt: "La galería de Tía Carola al atardecer, con guirnaldas de luces encendidas, una mesa de madera pintada de rojo y las montañas de las Yungas al fondo",
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
  title: "La casa de Lucy y Fredy",
  subtitle: "Porque Tía Carola es el mejor lugar para conectar con la naturaleza y con uno mismo.",
  chapters: [
    {
      eyebrow: "Los comienzos",
      title: "Vinieron a pasear y se quedaron para siempre",
      body: "En 1996, Lucy Sánchez —docente jubilada— y Fredy Vera —ex mecánico dental— llegaron de paseo a San Francisco. En un mes ya eran dueños del terreno donde hoy está la casa.",
      quote: {
        text: "Nosotros vinimos a pasear y conocer cuando me jubilé, en el año 96. Llegamos y a los 15 días volvimos, y a los 30 días éramos propietarios de este terreno porque el dueño quiso venderlo por un gasto que tenía que cubrir en ese momento.",
        author: "Lucy Sánchez",
      },
      photo: {
        src: "/fotos/primera-foto.jpg",
        alt: "Una de las primeras fotos en Tía Carola: Lucy y Fredy sentados a la mesa, bajo un cartel de madera que dice «Mi rancho». Arriba, escrito a mano: «Una de las primeras fotos en Tía Carola… ¡somos felices!»",
      },
    },
    {
      eyebrow: "La vida en Tía Carola",
      title: "Comida casera en medio de la selva",
      body: "La casa de adobe original conserva el horno de barro, y de esa cocina salen los platos que los viajeros recuerdan años después.",
      quote: {
        text: "En un punto elevado y bello del lugar está la hostería y restaurante Tía Carola, de Lucy y Freddy, encantadores anfitriones que nos obsequiaron con unos sorrentinos gourmet que bien podrían figurar en el menú de un restaurant de alto nivel.",
        author: "Marcelo C., Buenos Aires",
      },
      photo: {
        src: "/fotos/fogon-de-noche.jpg",
        alt: "Fredy junto al fogón circular de la casa, de noche, con las llamas encendidas bajo la parrilla y las luces del pueblo a lo lejos",
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
        src: "/fotos/lucy-y-fredy-entrada.jpg",
        alt: "Lucy y Fredy abrazados en la entrada de Tía Carola, junto al cartel del alojamiento, con el cerro de fondo",
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
      title: "Atención de Lucy y Fredy",
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
      src: "/fotos/yungas-nubes.jpg",
      alt: "El cerro cubierto de selva frente a San Francisco, con las nubes bajando sobre la ladera",
    },
    {
      src: "/fotos/galeria-reposera.jpg",
      alt: "Fredy sentado en una reposera de lona bajo la galería, con la luz de la tarde entrando entre las columnas de madera",
    },
    {
      src: "/fotos/entrada-de-noche.jpg",
      alt: "La entrada de Tía Carola de noche, con el camino de piedra iluminado y el cartel del alojamiento",
    },
    {
      src: "/fotos/galeria-vista-pueblo.jpg",
      alt: "Vista desde la galería hacia el pueblo y los cerros, al caer la tarde",
    },
    {
      src: "/fotos/lucy-y-fredy-jardin.jpg",
      alt: "Lucy y Fredy en el jardín, a contraluz, con las montañas de las Yungas detrás",
    },
    {
      src: "/fotos/cielo-estrellado.jpg",
      alt: "El cielo estrellado sobre San Francisco, con la antena de telefonía que sirve de referencia para llegar",
    },
  ],
} satisfies { eyebrow: string; title: string; photos: Photo[] };

export const activities = {
  eyebrow: "Qué hacer",
  title: "Experiencias cerca de San Francisco",
  subtitle: "Aventura, naturaleza y cultura a pocos minutos del hospedaje.",
  items: [
    {
      title: "Pueblo de San Francisco",
      description: "La vida cotidiana de un pueblo de las Yungas, a pasos de la casa.",
      photo: {
        src: "/fotos/pueblo-san-francisco.jpg",
        alt: "El pueblo de San Francisco visto entre la vegetación, rodeado por los cerros de las Yungas",
      },
      credit: {
        author: "Manela87",
        license: "CC BY-SA 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/deed.es",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:San_Francisco,_Jujuy.jpg",
      },
    },
    {
      title: "Parque Nacional Calilegua",
      description: "Selva de montaña y biodiversidad única. Se atraviesa al venir por la ruta 83.",
      photo: {
        src: "/fotos/parque-calilegua.jpg",
        alt: "Vista panorámica del valle del río San Lorenzo en el Parque Nacional Calilegua",
      },
      credit: {
        author: "Laurent (WikiLaurent)",
        license: "CC BY-SA 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/deed.es",
        sourceUrl:
          "https://commons.wikimedia.org/wiki/File:Calilegua_National_Park_-_View_of_San_Lorenzo_Rio.JPG",
      },
    },
    {
      // TODO(contenido): falta foto propia o con licencia libre.
      title: "Termas del Río Jordán",
      description: "Piscinas naturales de aguas turquesas, entre las paredes del cañón.",
    },
    {
      // TODO(contenido): falta foto propia o con licencia libre.
      title: "Cascada La Toma",
      description: "Una caminata corta desde el pueblo hasta el salto de agua.",
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
  /** Como llegar sin auto propio. */
  transporte: {
    title: "En colectivo desde Ledesma",
    body: "Suben dos empresas desde Ledesma, 24 de Septiembre y 23 de Agosto. Ambas salen a las 8 de la mañana.",
    // TODO(contenido): falta el telefono o contacto de las empresas.
  },
} as const;

export const contact = {
  eyebrow: "Contacto directo",
  title: "¿Vamos coordinando tu estadía?",
  body: "No tomamos reservas online: escribinos por WhatsApp y te contamos disponibilidad, precios y todo lo que necesites saber.",
  ctaLabel: "Escribir a Tía Carola por WhatsApp",
  ctaHint: "Respuesta directa de Lucy y Fredy",
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
