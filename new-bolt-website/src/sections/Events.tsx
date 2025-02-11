import React from 'react';
import styles from './Events.module.css';
import bridge from "../assets/images/Bridge.png"
import allevents from "../assets/images/AllEvents.png"
import nextevent from "../assets/images/NextEvent.png"

const Events: React.FC = () => {
  return (
    <>
      <div className={styles.Events}>
        <img 
          src={bridge}
          alt="Bridge"
          className={styles.bridge} 
        />
        <img 
          src={allevents}
          alt="All Events"
          className={styles.allEvents}
        />
        <img 
          src={nextevent}
          alt="Next Events"
          className={styles.nextEvent}
        />
      </div>
    </>
  );
};

export default Events;