import React from "react";
import styles from "./Sponsors.module.css";
import sponsorsImage from "../assets/images/Sponsors.png";

const Sponsors: React.FC = () => {
  return (
    <>
      <div className={styles.Sponsors} id="Sponsors">
        <img
          src={sponsorsImage}
          alt="Sponsors"
          className={styles.buildings}
          loading="lazy"
        />
      </div>
    </>
  );
};

export default Sponsors;
