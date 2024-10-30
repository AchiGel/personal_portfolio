type NavProps = {
  activeLink: string;
  changeColor: (link: string) => void;
  style?: string;
  desctop?: string;
};

import styles from "../header/Header.module.css";

export default function Navigation(props: NavProps) {
  return (
    <ul className={props.style + " " + props.desctop}>
      <a href="#header">
        <li
          className={
            props.activeLink === "Home"
              ? styles.nav_link_clicked
              : styles.nav_link
          }
          onClick={() => props.changeColor("Home")}
        >
          Home
        </li>
      </a>
      <a href="#aboutMe">
        <li
          className={
            props.activeLink === "AboutMe"
              ? styles.nav_link_clicked
              : styles.nav_link
          }
          onClick={() => props.changeColor("AboutMe")}
        >
          About me
        </li>
      </a>
      <a href="#projects">
        <li
          className={
            props.activeLink === "Projects"
              ? styles.nav_link_clicked
              : styles.nav_link
          }
          onClick={() => props.changeColor("Projects")}
        >
          Projects
        </li>
      </a>
      <a href="#contact">
        <li
          className={
            props.activeLink === "Contact"
              ? styles.nav_link_clicked
              : styles.nav_link
          }
          onClick={() => props.changeColor("Contact")}
        >
          Contact
        </li>
      </a>
    </ul>
  );
}
