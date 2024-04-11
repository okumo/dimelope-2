import {
  EventosDestacados,
  HeaderSwiper,
  HomeSwiper,
  MobileNavigationMenu,
  Navbar,
} from "./ui/components";

export default function Home() {
  return (
    <main>
      <div className="min-h-full relative">
        <header>
          <Navbar />
        </header>
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
        <div className="hidden md:block">
          <button
            type="button"
            className="fixed bottom-4 right-4 text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 me-2 mb-2"
          >
            🎉 CREA TU EVENTO 🎉
          </button>
        </div>
        <section id="navbar-footer">
          <MobileNavigationMenu />
        </section>
      </div>
    </main>
  );
}
