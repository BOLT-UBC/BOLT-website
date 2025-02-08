import React from 'react';
import styles from './Title.module.css';
import boltUBC from "../assets/images/BoltUBCText.png";
import byte from "../assets/images/Byte1.png"

const Title: React.FC = () => {
  return (
    <>
      <div className={styles.Title}>  
        <img
          src={byte}
          alt="Byte"
          className={styles.byte}
        />
        <img
          src={boltUBC}
          alt="Bolt UBC"
          className={styles.name}
        />
      </div>
    </>
  )
};

export default Title;