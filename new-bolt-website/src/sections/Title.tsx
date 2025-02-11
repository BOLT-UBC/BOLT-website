import React from "react";
import styles from "./Title.module.css";
import boltUBC from "../assets/images/BoltUBCText.png";
import byte from "../assets/images/Byte1.png";
import Button from "../components/Button";

const Title: React.FC = () => {
  const membershipURL = "https://tr.ee/aHbQ0EMil7";

  return (
    <>
      <div className={styles.Title} id="Home">
        <img src={byte} alt="Byte" className={styles.byte} />
        <img src={boltUBC} alt="Bolt UBC" className={styles.name} />
        <div className={styles.buttonContainer}>
          <Button text="Become a Member" onClick={() => {
            window.open(membershipURL, '_blank');
          }} />
          <Button text="Become a Sponsor" onClick={() => {}} outline />
        </div>
      </div>
    </>
  );
};

export default Title;
