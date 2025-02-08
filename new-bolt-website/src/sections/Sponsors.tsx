import React from 'react';
import styles from './Sponsors.module.css';
import sponsorsImage from "../assets/images/Sponsors.png";

const Sponsors: React.FC = () => {
  return (
    <>
      <div className={styles.Sponsors}>
        <img 
          src={sponsorsImage} 
          alt="Sponsors" 
          className={styles.buildings}
        />
      </div>
    </>
  );
};

export default Sponsors;