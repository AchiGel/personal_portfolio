import styles from "./Footer.module.css";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FaLinkedin, FaRegEnvelope } from "react-icons/fa";
import {} from "react-icons/fa";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <h2 className={styles.title}>Contact</h2>
      <p className={styles.descr}>
        Seasoned Full Stack Software Engineer with over 8 years of hands-on
        experience in designing and implementing robust, scalable, and
        innovative web solutions. Adept at leveraging a comprehensive skill set
        encompassing front-end and back-end technologies
      </p>
      <span className={styles.email}>
        <FaRegEnvelope /> Ar.gelashvili@gmail.com
      </span>
      <div className={styles.icons}>
        <FaInstagram />
        <FaXTwitter />
        <FaLinkedin />
      </div>
    </div>
  );
}
