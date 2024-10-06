import styles from './styles.module.scss';

export const Wrapper = ({ children }) => {
  return (
    <section id="wrapper-tv-effect" className={styles.wrapperTvEffect}>
      <div className={styles.content}>{children}</div>
    </section>
  );
};
