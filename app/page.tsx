import { HeaderSwiper, Navbar } from "./ui/components";

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
      </div>
    </main>
  );
}
