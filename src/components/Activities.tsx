import Image from "next/image";
import { activities } from "@/content/site";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";

export function Activities() {
  return (
    <section id="que-hacer" className="mx-auto max-w-[1140px] px-6 py-20 sm:py-24">
      <Reveal>
        <SectionHead
          eyebrow={activities.eyebrow}
          title={activities.title}
          subtitle={activities.subtitle}
        />
      </Reveal>

      <Reveal>
        <ul className="grid gap-5 md:grid-cols-2">
          {activities.items.map((activity) =>
            activity.photo ? (
              <li
                key={activity.title}
                className="group relative h-[260px] overflow-hidden rounded-2xl"
              >
                <Image
                  src={activity.photo.src}
                  alt={activity.photo.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-b from-transparent via-transparent to-black/80 p-6">
                  <h3 className="font-display mb-1.5 text-xl text-white">{activity.title}</h3>
                  <p className="text-[13.5px] text-[#eee]">{activity.description}</p>

                  {/* Las licencias Creative Commons exigen nombrar autor y
                      licencia. Va sobre la foto, no escondido en el footer. */}
                  {activity.credit ? (
                    <p className="mt-2 text-[11px] text-white/70">
                      Foto:{" "}
                      <a
                        href={activity.credit.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline underline-offset-2 hover:text-white"
                      >
                        {activity.credit.author}
                      </a>{" "}
                      ·{" "}
                      <a
                        href={activity.credit.licenseUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline underline-offset-2 hover:text-white"
                      >
                        {activity.credit.license}
                      </a>
                    </p>
                  ) : null}
                </div>
              </li>
            ) : (
              /* Sin foto propia ni con licencia libre. Antes que ilustrar el
                 lugar con una imagen de otro lado, se muestra solo el texto. */
              <li
                key={activity.title}
                className="bg-verde-oscuro flex h-[260px] flex-col justify-end rounded-2xl p-6"
              >
                <h3 className="font-display mb-1.5 text-xl text-white">{activity.title}</h3>
                <p className="text-[13.5px] text-[#dfe4d3]">{activity.description}</p>
              </li>
            ),
          )}
        </ul>
      </Reveal>
    </section>
  );
}
