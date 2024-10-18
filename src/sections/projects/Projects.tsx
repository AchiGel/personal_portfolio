import ProjectCard from "../../components/projectCard/ProjectCard";
import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <section className={styles.projects_section}>
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.project_grid}>
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  );
}
