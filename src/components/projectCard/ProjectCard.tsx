import styles from "./ProjectCard.module.css";
import { WiDirectionUpRight } from "react-icons/wi";

export default function ProjectCard() {
  return (
    <a
      className={styles.anchor}
      href="https://www.youtube.com/watch?v=UFyAnyOUnnE"
      target="_blank"
    >
      <div className={styles.projectCard}>
        <img className={styles.image} src="./image.jfif" alt="" />
        <div className={styles.cardText}>
          <div>
            <span className={styles.cardTextSpan}>click here to visit</span>
            <h3 className={styles.cartTextTitle}>Project Name</h3>
          </div>
          <WiDirectionUpRight style={{ fontSize: "40px" }} />
        </div>
      </div>
    </a>
  );
}
