/**
 * Aviso de contenido provisorio.
 *
 * Las fotos son de bancos de imagenes y los testimonios vienen de resenas
 * publicas de TripAdvisor: nada de eso es material propio de la familia.
 *
 * TODO(contenido): borrar este componente y su uso en `page.tsx` cuando esten
 * las fotos y los testimonios propios.
 */
export function TempContentNotice() {
  return (
    <div className="bg-verde-900 text-salvia-clara px-6 py-2.5 text-center text-[13px]">
      <p className="mx-auto max-w-[1140px]">
        <strong className="font-bold text-white">Versión de trabajo.</strong> Las fotos son de
        muestra y los testimonios provienen de reseñas públicas de TripAdvisor. Se reemplazan por
        material propio antes de publicar.
      </p>
    </div>
  );
}
