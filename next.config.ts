import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // Fija la raiz en este repo. Sin esto Turbopack sube por el arbol de
    // directorios y toma archivos de workspace ajenos al proyecto.
    root: path.resolve(import.meta.dirname),
  },
};

export default nextConfig;
