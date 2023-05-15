import Image from "next/image";
import styles from "../../styles/Home.module.css";
export default function Proyecto() {
  return (
    <div className={styles.main2}>
      <h2 className={styles.proyectTitulo}>Proyectos</h2>

      <div className={styles.proyectoContainer}>
        <div className={styles.a}>
          <h2>
            Juego Tic-Tac<span>-&gt;</span>
          </h2>
          <div className={styles.a}>
            <p className={styles.texto}>
              Card de juego, realizado con React + Css; quien no lo ha jugado :)
            </p>
            <br />
          </div>
          <div>
            <Image src="/tac.jpg" alt="13" width={270} height={170}></Image>
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
        <br />
        <br />
        <br />
        <br />
        <div className={styles.proyectoContainer}>
          <div className={styles.a}>
            <h2>
              Pagina de Servicio de Moza<span>-&gt;</span>
            </h2>
            <div>
              <p className={styles.texto}>
                Pagina de servicio realizada con Next.js, que es un framework de
                React + css
              </p>
              <br />

              <div className={styles.foto}>
                <Image
                  src="/SM.jpg"
                  alt="13"
                  width={270}
                  height={171}
                  priority
                />
              </div>
            </div>
            <a
              href="https://moza-servicio.vercel.app/"
              className={styles.button}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver Proyecto
            </a>
          </div>

          <br />
          <br />
          <br />

          <div className={styles.proyectoContainer}>
            <div>
              <h2 className={styles.a}>
                Proyecto Grupal <span>-&gt;</span>
              </h2>
              <div>
                <p className={styles.texto}>
                  Es una aplicación de viaje, donde cuenta con tres perfiles;
                  Administrador, este tiene el control total de la aplicación a
                  través de un panel. Anfitrión, pone a disposición el servicio;
                  Huesped,dispone de la adquisición del servicio.
                </p>
                <br />
              </div>
              <div className={styles.foto}>
                <Image
                  src="/pg.jpeg"
                  alt="13"
                  width={270}
                  height={171}
                  priority
                />
              </div>
              <a
                href="https://wetravel-app.vercel.app/"
                className={styles.button}
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Ver Proyecto
              </a>
            </div>

            <a
              href="https://certificates.soyhenry.com/cert?id=b8a0a083-5052-4128-b832-6fdb4dfc8201"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            ></a>
          </div>
          <div className={styles.proyectoContainer}>
            <div>
              <h2 className={styles.a}>
                Formulario<span>-&gt;</span>
              </h2>
              <div>
                <p className={styles.texto}>
                  Formulario de contacto con conexión a base de datos + vercel
                  ship. en este formulario utiliza Sonner una biblioteca de
                  React para mostrar la notificacion del mensaje junto a un
                  confetti{" "}
                </p>
                <br />
              </div>
              <div>
                <video
                  src="/formulario.mp4"
                  controls
                  alt="13"
                  width={270}
                  height={170}
                ></video>
                <a
                  href="https://formulario-wheat-one.vercel.app/"
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
    </div>
  );
}
