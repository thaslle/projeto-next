import styles from './styles.module.scss';

export function WordWrap({ ...props }) {
  return <span className={styles.wordWrap}>{props.children}</span>;
}
