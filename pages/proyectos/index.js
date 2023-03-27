import styles from "../../styles/Home.module.css";
export default function Proyecto() {
  return (
    <div className={styles.contenedor}>
      <div>
        <div>
          <h1>Proyectos</h1>
        </div>
        <div className={styles.proyectos} class="w-full h-full bg-gray-5">
          <div
            className={styles.nuevo}
            class="flex justify-center items-center"
          >
            <h2
              className={styles.carrusel}
              class="whitespace-nowrap text-4xl md:text-5xl font-bold mb-8 md:mb-12"
            >
              Juego Tic-Tac<span>-&gt;</span>
            </h2>
            <div class="flex flex-col md:flex-row text-xl w-full gap-5">
              <p
                className={styles.defini}
                class="flex self-center whitespace-nowrap py-2 px-4 justify-center items-center gap-2 rounded-full hover:bg-white/10 transition-colors mt-8 underline underline-offset-4"
              >
                Card de juego, realizado con React + Css; quien no lo ha jugado
                :)
              </p>
              <br />
              <div className={styles.tecnologias}>
                <p> Tecnologias Utilizadas:</p>
                <div>
                  <img
                    src="./react.jpg"
                    width={34}
                    height={34}
                    className={styles.tecnologiaIcons}
                  ></img>
                  <img
                    src="./css.png"
                    width={34}
                    height={34}
                    className={styles.tecnologiaIcons}
                  ></img>
                  <img
                    src="./github.png"
                    width={34}
                    height={34}
                    className={styles.tecnologiaIcons}
                  ></img>
                </div>
              </div>
            </div>
            <div className={styles.foto}>
              <img src="/tac.jpg" width={270} height={170}></img>
              <a
                href="https://precious-cendol-88d048.netlify.app/"
                className={styles.button}
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Ver Proyecto
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className={styles.proyectos} class="w-full h-full bg-gray-5">
          <div
            className={styles.nuevo}
            class="flex justify-center items-center"
          >
            <h2
              className={styles.carrusel}
              class="whitespace-nowrap text-4xl md:text-5xl font-bold mb-8 md:mb-12"
            >
              Pagina de Servicio de Moza<span>-&gt;</span>
            </h2>
            <div class="flex flex-col md:flex-row text-xl w-full gap-5">
              <p
                className={styles.defini}
                class="flex self-center whitespace-nowrap py-2 px-4 justify-center items-center gap-2 rounded-full hover:bg-white/10 transition-colors mt-8 underline underline-offset-4"
              >
                Pagina de servicio realizada con Next.js, que es un framework de
                React + css :)
              </p>
              <br />
              <div className={styles.tecnologias}>
                <p> Tecnologias Utilizadas:</p>
                <div>
                  <img
                    src="./next.svg"
                    width={34}
                    height={34}
                    className={styles.tecnologiaIcons}
                  ></img>
                  <img
                    src="./css.png"
                    width={34}
                    height={34}
                    className={styles.tecnologiaIcons}
                  ></img>
                  <img
                    src="./github.png"
                    width={34}
                    height={34}
                    className={styles.tecnologiaIcons}
                  ></img>
                </div>
              </div>
            </div>
            <div className={styles.foto}>
              <img src="/SM.jpg" width={270} height={170}></img>
              <a
                href="https://moza-servicio.vercel.app/"
                className={styles.button}
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Ver Proyecto
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
