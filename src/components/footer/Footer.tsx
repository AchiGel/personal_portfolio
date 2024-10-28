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
      <span className={styles.email}>
        <FaRegEnvelope /> Ar.gelashvili@gmail.com
      </span>
      <div className={styles.icons}>
        <FaFacebook />
        <FaLinkedin />
        <FaGithub />
      </div>
    </div>
  );
}
