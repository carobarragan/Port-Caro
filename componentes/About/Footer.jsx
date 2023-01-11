import Head from "next/head";
import GithubIcon from "./Github";
import LinkedInIcon from "../Linkedln";
import styles from "../../styles/Footer.module.css";
import Image from "next/image";
export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <div className={styles.linkedin}>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/caro-barragan/"
          >
            <LinkedInIcon />
          </a>
        </div>
        <div className={styles.github}>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/carobarragan"
          >
            <GithubIcon />
          </a>
        </div>
        <div className={styles.linkedin}>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="mailto:caro_barragan@live.com.ar"
          >
            <Image
              src="/email2.png"
              alt="Email Logo"
              className={styles.vercelLogo}
              width={40}
              height={44}
              priority
            />
          </a>
        </div>
      </div>
      <div className={styles.divider} />
      <div className={styles.text}>
        <p>
          © {new Date().getFullYear()} - Developed with 💜 by Carolina Barragàn
        </p>
      </div>
    </div>
  );
}
