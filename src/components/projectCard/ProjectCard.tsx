import styles from "./ProjectCard.module.css";
import { WiDirectionUpRight } from "react-icons/wi";

type Props = {
  name: string;
  description: string;
  image: string;
  link: string;
};

export default function ProjectCard(props: Props) {
  return (
    <a className={styles.anchor} href={props.link} target="_blank">
      <div className={styles.projectCard}>
        <img className={styles.image} src={props.image} alt={props.name} />
        <div className={styles.cardText}>
          <div>
            <h3 className={styles.cartTextTitle}>{props.name}</h3>
            <span className={styles.cardTextSpan}>{props.description}</span>
          </div>
          <WiDirectionUpRight style={{ fontSize: "40px" }} />
        </div>
      </div>
    </a>
  );
}
