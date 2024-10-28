import styles from "./Footer.module.css";
import {
  FaLinkedin,
  FaRegEnvelope,
  FaFacebook,
  FaGithub,
} from "react-icons/fa";
import {} from "react-icons/fa";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <h2 className={styles.title}>Contact</h2>
      <p className={styles.descr}>
        I am a web developer with over a year of experience in building
        responsive and dynamic web applications using React, TypeScript,
        JavaScript, and CSS. I specialize in creating user-friendly interfaces,
        implementing efficient state management, and integrating third-party
        APIs.
      </p>
      <a href="mailto:Ar.gelashvili@gmail.com">
        <span className={styles.email}>
          <FaRegEnvelope /> Ar.gelashvili@gmail.com
        </span>
      </a>
      <div className={styles.icons}>
        <a href="https://www.facebook.com/achi.gelashvili/" target="_blank">
          <FaFacebook />
        </a>
        <a
          href="https://www.linkedin.com/in/archil-gelashvili/"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <a href="https://github.com/AchiGel" target="_blank">
          <FaGithub />
        </a>
      </div>
    </div>
  );
}
