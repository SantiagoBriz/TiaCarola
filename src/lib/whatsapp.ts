/**
 * Armado de links a WhatsApp.
 *
 * Las reservas se manejan con `wa.me` y no con la Cloud API de Meta: los
 * duenios atienden desde su telefono de siempre y la API oficial exige un
 * numero dedicado que dejaria de funcionar en la app normal.
 * Ver `docs/stack-y-convenciones.md`.
 */

/**
 * Numero de reemplazo mientras no exista `.env.local`. Es el del mockup, no
 * uno real: sirve para que el sitio se pueda levantar en local sin configurar
 * nada, pero no debe llegar a produccion.
 *
 * TODO(contenido): cargar `NEXT_PUBLIC_WHATSAPP_NUMBER` con el numero real en
 * Vercel (produccion, staging y preview) y en el `.env.local` de cada uno.
 */
const NUMERO_PLACEHOLDER = "5493886000000";

/** Formato internacional sin `+` ni separadores, como lo espera `wa.me`. */
export function getWhatsAppNumber(): string {
  const fromEnv = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "");
  return fromEnv && fromEnv.length > 0 ? fromEnv : NUMERO_PLACEHOLDER;
}

/**
 * Devuelve el link de WhatsApp, con el mensaje ya escrito si se le pasa uno.
 * El huesped ve el texto antes de enviarlo y puede editarlo.
 */
export function buildWhatsAppUrl(message?: string): string {
  const base = `https://wa.me/${getWhatsAppNumber()}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}
