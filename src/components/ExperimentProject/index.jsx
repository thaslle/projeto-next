import styles from './styles.module.scss';
import tags from './tags.module.scss';

import dynamic from 'next/dynamic';

const PixelatedImage = dynamic(() => import('../../components/PixelatedImage'), {
  ssr: false,
});

export function ExperimentProject(experiment) {
  return (
    <article className={styles.experiment}>
      <a href={experiment.link} target="_blank" rel="noopener noreferrer" className="container-hover">
        <PixelatedImage src={experiment.image} alt={experiment.title} ratio={experiment.aspect} />
        <div className={styles.text}>
          <div className={styles.info}>
            <ul className={tags.tags}>
              {experiment.tags.map((tag, idx) => (
                <li key={idx} className={`${tag.class} tag`}>
                  {tag.name}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.preview}>
            <p>{experiment.description}</p>
          </div>
        </div>
      </a>
    </article>
  );
}
