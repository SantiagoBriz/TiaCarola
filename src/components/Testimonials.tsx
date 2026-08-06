import { testimonials } from "@/content/site";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";

export function Testimonials() {
  return (
    <section className="mx-auto max-w-[1140px] px-6 py-20 sm:py-24">
      <Reveal>
        <SectionHead eyebrow={testimonials.eyebrow} title={testimonials.title} centered />
      </Reveal>

      <Reveal>
        <ul className="grid gap-5 md:grid-cols-3">
          {testimonials.items.map((testimonial) => (
            <li
              key={testimonial.author}
              className="border-salvia rounded-2xl border-l-4 bg-white p-7 shadow-[0_6px_20px_rgba(31,59,39,0.06)]"
            >
              <figure>
                <blockquote className="text-tinta mb-4 text-[15px] leading-relaxed italic">
                  “{testimonial.quote}”
                </blockquote>
                <figcaption>
                  <span className="text-verde-oscuro block text-sm font-bold">
                    {testimonial.author}
                  </span>
                  <span className="text-tinta-suave block text-[12.5px]">
                    {[testimonial.from, testimonial.date].filter(Boolean).join(" · ")}
                  </span>
                  {/* Decir de donde salio la resena: son publicas, no propias. */}
                  <span className="text-salvia mt-1 block text-[11.5px] font-bold uppercase">
                    vía {testimonial.source}
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
