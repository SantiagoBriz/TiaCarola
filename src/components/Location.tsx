import { location, site } from "@/content/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { Reveal } from "./Reveal";
import { RouteMap } from "./RouteMap";
import { SectionHead } from "./SectionHead";

const MENSAJE =
  "¡Hola! Escribo desde la página de Tía Carola. Quería consultar cómo llegar y el estado del camino.";

export function Location() {
  return (
    <section id="ubicacion" className="mx-auto max-w-[1140px] px-6 py-20 sm:py-24">
      <Reveal>
        <SectionHead eyebrow={location.eyebrow} title={location.title} />
      </Reveal>

      <Reveal>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <RouteMap />

          <div className="bg-verde-oscuro flex flex-col justify-between rounded-2xl p-8 text-[#f3e9d8]">
            <div>
              <h3 className="font-display mb-2.5 text-2xl text-white">{location.cardTitle}</h3>
              <p className="mb-5 text-[14.5px] leading-[1.7] text-[#dfe4d3]">{location.body}</p>

              <ul className="mb-6 flex flex-wrap gap-2.5">
                {location.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-[12.5px]"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>

            <address className="space-y-3 text-sm not-italic">
              <p>
                <span aria-hidden="true">📍</span> {site.address}
              </p>
              <p className="text-[13px] text-[#b9c4ac]">{site.addressDetail}</p>
              <p>
                <a
                  href={buildWhatsAppUrl(MENSAJE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-white/40 underline-offset-4 hover:decoration-white"
                >
                  <span aria-hidden="true">💬</span> {location.note}
                </a>
              </p>
            </address>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
