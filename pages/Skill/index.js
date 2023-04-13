import Image from "next/image";
import styles from "../../styles/Skill.module.css";
export default function Skill() {
  return (
    <div className={styles.principal}>
      <h4 className={styles.titulo}>Skill</h4>
      <div className={styles.skillBox}>
        <div className={styles.container}>
          <Image
            className={styles.imagen}
            src="/html.png"
            alt="13"
            width={100}
            height={84}
            priority
          />
          <p className={styles.text}>HTML.</p>
        </div>
        <br />
        <div className={styles.container}>
          <Image
            className={styles.imagen}
            src="/javascript.png"
            alt="13"
            width={100}
            height={84}
            priority
          />
          <p className={styles.text}>JavaScript.</p>
        </div>
        <br />
        <div className={styles.container}>
          <Image
            className={styles.imagen}
            src="/github.png"
            alt="13"
            width={100}
            height={84}
            priority
          />
          <p className={styles.text}>Github.</p>
        </div>
        <div className={styles.container}>
          <Image
            className={styles.imagen}
            src="/next.jpg"
            alt="13"
            width={100}
            height={84}
            priority
          />
          <p className={styles.text}>Next.js.</p>
        </div>
        <div className={styles.container}>
          <Image
            className={styles.imagen}
            src="/redux.png"
            alt="13"
            width={100}
            height={84}
            priority
          />
          <p className={styles.text}>Redux.</p>
        </div>
        <div className={styles.container}>
          <Image
            className={styles.imagen}
            src="/node.jpg"
            alt="13"
            width={100}
            height={84}
            priority
          />
          <p className={styles.text}>Node.</p>
        </div>
        <div className={styles.container}>
          <Image
            className={styles.imagen}
            src="/react.jpg"
            alt="13"
            width={100}
            height={84}
            priority
          />
          <p className={styles.text}>React.</p>
        </div>
        <div className={styles.container}>
          <Image
            className={styles.imagen}
            src="/bootstrap.png"
            alt="13"
            width={100}
            height={84}
            priority
          />
          <p className={styles.text}>Bootstrap.</p>
        </div>
        <div className={styles.container}>
          <Image
            className={styles.imagen}
            src="/Tailwind_CSS_Logo.svg.png"
            alt="13"
            width={100}
            height={84}
            priority
          />
          <p className={styles.text}>Tailwind.</p>
        </div>
        <br />
      </div>
    </div>
  );
}
