import React from 'react';
import styles from './Team.module.css';

const Team: React.FC = () => {
  return (
    <div className={styles.Team}>
      <img
        src="/assets/escalator.svg"
        alt="escalator"
        className={styles.escalator}
      />
    </div>
  )
};

export default Team;