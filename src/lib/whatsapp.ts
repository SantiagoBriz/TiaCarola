/**
 * Armado de links a WhatsApp.
 *
 * Las reservas se manejan con `wa.me` y no con la Cloud API de Meta: los
 * duenios atienden desde su telefono de siempre y la API oficial exige un
 * numero dedicado que dejaria de funcionar en la app normal.
 * Ver `docs/stack-y-convenciones.md`.
 */

/**
 * Numero real del hospedaje: +54 9 3886 65-9634.
 *
 * Queda hardcodeado como valor por defecto para que el sitio funcione sin
 * configurar nada, pero `NEXT_PUBLIC_WHATSAPP_NUMBER` lo pisa. Asi se puede
 * apuntar a un numero de prueba en staging sin tocar codigo.
 */
const NUMERO_POR_DEFECTO = "5493886659634";

/** Formato internacional sin `+` ni separadores, como lo espera `wa.me`. */
export function getWhatsAppNumber(): string {
  const fromEnv = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "");
  return fromEnv && fromEnv.length > 0 ? fromEnv : NUMERO_POR_DEFECTO;
}

/** Version legible del numero, para mostrar en pantalla. */
export const WHATSAPP_DISPLAY = "+54 9 3886 65-9634";

/**
 * Devuelve el link de WhatsApp, con el mensaje ya escrito si se le pasa uno.
 * El huesped ve el texto antes de enviarlo y puede editarlo.
 */
export function buildWhatsAppUrl(message?: string): string {
  const base = `https://wa.me/${getWhatsAppNumber()}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}
