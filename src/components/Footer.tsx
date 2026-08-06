import { footer, nav, site, social } from "@/content/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const anio = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="bg-verde-oscuro mt-20 px-6 pt-16 pb-8 text-[#cfd8c4]">
      <div className="mx-auto grid max-w-[1140px] gap-10 border-b border-white/10 pb-9 md:grid-cols-[2fr_1fr_1fr]">
        <div>
          <p className="font-display mb-3.5 text-2xl text-white">
            <span aria-hidden="true">🌿</span> {site.name}
          </p>
          <p className="max-w-xs text-sm leading-[1.7] text-[#b9c4ac]">{footer.about}</p>
        </div>

        <nav aria-label="Secciones del sitio">
          <h2 className="mb-3.5 text-sm font-medium text-white">Navegación</h2>
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="mb-2.5 block text-sm text-[#b9c4ac] transition-colors hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="mb-3.5 text-sm font-medium text-white">Contacto</h2>
          <ul>
            <li>
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="mb-2.5 block text-sm text-[#b9c4ac] transition-colors hover:text-white"
              >
                WhatsApp
              </a>
            </li>
            {/* Las redes se muestran solo si existen: un link muerto es peor
                que no tener el link. */}
            {social.instagram ? (
              <li>
                <a
                  href={social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mb-2.5 block text-sm text-[#b9c4ac] transition-colors hover:text-white"
                >
                  Instagram
                </a>
              </li>
            ) : null}
            {social.facebook ? (
              <li>
                <a
                  href={social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mb-2.5 block text-sm text-[#b9c4ac] transition-colors hover:text-white"
                >
                  Facebook
                </a>
              </li>
            ) : null}
          </ul>
        </div>
      </div>

      <p className="mx-auto mt-6 max-w-[1140px] text-center text-[13px] text-[#94a186]">
        © {anio} {site.name} · {site.tagline} · {site.location}
      </p>
    </footer>
  );
}
