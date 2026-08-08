import Image from "next/image";
import { gallery } from "@/content/site";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";

/**
 * Distribucion tipo mosaico. Cada foto ocupa una cantidad distinta de celdas
 * para romper la grilla regular; en pantallas chicas todas pasan a ocupar lo
 * mismo, porque el mosaico deja de leerse.
 */
const spans = [
  "sm:col-span-2 sm:row-span-2",
  "sm:col-span-1 sm:row-span-2",
  "sm:col-span-1 sm:row-span-1",
  "sm:col-span-1 sm:row-span-1",
  "sm:col-span-2 sm:row-span-1",
  "sm:col-span-2 sm:row-span-1",
];

export function Gallery() {
  return (
    <section id="galeria" className="mx-auto max-w-[1140px] px-6 py-20 sm:py-24">
      <Reveal>
        <SectionHead eyebrow={gallery.eyebrow} title={gallery.title} />
      </Reveal>

      <Reveal>
        <ul className="grid auto-rows-[160px] grid-cols-2 gap-3.5 sm:grid-cols-4">
          {gallery.photos.map((photo, index) => (
            <li
              key={photo.src}
              className={`relative overflow-hidden rounded-xl ${spans[index] ?? ""}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 640px) 50vw, 25vw"
                className="object-cover transition duration-500 hover:scale-[1.03] hover:brightness-105"
              />
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
