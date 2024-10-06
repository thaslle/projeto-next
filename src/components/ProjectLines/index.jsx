import { useRef, useState, useEffect } from 'react';
import { useInView } from 'framer-motion';

import { Media } from '../Media';

import styles from './styles.module.scss';

export const ProjectLines = ({ project }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [inViewClass, setInViewClass] = useState('');

  // When the element comes into view, set a class
  useEffect(() => {
    if (isInView) {
      setInViewClass('in-view');
    } else {
      setInViewClass('');
    }
  }, [isInView]);

  return (
    <section className={styles.projectLines}>
      <div className={`${inViewClass} ${styles.wrapper}`} ref={ref}>
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
      </div>
    </section>
  );
};
