"use client";

import { useEffect, useState } from "react";
import { nav, site } from "@/content/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`bg-crema/85 sticky top-0 z-50 backdrop-blur transition-shadow ${
        scrolled ? "shadow-[0_2px_14px_rgba(59,42,32,0.08)]" : ""
      }`}
    >
      <nav
        aria-label="Principal"
        className="mx-auto flex max-w-[1140px] items-center justify-between gap-4 px-6 py-4"
      >
        <a href="#top" className="font-display text-verde-oscuro text-xl">
          <span aria-hidden="true">🌿</span> {site.name}
        </a>

        <ul className="hidden gap-7 lg:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-tinta hover:text-terracota text-sm font-medium transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={buildWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-terracota hover:bg-terracota-2 rounded-full px-4 py-2.5 text-xs font-bold whitespace-nowrap text-white transition-colors"
        >
          Escribinos por WhatsApp
        </a>
      </nav>
    </header>
  );
}
