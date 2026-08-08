import { Activities } from "@/components/Activities";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { Location } from "@/components/Location";
import { Nav } from "@/components/Nav";
import { Services } from "@/components/Services";
import { Stats } from "@/components/Stats";
import { Story } from "@/components/Story";
import { TempContentNotice } from "@/components/TempContentNotice";
import { Testimonials } from "@/components/Testimonials";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export default function HomePage() {
  return (
    <>
      <TempContentNotice />
      <Nav />
      <main>
        <Hero />
        {/* Primero la historia: es lo que explica el lugar. Los numeros van
            despues, cuando ya se entiende de que casa se habla. */}
        <Story />
        <Stats />
        <Services />
        <Gallery />
        <Activities />
        <Testimonials />
        <Location />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
