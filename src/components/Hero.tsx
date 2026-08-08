import Image from "next/image";
import { hero } from "@/content/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const MENSAJE_INICIAL =
  "¡Hola! Escribo desde la página de Tía Carola. Quería consultar por disponibilidad.";

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-[600px] items-end sm:h-[92vh]">
      <Image
        src={hero.photo.src}
        alt={hero.photo.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* Oscurece la parte baja para que el texto blanco tenga contraste
          suficiente sin importar como sea la foto que se cargue. */}
      <div
        aria-hidden="true"
        className="from-verde-900/10 to-verde-900/85 absolute inset-0 bg-gradient-to-b"
      />

      <div className="relative mx-auto w-full max-w-[1140px] px-6 py-14">
        <p className="text-salvia-clara mb-3.5 text-xs font-bold tracking-[0.16em] uppercase">
          {hero.eyebrow}
        </p>
        <h1 className="font-display max-w-2xl text-4xl leading-[1.08] text-white sm:text-5xl lg:text-[54px]">
          {hero.title}
        </h1>
        <p className="mt-4 max-w-md text-lg leading-relaxed text-[#f1e9d8]">{hero.subtitle}</p>

        <div className="mt-7 flex flex-wrap gap-3.5">
          <a
            href={buildWhatsAppUrl(MENSAJE_INICIAL)}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-verde-oscuro hover:bg-verde-medio inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-[15px] font-bold text-white transition-colors"
          >
            Consultar por WhatsApp <span aria-hidden="true">→</span>
          </a>
          <a
            href="#historia"
            className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3.5 text-[15px] font-bold text-white transition-colors hover:bg-white/20"
          >
            Conocé nuestra historia
          </a>
        </div>
      </div>
    </section>
  );
}
