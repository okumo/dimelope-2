import { SocialIcon } from "react-social-icons";
import { ImageEventView } from "./styles";
import { DocumentDuplicateIcon } from "@heroicons/react/24/solid";
import { HeartIcon } from "@heroicons/react/24/solid";
import { TicketIcon } from "@heroicons/react/24/outline";

export default function Page() {
  return (
    <main>
      <section id="portada">
        <ImageEventView className="w-full bg-black flex justify-center">
          <img
            className="object-center max-h-96 object-contain sm:object-fill"
            src="https://static.vaope.com/public/products/1062/7108-SLIDER_ATE.jpg?w=1500"
            alt="nature image"
          />
        </ImageEventView>
      </section>
      <section id="fecha-lugar">
        <div className="flex md:flex md:justify-center md:gap-96 p-4 md:p-0">
          <div className="md:flex flex flex-row">
            <div
              id="fecha"
              className="bg-yellow-400 flex-col  text-center rounded-2xl p-1 md:p-4"
            >
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                30
              </p>
              <p className="font-bold"> ABR</p>
              <p className="font-bold"> 06:00PM</p>
            </div>
            <div className="flex flex-col justify-center p-2 text-gray-600 md:px-4">
              <p className="text-xl font-mono font-bold text-gray-900 dark:text-white flex-row md:text-3xl">
                Gigante Complejo Angaraes
              </p>

              <p className="font-mono antialiased font-bold flex-row md:text-xl">
                Paradero Horacio Zevallos Km 15.5
              </p>
              <p className="font-mono antialiased font-bold flex-row md:text-xl">
                C.C. - ATE - LIMA
              </p>
            </div>
          </div>

          <div className=" flex-row self-center gap-4 hidden md:flex">
            <HeartIcon className="h-10 w-10 text-gray-400" />
            <div>
              <button
                type="button"
                className="focus:outline-none text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-bold rounded-lg text-base px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 flex gap-4 items-center"
              >
                <TicketIcon className="h-6 w-6" />
                Comprar entradas
              </button>
            </div>
          </div>
        </div>
      </section>
      <section id="compartir">
        <div className="p-4 md:px-80 md:py-10">
          <p className="font-medium uppercase leading-tight text-base">
            COMPARTE:{" "}
            <SocialIcon
              url="https://linkedin.com/in/couetilc"
              style={{ height: 25, width: 25 }}
              className="mr-2"
            />
            <SocialIcon
              network="x"
              style={{ height: 25, width: 25 }}
              className="mr-2"
            />
            <SocialIcon
              network="facebook"
              style={{ height: 25, width: 25 }}
              className="mr-2"
            />
            <SocialIcon
              network="whatsapp"
              style={{ height: 25, width: 25 }}
              className="mr-2"
            />
            <SocialIcon
              network="email"
              style={{ height: 25, width: 25 }}
              className="mr-2"
            />
          </p>
        </div>
      </section>

      <section id="detalles-evento">
        <div className="px-4 py-4 md:px-80">
          <p className="uppercase font-bold md:text-2xl">
            AGUA MARINA EN COMPLEJO ANGARAES ATE POR EL FELIZ DÍA DEL TRABAJADOR
          </p>
          <span className="text-sm font-mono font-semibold antialiased text-gray-600 md:text-lg">
            ¡Por Primera vez!
          </span>
        </div>
        <div className="flex flex-col p-4 md:px-80">
          <div className="border-b-2 pb-6">
            <h2 className="font-semibold py-2 text-xl text-gray-900 md:font-bold">
              Detalles del evento
            </h2>
            <div className="md:flex md:py-2">
              <p className="text-gray-900 font-semibold text-base md:w-32">
                Fecha:
              </p>
              <span className="text-gray-700 font-light text-base">
                Martes 30 abril de 2024
              </span>
            </div>
            <div className="md:flex md:py-2">
              <p className="text-gray-900 font-semibold text-base md:w-32">
                Hora:
              </p>
              <span className="text-gray-700 font-light text-base">
                08:00pm
              </span>
            </div>
            <div className="md:flex md:py-2">
              <p className="text-gray-900 font-semibold text-base md:w-32">
                Dirección:
              </p>
              <span className="text-gray-700 font-light text-base">
                Gigante Complejo Angaraes, Paradero Horacio Zevallos Km 15.5
                C.C. - ATE - LIMA
              </span>
            </div>
          </div>
          <div className="pt-6">
            <span>
              ¡Celebra el Feliz Día del Trabajador con Agua Marina en el
              Complejo Angaraes Ate! Disfruta de la mejor música y la alegría de
              la cumbia en vivo. ¡No te lo puedes perder!
            </span>
          </div>
        </div>
      </section>

      <section id="comprar-entradas">
        <div className="p-4 md:px-80">
          <p className="text-xl font-bold text-gray-900 dark:text-white">
            Elige el tipo de entrada
          </p>
        </div>
        <div className="md:flex md:px-80 md:flex-row">
          <div className=" border-yellow-700 flex flex-col p-4 border m-4 rounded-lg md:w-full">
            <p className="font-bold p-1">ZONA VIP</p>
            <p className="font-bold p-1">S/ 60.00</p>
            <button
              type="button"
              className=" py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Comprar
            </button>
            <div className="flex gap-4 items-center">
              <TicketIcon className="h-5 w-5" />
              <p>Por persona</p>
            </div>
          </div>

          <div className=" border-blue-600 flex flex-col p-4 border m-4 rounded-lg md:w-full">
            <p className="font-bold p-1 text-blue-600">ZONA GENERAL</p>
            <p className="font-bold p-1 text-blue-600">S/ 30.00</p>
            <button
              type="button"
              className=" py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Comprar
            </button>
            <div className="flex gap-4 items-center">
              <TicketIcon className="h-5 w-5" />
              <p>Por persona</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
