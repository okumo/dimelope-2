import { EventosDestacados, HeaderSwiper, HomeSwiper } from "./ui/components";

export default function Home() {
  return (
    <main>
      <section id="carousel-event-categories">
        <div className="bg-slate-900">
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
          <div className="bg-yellow-300 rounded-lg p-2 my-2">
            <p className="text-xl font-semibold text-gray-900 dark:text-white py-2">
              Eventos Destacados
            </p>
          </div>

          <EventosDestacados />
        </div>
      </section>
      <section id="eventos-proximos">
        <div className="p-5">
          <div className="bg-yellow-300 rounded-lg p-2 my-2">
            <p className="text-xl font-semibold text-gray-900 dark:text-white py-2">
              Próximos Eventos
            </p>
          </div>

          <EventosDestacados />
        </div>
      </section>
    </main>
  );
}
