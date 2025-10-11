import React from "react";
import styles from "./Sponsors.module.css";
import sponsorsImage from "../../assets/images/sponsors.webp";
import leftBuilding from "../../assets/images/left_ams.webp";
import middleBuilding from "../../assets/images/uoft.webp";
import frBuilding from "../../assets/images/mastercard.webp";

const Sponsors: React.FC = () => {
  return (
    <div className={styles.Sponsors} id="Sponsors">
      <img
        src={sponsorsImage}
        alt="Sponsors Background"
        className={styles.buildings}
        loading="lazy"
      />
      <img
        src={leftBuilding}
        alt="AMS Building"
        className={styles.leftBuilding}
        loading="lazy"
      />
      <img
        src={middleBuilding}
        alt="UofT Building"
        className={styles.midBuilding}
        loading="lazy"
      />
      <img
        src={frBuilding}
        alt="Mastercard Building"
        className={styles.frBuilding}
        loading="lazy"
      />
    </div>
  );
};

export default Sponsors;
