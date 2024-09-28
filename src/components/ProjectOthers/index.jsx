import { Project } from '../../components/Project/';
import styles from './styles.module.scss';

export const ProjectOthers = ({ projects }) => {
  return (
    <section className={styles.otherProjects}>
      <h2>See more</h2>

      <div className={`${styles.projects} section`}>
        {projects.length !== 0 && projects.map((project) => <Project key={project.id} project={project} />)}
      </div>
    </section>
  );
};
