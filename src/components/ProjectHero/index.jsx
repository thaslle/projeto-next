import Link from 'next/link';

import styles from './styles.module.scss';

export const ProjectHero = () => {
  return (
    <section className={styles.projectHero}>
      <div className={styles.spacer}></div>
      <div id="project-close" className={styles.close}>
        <Link href="/">
          <span className={styles.icon}>←</span>
          <span className={styles.text}>Back</span>
        </Link>
      </div>
    </section>
  );
};
