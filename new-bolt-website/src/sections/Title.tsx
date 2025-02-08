import React from 'react';
import styles from './Title.module.css';

const Title: React.FC = () => {
  return (
  <div className={styles.Title}>
    <div className={styles.titleContent}>
      <img 
        src="/assets/bolt-rocket.svg"
        width="500px"
        height="350px"
      />

      <div>
        <div>
          BOLT <br />
          UBC
        </div>
        <div>
          <div>Become a member</div>
          <div>Become a sponsor</div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Title;