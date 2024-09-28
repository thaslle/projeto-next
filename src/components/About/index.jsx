import { ExtLink } from '../ExtLink';
import { ScrollLink } from '../ScrollLink';
import { WordWrap } from '../WordWrap';
import styles from './styles.module.scss';

export function About() {
  return (
    <header className={`${styles.about} section grid`}>
      <div className={styles.main}>
        <h1>
          <WordWrap>
            Hello, I’m{'  '}
            <ExtLink
              thumb="profile"
              href="https://www.linkedin.com/in/thaslle"
              target="_blank"
              rel="noopener noreferrer"
            >
              Thalles,
            </ExtLink>
            {'  '}
            <span className="nobreak">a web developer</span>
            {'  '}
          </WordWrap>
          <WordWrap>
            & <span className="nobreak">digital designer</span> based in{'  '}
            <ExtLink
              thumb="sao-paulo"
              href="https://google.com/search?q=city+of+sao+paulo"
              target="_blank"
              rel="noopener noreferrer"
            >
              São Paulo.
            </ExtLink>
          </WordWrap>
        </h1>
      </div>

      <h2>
        <WordWrap>For over a decade, I’ve been creating engaging digital </WordWrap>
        <WordWrap>experiences through web design, architecture and </WordWrap>
        <WordWrap>
          illustration. Here are some of my <ScrollLink href="#work">recent works</ScrollLink>
        </WordWrap>
      </h2>
    </header>
  );
}
