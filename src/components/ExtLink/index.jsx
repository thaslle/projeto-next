import styles from './styles.module.scss';

export function ExtLink({ thumb, ...props }) {
  return (
    <a className={styles.extLink} {...props}>
      <span className={`${styles.thumb} ${thumb} thumb`}></span>
      <span className={styles.text}>{props.children}</span>
    </a>
  );
}
