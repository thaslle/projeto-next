import styles from './styles.module.scss';

export function ScrollLink({ ...props }) {
  return (
    <a className={`${styles.scrollLink} ease-scroll`} {...props}>
      <span className={styles.text}>{props.children}</span>
      <span className={styles.icon}>↓</span>
    </a>
  );
}
