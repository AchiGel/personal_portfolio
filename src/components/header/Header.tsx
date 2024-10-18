import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <nav>
        <ul>
          <li>Home</li>
          <li>Projects</li>
          <li>Experience</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
}
