import { ExperimentProject } from '../ExperimentProject';
import { ExtLink } from '../ExtLink';
import { WordWrap } from '../WordWrap';
import styles from './styles.module.scss';

export default function Experiment({ experiments }) {
  return (
    <section className={`${styles.experiments} section grid highlight`}>
      <h2>
        <WordWrap>I love having the freedom to experiment and push boundaries. </WordWrap>
        <WordWrap>
          Whether it’s through{' '}
          <ExtLink thumb="codepen" href="https://codepen.io/thaslle" target="_blank" rel="noopener noreferrer">
            front-end
          </ExtLink>{' '}
          development,{' '}
          <ExtLink
            thumb="illustration"
            href="https://www.artstation.com/thaslle"
            target="_blank"
            rel="noopener noreferrer"
          >
            illustrations
          </ExtLink>
          ,
        </WordWrap>
        <WordWrap>
          {' '}
          or{' '}
          <ExtLink
            thumb="architecture"
            href="https://www.behance.net/estudioamarelo"
            target="_blank"
            rel="noopener noreferrer"
          >
            architecture
          </ExtLink>{' '}
          visualization, I enjoy exploring new ways{' '}
        </WordWrap>
        <WordWrap> to bring ideas to life and see where creativity takes me.</WordWrap>
      </h2>

      <div className={styles.list}>
        {experiments.length !== 0 &&
          experiments.map((experiment, index) => {
            return <ExperimentProject {...experiment} key={index} />;
          })}
      </div>
    </section>
  );
}
