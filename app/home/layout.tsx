import { Metadata } from "next";
import { MobileNavigationMenu, Navbar } from "../ui/components";

export const metadata: Metadata = {
  title: "Home",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <div className="min-h-full relative">
        <header>
          <Navbar />
        </header>
        {children}
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
