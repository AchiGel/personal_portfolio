import { useState } from "react";
import styles from "./Header.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import Navigation from "../navigation/Navigation";

export default function Header() {
  const [activeLink, setActiveLink] = useState("Home");
  const [showNav, setShowNav] = useState(false);

  const changeColor = (link: string) => {
    setActiveLink(link);
  };

  return (
    <div id="header" className={styles.header}>
      <div className={showNav ? styles.nav_menu : styles.nav_hidden}>
        <Navigation
          activeLink={activeLink}
          changeColor={changeColor}
          style={styles.nav_menu_links}
        />
      </div>
      <nav>
        <Navigation
          activeLink={activeLink}
          changeColor={changeColor}
          desctop={styles.menu_list}
        />
        <div className={styles.burger} onClick={() => setShowNav(!showNav)}>
          <GiHamburgerMenu />
        </div>
      </nav>
    </div>
  );
}
