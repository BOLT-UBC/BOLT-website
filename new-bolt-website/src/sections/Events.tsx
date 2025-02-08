import React from 'react';
import styles from './Events.module.css';
import bridge from "../assets/images/Bridge.png"

const Events: React.FC = () => {
  return (
    <>
      <div className={styles.Events}>
        <img 
          src={bridge}
          alt="Bridge"
          className={styles.bridge} 
        />
      </div>
    </>
  );
};

export default Events;