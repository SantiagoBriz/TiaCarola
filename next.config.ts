import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // Fija la raiz en este repo. Sin esto Turbopack sube por el arbol de
    // directorios y toma archivos de workspace ajenos al proyecto.
    root: path.resolve(import.meta.dirname),
  },
  images: {
    // TODO(contenido): las fotos son placeholders de Unsplash. Cuando esten
    // las reales en `public/fotos/`, borrar este bloque entero: servir
    // imagenes desde un dominio ajeno es una dependencia que no queremos.
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
};

export default nextConfig;
