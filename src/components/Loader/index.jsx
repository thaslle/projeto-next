import styles from './styles.module.scss';

const Loader = () => {
  const count = 8;
  return (
    <div className={styles.progress}>
      <p>
        {Array.from({ length: count }, (_, i) => (
          <span key={i} style={{ animationDelay: `${i * 0.05}s` }}>
            .
          </span> // Render a dot for each item in the array
        ))}
      </p>
    </div>
  );
};

export default Loader;
