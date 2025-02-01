import React from "react";
import styles from "./Events.module.css";
import AllEvents from "../components/events/AllEvents";
import NextEvent from "../components/events/NextEvent";

const Events: React.FC = () => {
  return (
    <div className={styles.Events}>
      <div className={styles.bridgeContainer}>
        <img
          src="/assets/bridge.svg"
          alt="Bridge"
          className={styles.bridgeImage}
        />
      </div>
      <div className={styles.eventsLayout}>
        <div className={styles.allEventsContainer}>
          <AllEvents />
        </div>
        <div className={styles.nextEventsContainer}>
          <NextEvent />
        </div>
      </div>
      <div className={styles.dividerContainer}>
        <img
          src="/assets/events-teams-divider.svg"
          alt="Events Teams Divider"
          className={styles.dividerImage}
        />
      </div>
    </div>
  );
};

export default Events;
