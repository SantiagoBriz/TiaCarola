/**
 * Puntos de referencia del camino hasta el hospedaje.
 *
 * El recorrido arranca en San Salvador de Jujuy, que es de donde sale casi
 * todo el mundo: ruta 34 pasando San Pedro y el Puente San Lorenzo, y desde
 * Libertador General San Martin la ruta provincial 83, que atraviesa el
 * Parque Nacional Calilegua hasta San Francisco.
 * Fuente del recorrido: nota de Seguime Jujuy sobre Tia Carola (12/05/2022).
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
    id: "san-salvador",
    nombre: "San Salvador de Jujuy",
    detalle: "Punto de partida habitual. Se toma la ruta 34 hacia el este.",
    lat: -24.1858,
    lng: -65.2995,
  },
  {
    id: "san-pedro",
    nombre: "San Pedro de Jujuy",
    detalle: "Sobre la ruta 34. Después viene el Puente San Lorenzo.",
    lat: -24.2294,
    lng: -64.868,
  },
  {
    id: "libertador",
    nombre: "Libertador Gral. San Martín",
    detalle: "Acá se deja la 34 y empieza la ruta provincial 83. Última estación de servicio.",
    lat: -23.809,
    lng: -64.79,
  },
  {
    id: "calilegua",
    nombre: "Parque Nacional Calilegua",
    detalle: "La ruta 83 lo atraviesa. Camino de cornisa, curvas y selva de montaña.",
    lat: -23.7386,
    lng: -64.8536,
  },
  {
    id: "san-francisco",
    nombre: "San Francisco",
    detalle:
      "Unas 2 horas de montaña desde la ruta principal. Conviene hacerlo de día: en época de lluvias puede haber derrumbes.",
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

/** Trazado aproximado del recorrido, solo para dar la idea del camino. */
export const trazadoRuta83: [number, number][] = [
  [-24.1858, -65.2995],
  [-24.2294, -64.868],
  [-24.0, -64.82],
  [-23.809, -64.79],
  [-23.78, -64.82],
  [-23.7386, -64.8536],
  [-23.69, -64.9],
  [-23.6167, -64.9333],
  [-23.6155, -64.9305],
];
