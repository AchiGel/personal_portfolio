import { useState } from "react";
import styles from "./Header.module.css";

export default function Header() {
  const [activeLink, setActiveLink] = useState("Home");

  const changeColor = (link: string) => {
    setActiveLink(link);
  };

  return (
    <div id="header" className={styles.header}>
      <nav>
        <ul>
          <a href="#header">
            <li
              className={
                activeLink === "Home"
                  ? styles.nav_link_clicked
                  : styles.nav_link
              }
              onClick={() => changeColor("Home")}
            >
              Home
            </li>
          </a>
          <a href="#aboutMe">
            <li
              className={
                activeLink === "AboutMe"
                  ? styles.nav_link_clicked
                  : styles.nav_link
              }
              onClick={() => changeColor("AboutMe")}
            >
              About me
            </li>
          </a>
          <a href="#projects">
            <li
              className={
                activeLink === "Projects"
                  ? styles.nav_link_clicked
                  : styles.nav_link
              }
              onClick={() => changeColor("Projects")}
            >
              Projects
            </li>
          </a>
          <a href="#contact">
            <li
              className={
                activeLink === "Contact"
                  ? styles.nav_link_clicked
                  : styles.nav_link
              }
              onClick={() => changeColor("Contact")}
            >
              Contact
            </li>
          </a>
        </ul>
      </nav>
    </div>
  );
}
