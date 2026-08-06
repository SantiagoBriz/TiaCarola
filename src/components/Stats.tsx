import { stats } from "@/content/site";
import { Reveal } from "./Reveal";

/**
 * Va despues de la historia, no pegada al hero: lo primero que se lee al bajar
 * tiene que ser el relato de como empezo la casa, no un tablero de numeros.
 */
export function Stats() {
  return (
    <div className="mx-auto max-w-[1140px] px-6">
      <Reveal>
        <dl className="flex flex-col justify-between gap-6 rounded-2xl bg-white px-10 py-8 shadow-[0_12px_32px_rgba(31,59,39,0.10)] sm:flex-row">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <dd className="font-display text-verde-oscuro text-3xl">{stat.value}</dd>
              <dt className="text-tinta-suave mt-1 text-[13px]">{stat.label}</dt>
            </div>
          ))}
        </dl>
      </Reveal>
    </div>
  );
}
