import { EventCard } from "./ui/common";
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
          <div className="bg-blue-400">
            <HomeSwiper />
          </div>
        </section>
        <section id="eventos-destacados">
          <div className="p-5">
            <p className="text-xl font-medium text-gray-900 dark:text-white">
              Eventos Destacados
            </p>
            <div
              id="eventos-destacados-cards"
              className="grid md:grid-cols-2 sm:grid-cols-2 grid-cols-2 gap-5"
            >
              <EventCard />
              <EventCard />
              <EventCard />
              <EventCard />
              <EventCard />
              <EventCard />
              <EventCard />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
