import { SocialIcon } from "react-social-icons";
import { ImageEventView } from "./styles";
import { DocumentDuplicateIcon } from "@heroicons/react/24/solid";

export default function Page() {
  return (
    <main>
      <section>
        <ImageEventView className="w-full bg-black flex justify-center">
          <img
            className="object-center max-h-96 object-contain sm:object-fill"
            src="https://static.vaope.com/public/products/1062/7108-SLIDER_ATE.jpg?w=1500"
            alt="nature image"
          />
        </ImageEventView>
      </section>
      <section id="fecha-lugar">
        <div className="flex ">
          <div
            id="fecha"
            className="bg-yellow-400 flex-col  text-center rounded-2xl p-1"
          >
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              30
            </p>
            <p className="font-bold"> ABR</p>
            <p className="font-bold"> 06:00PM</p>
          </div>

          <div className=" w-full flex flex-col justify-center p-2 text-gray-600">
            <p className="text-xl font-mono font-bold text-gray-900 dark:text-white flex-row">
              Gigante Complejo Angaraes
            </p>

            <p className="font-mono antialiased font-bold flex-row"></p>
            <p className="font-mono antialiased font-bold flex-row">
              Paradero Horacio Zevallos Km 15.5
            </p>
            <p className="font-mono antialiased font-bold flex-row">
              C.C. - ATE - LIMA
            </p>
          </div>
        </div>
      </section>
      <section id="compartir">
        <div className="p-2">
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
        <div className="px-2 py-4">
          <p className="uppercase font-bold">
            AGUA MARINA EN COMPLEJO ANGARAES ATE POR EL FELIZ DÍA DEL TRABAJADOR
          </p>
          <span className="text-sm font-mono font-semibold antialiased text-gray-600">
            ¡Por Primera vez!
          </span>
        </div>
        <div className="flex flex-col p-2">
          <div className="border-b-2 pb-6">
            <h2 className="font-semibold py-2 text-xl text-gray-900">
              Detalles del evento
            </h2>
            <p className="text-gray-900 font-semibold text-base">Fecha:</p>
            <span className="text-gray-700 font-light text-base">
              Martes 30 abril de 2024
            </span>
            <p className="text-gray-900 font-semibold text-base">Hora:</p>
            <span className="text-gray-700 font-light text-base">08:00pm</span>
            <p className="text-gray-900 font-semibold text-base">Dirección:</p>
            <span className="text-gray-700 font-light text-base">
              Gigante Complejo Angaraes, Paradero Horacio Zevallos Km 15.5 C.C.
              - ATE - LIMA
            </span>
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
    </main>
  );
}
