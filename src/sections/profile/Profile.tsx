import styles from "./Profile.module.css";

import { FaSquareJs } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import Button from "../../components/button/Button";

export default function Profile() {
  return (
    <section className={styles.profile_section}>
      <div className={styles.profile_img}>
        <img className={styles.image} src="./profile.jpg" alt="" />
      </div>
      <h2 className={styles.title}>I do code and make content about it!</h2>
      <p className={styles.descr}>
        I am a seasoned full-stack software engineer with over 8 years of
        professional experience, specializing in backend development. My
        expertise lies in crafting robust and scalable SaaS-based architectures
        on the Amazon AWS platform.
      </p>
      <div className={styles.button_box}>
        <Button title="Get In Touch" mode="fill" />
        <Button title="Download CV" mode="outline" />
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
