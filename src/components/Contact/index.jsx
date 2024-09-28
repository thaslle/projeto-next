import { ExtLink } from '../ExtLink';
import { WordWrap } from '../WordWrap';

import styles from './styles.module.scss';

export function Contact() {
  return (
    <footer className={`${styles.contact} section highlight`}>
      <h2>
        <WordWrap>If you’d like to say hello, feel free </WordWrap>
        <WordWrap>
          to reach out to me at{' '}
          <ExtLink thumb="mail" href="mailto:thalleslopesm@gmail.com">
            thalleslopesm@gmail.com
          </ExtLink>
        </WordWrap>
      </h2>
    </footer>
  );
}
