"use client";

import { useEffect, useRef, useState } from "react";
import "leaflet/dist/leaflet.css";
import { puntosDeRuta, trazadoRuta83, type PuntoDeRuta } from "@/content/ruta";

// Colores de la paleta. Leaflet dibuja sobre canvas/SVG y no lee clases de
// Tailwind, asi que hay que pasarselos como valores.
const VERDE_OSCURO = "#1F3B27";
const SALVIA = "#7C9473";
const TERRACOTA = "#C1622D";

export function RouteMap() {
  const contenedor = useRef<HTMLDivElement>(null);
  const [error, setError] = useState(false);
  const [seleccionado, setSeleccionado] = useState<PuntoDeRuta | null>(null);

  useEffect(() => {
    const el = contenedor.current;
    if (!el) return;

    let mapa: import("leaflet").Map | undefined;
    let cancelado = false;

    // Import dinamico: Leaflet toca `window` al cargarse, asi que no puede
    // ejecutarse durante el render del servidor.
    void (async () => {
      try {
        const L = await import("leaflet");
        if (cancelado || !contenedor.current) return;

        mapa = L.map(el, { scrollWheelZoom: false });

        L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
          maxZoom: 17,
          attribution: "&copy; colaboradores de OpenStreetMap",
        }).addTo(mapa);

        L.polyline(trazadoRuta83, {
          color: VERDE_OSCURO,
          weight: 4,
          opacity: 0.75,
          dashArray: "1 8",
          lineCap: "round",
        }).addTo(mapa);

        for (const punto of puntosDeRuta) {
          const marcador = L.circleMarker([punto.lat, punto.lng], {
            radius: punto.destino ? 11 : 7,
            color: "#ffffff",
            weight: 2,
            fillColor: punto.destino ? TERRACOTA : SALVIA,
            fillOpacity: 1,
          }).addTo(mapa);

          marcador.bindTooltip(punto.nombre, { direction: "top", offset: [0, -8] });
          marcador.bindPopup(`<strong>${punto.nombre}</strong><br>${punto.detalle}`, {
            closeButton: false,
          });
          marcador.on("click", () => setSeleccionado(punto));
        }

        mapa.fitBounds(
          puntosDeRuta.map((p) => [p.lat, p.lng] as [number, number]),
          { padding: [40, 40] },
        );
      } catch {
        // Si Leaflet o los tiles no cargan, la lista de puntos de abajo sigue
        // dando la informacion. El mapa es un complemento, no el unico medio.
        if (!cancelado) setError(true);
      }
    })();

    return () => {
      cancelado = true;
      mapa?.remove();
    };
  }, []);

  return (
    <div>
      {error ? (
        <div className="bg-crema-2 text-tinta-suave flex h-[420px] w-full items-center justify-center rounded-2xl px-6 text-center text-sm">
          No se pudo cargar el mapa. Abajo está el detalle del camino, punto por punto.
        </div>
      ) : (
        <div
          ref={contenedor}
          role="application"
          aria-label="Mapa del camino hasta Tía Carola"
          className="h-[420px] w-full overflow-hidden rounded-2xl"
        />
      )}

      {/* La misma informacion en texto: el mapa no es accesible por teclado ni
          para lectores de pantalla, asi que la lista no es opcional. */}
      <ol className="mt-5 space-y-3">
        {puntosDeRuta.map((punto, index) => (
          <li key={punto.id}>
            <button
              type="button"
              onClick={() => setSeleccionado(punto)}
              aria-pressed={seleccionado?.id === punto.id}
              className={`flex w-full items-start gap-3 rounded-xl px-3 py-2.5 text-left transition-colors ${
                seleccionado?.id === punto.id ? "bg-crema-2" : "hover:bg-crema-2/60"
              }`}
            >
              <span
                aria-hidden="true"
                className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[11px] font-bold text-white ${
                  punto.destino ? "bg-terracota" : "bg-salvia"
                }`}
              >
                {index + 1}
              </span>
              <span>
                <span className="text-verde-oscuro block text-sm font-bold">{punto.nombre}</span>
                <span className="text-tinta-suave block text-[13px] leading-relaxed">
                  {punto.detalle}
                </span>
              </span>
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
