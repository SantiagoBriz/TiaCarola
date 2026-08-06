import type { ServiceIconName } from "@/content/site";

const paths: Record<ServiceIconName, React.ReactNode> = {
  cama: (
    <>
      <path d="M3 18v-6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6" />
      <path d="M3 18v2M21 18v2M3 12V9a2 2 0 0 1 2-2h4v5" />
    </>
  ),
  desayuno: (
    <>
      <path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
      <path d="M6 2v3M10 2v3M14 2v3" />
    </>
  ),
  wifi: <path d="M5 13a10 10 0 0 1 14 0M8.5 16.5a5 5 0 0 1 7 0M12 20h.01" />,
  corazon: (
    <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 1 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" />
  ),
  fuego: (
    <path d="M12 2s4 4.5 4 8a4 4 0 0 1-8 0c0-1.2.5-2.3 1-3 0 1.5.8 2.3 1.5 2.3S12 8.5 12 7c0-1.6 0-3.4 0-5zM6 20h12" />
  ),
  ubicacion: (
    <>
      <path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </>
  ),
  ropa: <path d="M3 12h18M3 6h18M3 18h18" />,
  arbol: (
    <>
      <path d="M12 2 6.5 10h3L5 17h14l-4.5-7h3z" />
      <path d="M12 17v5" />
    </>
  ),
};

/** Iconos de servicios. Decorativos: el significado lo da el texto al lado. */
export function ServiceIcon({ name }: { name: ServiceIconName }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-6 w-6"
    >
      {paths[name]}
    </svg>
  );
}

export function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M16.001 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.26.6 4.45 1.73 6.38L3.2 28.8l6.6-1.7a12.75 12.75 0 0 0 6.2 1.58h.01c7.06 0 12.8-5.74 12.8-12.8s-5.74-12.68-12.81-12.68zm7.47 18.09c-.32.9-1.87 1.72-2.6 1.83-.66.1-1.5.14-2.42-.15-.56-.17-1.27-.4-2.2-.78-3.86-1.67-6.38-5.55-6.58-5.81-.19-.26-1.57-2.08-1.57-3.97s1-2.81 1.36-3.2c.36-.38.78-.48 1.04-.48s.52 0 .75.01c.24.01.56-.09.87.67.32.77 1.09 2.66 1.19 2.85s.16.42.03.68c-.13.26-.19.42-.38.64-.19.22-.4.5-.57.67-.19.19-.39.4-.17.78.23.38 1 1.65 2.14 2.67 1.47 1.31 2.71 1.72 3.09 1.91.38.19.6.16.82-.1.23-.26.97-1.13 1.23-1.52.26-.38.51-.32.86-.19.35.13 2.23 1.05 2.62 1.24.38.19.64.29.73.45.1.16.1.9-.22 1.8z" />
    </svg>
  );
}
