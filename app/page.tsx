import { CardEvent } from "./ui/common";
import { HeaderSwiper, HomeSwiper, Navbar } from "./ui/components";

export default function Home() {
  return (
    <main>
      <div className="min-h-full">
        <header>
          <Navbar />
        </header>
        <section id="carousel-event-categories">
          <div className="bg-red-500">
            <HeaderSwiper />
          </div>
        </section>
        <section id="carousel-events-top">
          <div className="bg-orange-400">
            <HomeSwiper />
          </div>
        </section>
        <section id="eventos-destacados">
          <div className="p-5">
            <p className="text-xl font-medium text-gray-900 dark:text-white py-2">
              Eventos Destacados
            </p>
            <div
              id="eventos-destacados-cards"
              className="grid md:grid-cols-2 sm:grid-cols-2 grid-cols-2 gap-5"
            >
              <CardEvent
                imageSrc="https://static.vaope.com/public/products/1023/large/9977-GRILLA_SAN-MARTIN.jpg"
                imageWidth={350}
                imageHeight={350}
                dateTime="Martes 09 Abr. - 01:00pm"
                description="Estadio Iván Elías Moreno, Av. los Alamos - VILLA EL SALVADOR - LIMA"
                title="San Martín vs Binacional"
              />
              <CardEvent
                imageSrc="https://static.vaope.com/public/products/1023/large/9977-GRILLA_SAN-MARTIN.jpg"
                imageWidth={350}
                imageHeight={350}
                dateTime="Martes 09 Abr. - 01:00pm"
                description="Estadio Iván Elías Moreno, Av. los Alamos - VILLA EL SALVADOR - LIMA"
                title="San Martín vs Binacional"
              />
              <CardEvent
                imageSrc="https://static.vaope.com/public/products/1023/large/9977-GRILLA_SAN-MARTIN.jpg"
                imageWidth={350}
                imageHeight={350}
                dateTime="Martes 09 Abr. - 01:00pm"
                description="Estadio Iván Elías Moreno, Av. los Alamos - VILLA EL SALVADOR - LIMA"
                title="San Martín vs Binacional"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
