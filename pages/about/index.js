import styles from "../../styles/About.module.css";
import Image from "next/image";

export default function About() {
  return (
    <div className={styles.container}>
      <p className={styles.titulo}>Sobre mi</p>
      <br />
      <div className={styles.imagenContainer}>
        <div className={styles.imagen}>
          <Image
            src="/perfil.jpeg"
            // alt="13"
            width={240}
            height={271}
            priority
          />
        </div>
        <div className={styles.textContainer}>
          <p className={styles.description}>
            {" "}
            Desarrolladora Fullstack JavaScript. Realicé un bootcamp de más de
            800 hs. de estudio intensivo que me preparó para desempeñarme como
            desarrolladora Fullstack. Dentro del curso aprendí desde lo básico
            hasta desarrollar una aplicación en equipo. Soy una persona
            proactiva, con buena disposición, siempre dispuesta, respetuosa y
            por sobre todo con ganas de trabajar&nbsp; ,cv.
          </p>
          <div className={styles.button}>
            <a
              href="https://docs.google.com/document/d/1Aan5a05YzYeUkeeRzSY2xVZL2gXKX1n2XbP8hIj-rRQ/edit"
              className={styles.center}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver curriculim
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

//CREATE A NODE
