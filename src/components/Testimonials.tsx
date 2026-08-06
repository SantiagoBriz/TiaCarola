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
              className="border-terracota rounded-2xl border-l-4 bg-white p-7 shadow-[0_6px_20px_rgba(59,42,32,0.05)]"
            >
              {/* Las estrellas son decorativas: el dato accesible es el texto. */}
              <p className="text-verde-oscuro mb-3 tracking-[2px]" aria-hidden="true">
                {"★".repeat(testimonial.rating)}
              </p>
              <p className="sr-only">{testimonial.rating} de 5 estrellas</p>

              <blockquote className="text-tinta mb-4 text-[15px] leading-relaxed italic">
                “{testimonial.quote}”
              </blockquote>
              <p className="text-verde-oscuro text-sm font-bold">{testimonial.author}</p>
              <p className="text-tinta-suave text-[12.5px]">{testimonial.from}</p>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
