import Link from 'next/link';
import dynamic from 'next/dynamic';
import styles from './styles.module.scss';
import tags from './tags.module.scss';

const PixelatedImage = dynamic(() => import('../../components/PixelatedImage'), {
  ssr: false,
});

export function Project({ project }) {
  return (
    <article className={styles.project}>
      <Link href={`/project/${project.slug}`}>
        <header className="container-hover">
          <PixelatedImage src={project.image} alt={project.title} ratio={project.aspect} />
          <div className={styles.text}>
            <div className={styles.info}>
              <h3>{project.title}</h3>
              <ul className={tags.tags}>
                {project.tags.map((tag, idx) => (
                  <li key={idx} className={`${tag.class} tag`}>
                    {tag.name}
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.preview}>
              <p>{project.description}</p>
            </div>
          </div>
        </header>
      </Link>
    </article>
  );
}
