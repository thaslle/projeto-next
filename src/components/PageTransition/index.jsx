import { useEffect } from 'react';
import { motion } from 'framer-motion';

import styles from './styles.module.scss';

const expand = {
  initial: {
    top: 0,
  },

  enter: (i) => ({
    top: '100vh',
    transition: {
      duration: 0.4,
      delay: 0.05 * i,
      ease: [0.215, 0.61, 0.355, 1],
    },

    transitionEnd: { height: '0', top: '0' },
  }),

  exit: (i) => ({
    height: '100vh',
    transition: {
      duration: 0.4,
      delay: 0.05 * i,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
};

const opacity = {
  initial: { opacity: 0.5 },
  enter: { opacity: 0 },
  exit: { opacity: 0.5 },
};
const child = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: 0.3,
      delay: 0.05,
    },
  },
  exit: {
    opacity: 1,
    transition: {
      duration: 0.3,
      delay: 0.02,
    },
  },
};

export default function Index({ children }) {
  useEffect(() => {
    window.scrollTo(0, 0);

    // setTimeout(() => {
    //   window.scrollTo(0, 0);
    // }, 1000);
  }, []);

  const anim = (variants, custom = null) => {
    return {
      initial: 'initial',
      animate: 'enter',
      exit: 'exit',
      custom,
      variants,
    };
  };

  const rows = 10;
  return (
    <div className={styles.transition}>
      <motion.div {...anim(opacity)} className={styles.background} />

      <div className={styles.container}>
        {[...Array(rows)].map((_, i) => {
          return <motion.div key={i} {...anim(expand, rows - i)} />;
        })}
      </div>

      <motion.div className={styles.body} variants={child} initial="initial" animate="enter" exit="exit">
        {children}
      </motion.div>
    </div>
  );
}
