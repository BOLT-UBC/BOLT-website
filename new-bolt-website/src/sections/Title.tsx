import React from "react";
import styles from "./Title.module.css";
import boltUBC from "../assets/images/BoltUBCText.png";
import byte from "../assets/images/Byte.webp";
import Button from "../components/Button";

const Title: React.FC = () => {
  const membershipURL = "https://tr.ee/aHbQ0EMil7";

  return (
    <>
      <div className={styles.Title} id="Home">
        <div className={styles.byteContainer}>
          <img
            src={byte}
            draggable="false"
            alt="Byte"
            className={styles.byte}
          />
        </div>
        <div className={styles.infoContainer}>
          <h1 className={styles.title}>
            BOLT <br></br> UBC
          </h1>
          <div className={styles.buttonContainer}>
            <Button
              text="Become a Member"
              onClick={() => {
                window.open(membershipURL, "_blank");
              }}
            />
            <Button text="Become a Sponsor" onClick={() => {}} outline />
          </div>
        </div>
      </div>
    </>
  );
};

export default Title;
