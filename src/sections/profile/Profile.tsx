import styles from "./Profile.module.css";

import { FaSquareJs } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import Button from "../../components/button/Button";

export default function Profile() {
  return (
    <section id="aboutMe" className={styles.profile_section}>
      <div className={styles.profile_img}>
        <img className={styles.image} src="./profile.jpg" alt="" />
      </div>
      <h2 className={styles.title}>
        <span className={styles.title_span}>Hi!</span> I'm Archil Gelashvili
      </h2>
      <p className={styles.descr}>
        I am a web developer with over a year of experience in building
        responsive and dynamic web applications using React, TypeScript,
        JavaScript, and CSS. I specialize in creating user-friendly interfaces,
        implementing efficient state management, and integrating third-party
        APIs.
      </p>
      <div className={styles.button_box}>
        <Button title="Get In Touch" mode="fill" />
        <a href="https://drive.google.com/uc?export=download&id=14Fvv3J6fDnbNN9TANMhp7X__NXSEH9ef">
          <Button title="Download CV" mode="outline" />
        </a>
      </div>
      <span>EXPERIENCE WITH</span>
      <div className={styles.icons_box}>
        <FaSquareJs className={styles.icon} />
        <RiNextjsFill className={styles.icon} />
        <FaHtml5 className={styles.icon} />
        <FaCss3Alt className={styles.icon} />
        <FaReact className={styles.icon} />
      </div>
    </section>
  );
}
