import React from "react";
import styles from "./Sponsors.module.css";
import sponsorsImage from "../assets/images/Sponsors.webp";
import leftBuilding from "../assets/images/left_ams.webp";
import middleBuilding from "../assets/images/uoft.webp";
import frBuilding from "../assets/images/mastercard.webp";
import eventsBG from "../assets/images/Bridge.png";
import Events from "..//sections/Events.tsx";

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
        <img
          src={leftBuilding}
          alt="Sponsors"
          className={styles.leftBuilding}
          loading="lazy"
        />
        <img
          src={middleBuilding}
          alt="Sponsors"
          className={styles.midBuilding}
          loading="lazy"
        />
        <img
          src={frBuilding}
          alt="Sponsors"
          className={styles.frBuilding}
          loading="lazy"
        />

        <div className={styles.events}>
          <img
            src={eventsBG}
            alt="Sponsors"
            className={styles.eventsBG}
            loading="lazy"
          />
        </div>
        <div className={styles.eventContainer}>
          {/* <div className={styles.eventCenter} id="Events">
            <Events />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Sponsors;
