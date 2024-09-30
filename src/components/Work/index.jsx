import { Project } from '../Project';
import styles from './styles.module.scss';

export default function Work({ projects }) {
  return (
    <section id="work" className={`${styles.work} section highlight`}>
      {projects?.length !== 0 && projects.map((project) => <Project key={project.id} project={project} />)}
    </section>
  );
}
