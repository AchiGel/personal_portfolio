import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <nav>
        <ul>
          <li>Home</li>
          <a href="#aboutMe">
            <li>About me</li>
          </a>
          <a href="#projects">
            <li>Projects</li>
          </a>
          <a href="#contact">
            <li>Contact</li>
          </a>
        </ul>
      </nav>
    </div>
  );
}
