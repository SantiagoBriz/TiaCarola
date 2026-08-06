"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Retraso en ms, para escalonar varios bloques de una misma seccion. */
  delay?: number;
};

/**
 * Aparicion suave al entrar en pantalla.
 *
 * Es el unico componente de cliente de la landing: necesita
 * IntersectionObserver, que solo existe en el navegador.
 *
 * Arranca visible y solo se oculta si el navegador soporta la animacion y el
 * usuario no pidio menos movimiento. Asi el contenido nunca queda invisible
 * si el JS no carga.
 */
export function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [hidden, setHidden] = useState(false);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const prefiereMenosMovimiento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefiereMenosMovimiento) return;

    const el = ref.current;
    if (!el) return;

    setHidden(true);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const estado = !hidden || shown ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0";

  return (
    <div
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={`transition-all duration-700 ease-out ${estado} ${className}`}
    >
      {children}
    </div>
  );
}
