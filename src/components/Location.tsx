import { location } from "@/content/site";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";

const { lat, lng } = location.coordinates;
// OpenStreetMap en vez de Google Maps: no necesita API key ni cuenta, y no
// mete cookies de terceros en el sitio.
const mapSrc =
  `https://www.openstreetmap.org/export/embed.html` +
  `?bbox=${lng - 0.1}%2C${lat - 0.06}%2C${lng + 0.1}%2C${lat + 0.06}` +
  `&layer=mapnik&marker=${lat}%2C${lng}`;

export function Location() {
  return (
    <section id="ubicacion" className="mx-auto max-w-[1140px] px-6 py-20 sm:py-24">
      <Reveal>
        <SectionHead eyebrow={location.eyebrow} title={location.title} />
      </Reveal>

      <Reveal>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <iframe
            src={mapSrc}
            loading="lazy"
            title={`Mapa de ${location.address}`}
            className="h-[420px] w-full rounded-2xl border-0"
          />

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

            <div className="space-y-2 text-sm">
              <p>
                <span aria-hidden="true">📍</span> {location.address}
              </p>
              <p>
                <span aria-hidden="true">💬</span> {location.note}
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
