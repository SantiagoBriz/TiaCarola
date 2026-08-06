import { stats } from "@/content/site";
import { Reveal } from "./Reveal";

export function Stats() {
  return (
    <div className="relative z-10 mx-auto -mt-12 max-w-[1140px] px-6">
      <Reveal>
        <dl className="flex flex-col justify-between gap-5 rounded-2xl bg-white px-10 py-8 shadow-[0_12px_32px_rgba(59,42,32,0.12)] sm:flex-row">
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
