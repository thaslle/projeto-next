import { Media } from '../Media';

import styles from './styles.module.scss';

export const ProjectLines = ({ project }) => {
  return (
    <section className={styles.projectLines}>
      {project.lines !== undefined &&
        project.lines.map((line, index) => {
          return (
            <div className={`${styles.line} ${styles[line.class] || ''} ${line.class} line`} key={index}>
              {line.media.map((media, index) => (
                <Media {...media} key={index} />
              ))}
            </div>
          );
        })}
    </section>
  );
};
