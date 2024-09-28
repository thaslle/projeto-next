import styles from './styles.module.scss';

export const Wrapper = ({ children }) => {
  return (
    <section className={styles.wrapperTvEffect}>
      <div className={styles.content}>{children}</div>
    </section>
  );
};
