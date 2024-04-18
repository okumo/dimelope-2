import {
  EventosDestacados,
  HeaderSwiper,
  HomeSwiper,
} from "@/app/ui/components";

export default async function Page() {
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
          <p className="text-xl font-medium text-gray-900 dark:text-white py-2">
            Eventos Destacados
          </p>
          <EventosDestacados />
        </div>
      </section>
      <section id="eventos-proximos">
        <div className="p-5">
          <p className="text-xl font-medium text-gray-900 dark:text-white py-2">
            Próximos Eventos
          </p>
          <EventosDestacados />
        </div>
      </section>
    </main>
  );
}
