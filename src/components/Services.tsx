import { services } from "@/content/site";
import { ServiceIcon } from "./icons";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";

export function Services() {
  return (
    <section id="servicios" className="mx-auto max-w-[1140px] px-6 py-20 sm:py-24">
      <Reveal>
        <SectionHead eyebrow={services.eyebrow} title={services.title} />
      </Reveal>

      <Reveal>
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.items.map((service) => (
            <li
              key={service.title}
              className="bg-crema-2 rounded-2xl p-6 transition duration-200 hover:-translate-y-1 hover:bg-white hover:shadow-[0_10px_24px_rgba(59,42,32,0.08)]"
            >
              <div className="text-verde-oscuro mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white">
                <ServiceIcon name={service.icon} />
              </div>
              <h3 className="font-display text-verde-oscuro mb-1.5 text-base">{service.title}</h3>
              <p className="text-tinta-suave text-[13.5px] leading-relaxed">
                {service.description}
              </p>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
