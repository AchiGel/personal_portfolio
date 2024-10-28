import ProjectCard from "../../components/projectCard/ProjectCard";
import styles from "./Projects.module.css";
import project_data from "../../projects.json";

type Project = {
  id: number;
  name: string;
  description: string;
  image: string;
  link: string;
};

export default function Projects() {
  return (
    <section id="projects" className={styles.projects_section}>
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.project_grid}>
        {project_data.map((project: Project) => (
          <ProjectCard
            key={project.id}
            name={project.name}
            description={project.description}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
}
