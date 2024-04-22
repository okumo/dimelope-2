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
          <div id="fecha" className="bg-yellow-400">
            30 ABR 06:00PM
          </div>
          <div className="bg-yellow-200">
            <p className="font-mono antialiased font-bold">
              Gigante Complejo Angaraes
            </p>
            <p className="font-mono antialiased font-bold">
              Paradero Horacio Zevallos Km 15.5
            </p>
            <p className="font-mono antialiased font-bold">C.C. - ATE - LIMA</p>
          </div>
        </div>
      </section>
      <section id="compartir">
        <div>
          <p>
            COMPARTE:{" "}
            <SocialIcon
              url="https://linkedin.com/in/couetilc"
              style={{ height: 25, width: 25 }}
            />
            <SocialIcon network="x" style={{ height: 25, width: 25 }} />
            <SocialIcon network="facebook" style={{ height: 25, width: 25 }} />
            <SocialIcon network="whatsapp" style={{ height: 25, width: 25 }} />
            <SocialIcon network="email" style={{ height: 25, width: 25 }} />
            <a className="h-6 w-6 bg-slate-400 rounded-full justify-center items-center content-center inline-block align-middle">
              <center>
                <DocumentDuplicateIcon className="h-3 w-3 " />
              </center>
            </a>
          </p>
        </div>
      </section>

      <section id="detalles-evento">
        <div>
          <p>
            AGUA MARINA EN COMPLEJO ANGARAES ATE POR EL FELIZ DÍA DEL TRABAJADOR
          </p>
          <span>¡Por Primera vez!</span>
        </div>
        <div className="flex flex-col">
          <p>Fecha:</p>
          <span>Martes 30 abril de 2024</span>
          <p>Hora:</p>
          <span>08:00pm</span>
          <p>Dirección:</p>
          <span>
            Gigante Complejo Angaraes, Paradero Horacio Zevallos Km 15.5 C.C. -
            ATE - LIMA
          </span>

          <p></p>
          <span>
            ¡Celebra el Feliz Día del Trabajador con Agua Marina en el Complejo
            Angaraes Ate! Disfruta de la mejor música y la alegría de la cumbia
            en vivo. ¡No te lo puedes perder!
          </span>
        </div>
      </section>
    </main>
  );
}
