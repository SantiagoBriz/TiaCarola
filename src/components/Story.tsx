import Image from "next/image";
import { story } from "@/content/site";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";

export function Story() {
  return (
    <section id="historia" className="mx-auto max-w-[1140px] px-6 py-20 sm:py-24">
      <Reveal>
        <SectionHead eyebrow={story.eyebrow} title={story.title} subtitle={story.subtitle} />
      </Reveal>

      <div className="flex flex-col gap-20">
        {story.chapters.map((chapter, index) => {
          const invertido = index % 2 === 1;
          return (
            <Reveal key={chapter.title}>
              <article className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
                <div
                  className={`relative h-[300px] overflow-hidden rounded-2xl sm:h-[380px] ${
                    invertido ? "md:order-2" : ""
                  }`}
                >
                  <Image
                    src={chapter.photo.src}
                    alt={chapter.photo.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>

                <div>
                  <p className="font-display text-verde-600 mb-2.5 text-[15px] font-semibold">
                    {chapter.eyebrow}
                  </p>
                  <h3 className="font-display text-verde-oscuro mb-3.5 text-2xl">
                    {chapter.title}
                  </h3>
                  <p className="text-tinta text-[15.5px] leading-[1.75]">{chapter.body}</p>

                  {chapter.quote ? (
                    <figure className="border-salvia mt-5 border-l-4 pl-5">
                      <blockquote className="text-tinta text-[15px] leading-[1.7] italic">
                        “{chapter.quote.text}”
                      </blockquote>
                      <figcaption className="text-tinta-suave mt-2 text-[13px] font-bold">
                        — {chapter.quote.author}
                      </figcaption>
                    </figure>
                  ) : null}

                  {chapter.signature ? (
                    <p className="font-hand text-terracota mt-4 text-3xl">{chapter.signature}</p>
                  ) : null}
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
