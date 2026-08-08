import { contact } from "@/content/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./icons";
import { Reveal } from "./Reveal";

const MENSAJE =
  "¡Hola! Escribo desde la página de Tía Carola. Quería consultar por disponibilidad y precios.";

export function Contact() {
  return (
    <div className="mx-auto max-w-[1140px] px-6">
      <Reveal>
        <section className="bg-superficie rounded-[28px] px-6 py-20 text-center sm:py-24">
          <p className="text-salvia mb-2.5 text-xs font-bold tracking-[0.16em] uppercase">
            {contact.eyebrow}
          </p>
          <h2 className="font-display text-verde-oscuro mb-3.5 text-3xl sm:text-4xl">
            {contact.title}
          </h2>
          <p className="text-tinta-suave mx-auto mb-7 max-w-md text-base">{contact.body}</p>

          <a
            href={buildWhatsAppUrl(MENSAJE)}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-terracota hover:bg-terracota-2 inline-flex items-center gap-3 rounded-full px-8 py-4 text-left text-lg font-bold text-white transition-colors"
          >
            <WhatsAppIcon className="h-6 w-6 shrink-0" />
            <span>
              {contact.ctaLabel}
              <small className="block text-[13px] font-normal opacity-90">{contact.ctaHint}</small>
            </span>
          </a>
        </section>
      </Reveal>
    </div>
  );
}
