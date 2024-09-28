import styles from './styles.module.scss';
import tags from './tags.module.scss';

export const ProjectAbout = ({ project }) => {
  return (
    <section className={styles.projectAbout}>
      <header>
        <div className={`${styles.title} container-hover`}>
          <h1>{project.title}</h1>

          <figure>
            <img src={project.image} alt={project.title} />
          </figure>
        </div>
        <p>{project.description}</p>
        <div className={styles.info}>
          <ul className={tags.tags}>
            {project.tags.map((tag, idx) => (
              <li key={idx} className={`${tag.class} tag`}>
                {tag.name}
              </li>
            ))}
          </ul>
          {project.info.live && (
            <a href={project.info.live} className={styles.live} target="_blank" rel="noopener noreferrer">
              <span className={styles.text}>View live</span>
              <span className={styles.icon}>↗</span>
            </a>
          )}
        </div>
      </header>
    </section>
  );
};
