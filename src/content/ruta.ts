/**
 * Puntos de referencia del camino hasta el hospedaje.
 *
 * ⚠️ TODO(contenido): las coordenadas son APROXIMADAS, sacadas de la
 * ubicacion general de cada localidad. Sirven para que el mapa se entienda,
 * pero NO para navegar. Antes de publicar hay que reemplazarlas por las
 * reales — sobre todo la del hospedaje, que hoy apunta al pueblo y no a
 * "El Churqui s/n".
 */

export type PuntoDeRuta = {
  id: string;
  nombre: string;
  detalle: string;
  lat: number;
  lng: number;
  /** El destino se dibuja mas grande y en color de acento. */
  destino?: boolean;
};

export const puntosDeRuta: PuntoDeRuta[] = [
  {
    id: "libertador",
    nombre: "Libertador Gral. San Martín",
    detalle: "Desde acá se toma la ruta provincial 83. Última estación de servicio del camino.",
    lat: -23.809,
    lng: -64.79,
  },
  {
    id: "calilegua",
    nombre: "Parque Nacional Calilegua",
    detalle: "La ruta 83 lo atraviesa. Selva de montaña, curvas y mucha vegetación.",
    lat: -23.7386,
    lng: -64.8536,
  },
  {
    id: "valle-grande",
    nombre: "Valle Grande",
    detalle: "Cabecera del departamento, ya en pleno corazón de las Yungas.",
    lat: -23.4747,
    lng: -64.95,
  },
  {
    id: "san-francisco",
    nombre: "San Francisco",
    detalle: "El pueblo. Aproximadamente 2 horas desde la ruta principal.",
    lat: -23.6167,
    lng: -64.9333,
  },
  {
    id: "tia-carola",
    nombre: "Tía Carola",
    detalle: "El Churqui s/n, dentro del predio municipal, frente a la antena de telefonía móvil.",
    lat: -23.6155,
    lng: -64.9305,
    destino: true,
  },
];

/** Trazado aproximado de la ruta 83, solo para dar la idea del recorrido. */
export const trazadoRuta83: [number, number][] = [
  [-23.809, -64.79],
  [-23.78, -64.82],
  [-23.7386, -64.8536],
  [-23.69, -64.9],
  [-23.6167, -64.9333],
  [-23.6155, -64.9305],
];
