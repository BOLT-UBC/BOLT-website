import React from "react";
import styles from "./Title.module.css";
import byte from "../../assets/images/Byte.webp";
import Button from "../../components/Button";
import { SITE_URLS } from "../../config";

const Title: React.FC = () => {

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
                window.open(SITE_URLS.membership, "_blank");
              }}
            />
            <Button
              text="Become a Sponsor"
              onClick={() => {
                window.location.href = SITE_URLS.sponsorEmail;
              }}
              outline
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Title;
