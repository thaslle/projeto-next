import styles from './styles.module.scss';

export function Media({ title, ...props }) {
  if (props.type === 'image') {
    return (
      <figure className={`${styles.media} ${styles.image} media image`}>
        <img src={props.url} alt={title} />
      </figure>
    );
  } else if (props.type === 'video') {
    return (
      <figure className={`${styles.media} ${styles.video} media video`}>
        <iframe src={props.url} allow="autoplay; fullscreen" allowFullScreen title={title} data-ready="true"></iframe>
      </figure>
    );
  }
}
